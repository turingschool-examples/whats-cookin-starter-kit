const mainPage = document.querySelector('.main-page');
const recipePage = document.querySelector('.recipe-page');
const favorites = document.querySelector('.favorites');
const mealPlan = document.querySelector('.meal-plan');
const searchResults = document.querySelector('.search-results');
const pantry = document.querySelector('.pantry');
const allRecipesSection = document.querySelector('.all-recipes-group');
const user0 = new User(usersData[0]);

document.addEventListener('click', changePageView);
allRecipesSection.addEventListener('click', selectCards);

function changePageView(event) {
  const header = document.getElementsByTagName('header')[0]
  const favoritesNavItem = document.querySelector('.favorites-navbar');
  const pantryNavItem = document.querySelector('.pantry-navbar');
  const mealPlanNavItem = document.querySelector('.meal-plan-navbar');
  const allRecipesNavItem = document.querySelector('.all-recipes-navbar');
  const variousPages = [mainPage, recipePage, favorites, mealPlan, searchResults,
  pantry]

  if (event.target === header && mainPage.classList.contains('hidden')) {
    variousPages.forEach(page => page.classList.add('hidden'));
    variousPages.forEach(page => page.classList.remove('shown'));
    mainPage.classList.toggle('shown')
  } else if (event.target === favoritesNavItem && favorites.classList.contains('hidden')) {
    variousPages.forEach(page => page.classList.add('hidden'));
    variousPages.forEach(page => page.classList.remove('shown'));
    favorites.classList.remove('hidden')
    favorites.classList.toggle('shown')
  } else if (event.target === pantryNavItem && pantry.classList.contains('hidden')) {
    variousPages.forEach(page => page.classList.add('hidden'));
    variousPages.forEach(page => page.classList.remove('shown'));
    pantry.classList.remove('hidden')
    pantry.classList.toggle('shown')
  } else if (event.target === mealPlanNavItem && mealPlan.classList.contains('hidden')) {
    variousPages.forEach(page => page.classList.add('hidden'));
    variousPages.forEach(page => page.classList.remove('shown'));
    mealPlan.classList.remove('hidden')
    mealPlan.classList.toggle('shown')
  } else if (event.target.classList.contains('recipe-card') && recipePage.classList.contains('hidden')) {
    variousPages.forEach(page => page.classList.add('hidden'));
    variousPages.forEach(page => page.classList.remove('shown'));
    recipePage.classList.remove('hidden')
    recipePage.classList.toggle('shown')
  } else if (event.target === allRecipesNavItem && searchResults.classList.contains('hidden')) {
    variousPages.forEach(page => page.classList.add('hidden'));
    variousPages.forEach(page => page.classList.remove('shown'));
    searchResults.classList.remove('hidden')
    searchResults.classList.toggle('shown')
    instantiateAllRecipes();
  }
}

function selectCards(event) {
  if (event.target.classList.contains('unselected-heart')) {
    favoriteRecipe(event);
    event.target.src = "../assets/heart-solid.svg"
    event.target.alt ="selected heart icon"
    event.target.classList.add('selected-heart');
    event.target.classList.remove('unselected-heart');
  } else if (event.target.classList.contains('unselected-chef-hat')) {
    addRecipeToMealPlan(event);
    event.target.src= "../assets/selected-chef-hat.svg"
    event.target.alt="selected recipe to cook"
    event.target.classList.add('selected-chef-hat')
    event.target.classList.remove('unselected-chef-hat')
  } else if (event.target.classList.contains('selected-heart')) {
    console.log(event.target)
removeRecipeFromFavorites(event)
    event.target.src = "../assets/heart-regular.svg"
    event.target.alt = "unselected heart icon"
    event.target.classList.add('unselected-heart')
    event.target.classList.remove('selected-heart')
  } else if (event.target.classList.contains('selected-chef-hat')) {
    console.log(event.target)
    removeRecipeFromMealPlan(event);
    event.target.src= "../assets/unselected-chef-hat.svg";
    event.target.alt="unselected recipe to cook"
    event.target.classList.add('unselected-chef-hat')
    event.target.classList.remove('selected-chef-hat')

  }
}

// function addUserToPage() {
//   instantiateAllRecipes();
// }

function instantiateAllRecipes() {
  let instantiatedRecipes = recipeData.map((recipe, index) => {
  let eachRecipe = new Recipe(recipe);
  return eachRecipe;
});
  addRecipesToSearchPage(instantiatedRecipes)
}

function addRecipesToSearchPage(instantiatedRecipes) {
  instantiatedRecipes.forEach(recipe => {
  allRecipesSection.innerHTML += `<div class="recipe-card" id =${recipe.id}>
    <img class="recipe-card-image" src=${recipe.image} alt=${recipe.name}>
    <p class="recipe-card-title">${recipe.name}</p>
    <img class="unselected-heart" src="../assets/heart-regular.svg" alt="unselected heart icon" id=${recipe.id}>
    <img class="unselected-chef-hat" src="../assets/unselected-chef-hat.svg" alt="unselected recipe to cook" id=${recipe.id}>
  </div>`
});
}

function favoriteRecipe(event) {
  const favoriteMealSection = document.querySelector('.favorited-recipe-group')
  let currentRecipe = recipeData.find(recipe => recipe.id === parseInt(event.target.id))
  if (!user0.favoriteRecipes.includes(currentRecipe)) {
    user0.favoriteMeal(currentRecipe);
    favoriteMealSection.innerHTML += `<div class="recipe-card" id=${currentRecipe.id}>
      <img class="recipe-card-image" src=${currentRecipe.image} alt="${currentRecipe.name}">
      <p class="recipe-card-title">${currentRecipe.name}</p>
      <img class="selected-heart" src="../assets/heart-solid.svg" alt="selected heart icon" id =${currentRecipe.id}>
      <img class="unselected-chef-hat" src="../assets/unselected-chef-hat.svg" alt="unselected recipe to cook" id=${currentRecipe.id}>
    </div>`;
  }
}

function addRecipeToMealPlan() {
  const mealPlanSection = document.querySelector('.meal-plan-group')
  let currentRecipe = recipeData.find(recipe => recipe.id === parseInt(event.target.id))
  if (!user0.recipesToCook.includes(currentRecipe)) {
  user0.addRecipeToMealsToCook(currentRecipe);
    mealPlanSection.innerHTML += `<div class="recipe-card" id=${currentRecipe.id}>
      <img class="recipe-card-image" src=${currentRecipe.image} alt="${currentRecipe.name}">
      <p class="recipe-card-title">${currentRecipe.name}</p>
      <img class="selected-heart" src="../assets/heart-regular.svg" alt="selected heart icon" id =${currentRecipe.id}>
      <img class="unselected-chef-hat" src="../assets/selected-chef-hat.svg" alt="unselected recipe to cook" id=${currentRecipe.id}>
    </div>`;
  }
}

function removeRecipeFromMealPlan() {
  const mealPlanSection = document.querySelector('.favorited-recipe-group')
  let currentRecipe = recipeData.find(recipe => recipe.id === parseInt(event.target.id))
  const currentRecipeDiv = document.getElementById(`${currentRecipe.id}`)
  if (user0.recipesToCook.includes(currentRecipe)) {
    user0.removeRecipeFromMealsToCook(currentRecipe);
    console.log(user0.recipesToCook)
    currentRecipeDiv.remove();
  }
}

function removeRecipeFromFavorites() {
  const mealPlanSection = document.querySelector('.favorited-recipe-group')
  let currentRecipe = recipeData.find(recipe => recipe.id === parseInt(event.target.id))
  const currentRecipeDiv = document.getElementById(`${currentRecipe.id}`)
  if (user0.favoriteRecipes.includes(currentRecipe)) {
    user0.unfavoriteMeal(currentRecipe);
    console.log(user0.favoriteRecipes)
    currentRecipeDiv.remove();
  }
}






// window.onload = addUserToPage();
