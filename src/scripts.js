let recipeRepository; 

const recipeCarousel = document.querySelector('.recipe-carousel')
const searchBox = document.querySelector('.search-box');

window.addEventListener('load', compileRecipeRepository)
window.addEventListener('load', populateFeaturedRecipesCarousel);
document.addEventListener('keydown', searchAllRecipes);

function compileRecipeRepository() {
  recipeRepository = new RecipeRepository(recipeData, ingredientsData)
}

function populateFeaturedRecipesCarousel() {
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