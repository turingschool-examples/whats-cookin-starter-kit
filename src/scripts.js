// const User = require("./User");

let recipeRepository;
let currentUser;

const recipeCarousel = document.querySelector('.recipe-carousel');
const searchBox = document.querySelector('.search-box');
const allRecipesButton = document.querySelector('.all-recipes');
const allRecipesPage = document.querySelector('.all-recipes-page');
const searchPage = document.querySelector('.search-page')
const homePage = document.querySelector('.home-page')
const pageTitle = document.querySelector('.page-title')
const instruction = document.querySelector('.instruction')
const mealSuggestionContainer = document.querySelector(".meal-suggestion-container")
const instructionCardDirections = document.querySelector('.instruction-card-directions')
const myRecipesButton = document.querySelector('.my-recipes')

const createKebab = (recipeName) => recipeName.toLowerCase().split(' ').join('-');

const compileRecipeRepository = () => {
  recipeRepository = new RecipeRepository(recipeData, ingredientsData)
  currentUser = new User(usersData[0], ingredientsData);
}

const loadPage = ((pageTo, pageFrom) => {
  pageTo.classList.remove('hidden');
  pageFrom.classList.add('hidden');
});


const printInstructions = (recipe) => {
  return recipe.returnInstructions().reduce((acc, instruction) => {
     return acc += `<p class="instruction-card-steps">${instruction}</p>`}, '');
};

const printIngredients = (recipe) => {
  return recipe.ingredients.reduce((acc, ingredient) => {
    return acc += `
    <tr>
      <td class="instruction-card-ingredient">${ingredient.name}</td>
      <td class="instruction-card-unit">${ingredient.quantity.amount.toFixed(2)} ${ingredient.quantity.unit}</td>
    </tr>`}, '');
};

const returnSelectedRecipe = (event) => {
  const clickedRecipe = event.target.closest('.recipe').className;
  return recipeRepository.recipes.find(recipe => clickedRecipe.includes(createKebab(recipe.name)));
};

const addToMyFavorites = (event) =>  {
  currentUser.addRecipeToFavs(returnSelectedRecipe(event));
  event.target.classList.add('saved'); 
};

const toggleFavoriteButton = (recipe) => {
  if(currentUser.favoriteRecipes.includes(recipe.id)) {
    return "saved";
  };
};

const loadRecipeCard = (event) => {
  if (event.target.className.includes("recipe-card-button")) {
    addToMyFavorites(event);
  } else if(event.target.closest('.recipe')) {
    loadPage(homePage, searchPage);
    instruction.classList.remove('hidden');
    const selectedRecipe = returnSelectedRecipe(event)
    instructionCardDirections.innerHTML = `
      <h1 class="instruction-card-recipe-name">${selectedRecipe.name}</h1>
      <h2 class="instruction-card-header">Directions</h2>
      <div class="direction-container">
        ${printInstructions(selectedRecipe)}
      </div>
      <h2 class="instruction-card-header">Ingredients</h2>
      <div class="ingredient-container">
        <table class="instruction-card-ingredient-list">
          ${printIngredients(selectedRecipe)}
        </table>
      </div>
      <button class="add-to-grocery-button">Add to Grocery List</button>
    `
    document.querySelector('.instruction-card-img').src = selectedRecipe.image;
    document.location.href = "#recipeDetailsContainer";
    suggestRecipes();
  }
};


const loadSearchPage = (array) => {
  searchPage.innerHTML = "";
  loadPage(searchPage, homePage);
  array.map(recipe => searchPage.innerHTML += `
    <article class="recipe-card recipe ${createKebab(recipe.name)} ">
      <img class="recipe-card-img" src="${recipe.image}">
      <p class="recipe-card-name">${recipe.name}</p>
      <p class="recipe-card-cost">${recipe.getIngredientsCost()}</p>
      <button class="recipe-card-button ${toggleFavoriteButton(recipe)}"></button>
    </article>
  `);
};

const populateRecipeCarousel = () => {
  for (i = 0; i < 5; i++) {
    const randomRecipe = recipeRepository.recipes[Math.floor(Math.random() * recipeRepository.recipes.length)];
    recipeCarousel.innerHTML += `
      <article class="recipe-card recipe ${createKebab(randomRecipe.name)}" >
        <img class="recipe-card-img" src="${randomRecipe.image}">
        <p class="recipe-card-name">${randomRecipe.name}</p>
        <p class="recipe-card-cost">${randomRecipe.getIngredientsCost()}</p>
        <button class="recipe-card-button ${toggleFavoriteButton(randomRecipe)}"></button>
      </article>
    `
  };
};

const searchAllRecipes = (event) => {
  if (event.key === "Enter" && searchBox.value) {
    event.preventDefault();
    loadSearchPage(recipeRepository.masterSearch(searchBox.value));
  };
};

const suggestRecipes = () => {
  document.querySelector('.meal-suggestion-container').innerHTML = "";
  for (i = 0; i < 3; i++) {
    const randomRecipe = recipeRepository.recipes[Math.floor(Math.random() * recipeRepository.recipes.length)];
    document.querySelector('.meal-suggestion-container').innerHTML += `
      <article class="meal-suggestion recipe ${createKebab(randomRecipe.name)}">
        <div class="img-cropper">
          <img class="zoom meal-suggestion-img" src="${randomRecipe.image}">
        </div>
        <p class="meal-suggestion-name">${randomRecipe.name}</p>
      </article>
    `
  };
};

window.addEventListener('load', compileRecipeRepository);
window.addEventListener('load', populateRecipeCarousel);
recipeCarousel.addEventListener('click', () => loadRecipeCard(event));
searchPage.addEventListener('click', () => loadRecipeCard(event));
document.addEventListener('keydown', searchAllRecipes);
allRecipesButton.addEventListener('click', () => loadSearchPage(recipeRepository.recipes));
pageTitle.addEventListener('click', () => loadPage(homePage, searchPage));
mealSuggestionContainer.addEventListener("click", () => loadRecipeCard(event));
myRecipesButton.addEventListener("click", () => loadSearchPage(currentUser.favoriteRecipes.map(id => recipeRepository.recipes.find(recipe => recipe.id === id))))
