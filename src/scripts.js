
const currentRecipeContainer = document.querySelector('.current-recipe-container');
const currentRecipeIngredients = currentRecipeContainer.querySelector('.current-recipe-ingredients');
const currentRecipeInstructions = currentRecipeContainer.querySelector('.current-recipe-instructions')
const currentRecipeTitle = currentRecipeContainer.querySelector('.current-recipe-title')
const recipeList = document.querySelector('.recipe-list');
const tagContainer = document.querySelector('.tag-container');
const buttonContainer = document.querySelector('.button-container');
const nextPageArrow = recipeList.querySelector('.right');
const prevPageArrow = recipeList.querySelector('.left');
const recipeRepo = new RecipeRepo(recipeData);


recipeList.addEventListener('click', clickRecipeCard);
window.addEventListener('load', generateRecipeCards);
nextPageArrow.addEventListener('click', showNextPage);
prevPageArrow.addEventListener('click', showPrevPage);


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
  currentRecipeTitle.classList.remove('vis-hidden');
  const featuredRecipe = recipeRepo.recipes.find(recipe => recipe.name === recipeTitle);
  buttonContainer.style.backgroundImage = `url(${featuredRecipe.image})`;
  featuredRecipe.instructions.forEach(instruction => {
    currentRecipeInstructions.innerHTML += `<p class="recipe-instruction">
    ${instruction.number}: ${instruction.instruction}</p>`;
  })
  currentRecipeTitle.innerText = recipeTitle;
  featuredRecipe.ingredients.forEach(ingredient => {
    const currentIngredientName = 
    (ingredientsData.find(ingredientData => 
      ingredientData.id === ingredient.id)).name;
      currentRecipeIngredients.innerText += 
      ` ${currentIngredientName}: ${ingredient.quantity.amount.toFixed(2)}${ingredient.quantity.unit},`;
    })
  randomizeCardColor(currentRecipeContainer);
}

function removeFeaturedRecipe() {
  currentRecipeTitle.innerText = "";
  currentRecipeContainer.classList.add('vis-hidden');
  buttonContainer.style.backgroundImage = 'none';
  currentRecipeIngredients.innerHTML = 'Ingredients: ';
  currentRecipeInstructions.innerHTML = '';
}

function generateRecipeCards(newRecipes) {
  const recipeCards = recipeList.querySelectorAll('.recipe-card');
  let iterationCount = 0;
  recipeCards.forEach(recipeCard => {
    const currentRecipe = newRecipes[iterationCount] || recipeRepo.recipes[iterationCount];
    iterationCount ++;
    recipeCard.querySelector('.recipe-title').innerText = currentRecipe.name;
    recipeCard.querySelector('.recipe-img').src = currentRecipe.image;
    getCardInfo(currentRecipe);
    randomizeCardColor(recipeCard.querySelector('.recipe'));
  }
  )
}

function showNextPage() {
  tagContainer.classList.add('vis-hidden');
  prevPageArrow.classList.remove('vis-hidden');
  const currentRecipes = recipeList.querySelectorAll('.recipe-card');
  const lastRecipeCard = currentRecipes[4];
  const lastRecipeTitle = lastRecipeCard.querySelector('.recipe-title').innerText;
  const lastRecipe = recipeRepo.recipes.find(recipe => recipe.name === lastRecipeTitle);
  const futureRecipes = recipeRepo.recipes.slice(recipeRepo.recipes.indexOf(lastRecipe));
  generateRecipeCards(futureRecipes);
}

function showPrevPage() {
  const currentRecipes = recipeList.querySelectorAll('.recipe-card');
  const firstRecipeCard = currentRecipes[0];
  const firstRecipeTitle = firstRecipeCard.querySelector('.recipe-title').innerText;
  const firstRecipe = recipeRepo.recipes.find(recipe => recipe.name === firstRecipeTitle);
  const pastRecipes = recipeRepo.recipes.slice(recipeRepo.recipes.indexOf(firstRecipe) - 4);
  generateRecipeCards(pastRecipes);
  if (recipeList.querySelector('.recipe-card').innerText === recipeRepo.recipes[0].name) {
    tagContainer.classList.remove('vis-hidden');
    prevPageArrow.classList.add('vis-hidden');
  }
}

function randomizeCardColor(recipeCard) {
  const colorArr = ['green-card', 'blue-card', 'orange-card', 'pink-card'];
  var color = colorArr[Math.floor(Math.random() * colorArr.length)];
  recipeCard.classList.toggle(color);

}

function getCardInfo() {

}