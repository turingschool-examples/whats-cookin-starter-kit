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

let recipeRepository
let user

let usersData
let ingredientsData
let recipesData

const usersURL = 'https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users'
const recipesURL = 'https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes'
const ingredientsURL = 'https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients'

// ---------------------------QUERY SELECTORS---------------------------

const allRecipesContainer = document.querySelector('.all-recipes-container')
const closeModalButton = document.getElementById("close-modal-button")
const modalSaveRecipeButton = document.querySelector(".modal-bookmark-icon")
const modalTagParent = document.getElementById("modal-tag-button-parent")
const modalRecipeTitle = document.getElementById("modal-title")
const modalImage = document.getElementById("modal-image")
const ingredientsParent = document.getElementById("ingr-parent")
const instructionsList = document.getElementById("instructions-list")
const searchBar = document.getElementById('search-bar')
const myRecipesButton = document.getElementById("my-recipes")
const allRecipesButton = document.getElementById("all-recipes")
const featuredRecipeParent = document.getElementById('featured-recipe-parent')
const featuredRecipeTitle = document.querySelector('.featured-recipe-title')
let filter = document.getElementById('filter')
const filterClearButton = document.querySelector('#filter-clear-button')
const featuredIcon = document.querySelector('.featured-bookmark-icon')

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

(function () {
  fetchData([usersURL, recipesURL, ingredientsURL])
})()

function startPage() {
  recipeRepository = new RecipeRepository(recipesData, ingredientsData)
  displayAllRecipeTiles(recipeRepository.recipeList)
  populateTags()
  user = new User(usersData.usersData[0])
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

allRecipesContainer.addEventListener("click", event => {
  if (event.target.nodeName === "SECTION") { return }

  if (event.target.nodeName === "IMG" && (event.target.src.includes('unsaved'))) {
    addRecipeToFavorites(event)
    console.log("LOOK HERE +++", user.favoriteRecipes)
  } else {
    removeRecipeFromFavorites(event)
  }
  let targetObject = recipeRepository.recipeList.find(recipe => recipe.id == event.target.parentNode.id)
  updateModal(targetObject)
})

closeModalButton.addEventListener("click", () => MicroModal.close("modal-1"))

modalSaveRecipeButton.addEventListener("click", event => {
  if (event.target.src.includes('unsaved')) {
    event.target.src = './images/bookmark-saved.png'
    addRecipeToFavorites(event)
    console.log("LOOK HERE +++", user.favoriteRecipes)
  } else {
    event.target.src = './images/bookmark-unsaved.png'
    removeRecipeFromFavorites(event)
  }
})

searchBar.addEventListener('keyup', event => {
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


myRecipesButton.addEventListener("click", displayMyRecipes)
allRecipesButton.addEventListener("click", displayAllRecipes)

filter.addEventListener('input', event => {
  filterClearButton.disabled = false
  console.log("LOOK HERE", filterClearButton.classList)
  let input = event.target.value
  filterClearButton.classList.remove('disabled')

  if (filter.classList.contains('my-recipes')) {
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
  allRecipesContainer.innerHTML = ''
  displayAllRecipeTiles()
})

featuredRecipeParent.addEventListener("click", event => {
  if (event.target.nodeName === "IMG" && (event.target.src.includes('unsaved'))) {
    addRecipeToFavorites(event)
    console.log("LOOK HERE +++", user.favoriteRecipes)
  } else if (event.target.nodeName === "IMG") {
    removeRecipeFromFavorites(event)
  } else if (event.target.nodeName === "H1") {
    updateModal(recipeRepository.featuredRecipe)
  }
})

// ---------------------------DOM UPDATING---------------------------

function createRecipeTile(recipe) {
  allRecipesContainer.innerHTML +=
    `<div class="recipe-tile" id=${recipe.id}>
            <div class= "tile-image" style="background-image: url(${recipe.image})">
            <img class="modal-bookmark-icon bookmark-nodes" id=${recipe.id} src="./images/bookmark-tiles-unsaved.png" alt="save recipe">
            </div>
            <h1>${recipe.name}</h1>
            <h2>${recipe.tags.join(', ')}</h2>
        </div>`
}

//this function will need to be refactored to take in arrays dynamically
//currently displayAllRecipeTiles & displaySearchedRecipeTiles are doing the same thing
function displayRecipeTiles(recipeArray) {
  allRecipesContainer.innerHTML = ''
  for (var i = 0; i < recipeArray.length; i++) {
    createRecipeTile(recipeArray[i])
  }
}

function displayAllRecipes() {
  displayRecipeTiles(recipeRepository.recipeList)
}

function displayMyRecipes() {
  displayRecipeTiles(user.favoriteRecipes)
}

function displaySearchedRecipeTiles(searchedRecipes) {
  allRecipesContainer.innerHTML = ''
  for (var i = 0; i < searchedRecipes.length; i++) {
    createRecipeTile(searchedRecipes[i])
  }
}

let updateModal = targetObject => {
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

let displayFeaturedRecipe = () => {
  featuredRecipeParent.style.backgroundImage = `url(${recipeRepository.featuredRecipe.image})`
  featuredRecipeTitle.innerText = `${recipeRepository.featuredRecipe.name}`
  featuredRecipeTitle.id = recipeRepository.featuredRecipe.id
  featuredIcon.id = recipeRepository.featuredRecipe.id
}

function addRecipeToFavorites(e) {
  recipeRepository.recipeList.forEach(recipe => {

    if (recipe.id === Number(e.target.id)) {
      user.addRecipeToFavorites(recipe)
      console.log(user.favoriteRecipes)
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

let updateBookmarks = () => {
  let allBookmarks = document.querySelectorAll('.bookmark-nodes')
  allBookmarks.forEach(bookmark => {
    if (user.favoriteRecipes.find(recipe => recipe.id == bookmark.id)) {
      bookmark.src = './images/bookmark-tiles-saved.png'
    } else {
      bookmark.src = './images/bookmark-tiles-unsaved.png'
    }
  })
}