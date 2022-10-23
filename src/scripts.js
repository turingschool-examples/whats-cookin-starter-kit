import './styles.css'
import apiCalls from './apiCalls'
import MicroModal from 'micromodal'
// import '../src/images'
import "./images/bookmark-tiles-unsaved.png"
import "./images/bookmark-tiles-saved.png"
import "./images/bookmark-unsaved.png"
import "./images/bookmark-saved.png"
import './images/turing-logo.png'
// import '../src/images'
import RecipeRepository from '../src/classes/RecipeRepository'
// import recipeData from './data/recipes'
// import ingredientsData from "./data/ingredients"
// import usersData from "./data/users"
import User from '../src/classes/User'
import getData from './apiCalls'

// ---------------------------DATA MODEL---------------------------

// const recipeRepository = new RecipeRepository(recipeData, ingredientsData)
// const user = new User(usersData[0])

let currentlyViewedRecipe

let user 
let usersData
let ingredientsData
let recipesData
let recipeRepository 

const usersURL = 'https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users'
const recipesURL = 'https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes'
const ingredientsURL = 'https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients'

// ---------------------------QUERY SELECTORS---------------------------

const allRecipesContainer = document.querySelector('.all-recipes-container')
const closeModalButton = document.getElementById("close-modal-button")
const modalSaveRecipeButton = document.getElementById("modal-save-recipe")
const modalTagParent = document.getElementById("modal-tag-button-parent")
const modalRecipeTitle = document.getElementById("modal-title")
const modalImage = document.getElementById("modal-image")
const ingredientsParent = document.getElementById("ingr-parent")
const instructionsParent = document.getElementById("instructions-parent")
const searchBar = document.getElementById('search-bar')

// ---------------------------EVENT LISTENERS---------------------------

function fetchData(urls) {
  Promise.all([getData(urls[0]), getData(urls[1]), getData(urls[2])])
    .then(data => {
      usersData = data[0]
      recipesData = data[1]
      ingredientsData = data[2]
      startPage()
    })
}

fetchData([usersURL, recipesURL, ingredientsURL])



function startPage() {
  recipeRepository = new RecipeRepository(recipesData, ingredientsData)
  displayAllRecipeTiles()
  user = new User(usersData.usersData[0])
  MicroModal.init({
    openClass: 'is-open',
    disableScroll: true,
    disableFocus: true,
    awaitOpenAnimation: false,
    awaitCloseAnimation: false,
    debugMode: false
  })
}

allRecipesContainer.addEventListener("click", (event) => {
  if (event.target.nodeName === "SECTION") { return }
  let targetObject = recipeRepository.recipeList.find(recipe => recipe.id == event.target.parentNode.id)
  currentlyViewedRecipe = targetObject
  updateModal(targetObject)
})

closeModalButton.addEventListener("click", () => MicroModal.close("modal-1"))

modalSaveRecipeButton.addEventListener("click", () => user.storedFavoriteRecipes.push(currentlyViewedRecipe))

searchBar.addEventListener('keyup', (event) => {
  let input = event.target.value;
  //utilize toggle to switch search criteria between all recipes and favorites?
  if (searchBar.classList.contains('my-recipes')) {
    user.filterByNameOrIngredient(input);
  } else {
    recipeRepository.filterByNameOrIngredient(input);
  }
})
// ---------------------------DOM UPDATING---------------------------

function createRecipeTile(recipe) {
  allRecipesContainer.innerHTML +=
    `<div class="recipe-tile" id=${recipe.id}>
            <div class= "tile-image" style="background-image: url(${recipe.image})">
            <img class="modal-bookmark-icon" src="./images/bookmark-tiles-unsaved.png" alt="save recipe">
            </div>
            <h1>${recipe.name}</h1>
            <h2>${recipe.tags.join(', ')}</h2>
        </div>`
}

function displayAllRecipeTiles() {
  for (var i = 0; i < recipeRepository.recipeList.length; i++) {
    createRecipeTile(recipeRepository.recipeList[i])
  }
}

let updateModal = targetObject => {
  modalTagParent.innerHTML = ``
  targetObject.tags.forEach(tag => {
    modalTagParent.innerHTML += `<button>${tag}</button>`
  })
  modalRecipeTitle.innerHTML = targetObject.name
  modalImage.src = targetObject.image
  modalImage.alt = targetObject.name
  ingredientsParent.innerHTML = ``
  targetObject.ingredients.forEach(ingredient => {
    ingredientsParent.innerHTML += `<ul>${ingredient.amount} ${ingredient.unit} ${ingredient.name}</ul>`
  })
  instructionsParent.innerHTML = ``
  targetObject.instructions.forEach(item => {
    instructionsParent.innerHTML += `<p>${item.number}. ${item.instruction}`
  })
  MicroModal.show("modal-1")
}