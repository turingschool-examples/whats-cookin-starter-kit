
import { getIngredientsInfos } from './get-ingredients-infos';
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
const toMyRecipeView = (currentUser) => {
  mainView.classList.add('hidden');
  myRecipesView.classList.remove('hidden');
  singleRecipeView.innerHTML= '';
  searchBar.placeholder = 'Search your bookmarked Recipes';
  renderRecipeCards(myRecipesView, currentUser.recipesToCook, currentUser);
};

const toDashboardView = (currentUser) => {
  mainView.classList.remove('hidden');
  myRecipesView.classList.add('hidden');
  renderRecipeCards(mainViewCardContainer, recipeData, currentUser);
  singleRecipeView.innerHTML= '';
  searchBar.placeholder = 'Search for new Recipes';
};

const searchBarClicked = () => {
  mainViewCardContainer.innerHTML = '';
  myRecipesView.innerHTML = '';

  let searchResults;
  let view;
  
  if (myRecipesView.classList.contains('hidden')) {
    view = mainViewCardContainer;
  } else if (mainView.classList.contains('hidden')) {
    view = myRecipesView;
  }
  if (searchBar.value.length === 0) {
    searchResults = recipeData;
  } else if (searchByToggle.value === 'select') {
    handleInvalidSearch('⬅️ You must search by tag or name.');
    searchResults = recipeData;
  } else if (searchByToggle.value === 'tag') {
    searchResults = handleTagSearch();
  } else if (searchByToggle.value === 'name') {
    searchResults = handleNameSearch();
  }
// potential refactor: turn this into a search object
  handleSearchResults(view, searchResults);
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
  }
};

const handleNameSearch = () => {
  if (myRecipesView.classList.contains('hidden')) {
    return filterByName(searchBar.value, recipeData);
  } else if (mainView.classList.contains('hidden')) {
    return filterByName(searchBar.value, currentUser.recipesToCook);
  }
};

const handleSearchResults = (view, results) => {
  if (typeof results === 'string') {
    view.innerHTML = `<p>${results}</p>`;
  } else {
    renderRecipeCards(view, results, currentUser);
  }
};

// DOM FUNCTIONS
const renderBookmarks = (currentUser, recipe) => {
  if (currentUser.recipesToCook.includes(recipe)) {
    return `<img src="./images/bookmark.png" id="${recipe.id}" class="bookmark-icon unchecked hidden" alt="bookmark icon">
    <img src="./images/bookmark-filled.png" id="${recipe.id}" class="bookmark-icon checked" alt="bookmark icon filled in">`
  } else {
    return `<img src="./images/bookmark.png" id="${recipe.id}" class="bookmark-icon unchecked" alt="bookmark icon">
    <img src="./images/bookmark-filled.png" id="${recipe.id}" class="bookmark-icon checked hidden" alt="bookmark icon filled in">`
  }
}

const renderRecipeCards = (view, recipes, currentUser) => {
  mainViewCardContainer.innerHTML = '';
  myRecipesView.innerHTML = '';
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
  }
};

const findRecipe = (e, recipes) => {
  return recipes.find((recipe) => {
     if (e.target.classList.contains('recipe-name')) {
       return recipe.id === parseInt(e.target.parentElement.parentElement.id);
     }
     return recipe.id === parseInt(e.target.id);
   });
};

const renderSingleRecipeView = (e, recipes, ingredients) => {
  let recipe = findRecipe(e, recipes);
  mainView.classList.add('hidden');
  myRecipesView.innerHTML = ''
  singleRecipeView.classList.remove('hidden');
  singleRecipeView.innerHTML = '';
  singleRecipeView.innerHTML += `
    <div class="single-recipe-view-flex">
      <img class="single-recipe-img" src="${recipe.image}">
      <div class="recipe-header-flex">
        <h2 class="recipe-title">${recipe.name}</h2>
        <div class="bookmark-flex">
          <img src="./images/bookmark.png" id="${recipe.id}" class="bookmark-icon unchecked" alt="bookmark icon">
          <img src="./images/bookmark-filled.png" id="${recipe.id}" class="bookmark-icon checked hidden" alt="bookmark icon filled in">
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
}

const renderInstructions = (recipe) => {
  let instructions = recipe.instructions;
  let output = '<h2 class="instruction-title">Instruction</h2>';
  instructions.forEach((ele) => {
    output += `<p>${ele.number}. ${ele.instruction}</p>`;
  })
  return output;
};

const renderIngredients = (recipe, ingredients) => {
  let ingredientNames = getIngredientsInfos(recipe, ingredients);
  let output = '';
  ingredientNames.forEach((ele) => {
    output += `<span>- ${ele}</span>`;
  })
  return output;
};

const renderTags = (recipe) => {
  let output = ``;
  recipe.tags.forEach((ele) => {
    output += `<span class="tags-text-flex">${ele}</span>`;
  })
  return output;
};

const removeRecipeCard = (e) => {
  if(e.target.classList.contains('bookmark-icon')) {
    e.target.parentElement.parentElement.parentElement.remove();
  };
}

  const toggleBookmark = (e, currentUser, recipeData) => {
    if (e.target.classList[0]=== 'bookmark-icon') {
      if(isUnchecked(e)) {
        recipesToCook(e.target.id, currentUser, recipeData)
        console.log(currentUser)
        e.target.classList.add('hidden')
        e.target.nextElementSibling.classList.remove('hidden');
      } else {
        removeRecipes(e.target.id, currentUser)
        console.log(currentUser)
        e.target.classList.add('hidden')
        e.target.previousElementSibling.classList.remove('hidden');
      }
    }
  };

export {
  toMyRecipeView,
  toDashboardView,
  renderRecipeCards,
  toggleBookmark,
  renderSingleRecipeView,
  searchBarClicked,
  removeRecipeCard
};

