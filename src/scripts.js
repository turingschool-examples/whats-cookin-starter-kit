const recipeCardsSection = document.querySelector('.recipe-cards')
const pageBody = document.querySelector('body');
const homeSection = document.querySelector('.home-view');
const singleRecipeSection = document.querySelector('.single-recipe-view');
let recipes; 

window.onload = setUpHomePage; 
//instantiate random User on page load as well, and display their name in H2

pageBody.addEventListener('click', clickAnalyzer);

function clickAnalyzer(event) {
  if (event.target.classList.contains('heart')) {
    console.log('favorited!')
    //add the recipe to the user's favorite recipes (target.parentElement.parentElement.parentElement.id to get index of recipe in recipes?)
  } else if (event.target.classList.contains('cookbook')) {
    console.log('Add me to meal plan!')
    //add the recipe to the user's meals to cook/meal plan recipes (target.parentElement.parentElement.parentElement.id to get index of recipe in recipes?)
  } else if (event.target.closest('.recipe-card')) {
    displaySingleRecipe(event);
    //display that recipe (hide home view, un-hide recipe view, interpolating info from recipe clicked; can possibly use unique html id associated with each recipe card to identify it (target.parentElement.id grabs unique html id, which is the same as the index of that recipe in recipes))
  } else if (event.target.closest('header')) {
    event.preventDefault();
    console.log('clicking header!')
    //call other function & pass in event to analyze what was clicked in menu (search bar button, one of the filters, or one of the dropdowns under My Recipe Box)
  };
}

//New//
function displaySingleRecipe(event) {
  changeToSingleRecipeView();
  let recipe = determineRecipeToDisplay(event);
  displayRecipeDetails(recipe); 
}

function changeToSingleRecipeView() {
  homeSection.classList.add('hidden');
  singleRecipeSection.classList.remove('hidden');
}

function determineRecipeToDisplay(event) {
  const recipeCardId = event.target.closest('.recipe-card').id;
  const recipeCardIndex = recipeCardId[recipeCardId.length - 1];
  let recipeToDisplay = recipes[recipeCardIndex];
  return recipeToDisplay); 
}

function displayRecipeDetails(recipe) {
  

//End new//
function setUpHomePage() {
  recipes = instantiateRecipes(recipeData);
  displayRecipes(recipes);
}

function instantiateRecipes(recipeData) {
  return recipeData.map(recipe => new Recipe(recipe.id, recipe.image, recipe.ingredients, recipe.instructions, recipe.name, recipe.tags)); 
}

function displayRecipes(recipes) {
  recipes.forEach((recipe, index) => {
    recipeCardsSection.insertAdjacentHTML('beforeend', `
      <article class="recipe-card" id="card${index}">
        <div class="recipe-img" style="background-image: url(${recipe.image})">
          <div class="heart-icon">
            <img src="assets/heart.png" class="heart">
          </div>
          <div class="cook-icon">
            <img src="assets/recipe-book.png" class="cookbook">
          </div>
        </div>
        <div class="recipe-name">
          <h5>${recipe.name}</h5>
        </div>
      </article>
    `)
  })
}



//function below needed to convert ingredient search term to an id so can then use recipe class to check if recipe ingredients have that id ;maybe move to recipe class 
// const convertSearchTermToId = searchTerm => {
//   ingredientsData.forEach(ingredient => {
//     if (ingredient.name === searchTerm) {
//       return ingredient.id;
//     } 
//   });
// }
