let navBarToggle = document.querySelector('.navbar-toggle');
let mainNav = document.querySelector('.main-nav');
let suggestedRecipes = document.querySelector('.injected-suggested-recipes');
let favoriteRecipes = document.querySelector('.injected-favorite-recipes');
let allRecipes = [];

window.onload = loadSuggestedRecipesFunction();
navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});

function loadSuggestedRecipesFunction() {
allRecipes = instantiateRecipes();
for(let i = 0; i <  allRecipes.length; i++) {
suggestedRecipes.insertAdjacentHTML('beforeend',
`<div class="recipe-card">
  <img src="${allRecipes[i].image}" alt="fork and knife logo">
  <p>${allRecipes[i].name}</p>
  <div class="recipe-container">
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
  const ingredientMap = ingredientList.map(x => `<li>${x.name}: ${(Math.floor(x.quanitity.amount * 100) / 100) + ' ' + x.quanitity.unit}</li>`);
  // console.log(ingredientMap.join('\n'));
  return ingredientMap.join('\n');
}

function recipeDirections(directionsList) {
  const directionsMap = directionsList.map(x => `<li>${x.instruction}</li>`);
  // console.log(ingredientMap.join('\n'));
  return directionsMap.join('\n');
}

function markedRecipes () {
  favoriteRecipes.insertAdjacentHTML('beforeend',
  `<div class="recipe-card">
    <img src="${allRecipes[i].image}" alt="fork and knife logo">
    <p>${allRecipes[i].name}</p>
    <div class="recipe-container">
      <ul class="recipe-ingredients">
        ${recipeIngredients(allRecipes[i].ingredients)}
      </ul>
      <ol class="recipe-directions">
        ${recipeDirections(allRecipes[i].instructions)}
      </ol>
    </div>
  </div>`
)};
