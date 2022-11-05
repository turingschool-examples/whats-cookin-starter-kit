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
const pantryParent = document.querySelector('.pantry-parent')
const logoImage = document.getElementById('logo')
let fakePost

let filter = document.getElementById('filter')
let tileNodes = allRecipesContainer.childNodes

// ---------------------------UTILITY FUNCTIONS---------------------------

function fetchData(urls) {
  Promise.all([getData(urls[0]), getData(urls[1]),
  getData(urls[2])])
    .then(data => {
      usersData = data[0].usersData
      recipesData = data[1].recipeData
      ingredientsData = data[2].ingredientsData
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

  //FETCH API POST TESTING DATA BELOW
  fakePost = { userID: 17, ingredientID: 9152, ingredientModification: 5 }
  postData(fakePost).then(response => { return response.json() }).then(response => console.log("HERE IS THE RESPONSE:", response))

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
  filter.value = 'Filter recipes by type...'
  enableFilterClearButton(false)
  makeViewButtonActive(allRecipesButton)
  displayRecipeTiles(recipeRepository.recipeList)
  updateBookmarks()
  showFeaturedRecipe()
  displayFeaturedRecipe()
}

function displayMyRecipes() {
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
    ingredientsParent.innerHTML += `<ul>${convertDecimal(ingredient.amount)} ${ingredient.unit} ${ingredient.name}</ul>`
  })
  ingredientsParent.innerHTML += `<p class="total-price">Total estimated cost to make: ${targetObject.getTotalCost()}</p>`
  instructionsList.innerHTML = ``
  targetObject.instructions.forEach(item => {
    instructionsList.innerHTML += `<li>${item.instruction}</li>`
  })

}

function displayModal(targetObject) {
  if (!targetObject) { return }
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
  logoImage.style.width = '10%'
  pantryParent.classList.remove('hidden')
}

function showFeaturedRecipe() {
  featuredRecipeParent.classList.remove('hidden')
  logoImage.style.width = '38%'
  pantryParent.classList.add('hidden')
}

const table = document.querySelector('table')

function displayPantryView() {
  console.log(user.pantry[0])
  const findMissingIngredients = recipeRepository.allIngredients.forEach((ingredient) => {
    const b = user.pantry.find((pantryItem) => {
      return ingredient.id === pantryItem.id
    })
    if (b == null) {
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
        <td id="table-col-select"><select class="" id="table-select"><option></option></select><button id="table-button-add">Add</button></td>
      </tr>
    `
  })
}



