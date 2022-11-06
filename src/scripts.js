import "./images/bookmark-saved.png"
import "./images/bookmark-tiles-saved.png"
import "./images/bookmark-tiles-unsaved.png"
import "./images/bookmark-unsaved.png"
import './images/whats-cookin-logo.png'
import './styles.css'
import MicroModal from 'micromodal'
import RecipeRepository from '../src/classes/RecipeRepository'
import User from '../src/classes/User'
import { getData, postData } from './apiCalls'

// ---------------------------DATA MODEL---------------------------

export let ingredientsData
let recipeRepository
export let recipesData
let user
let usersData
let currentlyViewedRecipe

const ingredientsURL = 'http://localhost:3001/api/v1/ingredients'
const recipesURL = 'http://localhost:3001/api/v1/recipes'
const usersURL = 'http://localhost:3001/api/v1/users'

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
const modalTagParent = document.getElementById("modal-tag-parent")
const myRecipesButton = document.getElementById("my-recipes")
const searchBar = document.getElementById('search-bar')
const welcomeMessage = document.querySelector('.welcome-message')
const pantryParent = document.querySelector('.pantry-parent')
const logoImage = document.getElementById('logo')
const modalCookButton = document.getElementById("modal-cook-button")
const table = document.querySelector('table')
const tableSelect = document.querySelector('#table-select')
const tableButtonAdd = document.querySelector('#table-button-add')
let fakePost

let filter = document.getElementById('filter')
let tileNodes = allRecipesContainer.childNodes

// ---------------------------UTILITY FUNCTIONS---------------------------

function fetchData(urls) {
  Promise.all([getData(urls[0]), getData(urls[1]),
  getData(urls[2])])
    .then(data => {
      // console.log(data[0])
      usersData = data[0]
      recipesData = data[1]
      ingredientsData = data[2]
      initPage()
    })
}

function initPage() {
  initRecipeRepository()
  displayRecipeTiles(recipeRepository.recipeList)
  populateTags()
  initUser()
  displayWelcomeMessage()
  displayFeaturedRecipe()
  displayPantryView()
  MicroModal.init({
    openClass: 'is-open',
    disableScroll: true,
    disableFocus: true,
    awaitOpenAnimation: false,
    awaitCloseAnimation: false,
    debugMode: false
  })
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

function initRecipeRepository() {
  recipeRepository = new RecipeRepository(recipesData, ingredientsData)
}

function initUser() {
  user = new User(usersData[getRandomIndex(usersData)], recipeRepository.allIngredients)
}

// ---------------------------EVENT LISTENERS---------------------------

filterClearButton.addEventListener('click', clearFilterByTag)

window.addEventListener('load', () => {
  fetchData([usersURL, recipesURL, ingredientsURL])
})

allRecipesContainer.addEventListener("click", event => {
  if (event.target.nodeName === "SECTION") { return }
  let viewingMyRecipes = myRecipesButton.classList.contains('selected-view')
  let targetIsIMG = event.target.nodeName === "IMG"

  if (targetIsIMG && (event.target.src.includes('unsaved'))) {
    addRecipeToFavorites(event)
  } else {
    removeRecipeFromFavorites(event)
    if (targetIsIMG && viewingMyRecipes) {
      removeTileFromDisplay(event)
    }
  }

  let targetObject = recipeRepository.recipeList.find(recipe => recipe.id == event.target.parentNode.id)
  displayModal(targetObject)
})

closeModalButton.addEventListener("click", () => MicroModal.close("modal-1"))

modalSaveRecipeButton.addEventListener("click", event => {
  let targetIsUnsaved = (event.target.src.includes('unsaved'))

  if (targetIsUnsaved) {
    event.target.src = './images/bookmark-saved.png'
    addRecipeToFavorites(event)
  } else {
    event.target.src = './images/bookmark-unsaved.png'
    removeRecipeFromFavorites(event)
  }
})

const searchBarEvents = ['keyup', 'search']
searchBarEvents.forEach(index =>
  searchBar.addEventListener(index, event => {
    let input = event.target.value
    let viewingMyRecipes = myRecipesButton.classList.contains('selected-view')

    if (viewingMyRecipes) {
      let recipes = filterByNameOrIngredient(user.favoriteRecipes, input)
      displaySearchedRecipeTiles(recipes)
    } else {
      let recipes = filterByNameOrIngredient(recipeRepository.recipeList, input)
      displaySearchedRecipeTiles(recipes)
    }
  }))

myRecipesButton.addEventListener("click", displayMyRecipes)

allRecipesButton.addEventListener("click", displayAllRecipes)

filter.addEventListener('input', event => {
  enableFilterClearButton(true)
  searchBar.value = ''

  let input = event.target.value
  let viewingMyRecipes = myRecipesButton.classList.contains('selected-view')

  if (viewingMyRecipes) {
    let recipes = filterByTag(user.favoriteRecipes, input)
    displaySearchedRecipeTiles(recipes)
  } else {
    let recipes = filterByTag(recipeRepository.recipeList, input)
    displaySearchedRecipeTiles(recipes)
  }
})

function clearFilterByTag() {
  filter.value = 'Filter recipes by type...'
  enableFilterClearButton(false)
  let viewingMyRecipes = myRecipesButton.classList.contains('selected-view')

  if (viewingMyRecipes) {
    displayRecipeTiles(user.favoriteRecipes)
    updateBookmarks()
  } else {
    displayRecipeTiles(recipeRepository.recipeList)
    updateBookmarks()
  }
}

featuredRecipeParent.addEventListener("click", event => {
  let viewingMyRecipes = myRecipesButton.classList.contains('selected-view')
  let targetIsIMG = event.target.nodeName === "IMG"
  let targetIsH1 = event.target.nodeName === "H1"

  if (targetIsIMG && event.target.src.includes('unsaved')) {
    addRecipeToFavorites(event)
    if (viewingMyRecipes) {
      displayMyRecipes()
    }
  } else if (targetIsIMG) {
    removeRecipeFromFavorites(event)
    if (viewingMyRecipes) {
      removeTileFromDisplay(event)
    }
  } else if (targetIsH1) {
    displayModal(recipeRepository.featuredRecipe)
  }
})

modalCookButton.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-ingredients-button")) {
    displayMyRecipes()
  } else {
    // invoke cookRecipe() and give user feedback that ingredients were removed/recipe cooked
  }
})

// ---------------------------DOM UPDATING---------------------------

function displayWelcomeMessage() {
  welcomeMessage.innerText = `Welcome, ${user.name.split(' ')[0]}!`
}

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

function makeViewButtonActive(button) {
  if (button === allRecipesButton) {
    myRecipesButton.classList.remove('selected-view')
    allRecipesButton.classList.add('selected-view')
  } else {
    myRecipesButton.classList.add('selected-view')
    allRecipesButton.classList.remove('selected-view')
  }
}

function displayAllRecipes() {
  MicroModal.close("modal-1")
  filter.value = 'Filter recipes by type...'
  enableFilterClearButton(false)
  makeViewButtonActive(allRecipesButton)
  displayRecipeTiles(recipeRepository.recipeList)
  updateBookmarks()
  showFeaturedRecipe()
  displayFeaturedRecipe()
}

function displayMyRecipes() {
  MicroModal.close("modal-1")
  filter.value = 'Filter recipes by type...'
  enableFilterClearButton(false)
  makeViewButtonActive(myRecipesButton)
  displayRecipeTiles(user.favoriteRecipes)
  updateBookmarks()
  showPantry()
}

function removeTileFromDisplay(event) {
  let targetNode = Array.from(tileNodes).find(tile => tile.id === event.target.id)
  targetNode.remove()
}

function enableFilterClearButton(boolean) {
  if (boolean) {
    filterClearButton.disabled = false
    filterClearButton.classList.remove('disabled')
  } else {
    filterClearButton.disabled = true
    filterClearButton.classList.add('disabled')
  }
}

function displaySearchedRecipeTiles(searchedRecipes) {
  allRecipesContainer.innerHTML = ''
  searchedRecipes.forEach(recipe => createRecipeTile(recipe))
  updateBookmarks()
}

function convertDecimal(amount) {
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
  return amount
}

function updateModal(targetObject) {
  modalTagParent.innerHTML = ``
  targetObject.tags.forEach(tag => {
    modalTagParent.innerHTML += `<p>${tag}</p>`
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
  ingredientsParent.innerHTML += `<p class="total-price">Total estimated cost to make: ${targetObject.getTotalCost()}</p>`
  instructionsList.innerHTML = ``
  targetObject.instructions.forEach(item => {
    instructionsList.innerHTML += `<li>${item.instruction}</li>`
  })
  updateModalIngredients()
  updateModalButton()
}

function updateModalIngredients() {
  let ingrCompareObj = user.compareIngredients(currentlyViewedRecipe)
  ingredientsParent.innerHTML = ``
  ingrCompareObj.userHas.forEach(ingredient => {
    ingredientsParent.innerHTML += `<ul class="user-has">${convertDecimal(ingredient.amount)} ${ingredient.unit} ${ingredient.name} </ul>`
  })
  ingrCompareObj.userNeeds.forEach(ingredient => {
    ingredientsParent.innerHTML += `<ul class="user-needs">${convertDecimal(ingredient.amount)} ${ingredient.unit} ${ingredient.name} </ul>`
  })
}

function updateModalButton() {
  modalCookButton.innerHTML = ''
  let ingrCompareObj = user.compareIngredients(currentlyViewedRecipe)
  modalCookButton.setAttribute('recipe-id', `${currentlyViewedRecipe.id}`)
  if (ingrCompareObj.userNeeds.length) {
    modalCookButton.className = "cook-this-button add-ingredients-button tooltip"
    modalCookButton.innerHTML = `Add Ingredients
    <div class="left">
        <p>You don't have the necessary ingredients.</p>
        <p>Click to go to your pantry and add ingredients.</p>
        <i></i>
    </div>`
  } else {
    modalCookButton.className = "cook-this-button tooltip"
    modalCookButton.innerHTML = `Cook Recipe
    <div class="left">
        <p>Click to cook recipe and remove required ingredients from your pantry.</p>
        <i></i>
    </div>`
  }
}

function displayModal(targetObject) {
  if (!targetObject) { return }
  currentlyViewedRecipe = targetObject
  updateModal(targetObject)
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

function filterByNameOrIngredient(recipes, input) {
  let filteredRecipes = []
  input = input.toLowerCase()
  recipes.forEach(recipe => {
    if (recipe.name.toLowerCase().includes(input)) {
      filteredRecipes.push(recipe)
    } else {
      recipe.ingredients.forEach(ingredient => {
        if (ingredient.name.toLowerCase().includes(input)) {
          if (!filteredRecipes.includes(recipe)) {
            filteredRecipes.push(recipe)
          }
        }
      })
    }
  })
  return filteredRecipes
}

function filterByTag(recipes, tag) {
  return recipes.filter(recipe => recipe.tags.includes(tag))
}

function showPantry() {
  featuredRecipeParent.classList.add('hidden')
  logoImage.style.width = '25%'
  pantryParent.classList.remove('hidden')
}

function showFeaturedRecipe() {
  featuredRecipeParent.classList.remove('hidden')
  logoImage.style.width = '38%'
  pantryParent.classList.add('hidden')
}

table.addEventListener('click', (event) => {

  if (event.target.id === 'table-button-add') {
    let inputValue = Number(event.target.parentNode.querySelector('select').value)
    let id = Number(event.target.classList.value)
    let restructuredPantryObj = structurePost(user.id, id, inputValue)

    postData(restructuredPantryObj, 'http://localhost:3001/api/v1/users')
      .then(data => {
        usersData = data
        user = new User(updateUser(), recipeRepository.allIngredients)
        displayPantryView()
      })
  } else { return }
})

function updateUser() {
  return usersData.find((updatedUser) => {
    return user.id === updatedUser.id
  })
}

function structurePost(userID, ingredientID, value) {
  return {
    userID: userID,
    ingredientID: ingredientID,
    ingredientModification: value
  }
}

function cookRecipe(recipe) {
  let data
  recipe.ingredients.forEach(ingredient => {
    let body = structurePost(user.id, ingredient.id, ingredient.amount)
    data = postData(body, 'http://localhost:3001/api/v1/users')
  })
  .then(() => {
    usersData = data
    user = new User(updateUser(), recipeRepository.allIngredients)
    displayPantryView()
  })
}

function displayPantryView() {
  table.innerHTML = ''
  table.innerHTML += `<th>Ingredient</th><th>Current quantity</th><th>Amount to add</th>`

  const findMissingIngredients = recipeRepository.allIngredients.forEach((ingredient) => {
    const missingIngredient = user.pantry.find((pantryItem) => {
      return ingredient.id === pantryItem.id
    })
    if (missingIngredient == null) {
      user.pantry.push({
        amount: 0,
        id: ingredient.id,
        name: ingredient.name,
        unit: ingredient.unit,
      })
    }
  })

  const sortedPantry = user.pantry.sort((a, b) => {
    return a.amount - b.amount
  })

  return sortedPantry.forEach((pantryItem) => {
    table.innerHTML += `
      <tr>
        <td id="table-col-name">${pantryItem.name}</td>
        <td id="table-col-quantity">${pantryItem.amount}</td>
        <td id="table-col-select">
          <select id="table-select">
            <option>0</option>
            <option>1</option>
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
          <button id="table-button-add" class='${pantryItem.id}'>Add</button>
        </td>
      </tr>
    `
  })
}