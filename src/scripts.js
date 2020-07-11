const recipeCardsSection = document.querySelector('.recipe-cards')
const pageBody = document.querySelector('body');
const homeSection = document.querySelector('.home-view');
const singleRecipeSection = document.querySelector('.single-recipe-view');
const listSection = document.querySelector('.list-view');
const welcomeHeading = document.querySelector('.welcome-heading');
let recipes, user; 

window.onload = setUpHomePage; 

pageBody.addEventListener('click', clickAnalyzer);

function clickAnalyzer(event) {
  if (event.target.classList.contains('heart')) {
    toggleRecipeToUserFavorites(event);
    toggleRecipeIconDisplay(event, 'heart');  
  } else if (event.target.classList.contains('cookbook')) {
    toggleRecipeToRecipesToCook(event)
    toggleRecipeIconDisplay(event, 'cookbook');
  } else if (event.target.closest('.recipe-card')) {
    displaySingleRecipe(event);
  } else if (event.target.closest('header')) {
    event.preventDefault();
    determineHeaderClick(event); 
  };
}

function determineHeaderClick(event) {
  if (event.target.classList.contains('category')) {
    getRecipesInCategory(event);
  };
  if (event.target.classList.contains('app-title')) {
    changeView(homeSection, singleRecipeSection, listSection);
    displayRecipes(recipes);
  };
  if (event.target.id === 'favorite-recipes') {
    displayRecipeBoxH2('Favorite Recipes');
    displayRecipes(user.favoriteRecipes);
  };
  if (event.target.id === 'recipes-to-cook') {
    displayRecipeBoxH2('Recipes to Cook');
    displayRecipes(user.recipesToCook);
  };
  if (event.target.id === 'grocery-list') {
    changeView(listSection, homeSection, singleRecipeSection);
  }
}

function getRecipesInCategory(event) {
  let category = event.target.innerText;
  let recipesInCategory = recipes.filter(recipe => {
    let categoryTags = recipe.mapCategoryToTag(category);
    return recipe.checkRecipeCategory(categoryTags);
  });
  displayWelcomeH2(category);
  displayRecipes(recipesInCategory);
}

function toggleRecipeToUserFavorites(event) {
  let recipe = determineRecipeToDisplay(event); 
  user.toggleFavoriteRecipe(recipe); 
  recipe.toggleFavoritesStatus();
}

function toggleRecipeToRecipesToCook(event) {
  let recipe = determineRecipeToDisplay(event);
  user.toggleRecipeToCook(recipe);
  recipe.toggleRecipesToCookStatus(); 
}

function toggleRecipeIconDisplay(event, icon) {
  if (event.target.classList.contains('inactive')) {
    event.target.src = `assets/${icon}-active.png`;
    event.target.classList.remove('inactive');
    event.target.classList.add('active');
  } else {
    event.target.src = `assets/${icon}-inactive.png`; 
    event.target.classList.remove('active');
    event.target.classList.add('inactive');
  };
}

function setUpHomePage() {
  recipes = instantiateRecipes(recipeData);
  displayRecipes(recipes);
  createRandomUser(); 
  displayWelcomeH2(); 
}

function instantiateRecipes(recipeData) {
  return recipeData.map(recipe => new Recipe(recipe.id, recipe.image, recipe.ingredients, recipe.instructions, recipe.name, recipe.tags)); 
}

function displayRecipes(recipesList) {
  recipeCardsSection.innerHTML = '';
  recipesList.forEach((recipeInList) => {
    let index = recipes.findIndex(recipe => recipe.name === recipeInList.name);
    recipeCardsSection.insertAdjacentHTML('beforeend', `
      <article class="recipe-card" id="card${index}">
        <div class="recipe-img" style="background-image: url(${recipeInList.image})">
          <div class="heart-icon">
            <img src="assets/heart-${recipeInList.favoritesStatus}.png" class="heart ${recipeInList.favoritesStatus}">
          </div>
          <div class="cook-icon">
            <img src="assets/cookbook-${recipeInList.recipesToCookStatus}.png" class="cookbook ${recipeInList.recipesToCookStatus}">
          </div>
        </div>
        <div class="recipe-name">
          <h5 class="recipe-title">${recipeInList.name}</h5>
        </div>
      </article>
    `)
  });
}

function createRandomUser() {
  let randomIndex = Math.floor(Math.random() * usersData.length);
  user = new User(usersData[randomIndex]);
}

function displayWelcomeH2(category = 'Recipes') {
  welcomeHeading.innerText = `Welcome, ${user.name}! Browse Our ${category} Below.`;
}

function displayRecipeBoxH2(pageTitle) {
  welcomeHeading.innerText = `${user.name}'s ${pageTitle}`;
}

function displaySingleRecipe(event) {
  changeView(singleRecipeSection, homeSection, listSection);
  const recipe = determineRecipeToDisplay(event);
  displayRecipeDetails(recipe);
}

function changeView(activeView, viewToHide1, viewToHide2) {
  activeView.classList.remove('hidden');
  viewToHide1.classList.add('hidden');
  viewToHide2.classList.add('hidden');
}

function determineRecipeToDisplay(event) {
  let recipeCardId = event.target.closest('.recipe-card').id;
  let recipeCardIndex = recipeCardId.slice(4);
  let recipeToDisplay = recipes[recipeCardIndex];
  return recipeToDisplay;
}

function displayRecipeDetails(recipe) {
  let recipeIngredientsList = createIngredientsList(recipe);
  let recipeInstructions = createInstructionsList(recipe); 
  const recipeBox = document.querySelector('.recipe-details');
  recipeBox.insertAdjacentHTML('afterBegin', `
    <h2 class="recipe-name">${recipe.name}</h2>
    <section class="recipe-name-ingredients">
      <div class="ingredients-box">
        <h3>Ingredients</h3>
        <ul>${recipeIngredientsList}</ul>
      </div>
      <div class="image-box">
        <img src=${recipe.image}>
      </div>
    </section>
    <section class="recipe-instructions">
      <h3>Instructions</h3>
      <ol>${recipeInstructions}</ol>
    </section>
  `);
}

function createIngredientsList(recipe) {
  return recipe.ingredients.reduce((ingredientsList, ingredient) => {
    ingredientsList += `<li>${ingredient.quantity.amount} ${ingredient.quantity.unit} ${getIngredientName(ingredient.id)}</li>`;
    return ingredientsList;
  }, '');
}

function createInstructionsList(recipe) {
  return recipe.instructions.reduce((instructionsList, instruction) => {
    instructionsList += `<li>${instruction.instruction}</li>`;
    return instructionsList;
  }, '');
}


function getIngredientName(ingredientId) {
  const ingredient = ingredientsData.find(ingredient => ingredient.id === ingredientId);
  return ingredient.name; 
}



//function below needed to convert ingredient search term to an id so can then use recipe class to check if recipe ingredients have that id ;maybe move to recipe class 
// const convertSearchTermToId = searchTerm => {
//   ingredientsData.forEach(ingredient => {
//     if (ingredient.name === searchTerm) {
//       return ingredient.id;
//     } 
//   });
// }
