let mainNav = document.querySelector('.main-nav');
let navBar = document.querySelector('.navbar');
let recipeList = document.querySelector('.injected-recipes');
let favoriteRecipes = document.querySelector('.injected-favorite-recipes');
let allRecipes = [];
let searchedRecipes = [];
let currentUser;
let input = document.querySelector('.search-bar');






window.onload = pageLoadHandler;
// navBarToggle.addEventListener('click', function () {
//   mainNav.classList.toggle('active');
// });
// mainNav.addEventListener('keypress', mainHandler);
mainNav.addEventListener('keyup', mainHandler);
navBar.addEventListener('click', navHandler);

function mainHandler() {
  searchedRecipes = [];
  clearDom()
  searchRecipes(input.value)
  loadRecipes(searchedRecipes);
}

function navHandler(event) {
  if(event.target.classList.contains('navbar-toggle')) {
     mainNav.classList.toggle('active');
  }
}


function pageLoadHandler() {
  loadUser();
  allRecipes = instantiateRecipes();
  loadRecipes(allRecipes);
}

function loadUser() {
  currentUser = new Users(users[0]);
  currentUser.createPantry(users[0].pantry);
}

function loadRecipes(recipeArray) {
  for(let i = 0; i <  recipeArray.length; i++) {
    recipeList.insertAdjacentHTML('beforeend',
    `<div class="recipe-card" data-id="${recipeArray[i].id}">
      <div class="recipe-header">
        <img src="${recipeArray[i].image}" alt="Picture of ${recipeArray[i].name}">
        <h3>${recipeArray[i].name}</h3>
        <div class="button-wrapper">
          <button class="buttons favorite-recipe">&#11089;</button>
          <button class="buttons current-recipe">+</button>
        </div>
      </div>
      <div class="recipe-content hidden">
        <ul class="recipe-ingredients">
          ${recipeIngredients(recipeArray[i].ingredients)}
        </ul>
        <ol class="recipe-directions">
          ${recipeDirections(recipeArray[i].instructions)}
        </ol>
      </div>
    </div>`
    )}
  recipeSelector = recipeList.querySelectorAll('.recipe-card');
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
  return ingredientList.map(x => `<li data-id='${x.id}'><i>${x.name}</i>: ${(Math.floor(x.quantity.amount * 100) / 100) + ' ' + x.quantity.unit}</li>`).join('\n');
};

function recipeDirections(directionsList) {
  return directionsList.map(x => `<li>${x.instruction}</li>`).join('\n');
};

function recipeHandler(event) {
  if (event.target.parentNode.classList.contains('recipe-header')) {
    event.target.parentNode.parentNode.classList.toggle('recipe-card-active');
    event.target.parentNode.parentNode.children[1].classList.toggle('hidden');
  }
  if (event.target.classList.contains('favorite-recipe')) {
    if (!currentUser.favoriteRecipes.includes(event.target.parentNode.parentNode.parentNode.dataset.id)) {
      currentUser.favoriteRecipes.push(currentUser.addFavoriteRecipe(event.target.parentNode.parentNode.parentNode.dataset.id));
    } else {
      currentUser.favoriteRecipes.splice(currentUser.favoriteRecipes.indexOf(event.target.parentNode.parentNode.parentNode.dataset.id), 1);
    }
    event.target.classList.toggle('favorite-recipe-active');
  }
  if (event.target.classList.contains('current-recipe')) {
    if (!currentUser.currentRecipes.includes(event.target.parentNode.parentNode.parentNode.dataset.id)) {
      currentUser.currentRecipes.push(currentUser.addCurrentRecipe(event.target.parentNode.parentNode.parentNode.dataset.id));
    } else {
      currentUser.currentRecipes.splice(currentUser.currentRecipes.indexOf(event.target.parentNode.parentNode.parentNode.dataset.id), 1);
    }
    event.target.classList.toggle('current-recipe-active');
  }
};

function searchRecipes(keyword) {
  return allRecipes.filter(recipe => {
    if (recipe.name.toLowerCase().includes(keyword.toLowerCase()) ||
    recipe.tags.includes(keyword.toLowerCase())
  ) {
      searchedRecipes.push(recipe);
    }
  })
};

function clearDom() {
  recipeList.innerHTML = "";
};
