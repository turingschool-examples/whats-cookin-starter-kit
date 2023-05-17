import { removeRecipes, recipesToCook } from './recipes-to-cook';
import {myRecipesView, mainView, enlargedRecipeView} from './scripts'

// EVENT HANDLERS
const toMyRecipeView = () => {
  mainView.classList.add('hidden');
  myRecipesView.classList.remove('hidden');
  enlargedRecipeView.innerHTML= '';
}

const toDashboardView = () => {
  mainView.classList.remove('hidden');
  myRecipesView.classList.add('hidden');
  enlargedRecipeView.innerHTML= '';
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

const toggleBookmark = (e, currentUser) => {
  if (e.target.classList[0]=== 'bookmark-icon') {
    if(isUnchecked(e)) {
      recipesToCook(e.target.id, currentUser)
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
}

//CREATE A TEST FOR THIS FUNCITON!!!!
const findRecipe = (e, recipes) => {
     return recipes.find((recipe) => {
        return recipe.id === parseInt(e.target.id)
      })
}

const renderEnlargedRecipeCard = (e, recipes) => {
  let recipe = findRecipe(e, recipes);
  mainView.classList.add('hidden');
  enlargedRecipeView.classList.remove('hidden');
  enlargedRecipeView.innerHTML = '';
  enlargedRecipeView.innerHTML += `
    <div class="enlarged-recipe-card-flex">
      <article class="enlarged-recipe-card">
        <img class="enlgarged-recipe-img" src="${recipe.image}">
        <p class="recipe-tag">${recipe.tags[0]}</p>
        <div class="recipe-title-flex">
          <h2 class="recipe-name">${recipe.name}</h2>
          <div class="bookmark-flex">
            <img src="./images/bookmark.png" id="${recipe.id}" class="bookmark-icon unchecked" alt="bookmark icon">
            <img src="./images/bookmark-filled.png" id="${recipe.id}" class="bookmark-icon checked hidden" alt="bookmark icon filled in">
          </div>
        </div>
      </article>
    </div>`
}
//card should have instruction, cost to make, and tags?

export { toMyRecipeView , toDashboardView, renderRecipeCards, toggleBookmark, renderEnlargedRecipeCard }