let navBarToggle = document.querySelector('.navbar-toggle');
let mainNav = document.querySelector('.main-nav');
let suggestedRecipes = document.querySelector('.injected-suggested-recipes');
let allRecipes = [];

window.onload = loadSuggestedRecipesFunction;
navBarToggle.addEventListener('click', function () {
  console.log('blah');
  mainNav.classList.toggle('active');
});

function loadSuggestedRecipesFunction() {
  allRecipes = instantiateRecipes();
  for(let i = 0; i <  allRecipes.length; i++) {
    suggestedRecipes.insertAdjacentHTML('beforeend',
    `<div class="recipe-card">
      <div class="recipe-header">
        <img src="${allRecipes[i].image}" alt="Picture of ${allRecipes[i].name}">
        <h3>${allRecipes[i].name}</h3>
      </div>
      <div class="recipe-content hidden">
        <ul class="recipe-ingredients">
          ${recipeIngredients(allRecipes[i].ingredients)}
        </ul>
        <ol class="recipe-directions">
          ${recipeDirections(allRecipes[i].instructions)}
        </ol>
      </div>
    </div>`
    )}
  recipeSelector = suggestedRecipes.querySelectorAll('.recipe-card');
  recipeSelector.forEach(recipe => recipe.addEventListener('click', recipeHandler));
};

function instantiateRecipes() {
  let recipes = [];
  for (let i = 0; i < recipeData.length; i++) {
    recipes.push(new Recipes(recipeData[i]))
  }
  return recipes;
};

function recipeIngredients(ingredientList) {
  return ingredientList.map(x => `<li data-id='${x.id}'><i>${x.name}</i>: ${(Math.floor(x.quanitity.amount * 100) / 100) + ' ' + x.quanitity.unit}</li>`).join('\n');
};

function recipeDirections(directionsList) {
  return directionsList.map(x => `<li>${x.instruction}</li>`).join('\n');
};

function recipeHandler(event) {
  if (event.target.parentNode.classList.contains('recipe-header')) {
    event.target.parentNode.parentNode.classList.toggle('recipe-card-active');
    event.target.parentNode.parentNode.children[1].classList.toggle('hidden');
  }
}
