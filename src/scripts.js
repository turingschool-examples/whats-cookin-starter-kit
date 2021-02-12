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
const navButtons = document.querySelector(".navigation-buttons");
const myRecipesButton = document.querySelector('.my-recipes');
const searchIcon = document.querySelector('.search-icon');
const searchButton = document.querySelector('.search-button');
const navigationBar = document.querySelector(".navigation-bar")

const createKebab = (recipeName) => recipeName.toLowerCase().split(' ').join('-');

const compileRecipeRepository = () => {
  recipeRepository = new RecipeRepository(recipeData, ingredientsData)
  currentUser = new User(usersData[0], ingredientsData);
}

const loadPage = ((pageTo, pageFrom) => {
  pageTo.classList.remove('hidden');
  pageFrom.classList.add('hidden');
  if ((pageTo = homePage) || (pageTo = allRecipesPage)) {
    searchBox.classList.add('search-all-mode')
    searchBox.classList.remove('search-favs-mode')
    searchBox.placeholder = "Search all recipes";
  }
  searchBox.value = "";
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
  if (!event.target.className.includes('saved')) {
    currentUser.addRecipeToFavs(returnSelectedRecipe(event));
    event.target.classList.add('saved'); 
  } else {
    currentUser.removeRecipeFromFavs(returnSelectedRecipe(event));
    event.target.classList.remove('saved');
  }  
};

const toggleFavoriteButton = (recipe) => {
  if(currentUser.favoriteRecipes.map(recipe => recipe.id).includes(recipe.id)) {
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

const pickRandomRecipes = (amount) => {
  return recipeRepository.recipes.reduce((array, recipe) =>{
    const randomRecipe = recipeRepository.recipes[Math.floor(Math.random() * recipeRepository.recipes.length)];
    if(!array.includes(randomRecipe) && array.length < amount){
      array.push(randomRecipe);
    }
    return array;
  }, []);
};

const populateRecipeCarousel = () => {
  const carousel = pickRandomRecipes(5)
  carousel.forEach(recipe => {
    recipeCarousel.innerHTML += `
      <article class="recipe-card recipe ${createKebab(recipe.name)}" >
        <img class="recipe-card-img" src="${recipe.image}">
        <p class="recipe-card-name">${recipe.name}</p>
        <p class="recipe-card-cost">${recipe.getIngredientsCost()}</p>
        <button class="recipe-card-button ${toggleFavoriteButton(recipe)}"></button>
      </article>
    `
  });
};

const searchAllRecipes = (event) => {
  if ((event.key === "Enter" && searchBox.value && searchBox.classList.value.includes("search-all-mode")) || (event.target.className.includes("search-button") && searchBox.value && searchBox.classList.value.includes("search-all-mode") )) {
    event.preventDefault();
    loadSearchPage(recipeRepository.masterSearch(searchBox.value));
  } else if ((event.key === "Enter" && searchBox.value && searchBox.classList.value.includes("search-favs-mode")) || (event.target.className.includes("search-button") && searchBox.value && searchBox.classList.value.includes("search-favs-mode") )) {
    event.preventDefault()
    loadSearchPage(currentUser.favoritesMasterSearch(searchBox.value));
  }
};

const suggestRecipes = () => {
  document.querySelector('.meal-suggestion-container').innerHTML = "";
  const suggestions = pickRandomRecipes(3);
  suggestions.forEach(recipe => {
    document.querySelector('.meal-suggestion-container').innerHTML += `
      <article class="meal-suggestion recipe ${createKebab(recipe.name)}">
        <div class="img-cropper">
          <img class="zoom meal-suggestion-img" src="${recipe.image}">
        </div>
        <p class="meal-suggestion-name">${recipe.name}</p>
      </article>
    `
  });
};



const openDropDownMenu = (event) => {
    if(event.target.className.includes("drop-down")){
      navButtons.classList.add('flex');
    } else {
      navButtons.classList.remove('flex');
    };
};

const autoCloseMenu = () => {
  if(window.innerWidth > 800) {
    navButtons.classList.remove('flex');
    document.querySelector(".search").classList.remove('flex')
    document.querySelector(".search").reset();
    searchIcon.classList.remove('disabled')
  }
}

const loadMobileSearch = (event) => {
  console.log(searchBox.value)
  const target = event.target.className
  if (target.includes('search-icon')) {
    document.querySelector(".search").classList.toggle('flex')
    searchIcon.classList.toggle("disabled")
    document.querySelector(".search").reset();
  } else if(target.includes('search-button')){
    document.querySelector(".search").classList.remove('flex')
    searchIcon.classList.toggle("disabled")
  }
  searchAllRecipes(event)
}

window.addEventListener('load', compileRecipeRepository);
window.addEventListener('load', populateRecipeCarousel);
recipeCarousel.addEventListener('click', () => loadRecipeCard(event));
searchPage.addEventListener('click', () => loadRecipeCard(event));
pageTitle.addEventListener('click', () => loadPage(homePage, searchPage));
mealSuggestionContainer.addEventListener("click", () => loadRecipeCard(event));

document.addEventListener('keydown', searchAllRecipes)

allRecipesButton.addEventListener('click', () => {
  loadSearchPage(recipeRepository.recipes)
  searchBox.classList.add('search-all-mode')
  searchBox.classList.remove('search-favs-mode')
  searchBox.placeholder = "Search all recipes";
});


myRecipesButton.addEventListener("click", () => {
  loadSearchPage(currentUser.favoriteRecipes)
  searchBox.classList.remove('search-all-mode')
  searchBox.classList.add('search-favs-mode')
  searchBox.placeholder = "Search favorite recipes";
})

window.addEventListener('click', () => openDropDownMenu(event))
window.addEventListener("resize", autoCloseMenu);
navigationBar.addEventListener("click", () => loadMobileSearch(event))
// searchButton.addEventListener("click", () => searchAllRecipes(event));
