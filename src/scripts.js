import './styles.css';
import apiCalls from './apiCalls';
import MicroModal from 'micromodal';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
// import '../src/images'
import RecipeRepository from '../src/classes/RecipeRepository'
import recipeData from './data/recipes'
import ingredientsData from "./data/ingredients"
import usersData from "./data/users"
import User from '../src/classes/User'

const allRecipesContainer = document.querySelector('.all-recipes-container')

const recipeRepository = new RecipeRepository(recipeData, ingredientsData)

window.onload = function(){
    displayAllRecipeTiles()
    var newUser = new User(usersData[0])
}

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
