import './styles.css'
import './images/turing-logo.png'
import MicroModal from 'micromodal'
import RecipeRepository from './classes/RecipeRepository'
import User from './classes/User.js'
import Recipe from './classes/Recipe'
MicroModal.init()

const usersDataFetch = fetch(
    "https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users"
).then((response) => response.json())
const ingredientsDataFetch = fetch(
    "https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients"
).then((response) => response.json())
const recipesDataFetch = fetch(
    "https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes"
).then((response) => response.json())

let allCookingData = {
    users: [],
    ingredients: [],
    recipes: []
}

let recipeRepository
let user

Promise.all([usersDataFetch, ingredientsDataFetch, recipesDataFetch])
    .then((data) => {
        allCookingData.users = data[0]
        allCookingData.ingredients = data[1]
        allCookingData.recipes = data[2]
        return allCookingData
    })
    .then(
        (allCookingData) => {
            recipeRepository = new RecipeRepository(allCookingData.recipes.recipeData)
            let num = Math.floor(Math.random() * allCookingData.users.usersData.length)
            user = new User(allCookingData.users.usersData[num])
            loadPage(recipeRepository, user, allCookingData.ingredients.ingredientsData)
        }
    )

function loadPage(recipeRepository, user, ingredientsData) {

    var morningMeal = ['breakfast', 'morning meal']
    var snack = ['dip', 'snack', 'appetizer']
    var other = ['condiment', 'spread']
    var mainDish = ['main dish', 'dinner', 'lunch']
    var complimentaryDish = ['antipasti', 'hor d\'oeuvre', 'starter', 'salad', 'side dish', 'appetizer']

    const recipeSection = document.querySelector('#recipe-section')
    const navigationSection = document.querySelector(".navigation-section")
    const pantrySection = document.querySelector(".pantry-section")
    const savedRecipes = document.querySelector("#saved-recipes")
    const topButton = document.querySelector("#top-button")
    const allRecipes = document.querySelector("#recipe-button")
    const breakfastFilter = document.querySelector("#breakfast-filter")
    const snacksAppFilter = document.querySelector("#snack-appetizers-filter")
    const brunchFilter = document.querySelector("#brunch-filter")
    const mainDishFilter = document.querySelector("#main-dish-filter")
    const compDishFilter = document.querySelector("#complimentary-dish-filter")
    const searchBar = document.querySelector(".search-bar")
    const searchGo = document.querySelector("#search-button")
    const pantryButton = document.querySelector("#your-pantry")
    const buttons = document.querySelectorAll('button')
    const recipeModal = document.querySelector('#modal')

    for (var i of buttons) {
        i.addEventListener('click', function (event) {
            if (event.target.id !== "top-button") {
                hideAll()
            }
        })
    }

    topButton.addEventListener('click', () => document.documentElement.scrollTop = 0)
    allRecipes.addEventListener('click', () => displayRecipes(recipeRepository.recipes))
    savedRecipes.addEventListener('click', () => displayRecipes(user.recipesToCook))
    breakfastFilter.addEventListener('click', () => showFilteredRecipes(morningMeal))
    snacksAppFilter.addEventListener('click', () => showFilteredRecipes(snack))
    brunchFilter.addEventListener('click', () => showFilteredRecipes(other))
    mainDishFilter.addEventListener('click', () => showFilteredRecipes(mainDish))
    compDishFilter.addEventListener('click', () => showFilteredRecipes(complimentaryDish))
    searchGo.addEventListener('click', () => searchRecipes(recipeRepository))
    pantryButton.addEventListener('click', () => displayPantry(user, ingredientsData))
    recipeSection.addEventListener('click', (event) => {
        assignCurrentRecipe(event)
        renderCurrentRecipe()
    })

    let currentDisplayedRecipes = []
    let currentRecipeId
    let currentRecipe
    let filteredRecipes

    recipeRepository.recipes.forEach(element => {
        currentDisplayedRecipes.push(element)
    })

    renderPopularRecipes()

    window.onscroll = () => {
        if (document.documentElement.scrollTop > 350) {
            topButton.style.display = "block"
        } else {
            topButton.style.display = "none"
        }
    }

    function assignCurrentRecipe(event) {
        if (event.target.dataset.allRecipes) {
            currentRecipeId = event.target.dataset.allRecipes
        } else {
            currentRecipeId = event.target.parentElement.dataset.allRecipes
        }
        if (!currentRecipeId) {
            return
        }
        currentRecipeId = parseInt(currentRecipeId)
        currentRecipe = recipeRepository.recipes.find(recipe => recipe.id === currentRecipeId)
        currentRecipe = new Recipe(currentRecipe)
    }

    function renderCurrentRecipe() {
        let isSaved;
        recipeModal.innerHTML = ''
        let ingredients = currentRecipe.determineRecipeIngredients(ingredientsData)

        const ingredientsHTML = ingredients.map(ingredient => {
            return '<li>' + ingredient.ingredient + '</li>'
        }).join('')

        if (user.recipesToCook.filter(current => current.id === currentRecipe.id).length !== 0) {
            isSaved = "Saved"
        } else {
            isSaved = "♥️"
        }

        const instructionsHTML = currentRecipe.returnInstructions().map(instruction => {
            return '<li>' + instruction + '</li>'
        }).join('')
        recipeModal.innerHTML =
            `
        <header class="modal__header">
          <h2 class="modal__title" id="modal-1-title">
            ${currentRecipe.name}
          </h2>
        </header>
        <main class="modal__content" id="modal-1-content">
          <img src="${currentRecipe.image}">
          <h3>Ingredients</h3>
          <ul>
            ${ingredientsHTML}
          </ul>
          <h3>Recipe Instructions</h3>
          <ol type="1">
            ${instructionsHTML}
          </ol>
          <h4>Recipe Cost:$${currentRecipe.calculateRecipeCost(ingredientsData)}</h4>
          <button type="button" class="modal__btn">${isSaved}</button>
          <button class="modal__close" aria-label="Close modal" data-micromodal-close>CLOSE</button>
        </main>
        `
        MicroModal.show('modal-1')
        var saveButton = document.querySelector('.modal__btn')
        if (user.recipesToCook.filter(current => current.id === currentRecipe.id).length !== 0) {
            saveButton.style.backgroundColor = "red"
        }
        saveButton.addEventListener('click', () => saveRecipe(saveButton))
    }

    function saveRecipe(button) {
        var sa = user.recipesToCook.filter(current => current.id === currentRecipe.id)
        if (sa.length === 0) {
            user.recipesToCook.push(currentRecipe)
            button.innerText = 'Saved'
            button.style.backgroundColor = "red"
        } else {
            saved.splice(saved.indexOf(currentRecipe))
            button.innerText = '♥️'
            button.style.backgroundColor = "#e6e6e6"
        }
    }

    function displayPantry(user, ingredientsData) {
        pantrySection.innerHTML += `Hello, ${user.name}. You have these items in your pantry. `
        let currentIngredient
        user.pantry.forEach((element) => {
            currentIngredient = ingredientsData.findIndex(x => x.id === element.ingredient)
            pantrySection.innerHTML +=
                `
        <h1 class="pantry">• ${ingredientsData[currentIngredient].name}</h1>
        `
        })
    }

    // function renderPopularRecipes() {
    //     for (var i = 0; i < 10; i++) {
    //         recipeSection.innerHTML +=
    //             `
    //     <img src="${recipeRepository.recipes[i].image}" class="recipe"></img>
    //     `
    //     }
    // }

    function displayRecipes(recipes) {
        if (!recipes) {
            recipeSection.innerHTML = `<p>NO RESULTS</p>`
            return
        }
        recipeSection.innerHTML = ''
        currentDisplayedRecipes = recipes
        recipes.forEach(recipe => {
            recipeSection.innerHTML +=
                `
        <section class='recipe' data-all-recipes='${recipe.id}'>
        <h3 id='${recipe.id}' class='small-recipe-text'>${recipe.name}</h3>
        <img src="${recipe.image}" class="recipe-img">
        </section>
        `
        })
    }

    function showFilteredRecipes(tag) {
        filteredRecipes = recipeRepository.filterByTag(tag)
        displayRecipes(filteredRecipes)
        currentDisplayedRecipes = filteredRecipes
    }

    function searchRecipes(recipes) {
        let filteredRecipes = recipes.filterByName(searchBar.value) || recipes.filterByTag(searchBar.value)
        currentDisplayedRecipes = null
        displayRecipes(filteredRecipes)
    }

    function hideAll() {
        recipeSection.innerHTML = ''
        pantrySection.innerHTML = ''
    }
}