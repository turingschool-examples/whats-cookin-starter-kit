//IMPORTS
import './styles.css'
import { closePanel, showRecipe, switchView, searchForRecipes, resetSearch, updateRecipesFromGrid, toggleTagData, renderActiveTag, displayTaggedRecipes, updateRecipesFromModal, enableScrollPitchText, openInfoPanel, checkIfModalOpen, renderGrid } from './domUpdates';
import { calculateRecipeCost, getIngredientAmounts, getInstructions } from './recipes';
import './images/graph.png'
import './images/refresh.png'
import './images/antipasti.png'
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
import './images/right-arrow.png'
import './images/left-arrow.png'


// import apiCalls from './apiCalls'
import './images/hollow-bookmark-icon.png'
import './images/select-bookmark-icon.png'
import { loadData, pageData, currentUser } from './apiCalls';

// QUERY SELCTORS
const nav = document.querySelector('nav');
const body = document.querySelector('body');
const spinner = document.querySelector('.spinner')
const recipeGrid = document.querySelector('.recipe-grid');
const allRecipes = document.querySelector('.all-recipes')
const allUserRecipes = document.querySelector('.all-user-recipes');
const clickedRecipe = document.querySelector('#clickedRecipe');
const closeButtons = document.querySelectorAll('.close-btn');
const tagArea = document.querySelector('.tag-area');
const ingredientsList = document.querySelector('.ingredients-list');
const chooseView = document.querySelector('.choose-view')
const ourViewBtn = document.querySelector("#our-recipes");
const yourViewBtn = document.querySelector("#your-recipes");
const searchBar = document.querySelector('#searchBar');
const searchBtn = document.querySelector('#searchBtn');
const whatsCookin = document.querySelector('nav > h1');
const refreshBtn = document.querySelector('#refreshButton');
const modalAddBtn = document.querySelector('.add-recipe');
const modalRemoveBtn = document.querySelector('.remove-recipe');
const modalRecipeBtns = document.querySelectorAll('.modal-recipe-btn');
const graphPanel = document.querySelector("#graphPanel");
const graphBtn = document.querySelector("#graphButton");
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const form = document.querySelector('form')

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

const getPageRecipes = () => {
  const userRecipes = currentUser.recipesToCook
    .map(savedID => pageData.allRecipes
    .find(recipe => recipe.id === savedID));

  const data = {
    'our-recipes': pageData.allRecipes,
    'your-recipes': userRecipes
  }
  return data[pageData.currentView];
}

window.addEventListener("load", () => {
  loadData();
});

window.addEventListener('resize', () => {
  renderGrid(pageData.recipesOfInterest)
})

allRecipes.addEventListener('click', (event) => {
  if (event.target.classList.contains("save-option")) {
    updateRecipesFromGrid(event);
  }
})

modalRecipeBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    updateRecipesFromModal(e);
  })

  btn.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
      updateRecipesFromModal(e);
    }
  })
});

tagArea.addEventListener("click", function(event) {
  if (event.target.classList && event.target.closest(".tag-card")) {
    toggleTagData(event.target.closest("section").id);
    renderActiveTag(event);
    displayTaggedRecipes();
  };
});


tagArea.addEventListener("keyup", function(event) {
  if (event.key === 'Enter' && event.target.classList && event.target.closest(".tag-card")) {
    toggleTagData(event.target.closest("section").id);
    renderActiveTag(event);
    displayTaggedRecipes();
  };
});

leftArrow.addEventListener('click', () => {
  tagArea.scrollBy({
    top: 0,
    left: -200,
    behavior: "smooth",
  })
})

rightArrow.addEventListener('click', () => {
  tagArea.scrollBy({
    top: 0,
    left: 200,
    behavior: "smooth",
  })
})

recipeGrid.addEventListener("click", (event) => {
  if (event.target.classList?.contains('individual-recipe') && !checkIfModalOpen()) {
    showRecipe(event.target);
  }
});

recipeGrid.addEventListener("keyup", (event) => {
  if(event.key === 'Enter') {
    if (event.target.classList?.contains('individual-recipe') && !checkIfModalOpen()) {
      showRecipe(event.target);
    }
  }
});

recipeGrid.addEventListener("mouseover", (event) => {
  if (event.target.classList?.contains('individual-recipe')) {
    enableScrollPitchText(event.target.querySelector('h4'));
  }
});

closeButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    closePanel(e);
  })

  button.addEventListener("keyup", (e) => {
    if(e.key === 'Enter') {
      closePanel(e);
    }
  })
});

chooseView.addEventListener("click", function(event) {
  if (event.target.classList.contains("unselected-view")) {
    switchView(event.target.id);
  }
});

chooseView.addEventListener("keyup", function(event) {
  if (event.key === 'Enter' && event.target.classList.contains("unselected-view")) {
    switchView(event.target.id);
  }
});

form.addEventListener('submit', (e) => {e.preventDefault()})

searchBar.addEventListener('search', (event) => {
  if (!event.target.value.length) {
    displayTaggedRecipes();
  } else {
    searchForRecipes();
  }
})

searchBtn.addEventListener('click', searchForRecipes);
whatsCookin.addEventListener('click', resetSearch);

refreshBtn.addEventListener('click', resetSearch);

refreshBtn.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    resetSearch();
  }
})

graphBtn.addEventListener('click', (e) => {
  openInfoPanel(e.target);
});

graphBtn.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    openInfoPanel(e.target);
  }
});

// Exports
export {
  recipeGrid,
  spinner,
  tagArea,
  clickedRecipe,
  getRecipeCard,
  getPageRecipes,
  ingredientsList,
  allRecipes,
  ourViewBtn,
  yourViewBtn,
  allUserRecipes,
  chooseView,
  searchBar,
  modalAddBtn, 
  modalRemoveBtn,
  nav,
  body,
  graphPanel,
  leftArrow,
  rightArrow
}
