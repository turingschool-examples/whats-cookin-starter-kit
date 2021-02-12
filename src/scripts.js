
const currentRecipeContainer = document.querySelector('.current-recipe-container');
const currentRecipeIngredients = currentRecipeContainer.querySelector('.current-recipe-ingredients');
const currentRecipeInstructions = currentRecipeContainer.querySelector('.current-recipe-instructions')
const recipeList = document.querySelector('.recipe-list');
const buttonContainer = document.querySelector('.button-container');
const nextPageArrow = recipeList.querySelector('.arrow');
const recipeRepo = new RecipeRepo(recipeData);


recipeList.addEventListener('click', clickRecipeCard);
window.addEventListener('load', generateRecipeCards);
nextPageArrow.addEventListener('click', showNextPage);

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
  const featuredRecipe = recipeRepo.recipes.find(recipe => recipe.name === recipeTitle);
  featuredRecipe.instructions.forEach(instruction => {
    currentRecipeInstructions.innerHTML += `<p class="recipe-instruction">
    ${instruction.number}: ${instruction.instruction}</p>`;
  })

  featuredRecipe.ingredients.forEach(ingredient => {
    const currentIngredient = (ingredientsData.find(ingredientData => ingredientData.id === ingredient.id)).name;
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

function generateRecipeCards(newRecipes) {
  const recipeCards = recipeList.querySelectorAll('.recipe-card');
  let iterationCount = 0;
  recipeCards.forEach(recipeCard => {
    // console.log(re)
    const currentRecipe = newRecipes[iterationCount] || recipeRepo.recipes[iterationCount];
    iterationCount ++;
    console.log(currentRecipe)
    recipeCard.querySelector('.recipe-title').innerText = currentRecipe.name;
    recipeCard.querySelector('.recipe-img').src = currentRecipe.image;
  }
  )
}

function showNextPage() {
  let currentRecipes = recipeList.querySelectorAll('.recipe-card');
  lastRecipeCard = currentRecipes[4];
  const lastRecipeTitle = lastRecipeCard.querySelector('.recipe-title').innerText;
  const lastRecipe = recipeRepo.recipes.find(recipe => recipe.name === lastRecipeTitle);
  const futureRecipes = recipeRepo.recipes.slice(recipeRepo.recipes.indexOf(lastRecipe));
  generateRecipeCards(futureRecipes);
  console.log(futureRecipes);
}
