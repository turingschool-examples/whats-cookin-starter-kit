import {myRecipesView, mainView} from './scripts'

// EVENT HANDLERS
const toMyRecipeView = () => {
  mainView.classList.add('hidden')
  myRecipesView.classList.remove('hidden')
}

const toDashboardView = () => {
  mainView.classList.remove('hidden')
  myRecipesView.classList.add('hidden')
}

// DOM FUNCTIONS
const renderRecipeCards = (view, recipes) => {
  view.innerHTML = ''
  recipes.forEach((recipe) => {
    view.innerHTML += `
    <article class="recipe-card">
      <img class="recipe-img"
      src="${recipe.image}">
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

export { toMyRecipeView , toDashboardView, renderRecipeCards, toggleBookmark }