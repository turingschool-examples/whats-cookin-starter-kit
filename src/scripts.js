let recipeRepository; 

const recipeCarousel = document.querySelector('.recipe-carousel')
const searchBox = document.querySelector('.search-box');
const allRecipesButton = document.querySelector('.all-recipes');
const allRecipesPage = document.querySelector('.all-recipes-page');
const searchPage = document.querySelector('.search-page')
const homePage = document.querySelector('.home-page')
const pageTitle = document.querySelector('.page-title')

const instructionCardDirections = document.querySelector('.instruction-card-directions')


window.addEventListener('load', compileRecipeRepository);
window.addEventListener('load', populateRecipeCarousel);

recipeCarousel.addEventListener('click', () => loadRecipeCard(event))
searchPage.addEventListener('click', () => loadRecipeCard(event))

document.addEventListener('keydown', searchAllRecipes);
allRecipesButton.addEventListener('click', () => loadSearchPage(recipeRepository.recipes))
pageTitle.addEventListener('click', loadHomePage)

function loadHomePage() {
  homePage.classList.remove('hidden')
  searchPage.classList.add('hidden')
}

function loadRecipeCard(event) {
  loadHomePage()
  let selectedRecipe = recipeRepository.recipes.find(recipe => recipe.id === parseInt(event.target.closest('.recipe-card').id));
  let instructions = selectedRecipe.returnInstructions().reduce((acc, instruction) => acc += `<p class="instruction-card-steps">${instruction}</p>`)
  let ingredients = selectedRecipe.ingredients.reduce((acc, ingredient) => acc += `<tr><td class="instruction-card-ingredient">${ingredient.name}</td><td class="instruction-card-unit">${ingredient.quantity.amount} ${ingredient.quantity.unit}</td></tr>`, '')
  instructionCardDirections.innerHTML = `
    <h1 class="instruction-card-recipe-name">${selectedRecipe.name}</h1>
              <h2 class="instruction-card-header">Directions</h2>
              ${instructions}
              <h2 class="instruction-card-header">Ingredients</h2>
              <table class="instruction-card-ingredient-list">
                ${ingredients}
              </table>
  `
  document.querySelector('.instruction-card-img').src = selectedRecipe.image;
  document.location.href = "#recipeDetailsContainer"
}

function loadSearchPage(array) {
  searchPage.innerHTML = "";
  searchPage.classList.remove('hidden')
  homePage.classList.add('hidden')
  array.map(recipe => searchPage.innerHTML += `
    <article class="recipe-card" id="${recipe.id}">
      <img class="recipe-card-img" src="${recipe.image}">
      <p class="recipe-card-name">${recipe.name}</p>
      <p class="recipe-card-cost">${recipe.getIngredientsCost()}</p>
      <button class="recipe-card-button"></button>
    </article>
  `)
}

function compileRecipeRepository() {
  recipeRepository = new RecipeRepository(recipeData, ingredientsData)
}

function populateRecipeCarousel() {
  for (i = 0; i < 5; i++) {
    let randomRecipe = recipeRepository.recipes[Math.floor(Math.random() * recipeRepository.recipes.length)]
    recipeCarousel.innerHTML += `
      <article class="recipe-card" id="${randomRecipe.id}">
        <img class="recipe-card-img" src="${randomRecipe.image}">
        <p class="recipe-card-name">${randomRecipe.name}</p>
        <p class="recipe-card-cost">${randomRecipe.getIngredientsCost()}</p>
        <button class="recipe-card-button"></button>
      </article>
    `
  }
}

function searchAllRecipes(event) {
  if (event.key === "Enter" && searchBox.value) {
    event.preventDefault()
    loadSearchPage(recipeRepository.masterSearch(searchBox.value));
  }
}