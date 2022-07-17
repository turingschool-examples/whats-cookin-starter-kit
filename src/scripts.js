import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/heart.png'
import './images/filled-heart.png'
import './images/trash.png'

// import { ingredientsData } from './data/ingredients'
// import { recipeData } from './data/recipes'
// import { usersData } from './data/users'

import Glide from '@glidejs/glide'

import "/node_modules/@glidejs/glide/dist/css/glide.core.min.css"
import "/node_modules/@glidejs/glide/dist/css/glide.theme.min.css"

import RecipeRepository from './classes/RecipeRepository.js'

import Recipe from './classes/recipe'
//import Ingredient from './classes/Ingredient'
import User from './classes/user-class'


const config = {
    type:'carousel',
    startAt: 0,
    perView: 1
}

new Glide('.glide', config).mount()

let recipeData;
let recipeRepository;
let usersData;
let ingredientsData;
let newUser;


// console.log(data)
// console.log(recipeData)

// .then(data => {
//   let fetchedData = new RecipeRepository(data)
//   recipeData = fetchedData.recipes
//   populateAllRecipes()
// })

// console.log(fetchedRecipes)

// // console.log(recipeRepository.recipes)
// const recipeData = recipeRepository.recipes
// console.log(recipeData)
// console.log(ingredientsData)

const viewAllButton = document.querySelector('#viewAllButton')
const homePageView = document.querySelector('.home-page-view')
const viewAllPage = document.querySelector('.view-all-page')
const homeButton = document.querySelector('#homeButton')
const favoritesButton = document.querySelector('#favoritesButton')
const glideRecipes = document.querySelector('.glide__slides')
const recipeDetailsPage = document.querySelector('.recipe-details-page')
const allRecipesContainer = document.querySelector('.all-recipes')
const recipeDetailImage = document.querySelector('#recipeDetail')
const recipeDetailTitle = document.querySelector('h2')
const recipeInstructions = document.querySelector('.details')
const ingredientNames = document.querySelector('.ingredient-list-names')
const totalCost = document.querySelector('.total-cost')
const tagContainer = document.querySelector('.tag-container')
const tagContainer2 = document.querySelector('.tag-container2')
const form = document.querySelector('#form')
const searchbar = document.querySelector("#searchbar")
const favoriteSearchBar = document.querySelector("#searchbar2")
const searchButton = document.querySelector(".search-button")
const searchButton2 = document.querySelector('.search-button2')
const favoriteRecipesPage = document.querySelector('.favorite-recipes')
const favoritePageContainer = document.querySelector('.favorite-recipe-icons')




viewAllButton.addEventListener('click', showViewAllPage)
homeButton.addEventListener('click', showHomePage)
favoritesButton.addEventListener('click', showFavoritesPage)
allRecipesContainer.addEventListener('click', function(event) {
    showRecipeDetailsPage(event)
  })
window.addEventListener('click', function(event) {
      filterByTag(event)
      favoriteFilterByTag(event)
    })
window.addEventListener('load', showHomePage)
searchButton.addEventListener('click', filterByName)
searchButton2.addEventListener('click', favoriteFilterByName)
window.addEventListener('load', function(event) {
  // generateRandomUser()
  fetchUsers()
  fetchRecipes()
  fetchIngredients()
})
viewAllPage.childNodes[3].addEventListener('click', function(event) {
    changeHearts(event)
})
favoriteRecipesPage.childNodes[3].addEventListener('click', function(event) {
  deleteRecipe(event)
})


function fetchRecipes() {
  fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes")
  .then(response => response.json())
  .then(data => {
  recipeData = data.recipeData
  recipeRepository = new RecipeRepository(recipeData)
})
}

function fetchUsers() {
  fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users")
  .then(response => response.json())
  .then(data => {
  usersData = data.usersData
  let newUserData = usersData[Math.floor(Math.random() * usersData.length)]
  newUser = new User(newUserData)
})
};

function fetchIngredients() {
  fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients")
  .then(response => response.json())
  .then(data =>{
    ingredientsData = data.ingredientsData
  })
};

function changeHearts(event) {
    if (event.target.classList.contains('add-to-favorites-icon')){
        event.target.src = "./images/filled-heart.png"
        event.target.classList = 'unfavorite'
        recipeRepository.recipes.forEach(recipe => {
          if (recipe.image === event.target.parentNode.childNodes[1].src) {
            newUser.addRecipeToCook(recipe)
          }
        })
    } else if (event.target.classList.contains('unfavorite') || event.target.classList.contains('trash-icon')) {
        event.target.src = "./images/heart.png"
        event.target.classList = 'add-to-favorites-icon'
        recipeRepository.recipes.forEach(recipe => {
          if (recipe.image === event.target.parentNode.childNodes[1].src) {
            newUser.removeRecipeToCook(recipe)
          }
        })
    }
  }

  function deleteRecipe(event) {
      if (event.target.classList.contains('trash-icon')) {
        recipeRepository.recipes.forEach(recipe => {
          if (recipe.image === event.target.parentNode.childNodes[1].src) {
            newUser.removeRecipeToCook(recipe)
            showFavoritesPage()
          }
    })
  }
}


// function generateRandomUser() {
//     let newUserData = usersData[Math.floor(Math.random() * usersData.length)]
//     newUser = new User(newUserData)
//     return newUser
//     };

function showViewAllPage() {
    homePageView.classList.add('hidden')
    viewAllPage.classList.remove('hidden')
    recipeDetailsPage.classList.add('hidden')
    homeButton.classList.remove('hidden')
    viewAllButton.classList.add('hidden')
    favoriteRecipesPage.classList.add('hidden')
    favoritesButton.classList.remove('hidden')
    createTags(tagContainer)
    populateAllRecipes()
}

function showHomePage() {
    homePageView.classList.remove('hidden')
    viewAllPage.classList.add('hidden')
    recipeDetailsPage.classList.add('hidden')
    homeButton.classList.add('hidden')
    viewAllButton.classList.remove('hidden')
    favoriteRecipesPage.classList.add('hidden')
}

function showFavoritesPage() {
    homePageView.classList.add('hidden')
    viewAllPage.classList.add('hidden')
    recipeDetailsPage.classList.add('hidden')
    favoriteRecipesPage.classList.remove('hidden')
    viewAllButton.classList.remove('hidden')
    favoritesButton.classList.add('hidden')
    createTags(tagContainer2)
    favoritePageContainer.innerHTML = ''
    newUser.recipesToCook.forEach(recipe => {
        console.log(newUser.recipesToCook)
        favoritePageContainer.innerHTML += `<section class="recipe-icon">
        <img class="view-all-recipe-image" src="${recipe.image}" alt="random-recipe-image"><img class="trash-icon" src="./images/trash.png">
        <p>
          ${recipe.name}
        </p>
      </section>`
})
}

function populateAllRecipes() {
    viewAllPage.childNodes[3].innerHTML = ""
    recipeData.forEach(recipe => {
      if (!newUser.recipesToCook.includes(recipe)) {
        heartHandler(recipe)
      } else {
        filledHeartHandler(recipe)
      }
    })
}

function heartHandler(recipe) {
  viewAllPage.childNodes[3].innerHTML += `<section class="recipe-icon">
  <img class="view-all-recipe-image" src="${recipe.image}" alt="random-recipe-image">
  <img class="add-to-favorites-icon" src='./images/heart.png'>
  <p>
    ${recipe.name}
  </p>
  </section>`
}

function filledHeartHandler(recipe) {
  viewAllPage.childNodes[3].innerHTML += `<section class="recipe-icon">
  <img class="view-all-recipe-image" src="${recipe.image}" alt="random-recipe-image">
  <img class="unfavorite" src='./images/filled-heart.png'>
  <p>
    ${recipe.name}
  </p>
  </section>`
}


function showRecipeDetailsPage(event) {
    if (event.target.classList.contains('view-all-recipe-image')){
        const getTitle = recipeData.filter(recipe =>
            event.target.src === recipe.image
        )
        let recipe = new Recipe(getTitle[0], ingredientsData)
        homePageView.classList.add('hidden')
        viewAllPage.classList.add('hidden')
        recipeDetailsPage.classList.remove('hidden')
        recipeDetailImage.src = `${event.target.src}`
        recipeDetailTitle.innerText = `${getTitle[0].name}`
        let directions = recipe.listDirections()
        recipeInstructions.innerText = `${directions}`
        ingredientNames.innerText = `${recipe.determineIngredientNames()}`
        totalCost.innerText = `${recipe.determineCostOfAllIngredients()}`
    }
}

function createTags(tagContainer) {
  console.log(recipeData)
    const getRecipeTags = recipeData.map(recipe => {
        return recipe.tags
    }).flat()

    const uniqueTags = getRecipeTags.filter((recipe, index)=> {
        return getRecipeTags.indexOf(recipe) === index;
    })

    tagContainer.innerHTML = ''
    const recipeTags = uniqueTags.forEach(tag => {
        tagContainer.innerHTML += `<input type="checkbox" id="${tag}" unchecked>
    <label for="${tag}">${tag}</label><br>`
    });
}


function filterByTag(event) {
  if (event.target.type === "checkbox") {
    let filteredRecipesByTag = recipeRepository.filterTags(event.target.id)
    viewAllPage.childNodes[3].innerHTML = ""
    filteredRecipesByTag.forEach(recipe => {
    viewAllPage.childNodes[3].innerHTML += `<section class="recipe-icon">
    <img class="view-all-recipe-image" src="${recipe.image}" alt="random-recipe-image"><img class="add-to-favorites-icon" src="./images/heart.png">
    <p>
      ${recipe.name}
    </p>
  </section>`
})
}
}

function favoriteFilterByTag(event) {
  if (event.target.type === "checkbox") {
    let filteredRecipesByTag = newUser.userFilterTags(event.target.id)
  favoriteRecipesPage.childNodes[3].innerHTML = ''
  filteredRecipesByTag.forEach(recipe => {
  favoriteRecipesPage.childNodes[3].innerHTML += `<section class="recipe-icon">
  <img class="view-all-recipe-image" src="${recipe.image}" alt="random-recipe-image"><img class='trash-icon' src="./images/trash.png">
  <p>
    ${recipe.name}
  </p>
</section>`
})
  }
}


function filterByName(event) {
  event.preventDefault()
  let filteredRecipesByName = recipeRepository.filterNames(searchbar.value)
  viewAllPage.childNodes[3].innerHTML = ""
  filteredRecipesByName.forEach(recipe => {
  viewAllPage.childNodes[3].innerHTML += `<section class="recipe-icon">
  <img class="view-all-recipe-image" src="${recipe.image}" alt="random-recipe-image"><img class="add-to-favorites-icon" src="./images/heart.png">
  <p>
    ${recipe.name}
  </p>
</section>`
})
}

function favoriteFilterByName(event) {
  event.preventDefault()
  let filteredRecipesByName = newUser.userFilterNames(favoriteSearchBar.value)
  favoriteRecipesPage.childNodes[3].innerHTML = ''
  filteredRecipesByName.forEach(recipe => {
  favoriteRecipesPage.childNodes[3].innerHTML += `<section class="recipe-icon">
  <img class="view-all-recipe-image" src="${recipe.image}" alt="random-recipe-image"><img class='trash-icon' src="./images/trash.png">
  <p>
    ${recipe.name}
  </p>
  </section>`
})
}
