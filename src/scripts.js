import './styles.css'
import apiCalls from './apiCalls'
import MicroModal from 'micromodal'
import "./images/bookmark-tiles-unsaved.png"
import "./images/bookmark-tiles-saved.png"
import "./images/bookmark-unsaved.png"
import "./images/bookmark-saved.png"
import './images/whats-cookin-logo.png'
import RecipeRepository from '../src/classes/RecipeRepository'
import User from '../src/classes/User'
import getData from './apiCalls'

// ---------------------------DATA MODEL---------------------------

// const recipeRepository = new RecipeRepository(recipeData, ingredientsData)
// const user = new User(usersData[0])

let recipeRepository
let user
let currentlyViewedRecipe

let usersData
let ingredientsData
let recipesData

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
const instructionsList = document.getElementById("instructions-list")
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
  user = new User(usersData.usersData[0])
  displayAllRecipeTiles()
  displayFeaturedRecipe()
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

  if (event.target.nodeName === "IMG") {
    if (event.target.src.includes('unsaved')) {
      event.target.src = './images/bookmark-tiles-saved.png'
      addRecipeToFavorites(event)
    } else {
      event.target.src = './images/bookmark-tiles-unsaved.png'
      removeRecipeFromFavorites(event)
    }
  }
  let targetObject = recipeRepository.recipeList.find(recipe => recipe.id == event.target.parentNode.id)
  currentlyViewedRecipe = targetObject
  updateModal(targetObject)
})

closeModalButton.addEventListener("click", () => MicroModal.close("modal-1"))

modalSaveRecipeButton.addEventListener("click", () => user.storedFavoriteRecipes.push(currentlyViewedRecipe))

searchBar.addEventListener('keyup', (event) => {
  let input = event.target.value
  //utilize toggle to switch search criteria between all recipes and favorites?
  if (searchBar.classList.contains('my-recipes')) {
    let recipes = user.filterByNameOrIngredient(input)
    displaySearchedRecipeTiles(recipes)
  } else {
    let recipes = recipeRepository.filterByNameOrIngredient(input)
    displaySearchedRecipeTiles(recipes)
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

//this function will need to be refactored to take in arrays dynamically
//currently displayAllRecipeTiles & displaySearchedRecipeTiles are doing the same thing
function displayAllRecipeTiles() {
  for (var i = 0; i < recipeRepository.recipeList.length; i++) {
    createRecipeTile(recipeRepository.recipeList[i])
  }
}

function displaySearchedRecipeTiles(searchedRecipes) {
  allRecipesContainer.innerHTML = ''
  for (var i = 0; i < searchedRecipes.length; i++) {
    createRecipeTile(searchedRecipes[i])
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
    let amount = ingredient.amount
    if (amount === 0.25) {
      amount = "1/4"
    } else if (amount === 0.3333333333333333) {
      amount = "1/3"
    } else if (amount === 0.5) {
      amount = "1/2"
    } else if (amount === 0.6666666666666666) {
      amount = "2/3"
    } else if (amount === 0.75) {
      amount = "3/4"
    }
    ingredientsParent.innerHTML += `<ul>${amount} ${ingredient.unit} ${ingredient.name}</ul>`
  })
  ingredientsParent.innerHTML += `<p class="total-price">Total estimated cost to make: ${targetObject.getTotalCost()}</p>`
  instructionsList.innerHTML = ``
  targetObject.instructions.forEach(item => {
    instructionsList.innerHTML += `<li>${item.instruction}</li>`
  })
  MicroModal.show("modal-1")
}

let displayFeaturedRecipe = () => {

}

function addRecipeToFavorites(e) {
  recipeRepository.recipeList.forEach(recipe => {
    if (recipe.id === Number(e.path[2].id)) {
      user.addRecipeToFavorites(recipe)
    }
  })
  console.log(user.favoriteRecipes)
}

function removeRecipeFromFavorites(e) {
  let id = Number(e.path[2].id)
  user.removeRecipeFromFavorites(id)
  console.log(user.favoriteRecipes)
}