//IMPORTS
import './styles.css'
import { closeRecipe, showRecipe, switchView, searchForRecipes, returnHome, updateUserRecipes, toggleTagData, renderActiveTag, displayTaggedRecipes, updateRecipesFromModal, enableScrollPitchText } from './domUpdates';
import { calculateRecipeCost, getIngredientAmounts, getInstructions } from './recipes';
import './images/antipasti.png';
import './images/antipasto.png'
import './images/appetizer.png'
import './images/breakfast.png'
import './images/brunch.png'
import './images/condiment.png'
import './images/dinner.png'
import './images/dip.png'
import "./images/hor d'oeuvre.png"
import './images/lunch.png'
import './images/main course.png'
import './images/main dish.png'
import './images/morning meal.png'
import './images/salad.png'
import './images/sauce.png'
import './images/side dish.png'
import './images/snack.png'
import './images/spread.png'
import './images/starter.png'
import './images/search-button.png'

// import apiCalls from './apiCalls'
import './images/hollow-bookmark-icon.png'
import './images/select-bookmark-icon.png'
import { loadData, pageData, currentUser } from './apiCalls';

// QUERY SELCTORS
const body = document.querySelector('body');
const spinner = document.querySelector('.spinner')
const recipeGrid = document.querySelector('.recipe-grid');
const allRecipes = document.querySelector('.all-recipes')
const allUserRecipes = document.querySelector('.all-user-recipes');
const clickedRecipe = document.querySelector('#clickedRecipe');
const closeRecipeButton = document.querySelector('#closeRecipe');
const tagArea = document.querySelector('.tag-area');
const ingredientsList = document.querySelector('#ingredientsList');
const chooseView = document.querySelector('.choose-view')
const ourViewBtn = document.querySelector("#our-recipes");
const yourViewBtn = document.querySelector("#your-recipes");
const searchBar = document.querySelector('#searchBar');
const searchBtn = document.querySelector('#searchBtn');
const whatsCookin = document.querySelector('nav > h1');
const homeBtn = document.querySelector('#homeBtn');
const modalAddBtn = document.querySelector('.add-recipe');
const modalRemoveBtn = document.querySelector('.remove-recipe');
const modalRecipeBtns = document.querySelectorAll('.modal-recipe-btn');

//FUNCTIONS 
const getRecipeCard = (recipe) => {
  const recipeCard =  {
    id: recipe.id,
    instructions: getInstructions(recipe),
    ingredients: getIngredientAmounts(recipe, pageData.allIngredients),
    image: recipe.image,
    name: recipe.name,
    price: calculateRecipeCost(recipe, pageData.allIngredients),
    tags: recipe.tags
  }

  return recipeCard;
}

const getPageData = () => {
  const data = {
    'our-recipes': pageData.allRecipes,
    'your-recipes': currentUser.recipesToCook
  }
  return data[pageData.currentView];
}

window.addEventListener("load", () => {
  loadData();
});

allRecipes.addEventListener('click', (event) => {
  updateUserRecipes(event);
})

modalRecipeBtns.forEach(btn => btn.addEventListener('click', (e) => {
  updateRecipesFromModal(e);
}));

tagArea.addEventListener("click", function(event) {
  if (event.target.classList && event.target.closest(".tag-card")) {
    toggleTagData(event.target.closest("section").id);
    renderActiveTag(event);
    displayTaggedRecipes();
  };
});

recipeGrid.addEventListener("click", (event) => {
  if (event.target.classList?.contains('individual-recipe')) {
    showRecipe(event.target);
  }
});

recipeGrid.addEventListener("mouseover", (event) => {
  if (event.target.classList?.contains('individual-recipe')) {
    enableScrollPitchText(event.target.querySelector('h4'));
  }
});

closeRecipeButton.addEventListener("click", closeRecipe);
chooseView.addEventListener("click", function(event) {
  if (event.target.classList.contains("unselected-view")) {
    switchView(event.target.id);
  }
});

searchBar.addEventListener('search', (event) => {
  if (!event.target.value.length) {
    displayTaggedRecipes();
  } else {
    searchForRecipes();
  }
})

searchBtn.addEventListener('click', searchForRecipes);
whatsCookin.addEventListener('click', returnHome);
homeBtn.addEventListener('click', returnHome);

// Exports
export {
  recipeGrid,
  spinner,
  tagArea,
  clickedRecipe,
  getRecipeCard,
  getPageData,
  ingredientsList,
  allRecipes,
  ourViewBtn,
  yourViewBtn,
  allUserRecipes,
  chooseView,
  searchBar,
  modalAddBtn, 
  modalRemoveBtn,
  body
}
