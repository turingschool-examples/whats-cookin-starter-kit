import { checkUserForRecipe } from './users';
import { compileIngredientItems } from './compile-ingredient-items';
import { calculateRecipePrice } from './calculate-recipe-price';
import { removeRecipes, recipesToCook } from './recipes-to-cook';
import {
  myRecipesView,
  mainView,
  singleRecipeView,
  searchBar,
  searchByToggle,
  mainViewCardContainer,
  currentUser,
} from './scripts';
import { filterByName, filterByTag } from './filters';
import { recipeData } from './data/recipes';

// EVENT HANDLERS
const clearView = (views) => {
  views.forEach((view) => {
    view.innerHTML = '';
  });
};

const toMyRecipeView = (currentUser) => {
  toggleHidden([mainView], 'add');
  toggleHidden([myRecipesView], 'remove');
  clearView([singleRecipeView]);
  searchBar.placeholder = 'Search your bookmarked Recipes';
  renderRecipeCards(myRecipesView, currentUser.recipesToCook, currentUser);
};

const toDashboardView = (currentUser) => {
  toggleHidden([mainView], 'remove');
  toggleHidden([myRecipesView], 'add');
  renderRecipeCards(mainViewCardContainer, recipeData, currentUser);
  clearView([singleRecipeView]);
  searchBar.placeholder = 'Search for new Recipes';
};

const setView = () => {
  if (myRecipesView.classList.contains('hidden')) {
    return mainViewCardContainer;
  } else if (mainView.classList.contains('hidden')) {
    return myRecipesView;
  };
};

const searchResults = () => {
  if (searchBar.value.length === 0) {
    handleInvalidSearch(`You can't search for nothing!`);
    return recipeData;
  } else if (searchByToggle.value === 'tag') {
    return handleTagSearch();
  } else if (searchByToggle.value === 'name') {
    return handleNameSearch();
  };
};

const searchBarClicked = () => {
  clearView([mainViewCardContainer, myRecipesView, singleRecipeView]);
  handleSearchResults(setView(), searchResults());
};

const handleInvalidSearch = (message) => {
  searchBar.value = '';
  searchBar.placeholder = message;
};

const handleTagSearch = () => {
  if (myRecipesView.classList.contains('hidden')) {
    return filterByTag(searchBar.value, recipeData);
  } else if (mainView.classList.contains('hidden')) {
    return filterByTag(searchBar.value, currentUser.recipesToCook);
  };
};

const handleNameSearch = () => {
  if (myRecipesView.classList.contains('hidden')) {
    return filterByName(searchBar.value, recipeData);
  } else if (mainView.classList.contains('hidden')) {
    return filterByName(searchBar.value, currentUser.recipesToCook);
  };
};

const handleSearchResults = (view, results) => {
  if (view === mainViewCardContainer) {
    toggleHidden([mainView], 'remove')
  } else {
    toggleHidden([myRecipesView], 'remove')
  }
  if (typeof results === 'string') {
    view.innerHTML = `<p>${results}</p>`;
  } else {
    renderRecipeCards(view, results, currentUser);
  };
};

// DOM FUNCTIONS
const renderBookmarks = (currentUser, recipe) => {
  if (checkUserForRecipe(currentUser, recipe)) {
    return `<img src="./images/bookmark.png" id="${recipe.id}" class="bookmark-icon unchecked hidden" alt="bookmark icon">
    <img src="./images/bookmark-filled.png" id="${recipe.id}" class="bookmark-icon checked" alt="bookmark icon filled in">`;
  } else {
    return `<img src="./images/bookmark.png" id="${recipe.id}" class="bookmark-icon unchecked" alt="bookmark icon">
    <img src="./images/bookmark-filled.png" id="${recipe.id}" class="bookmark-icon checked hidden" alt="bookmark icon filled in">`;
  };
};

const renderRecipeCards = (view, recipes, currentUser) => {
  clearView([mainViewCardContainer, myRecipesView]);
  recipes.forEach((recipe) => {
    view.innerHTML += `
    <article class="recipe-card" id="${recipe.id}">
      <img class="recipe-img" src="${recipe.image}" id="${recipe.id}">
      <p class="recipe-tag">${recipe.tags[0]}</p>
      <div class="recipe-title-flex">
        <h2 class="recipe-name">${recipe.name}</h2>
        <div class="bookmark-flex">
        ${renderBookmarks(currentUser, recipe)}
        </div>
      </div>
    </article>`;
  });
};

const isUnchecked = (e) => {
  if (e.target.classList.contains('unchecked')) {
    return true;
  };
};

const toggleHidden = (elements, type) => {
  elements.forEach((element) => {
    element.classList[type]('hidden');
  });
};

const toggleBookmark = (e, currentUser, recipeData) => {
  if (e.target.classList[0] === 'bookmark-icon') {
    if (isUnchecked(e)) {
      recipesToCook(e.target.id, currentUser, recipeData);
      toggleHidden([e.target], 'add');
      toggleHidden([e.target.nextElementSibling], 'remove');
    } else {
      removeRecipes(e.target.id, currentUser);
      toggleHidden([e.target], 'add');
      toggleHidden([e.target.previousElementSibling], 'remove');
    };
  };
};

const findRecipe = (e, recipes) => {
  return recipes.find((recipe) => {
    if (e.target.classList.contains('recipe-name')) {
      return recipe.id === parseInt(e.target.parentElement.parentElement.id);
    }
    return recipe.id === parseInt(e.target.id);
  });
};

const renderSingleRecipeView = (e, recipes, ingredients, currentUser) => {
  let recipe = findRecipe(e, recipes);
  toggleHidden([mainView], 'add');
  toggleHidden([singleRecipeView], 'remove');
  clearView([singleRecipeView, myRecipesView]);

  singleRecipeView.innerHTML += `
    <div class="single-recipe-view-flex">
      <img class="single-recipe-img" src="${recipe.image}">
      <div class="recipe-header-flex">
        <h2 class="recipe-title">${recipe.name}</h2>
        <div class="bookmark-flex">
          ${renderBookmarks(currentUser, recipe)}
        </div>
      </div>
      <div class="recipe-content-flex">
        <div class="side-info-flex">
          <h2>Ingredients</h2>
          ${renderIngredients(recipe, ingredients)}
          <h2>Total Cost</h2>
          <span>${calculateRecipePrice(recipe, ingredients)}</span>
          <h2>Tags</h2>
          <span class="recipe-tag-flex">
            ${renderTags(recipe)}
          </span>
        </div>
        <div class="vertical-divider"></div>
        <div class="recipe-instructions-flex">
          ${renderInstructions(recipe)}
        </div>
      </div>
    </div>`;
};

const renderInstructions = (recipe) => {
  let instructions = recipe.instructions;
  let output = '<h2 class="instruction-title">Instruction</h2>';
  instructions.forEach((ele) => {
    output += `<p>${ele.number}. ${ele.instruction}</p>`;
  });
  return output;
};

const renderIngredients = (recipe, ingredients) => {
  let ingredientItems = compileIngredientItems(recipe, ingredients);
  let output = '';
  ingredientItems.forEach((ele) => {
    output += `<span>- ${ele}</span>`;
  });
  return output;
};

const renderTags = (recipe) => {
  let output = ``;
  recipe.tags.forEach((ele) => {
    output += `<span class="tags-text-flex">${ele}</span>`;
  });
  return output;
};

const removeRecipeCard = (e) => {
  if (e.target.classList.contains('bookmark-icon')) {
    e.target.parentElement.parentElement.parentElement.remove();
  };
};

export {
  toMyRecipeView,
  toDashboardView,
  renderRecipeCards,
  toggleBookmark,
  renderSingleRecipeView,
  searchBarClicked,
  removeRecipeCard,
};
