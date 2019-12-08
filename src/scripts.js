let allRecipes = [];
let randomNum = genRanNum();
let user;

const instantiateRecipeCards = () => {
  recipeData.forEach(recipe => {
    let singleRecipe = new Recipe (
      recipeData.name,
      recipeData.id,
      recipeData.image,
      recipeData.ingredients,
      recipeData.instructions,
      recipeData.tags)
    allRecipes.push(recipe);
  })
  recipeCounter = -1;
  buildRecipeCards(allRecipes);
}

const instantiateUsersPantry = () => {
  user.pantry.forEach(item => {
  document.querySelector('.recipe-card-area').insertAdjacentHTML('afterbegin', `
  <div class="ingredient-card">
    <p>Name: <span class="ingredient-name">Fresh Vanilla Pudding</span></p>
    <p>ID: <span class="ingredient-id">${item.ingredient}</span></p>
    <p>Quantity: <span class="ingredient-quantity">${item.amount}</span></p>
  </div>`);
   });
 }

const buildRecipeCards = (recipesToBuild) => {
  recipesToBuild.forEach(recipe => {
  recipeCounter++;
  document.querySelector('.recipe-card-area').insertAdjacentHTML('afterbegin', `
  <div class="recipe-container">
    <div class="image-container">
      <img src="${recipe.image}" class="image-container">
    </div>
    <div class="recipe-text">
      <h2>${recipe.name}</h2>
    </div>
    <div class="card-button-containter">
      <button type="button" class="card-buttons view-recipe" id=${recipeCounter}>View Recipe</button>
      <button type="button" class="card-buttons add-to-menu" id=${recipeCounter}>Add to Menu</button>
      <button type="button" class="card-buttons add-to-favorites" id=${recipeCounter}>Add to Favorites</button>
    </div>
  </div>`);
   });
}

// var thingy = document.querySelector('.search-input')
//
// document.querySelector('.search-input').addEventListener('keyup', searchCards);
//
// function searchCards() {
//   var search = thingy.value.toUpperCase();
//   var filter = allRecipes.filter(function(idea){
//   var titleSearch = idea.name;
//     return titleSearch.toUpperCase().includes(search)
//   });
//   document.querySelector('.recipe-card-area').innerText = '';
//   filter.forEach(function(filterInstance){
//     buildRecipeCards(filterInstance);
//   });
// }

function genRanNum() {
  return Math.floor(Math.random() * 50)
}

const instantiateUser = () => {
  var selectedUser = users.find(person => {
    return person.id === randomNum;
  })
    user = new User (
    selectedUser.id,
    selectedUser.name,
    selectedUser.pantry)
    document.querySelector('.user-name').innerText = selectedUser.name;
}

const addToFavorites = e => {
  if (e.target.classList.contains('add-to-favorites')) {
    let parsedId = parseInt(event.target.id);
    console.log(parsedId)
    let selectedFaveRecipe = allRecipes[parsedId];
    let doubleCheck = user.favoriteRecipes.includes(selectedFaveRecipe)
    if (!doubleCheck) {
        user.addToFavorites(selectedFaveRecipe);
    } else {
      return;
    }
  }
  if (e.target.classList.contains('add-to-menu')) {
    let parsedId = parseInt(event.target.id);
    let selectedFaveRecipe = allRecipes[parsedId];
    let doubleCheck = user.myMenu.includes(selectedFaveRecipe)
    if (!doubleCheck) {
        user.addToMyMenu(selectedFaveRecipe);
    } else {
      return;
    }
  }
}

const turnOffNavHeighlights = () => {
  document.querySelector('.display-fav-button').style.color = '#FFFFFF';
  document.querySelector('.all-recipes').style.color = '#FFFFFF';
  document.querySelector('.my-menu').style.color = '#FFFFFF';
  document.querySelector('.my-pantry').style.color = '#FFFFFF';
}

const heighlightNavBtn = (navItem) => {
  document.querySelector(`${navItem}`).style.color = '#FFFB49';
}

const navBtnClickHandler = e => {
  if (e.target.classList.contains('display-fav-button')) {
    turnOffNavHeighlights();
    heighlightNavBtn(`.display-fav-button`)
    document.querySelector('.recipe-card-area').innerText = '';
    recipeCounter = -1;
    buildRecipeCards(user.favoriteRecipes);
  }
  if (e.target.classList.contains('all-recipes')) {
    turnOffNavHeighlights();
    heighlightNavBtn(`.all-recipes`)
    document.querySelector('.recipe-card-area').innerText = '';
    recipeCounter = -1;
    buildRecipeCards(allRecipes);
  };
  if (e.target.classList.contains('my-menu')) {
    turnOffNavHeighlights();
    heighlightNavBtn(`.my-menu`)
    document.querySelector('.recipe-card-area').innerText = '';
    recipeCounter = -1;
    buildRecipeCards(user.myMenu);
  };
  if (e.target.classList.contains('my-pantry')) {
    turnOffNavHeighlights();
    heighlightNavBtn(`.my-pantry`)
    document.querySelector('.recipe-card-area').innerText = '';
    instantiateUsersPantry();
  };
}

let addToMenuBtns = document.querySelectorAll('.add-to-menu');
let addToFavoriteBtns = document.querySelectorAll('.add-to-favorite');

function loadDashboard() {
  document.querySelector('.splash-container').classList.add('hidden');
  document.querySelector('.nav-bar').classList.remove('hidden');
  document.querySelector('.recipe-card-area').classList.remove('hidden');
  instantiateRecipeCards();
}

instantiateUser();

document.querySelector('.enter-button').addEventListener('click', loadDashboard);
document.querySelector('.recipe-card-area').addEventListener('click', addToFavorites);
document.querySelector('nav').addEventListener('click', navBtnClickHandler);

var recipeCounter = -1;
