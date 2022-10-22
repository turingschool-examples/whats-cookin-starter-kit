import './styles.css';
import apiCalls from './apiCalls';
import MicroModal from 'micromodal';
// import '../src/images'
import "./images/bookmark-unsaved.png"
import "./images/bookmark-saved.png"
import RecipeRepository from '../src/classes/RecipeRepository'
import recipeData from './data/recipes'
import ingredientsData from "./data/ingredients"
import usersData from "./data/users"
import User from '../src/classes/User'

// ---------------------------DATA MODEL---------------------------

const recipeRepository = new RecipeRepository(recipeData, ingredientsData)

// ---------------------------QUERY SELECTORS---------------------------

const allRecipesContainer = document.querySelector('.all-recipes-container')
const closeModalButton = document.getElementById("close-modal-button")
const modalTagParent = document.getElementById("modal-tag-button-parent")

// ---------------------------EVENT LISTENERS---------------------------

window.onload = function(){
    displayAllRecipeTiles()
    var newUser = new User(usersData[0])
    MicroModal.init({
      onShow: modal => console.info(`${modal.id} is shown. Callback ftn to poppulate modal called here?`),
      onClose: modal => console.info(`${modal.id} is hidden`),
      openTrigger: 'data-micromodal-trigger',
      closeTrigger: 'data-custom-close',
      openClass: 'is-open',
      disableScroll: true,
      disableFocus: true,
      awaitOpenAnimation: false,
      awaitCloseAnimation: false,
      debugMode: true 
    })
}

closeModalButton.addEventListener("click", () => MicroModal.close("modal-1"))

allRecipesContainer.addEventListener("click", (event) => {
  if (event.target.nodeName === "SECTION") { return }
  updateModal(event);
  MicroModal.show("modal-1")
})

// ---------------------------DOM UPDATING---------------------------

function createRecipeTile(recipe) {
    allRecipesContainer.innerHTML += 
        `<div class="recipe-tile" id=${recipe.id}>
            <div class= "tile-image" style="background-image: url(${recipe.image})">
            <img class="modal-bookmark-icon" src="./images/bookmark-unsaved.png" alt="save recipe">
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

let updateModal = event => {
  let targetObject = recipeRepository.recipeList.find(recipe => recipe.id == event.target.parentNode.id)
  
  modalTagParent.innerHTML = ``
  targetObject.tags.forEach(tag => {
    modalTagParent.innerHTML += `<button>${tag}</button>`
  })
  
  console.log(targetObject)
}