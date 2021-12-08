const buttonHome = document.getElementById('buttonHome');
const buttonRecipes = document.getElementById('buttonRecipes');
const buttonFavorites = document.getElementById('buttonFavorites');
const buttonRecipesToTry = document.getElementById('buttonRecipesToTry');
const buttonSearch = document.getElementById('buttonSearch');
const buttonFavorite = document.getElementById('buttonFavorite');
const buttonSaveForLater = document.getElementById('buttonSaveForLater');
const viewHome = document.getElementById('viewHome');
const viewRecipes = document.getElementById('viewRecipes');
const viewFavorites = document.getElementById('viewFavorites');
const viewRecipesToTry = document.getElementById('viewRecipesToTry');
const viewSearch = document.getElementById('viewSearch');

buttonHome.addEventListener('click', showViewHome);
buttonRecipes.addEventListener('click', showViewRecipes);
buttonFavorites.addEventListener('click', showViewFavorites);
buttonRecipesToTry.addEventListener('click', showViewRecipesToTry);
buttonSearch.addEventListener('click', showViewSearch);
buttonFavorite.addEventListener('click', addFavorite);
buttonSaveForLater.addEventListener('click', addSaveForLater);

function showViewHome() {
    console.log("homebutton clicked");
    hide([viewRecipes, viewRecipesToTry, viewSearch, viewFavorites]);
    show([viewHome]);
}

function showViewRecipes() {
    hide([viewHome, viewRecipesToTry, viewSearch, viewFavorites]);
    show([viewRecipes]);
}

function showViewFavorites() {
    hide([viewHome, viewRecipes, viewRecipesToTry, viewSearch]);
    show([viewFavorites]);
}

function showViewRecipesToTry() {
    hide([viewHome, viewRecipes, viewSearch, viewFavorites]);
    show([viewRecipesToTry]);
}

function showViewSearch() {
    hide([viewHome, viewRecipes, viewRecipesToTry, viewFavorites]);
    show([viewSearch]);
}

function addFavorite() {
    console.log("favorite button clicked")
};

function addSaveForLater() {
    console.log("save button clicked")    
};

function hide(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add('hidden');
  }
}

function show(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('hidden');
  }
}