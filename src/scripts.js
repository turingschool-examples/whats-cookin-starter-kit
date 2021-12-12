import './styles.css';
import './images/search.png'
import './images/save-white-border.png'
import './images/favorite-white-border.png'
import './images/save-pink-inside-white-border.png'
import './images/favorite-pink-inside-white-border.png'
import Recipe from './classes/Recipe.js'
import Ingredient from './classes/Ingredient.js'
import RecipeRepository from './classes/RecipeRepository.js'
import recipeData from './data/recipes.js'
import ingredientsData from './data/ingredients.js'
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
const viewSelectedRecipe = document.getElementById('viewSelectedRecipe');
const buttonViewSelectedRecipe = document.getElementById('recipeCard')
const selectedRecipeTitle = document.getElementById('selectedRecipeTitle');
const selectedRecipeImage = document.getElementById('selectedRecipeImage');
const selectedRecipeIngredients = document.getElementById('selectedRecipeIngredients');
const selectedRecipeInstructions = document.getElementById('selectedRecipeInstructions');
//const recipeCardDisplay = document.getElementById('recipeCard');


buttonHome.addEventListener('click', showViewHome);
buttonRecipes.addEventListener('click', showViewRecipes);
buttonFavorites.addEventListener('click', showViewFavorites);
buttonRecipesToTry.addEventListener('click', showViewRecipesToTry);
buttonSearch.addEventListener('click', showViewSearch);
buttonFavorite.addEventListener('click', addFavorite);
buttonSaveForLater.addEventListener('click', addSaveForLater);
buttonFavoriteRemove.addEventListener('click', removeFavorite);
buttonSaveForLaterRemove.addEventListener('click', removeSaveForLater);
//recipeCardDisplay.addEventListener('click', selectedRecipeShow);
buttonViewSelectedRecipe.addEventListener('click', showViewSelectedRecipe);

function showViewHome() {
    console.log("homebutton clicked");
    hide([viewRecipes, viewRecipesToTry, viewSearch, viewFavorites, viewSelectedRecipe]);
    show([viewHome]);
}

function showViewRecipes() {
    hide([viewHome, viewRecipesToTry, viewSearch, viewFavorites, viewSelectedRecipe]);
    show([viewRecipes]);
}

function showViewFavorites() {
    hide([viewHome, viewRecipes, viewRecipesToTry, viewSearch, viewSelectedRecipe]);
    show([viewFavorites]);
}

function showViewRecipesToTry() {
    hide([viewHome, viewRecipes, viewSearch, viewFavorites, viewSelectedRecipe]);
    show([viewRecipesToTry]);
}

function showViewSearch() {
    hide([viewHome, viewRecipes, viewRecipesToTry, viewFavorites, viewSelectedRecipe]);
    show([viewSearch]);
}

function showViewSelectedRecipe() {
  hide([viewHome, viewRecipes, viewRecipesToTry, viewFavorites, viewSearch]);
  show([viewSelectedRecipe]);
  selectedRecipeShow();
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
const recipes = recipeData.recipeData.reduce((sum, recipe) => {
  sum.push(new Recipe(recipe));
  return sum
},[]);
const cookbook = new RecipeRepository(recipes)
// window.addEventListener('load', selectedRecipeShow)
function selectedRecipeShow() {


  selectedRecipeTitle.innerText = `${cookbook.recipeList[0].name}`;
  selectedRecipeImage.src = `${cookbook.recipeList[0].image}`;
  selectedRecipeIngredients.innerText = cookbook.recipeList[0].accessIngredientName();
  selectedRecipeInstructions.innerText = cookbook.recipeList[0].getRecipeInstructions();
  //`Step ${cookbook.recipeList[0].instructions[0].number}: ${cookbook.recipeList[0].instructions[0].instruction}`;

  console.log(cookbook.recipeList[0].ingredients)
}

//selectedRecipeShow()
console.log('Hello world');
