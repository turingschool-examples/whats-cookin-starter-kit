import './styles.css';
import './images/search.png'
import './images/save-white-border.png'
import './images/favorite-white-border.png'
import './images/save-pink-inside-white-border.png'
import './images/favorite-pink-inside-white-border.png'
import apiCalls from './apiCalls';

const buttonHome = document.getElementById('buttonHome');
const buttonRecipes = document.getElementById('buttonRecipes');
const buttonFavorites = document.getElementById('buttonFavorites');
const buttonRecipesToTry = document.getElementById('buttonRecipesToTry');
const buttonSearch = document.getElementById('buttonSearch');
const buttonFavorite = document.getElementById('buttonFavorite');
const buttonSaveForLater = document.getElementById('buttonSaveForLater');
const buttonFavoriteRemove = document.getElementById('buttonFavoriteRemove');
const buttonSaveForLaterRemove = document.getElementById('buttonSaveForLaterRemove');
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
buttonFavoriteRemove.addEventListener('click', removeFavorite);
buttonSaveForLaterRemove.addEventListener('click', removeSaveForLater);

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
    hide([buttonFavorite]);
    show([buttonFavoriteRemove]);
};

function addSaveForLater() {
    console.log("save button clicked")    
    hide([buttonSaveForLater]);
    show([buttonSaveForLaterRemove]);
};

function removeFavorite() {
  console.log("favorite button clicked")
  hide([buttonFavoriteRemove]);
  show([buttonFavorite]);
};

function removeSaveForLater() {
  console.log("save button clicked")    
  hide([buttonSaveForLaterRemove]);
  show([buttonSaveForLater]);
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



console.log('Hello world');
