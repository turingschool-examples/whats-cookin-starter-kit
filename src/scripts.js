import './styles.css';
import apiCalls from './apiCalls';
import MicroModal from 'micromodal';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import '../src/images'
import RecipeRepository from '../src/classes/RecipeRepository'
import recipeData from './data/recipes'
import ingredientsData from "./data/ingredients"

const allRecipesContainer = document.querySelector('.all-recipes-container')

const recipeRepository = new RecipeRepository(recipeData, ingredientsData)

displayAllRecipeTiles()

MicroModal.init({
  onShow: modal => console.info(`${modal.id} is shown. Callback ftn to poppulate modal called here?`),
  onClose: modal => console.info(`${modal.id} is hidden`),
  openTrigger: 'data-micromodal-trigger',
  closeTrigger: 'data-custom-close',
  openClass: 'is-open',
  disableScroll: true,
  disableFocus: false,
  awaitOpenAnimation: false,
  awaitCloseAnimation: false,
  debugMode: true 
});

function createRecipeTile(recipe) {
    allRecipesContainer.innerHTML += 
        `<div class="recipe-tile">
            <div class= "tile-image" style="background-image: url(${recipe.image})">
                <button class="bookmark-button">Test</button>
            </div>
            <h1>${recipe.name}</h1>
            <h2>${recipe.tags.join(', ')}</h2>
        </div>`
}

function displayAllRecipeTiles() {
    for(var i = 0; i < recipeRepository.recipeList.length; i++) {
        createRecipeTile(recipeRepository.recipeList[i])
    }
}

window.onload = function(){
  var newRecipeRepo = new RecipeRepository(recipeData, ingredientsData)
  // var newUser = new User()
  console.log("newRecipeRepo", newRecipeRepo)
  // console.log("newUser", newUser)
}

console.log('Hello world');