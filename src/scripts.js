const currentRecipeContainer = document.querySelector('.current-recipe-container');
const currentRecipeIngredients = currentRecipeContainer.querySelector('.current-recipe-ingredients');
const currentRecipeInstructions = currentRecipeContainer.querySelector('.current-recipe-instructions')
const recipeList = document.querySelector('.recipe-list');
const buttonContainer = document.querySelector('.button-container');

recipeList.addEventListener('click', (e) => {
  const currentRecipeCard = e.target.closest('.recipe-card');
  const currentRecipeTitle = currentRecipeCard.querySelector('.recipe-title').innerText;
  showFeaturedRecipe(currentRecipeTitle);
  currentRecipeContainer.classList.toggle('vis-hidden');
})

function showFeaturedRecipe (recipeTitle) {
  const featuredRecipe = recipeData.find(recipe => recipe.name === recipeTitle);
 
  featuredRecipe.instructions.forEach(instruction => {
    currentRecipeInstructions.innerHTML += `<p class="recipe-instruction">
    ${instruction.number}: ${instruction.instruction}</p>`;
  })

  featuredRecipe.ingredients.forEach(ingredient => {
    console.log(ingredient)
    const currentIngredient = (ingredientsData.find(ingredientData => ingredientData.id === ingredient.id)).name;
    console.log(currentIngredient);
    currentRecipeIngredients.innerHTML += `<p class="recipe-ingredients">${currentIngredient}</p>`;
  })
  buttonContainer.style.backgroundImage = `url(${featuredRecipe.image})`;
}