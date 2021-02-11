const currentRecipeContainer = document.querySelector('.current-recipe-container');
const currentRecipeIngredients = currentRecipeContainer.querySelector('.current-recipe-ingredients');
const currentRecipeInstructions = currentRecipeContainer.querySelector('.current-recipe-instructions')
const recipeList = document.querySelector('.recipe-list');
const buttonContainer = document.querySelector('.button-container');

recipeList.addEventListener('click', clickRecipeCard);

function clickRecipeCard(e) {
  const currentRecipeCard = e.target.closest('.recipe-card');
  const currentRecipeTitle = currentRecipeCard.querySelector('.recipe-title').innerText;
  if (currentRecipeContainer.classList.contains('vis-hidden')) {
    showFeaturedRecipe(currentRecipeTitle);
  } else {
    removeFeaturedRecipe();
    showFeaturedRecipe(currentRecipeTitle);
  }
};

function showFeaturedRecipe (recipeTitle) {
  currentRecipeContainer.classList.remove('vis-hidden');
  const featuredRecipe = recipeData.find(recipe => recipe.name === recipeTitle);
 
  featuredRecipe.instructions.forEach(instruction => {
    currentRecipeInstructions.innerHTML += `<p class="recipe-instruction">
    ${instruction.number}: ${instruction.instruction}</p>`;
  })

  featuredRecipe.ingredients.forEach(ingredient => {
    const currentIngredient = (ingredientsData.find(ingredientData => ingredientData.id === ingredient.id)).name;
    // currentRecipeIngredients.innerHTML += `<p class="recipe-ingredients">${currentIngredient}</p>`;
    currentRecipeIngredients.innerText += ` ${currentIngredient},`;

  })
  buttonContainer.style.backgroundImage = `url(${featuredRecipe.image})`;
}

function removeFeaturedRecipe() {
  currentRecipeContainer.classList.add('vis-hidden');
  buttonContainer.style.backgroundImage = 'none';
  currentRecipeIngredients.innerHTML = 'Ingredients: ';
  currentRecipeInstructions.innerHTML = '';
}