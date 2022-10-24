import "./images/bookmark-saved.png"
import "./images/bookmark-tiles-saved.png"
import "./images/bookmark-tiles-unsaved.png"
import "./images/bookmark-unsaved.png"
import './images/whats-cookin-logo.png'
import './styles.css'
import MicroModal from 'micromodal'
import RecipeRepository from '../src/classes/RecipeRepository'
import User from '../src/classes/User'
import getData from './apiCalls'

// ---------------------------DATA MODEL---------------------------

let ingredientsData
let recipeRepository
let recipesData
let user
let usersData

const ingredientsURL = 'https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients'
const recipesURL = 'https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes'
const usersURL = 'https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users'

// ---------------------------QUERY SELECTORS---------------------------

const allRecipesButton = document.getElementById("all-recipes")
const allRecipesContainer = document.querySelector('.all-recipes-container')
const closeModalButton = document.getElementById("close-modal-button")
const featuredIcon = document.querySelector('.featured-bookmark-icon')
const featuredRecipeParent = document.getElementById('featured-recipe-parent')
const featuredRecipeTitle = document.querySelector('.featured-recipe-title')
const filterClearButton = document.querySelector('#filter-clear-button')
const ingredientsParent = document.getElementById("ingr-parent")
const instructionsList = document.getElementById("instructions-list")
const modalImage = document.getElementById("modal-image")
const modalRecipeTitle = document.getElementById("modal-title")
const modalSaveRecipeButton = document.querySelector(".modal-bookmark-icon")
const modalTagParent = document.getElementById("modal-tag-button-parent")
const myRecipesButton = document.getElementById("my-recipes")
const searchBar = document.getElementById('search-bar')
const welcomeMessage = document.querySelector('.welcome-message')

let filter = document.getElementById('filter')

// ---------------------------UTILITY FUNCTIONS---------------------------

function fetchData(urls) {
  Promise.all([getData(urls[0]), getData(urls[1]),
  getData(urls[2])])
    .then(data => {
      usersData = data[0].usersData
      recipesData = data[1].recipeData
      ingredientsData = data[2].ingredientsData
      startPage()
    })
}

function startPage() {
  recipeRepository = new RecipeRepository(recipesData, ingredientsData)
  displayRecipeTiles(recipeRepository.recipeList)
  populateTags()
  let randomNum = Math.floor(Math.random() * usersData.length)
  user = new User(usersData[randomNum])
  welcomeMessage.innerText = `Welcome, ${user.name.split(' ')[0]}!`
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

// ---------------------------EVENT LISTENERS---------------------------

window.addEventListener('load', () => {
  fetchData([usersURL, recipesURL, ingredientsURL])
})

allRecipesContainer.addEventListener("click", event => {
  if (event.target.nodeName === "SECTION") { return }

  if (event.target.nodeName === "IMG" && (event.target.src.includes('unsaved'))) {
    addRecipeToFavorites(event)
  } else {
    removeRecipeFromFavorites(event)
  }

  displayCurrentMode()

  let targetObject = recipeRepository.recipeList.find(recipe => recipe.id == event.target.parentNode.id)
  updateModal(targetObject)
})

closeModalButton.addEventListener("click", () => MicroModal.close("modal-1"))

modalSaveRecipeButton.addEventListener("click", event => {
  if (event.target.src.includes('unsaved')) {
    event.target.src = './images/bookmark-saved.png'
    addRecipeToFavorites(event)
  } else {
    event.target.src = './images/bookmark-unsaved.png'
    removeRecipeFromFavorites(event)
  }
})

searchBar.addEventListener('keyup', event => {
  let input = event.target.value
  if (myRecipesButton.classList.contains('selected-view')) {
    let recipes = user.filterByNameOrIngredient(input)
    displaySearchedRecipeTiles(recipes)
  } else {
    let recipes = recipeRepository.filterByNameOrIngredient(input)
    displaySearchedRecipeTiles(recipes)
  }
})

myRecipesButton.addEventListener("click", displayMyRecipes)

allRecipesButton.addEventListener("click", displayAllRecipes)

filter.addEventListener('input', event => {
  filterClearButton.disabled = false
  filterClearButton.classList.remove('disabled')
  let input = event.target.value

  if (myRecipesButton.classList.contains('selected-view')) {
    let recipes = user.filterByTag(input)
    displaySearchedRecipeTiles(recipes)
  } else {
    let recipes = recipeRepository.filterByTag(input)
    displaySearchedRecipeTiles(recipes)
  }
})

filterClearButton.addEventListener('click', () => {
  filter.value = 'Filter recipes by type...'
  filterClearButton.disabled = true
  filterClearButton.classList.add('disabled')

  if (myRecipesButton.classList.contains('selected-view')) {
    allRecipesContainer.innerHTML = ''
    displayRecipeTiles(user.favoriteRecipes)
    updateBookmarks()
  } else {
    allRecipesContainer.innerHTML = ''
    displayRecipeTiles(recipeRepository.recipeList)
    updateBookmarks()
  }
})

featuredRecipeParent.addEventListener("click", event => {
  if (event.target.nodeName === "IMG" && (event.target.src.includes('unsaved'))) {
    addRecipeToFavorites(event)
  } else if (event.target.nodeName === "IMG") {
    removeRecipeFromFavorites(event)
  } else if (event.target.nodeName === "H1") {
    updateModal(recipeRepository.featuredRecipe)
  }
  displayCurrentMode()
})

// ---------------------------DOM UPDATING---------------------------

function createRecipeTile(recipe) {
  allRecipesContainer.innerHTML +=
    `<div class="recipe-tile" id=${recipe.id}>
      <div class= "tile-image" style="background-image: url(${recipe.image})">
        <img class="tile-bookmarks bookmark-nodes" id=${recipe.id} src="./images/bookmark-tiles-unsaved.png" alt="save recipe">
      </div>
      <h1>${recipe.name}</h1>
      <h2>${recipe.tags.join(', ')}</h2>
    </div>`
}

function displayRecipeTiles(recipeArray) {
  allRecipesContainer.innerHTML = ''
    recipeArray.forEach(recipe => createRecipeTile(recipe))
}

function displayAllRecipes() {
  filter.value = 'Filter recipes by type...'
  filterClearButton.disabled = true
  filterClearButton.classList.add('disabled')
  myRecipesButton.classList.remove('selected-view')
  allRecipesButton.classList.add('selected-view')
  displayRecipeTiles(recipeRepository.recipeList)
  updateBookmarks()
}

function displayMyRecipes() {
  filter.value = 'Filter recipes by type...'
  filterClearButton.disabled = true
  filterClearButton.classList.add('disabled')
  myRecipesButton.classList.add('selected-view')
  allRecipesButton.classList.remove('selected-view')
  displayRecipeTiles(user.favoriteRecipes)
  updateBookmarks()
}

function displayCurrentMode() {
  if (allRecipesButton.classList.contains('selected-view')) {
    displayAllRecipes()
  } else { displayMyRecipes() }
}

function displaySearchedRecipeTiles(searchedRecipes) {
  allRecipesContainer.innerHTML = ''
  searchedRecipes.forEach(recipe => createRecipeTile(recipe))
  updateBookmarks()
}

function updateModal(targetObject) {
  if (!targetObject) { return }
  modalTagParent.innerHTML = ``
  targetObject.tags.forEach(tag => {
    modalTagParent.innerHTML += `<button>${tag}</button>`
  })
  modalSaveRecipeButton.id = targetObject.id
  if (user.favoriteRecipes.includes(targetObject)) {
    modalSaveRecipeButton.src = './images/bookmark-saved.png'
  } else if (!user.favoriteRecipes.includes(targetObject)) {
    modalSaveRecipeButton.src = './images/bookmark-unsaved.png'
  }
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

function displayFeaturedRecipe() {
  featuredRecipeParent.style.backgroundImage = `url(${recipeRepository.featuredRecipe.image})`
  featuredRecipeTitle.innerText = `${recipeRepository.featuredRecipe.name}`
  featuredRecipeTitle.id = recipeRepository.featuredRecipe.id
  featuredIcon.id = recipeRepository.featuredRecipe.id
}

function addRecipeToFavorites(e) {
  recipeRepository.recipeList.forEach(recipe => {
    if (recipe.id === Number(e.target.id)) {
      user.addRecipeToFavorites(recipe)
    }
  })
  updateBookmarks()
}

function removeRecipeFromFavorites(e) {
  let id = Number(e.target.id)
  user.removeRecipeFromFavorites(id)
  updateBookmarks()
}

function populateTags() {
  let allTags = []
  recipeRepository.recipeList.forEach(recipe => {
    recipe.tags.forEach(tag => {
      if (!allTags.includes(tag)) {
        allTags.push(tag)
      }
    })
  })
  allTags.sort()
  allTags.forEach(tag => {
    filter.innerHTML += `<option id=${tag}>${tag}</option>`
  })
}

function updateBookmarks() {
  let allBookmarks = document.querySelectorAll('.bookmark-nodes')
  allBookmarks.forEach(bookmark => {
    if (user.favoriteRecipes.find(recipe => recipe.id == bookmark.id)) {
      bookmark.src = './images/bookmark-tiles-saved.png'
    } else {
      bookmark.src = './images/bookmark-tiles-unsaved.png'
    }
  })
}