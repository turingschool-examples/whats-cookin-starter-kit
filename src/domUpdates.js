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
      src="${recipe.img}">
      <p class="recipe-tag">tag</p>
      <div class="recipe-title-flex">
        <h2 class="recipe-name">${recipe.name}</h2>
        <div class="bookmark-flex">
          <img src="./images/bookmark.png" class="bookmark-icon">
        </div>
      </div>
    </article>`
  })

}

export { toMyRecipeView , toDashboardView }