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
        <button type="button" class="card-buttons view-recipe">View Recipe</button>
        <button type="button" class="card-buttons add-to-menu">Add to Menu</button>
        <button type="button" class="card-buttons add-to-favorites" id=${recipeCounter}>Add to Favorites</button>
      </div>
    </div>`);
  });
}

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

const navBtnClickHandler = e => {
  if (e.target.classList.contains('display-fav-button')) {
    document.querySelector('.recipe-card-area').innerText = '';
    recipeCounter = -1;
    buildRecipeCards(user.favoriteRecipes);
  }
  if (e.target.classList.contains('all-recipes')) {
    document.querySelector('.recipe-card-area').innerText = '';
    recipeCounter = -1;
    buildRecipeCards(allRecipes);
   };
   if (e.target.classList.contains('my-menu')) {
     document.querySelector('.recipe-card-area').innerText = '';
     recipeCounter = -1;
     buildRecipeCards(user.myMenu);
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

instantiateRecipeCards();
instantiateUser();

document.querySelector('.enter-button').addEventListener('click', loadDashboard)
document.querySelector('.recipe-card-area').addEventListener('click', addToFavorites)
document.querySelector('nav').addEventListener('click', navBtnClickHandler)

var recipeCounter = -1;
