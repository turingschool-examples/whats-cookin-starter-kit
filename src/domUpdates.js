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

export { toMyRecipeView , toDashboardView }