import './styles.css'
import './images/turing-logo.png'
import MicroModal from 'micromodal'
import RecipeRepository from './classes/RecipeRepository'
import User from './classes/User.js'
import Recipe from './classes/Recipe'
MicroModal.init()

const usersDataFetch = fetch(
    "http://localhost:3001/api/v1/users"
).then((response) => response.json())
//.then(data => console.log(data))
const ingredientsDataFetch = fetch(
    "http://localhost:3001/api/v1/ingredients"
).then((response) => response.json())
//.then(data => console.log(data))
const recipesDataFetch = fetch(
    "http://localhost:3001/api/v1/recipes"
).then((response) => response.json())
//.then(data => console.log(data))



Promise.all([usersDataFetch, ingredientsDataFetch, recipesDataFetch])
.then((data) => {
    console.log('WHATS BAD', data)
    let allCookingData = {
        users: data[0],
        ingredients: data[1],
        recipes: data[2]
    }
    console.log('WHATS GOOD:', allCookingData)
    return allCookingData
})
.then(
    (allCookingData) => {
            let recipeRepository
            recipeRepository = new RecipeRepository(allCookingData.recipes)
            let num = Math.floor(Math.random() * allCookingData.users.length)
            let user = new User(allCookingData.users[num])
            loadPage(recipeRepository, user, allCookingData.ingredients)
        }
    )

function loadPage(recipeRepository, user, ingredientsData) {

    const recipeSection = document.querySelector('#recipe-section')
    const navigationSection = document.querySelector(".navigation-section")
    const pantrySection = document.querySelector(".pantry-section")
    const savedRecipes = document.querySelector("#saved-recipes")
    const topButton = document.querySelector("#top-button")
    const allRecipesButton = document.querySelector("#recipe-button")
    const breakfastButton = document.querySelector("#breakfast-filter")
    const snacksAppButton = document.querySelector("#snack-appetizers-filter")
    const mainDishButton = document.querySelector("#main-dish-filter")
    const compDishButton = document.querySelector("#complimentary-dish-filter")
    const searchBar = document.querySelector("#search-bar")
    const searchGo = document.querySelector("#search-button")
    const pantryButton = document.querySelector("#your-pantry")
    const buttons = document.querySelectorAll('button')
    const recipeModal = document.querySelector('#modal')
    const recipesHeader = document.querySelector('#recipes-header')
    const recipeContainer = document.querySelector('#recipe-container')

    let currentRecipe 
    let currentView = 'landing'
    let filterTerm = ''

    renderPage()

    topButton.addEventListener('click', () => document.documentElement.scrollTop = 0)
    allRecipesButton.addEventListener('click', () => {
        currentView = 'recipes'
        filterTerm = ''
        recipesHeader.innerText = 'All Recipes'
        renderPage()

    })
    savedRecipes.addEventListener('click', () => {
        currentView = 'savedRecipes'
        filterTerm = ''
        renderPage()
    })
    breakfastButton.addEventListener('click', () => {
        currentView = 'recipes'
        filterTerm = ['breakfast', 'morning meal']
        renderPage()

    })
    snacksAppButton.addEventListener('click', () => {
        currentView = "recipes"
        filterTerm = ['dip', 'snack', 'appetizer']
        renderPage()

    })
    mainDishButton.addEventListener('click', () => {
        currentView = "recipes"
        filterTerm = ['main dish', 'dinner', 'lunch']
        renderPage()

    })
    compDishButton.addEventListener('click', () => {
        currentView = "recipes"
        filterTerm = ['antipasti', 'hor d\'oeuvre', 'starter', 'salad', 'side dish', 'appetizer', 'condiment', 'spread']
        renderPage()
    })

    searchGo.addEventListener('click', () => {
        if (searchBar.value) {
            filterTerm = searchBar.value
            renderPage()
            searchBar.value = ''
            
        }
        if (currentView === 'pantry' || 'landing') {
            currentView = 'recipes'
        }
    })

    pantryButton.addEventListener('click', () => {
        currentView = 'pantry'
        filterTerm = ''
        renderPage()
    })

    recipeSection.addEventListener('click', (event) => {
        assignCurrentRecipe(event)
        renderCurrentRecipe()
    })

    window.onscroll = () => {
        if (document.documentElement.scrollTop > 350) {
            topButton.style.display = "block"
        } else {
            topButton.style.display = "none"
        }
    }

    function assignCurrentRecipe(event) {
        let currentRecipeId
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
        if (!currentRecipe) {
            return
        }
        let isSaved;
        recipeModal.innerHTML = ''
        let ingredients = currentRecipe.determineRecipeIngredients(ingredientsData)

        const ingredientsHTML = ingredients.map(ingredient => {
            return '<li>' + ingredient.ingredient + '</li>'
        }).join('')

        if (user.savedRecipes.recipes.filter(current => current.id === currentRecipe.id).length !== 0) {
            isSaved = "Saved"
        } else {
            isSaved = "♥️"
        }

        const instructionsHTML = currentRecipe
            .returnInstructions()
            .map((instruction) => {
                return "<li>" + instruction + "</li>";
            })
            .join("");
        recipeModal.innerHTML = `
        <header class="modal__header">
          <h2 class="modal__title" id="modal-1-title">
            ${currentRecipe.name}
          </h2>
        </header>
        <main class="modal__content" id="modal-1-content">
          <div class="modal_container_img_ingredients"> 
          <img class="modal_img" src="${currentRecipe.image}" alt='${currentRecipe.name}'>
          <div class="modal_ingredients_container">
            <h3 class="modal_ingredients">Ingredients</h3>
            <ul>
                ${ingredientsHTML}
             </ul>
          </div>
          </div>
            <h3 class="modal_recipe_instructions">Recipe Instructions</h3>
          <ol type="1">
            ${instructionsHTML}
          </ol>
          <h4 class="modal_cost">Recipe Cost:$${currentRecipe.calculateRecipeCost(
            ingredientsData
          )}</h4>
          <div class="modal_button_container">
          <button type="button" class="modal__btn">${isSaved}</button>
          <button class="modal__close" id="close" aria-label="Close modal" data-micromodal-close>CLOSE</button>
          </div>
        </main>
        `;
        MicroModal.show('modal-1')
        const saveButton = document.querySelector('.modal__btn')
        const closeButton = document.querySelector('#close')
        if (user.savedRecipes.recipes.find(current => current.id === currentRecipe.id)) {
            saveButton.style.backgroundColor = "red"
        }
        saveButton.addEventListener('click', () => saveRecipe(saveButton))
        closeButton.addEventListener('click', () => currentRecipe = '')

        
    }

    function saveRecipe(button) {
        if (button.innerText === '♥️') {
            user.addToSavedRecipes(currentRecipe)
            button.innerText = 'Saved'
            button.style.backgroundColor = "red"
        } else {
            user.removeFromSavedRecipes(currentRecipe)
            button.innerText = '♥️'
            button.style.backgroundColor = "#e6e6e6"
            renderPage()
        }
        currentRecipe = ''
    }

    function displayPantry(user, ingredientsData) {
        pantrySection.innerHTML = ''
        pantrySection.innerHTML += `<div class="pantry">
          <h2 class="pantry__title">
          ✨ Hi ${user.name} ✨
        <h1 class="pantry_subtitle"> You have these items in your pantry: </h1>
        </div>
        <div id='pantry-items-container' class ='scroll-pantry-section'>
        <ol class='pantry-list'>
        </ol>
        </div>`
        const pantryItems = document.querySelector('.pantry-list')
        let currentIngredient
        user.pantry.forEach((element) => {
            currentIngredient = ingredientsData.findIndex(x => x.id === element.ingredient)
            pantryItems.innerHTML += ` 
                     <li>${ingredientsData[currentIngredient].name}</li>
            `
        })
    }

    function displayRecipes(recipes) {
        if (!recipes) {
            recipeContainer.innerHTML = ''
            recipesHeader.innerHTML = `<p>NO RESULTS</p>`
            return
        }
        if (currentView === 'landing') {
            recipeContainer.innerHTML = ''
            recipesHeader.innerText = 'Popular Recipes'
            recipes.forEach(recipe => {
                recipeContainer.innerHTML +=
                    `
            <section class='popular-recipe' data-all-recipes='${recipe.id}'>
            <h3 id='${recipe.id}' class='small-recipe-text'>${recipe.name}</h3>
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-img">
            </section>
            `
            })
        } else {
            recipeContainer.innerHTML = ''
            recipes.forEach(recipe => {
                recipeContainer.innerHTML +=
                    `
            <section class='recipe' data-all-recipes='${recipe.id}'>
            <h3 id='${recipe.id}' class='small-recipe-text'>${recipe.name}</h3>
            <img src="${recipe.image}" alt="image of ${recipe.name}" class="recipe-img">
            </section>
            `
            })
        }
    }

    function getCurrentDisplayedRecipes(recipes, filterTerm) {
        if (Array.isArray(filterTerm)) {
            return recipes.filterByTag(filterTerm)
        } else if (filterTerm) {
            return (recipes.filterByName(filterTerm) || recipes.filterByTag(filterTerm))
        } else {
            return recipes.recipes
        }
    }

    function renderPage() {
        if (currentView === 'pantry') {
            recipeSection.classList.add('hidden')
            pantrySection.classList.remove('hidden')
            displayPantry(user, ingredientsData)
        } else if (currentView === 'recipes') {
            searchBar.placeholder = "search all recipes..."
            if (!filterTerm) {
                recipesHeader.innerText = 'All Recipes'
            } else {
                recipesHeader.innerText = ''
            }
            pantrySection.classList.add('hidden')
            recipeSection.classList.remove('hidden')
            displayRecipes(getCurrentDisplayedRecipes(recipeRepository, filterTerm))
        } else if (currentView === 'savedRecipes') {
            searchBar.placeholder = 'search saved recipes...'
            recipesHeader.innerText = 'Saved Recipes'
            pantrySection.classList.add('hidden')
            recipeSection.classList.remove('hidden')
            displayRecipes(getCurrentDisplayedRecipes(user.savedRecipes, filterTerm))
        } else if (currentView === 'landing') {
            const num1 = Math.floor(Math.random() * recipeRepository.recipes.length)
            const num2 = Math.floor(Math.random() * recipeRepository.recipes.length)
            const num3 = Math.floor(Math.random() * recipeRepository.recipes.length)
            let fakePopularRecipes = [recipeRepository.recipes[num1], recipeRepository.recipes[num2], recipeRepository.recipes[num3]]
            displayRecipes(fakePopularRecipes)
        }
    }
}