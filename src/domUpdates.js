import { myRecipesView, mainView, singleRecipeView } from './scripts'
import { getIngredientsNames } from './get-ingredients-names'

// EVENT HANDLERS
const toMyRecipeView = () => {
  mainView.classList.add('hidden');
  myRecipesView.classList.remove('hidden');
  singleRecipeView.innerHTML= '';
}

const toDashboardView = () => {
  mainView.classList.remove('hidden');
  myRecipesView.classList.add('hidden');
  singleRecipeView.innerHTML= '';
}

// DOM FUNCTIONS
const renderRecipeCards = (view, recipes) => {
  view.innerHTML = ''
  recipes.forEach((recipe) => {
    view.innerHTML += `
    <article class="recipe-card" id="${recipe.id}">
      <img class="recipe-img" src="${recipe.image}" id="${recipe.id}">
      <p class="recipe-tag">${recipe.tags[0]}</p>
      <div class="recipe-title-flex">
        <h2 class="recipe-name">${recipe.name}</h2>
        <div class="bookmark-flex">
          <img src="./images/bookmark.png" id="${recipe.id}" class="bookmark-icon unchecked" alt="bookmark icon">
          <img src="./images/bookmark-filled.png" id="${recipe.id}" class="bookmark-icon checked hidden" alt="bookmark icon filled in">
        </div>
      </div>
    </article>`
  })
}

const isUnchecked = (e) => {
  if (e.target.classList.contains('unchecked')){
      return true;
  }
}

const toggleBookmark = (e) => {
  if (e.target.classList[0]=== 'bookmark-icon') {
    if(isUnchecked(e)) {
      //and push into my saved recipes array
      e.target.classList.add('hidden')
      e.target.nextElementSibling.classList.remove('hidden');
    } else {
      //and remove from my recipe array
      e.target.classList.add('hidden')
      e.target.previousElementSibling.classList.remove('hidden');
    }
  }
}

//CREATE A TEST FOR THIS FUNCITON!!!!
const findRecipe = (e, recipes) => {
     return recipes.find((recipe) => {
        if (e.target.classList.contains('recipe-name')) {
          return recipe.id === parseInt(e.target.parentElement.parentElement.id)
        }
        return recipe.id === parseInt(e.target.id)
      })
}


//card should have instruction, cost to make, and tags?

// newly added functions- remember to export and import in proper files
const renderSingleRecipeView = (e, recipes, ingredients) => {
  let recipe = findRecipe(e, recipes);
  mainView.classList.add('hidden');
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
          ${renderIngredients(recipe, ingredients)}
          <p class="recipe-tag-flex">${renderTags(recipe)}</p>
        </div>
        <div class="vertical-divider"></div>
        <div class="recipe-instructions-flex">
          ${renderInstructions(recipe)}
        </div>
      </div>
    </div>`
}

const renderInstructions = (recipe) => {
  let instructions = recipe.instructions;
  let output = '<h2 class="instruction-title">Instruction</h2>';
  instructions.forEach((ele) => {
    output += `<p>${ele.number}. ${ele.instruction}</p>`
  })
  return output;
};

const renderIngredients = (recipe, ingredients) => {
  let ingredientNames = getIngredientsNames(recipe, ingredients);
  let output = '<h2>Ingredients</h2>';
  ingredientNames.forEach((ele) => {
    output += `<span>- ${ele}</span>`
  })
  return output;
};

const renderTags = (recipe) => {
  let output = `<h2>Tags<h2>`
  recipe.tags.forEach((ele) => {
    output += `<span class="tags-text-flex">${ele}</span>`
  })
  return output;
};

export { toMyRecipeView , toDashboardView, renderRecipeCards, toggleBookmark, renderSingleRecipeView }