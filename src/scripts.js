let recipeRepository; 

let recipeCarousel = document.querySelector('.recipe-carousel')

window.addEventListener('load', compileRecipeRepository)
window.addEventListener('load', populateFeaturedRecipesCarousel);

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
