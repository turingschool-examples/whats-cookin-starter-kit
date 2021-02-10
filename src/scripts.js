let recipeRepository; 

const recipeCarousel = document.querySelector('.recipe-carousel')
const searchBox = document.querySelector('.search-box');
const allRecipesButton = document.querySelector('.all-recipes');
const allRecipesPage = document.querySelector('.all-recipes-page');
const searchPage = document.querySelector('.search-page')
const homePage = document.querySelector('.home-page')
const pageTitle = document.querySelector('.page-title')


window.addEventListener('load', compileRecipeRepository);
window.addEventListener('load', populateRecipeCarousel);

document.addEventListener('keydown', searchAllRecipes);
allRecipesButton.addEventListener('click', loadAllRecipesPage)
pageTitle.addEventListener('click', loadHomePage)

function loadHomePage() {
  homePage.classList.remove('hidden')
  searchPage.classList.add('hidden')
}

function loadAllRecipesPage() {
  searchPage.classList.remove('hidden')
  homePage.classList.add('hidden')
  recipeRepository.recipes.map(recipe => searchPage.innerHTML += `
    <article class="recipe-card">
      <img class="recipe-card-img" src="${recipe.image}">
      <p class="recipe-card-name">${recipe.name}</p>
      <p class="recipe-card-cost">${recipe.getIngredientsCost()}</p>
      <button class="recipe-card-button">Save Recipe</button>
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
      <article class="recipe-card">
        <img class="recipe-card-img" src="${randomRecipe.image}">
        <p class="recipe-card-name">${randomRecipe.name}</p>
        <p class="recipe-card-cost">${randomRecipe.getIngredientsCost()}</p>
        <button class="recipe-card-button">Save Recipe</button>
      </article>
    `
  }
}

function searchAllRecipes(event) {
  if (event.key === "Enter") {
    event.preventDefault()
    console.log(recipeRepository.masterSearch(searchBox.value))
  }
}