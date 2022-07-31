import './styles.css';
import apiCalls from './apiCalls';
import './images/turing-logo.png'
import "./images/heart.svg"
import RecipeRepository from '../src/classes/RecipeRepository';
import Users from '../src/classes/Users';
import Recipe from '../src/classes/Recipe'
import { fetchApiData } from './apiCalls';
import Ingredient from './classes/Ingredient';
import Pantry from './classes/Pantry';
import { ingredientsData } from './data/ingredients';

const getRandomUserId = () => {
    return Math.floor(Math.random() * 41) + 1;
};
const getRandomRecipe = () => {
    return Math.floor(Math.random() * 49) + 1;
}
const getRandomIngredient = () => {
    return Math.floor(Math.random() * 246) + 1;
}

// Global Variables
const recipePromise = fetchApiData('http://localhost:3001/api/v1/recipes')
const userPromise = fetchApiData('http://localhost:3001/api/v1/users');
const ingredientPromise = fetchApiData('http://localhost:3001/api/v1/ingredients');
let ourUser;
let thisRecipe;
let thisIngredient;
let recipeRepo;
let pantry;
let recipes = [];
let ingredients = [];
let cookbookIsActive = false;
const userId = getRandomUserId();
const recipeID = getRandomRecipe();
const ingredientId = getRandomIngredient();
Promise.all([userPromise, ingredientPromise, recipePromise])
    .then((value) => {
        const users = value[0]
        const ingredientsCall = value[1]
        const recipeCall = value[2]
        console.log(users[0])
        ourUser = setUserData(users[getRandomUserId()])
        userAttribute(ourUser)
        thisIngredient = setIngredientData(ingredientsCall[getRandomIngredient()])
        thisRecipe = setRecipeData(recipeCall[getRandomRecipe()], thisIngredient)
        recipes = recipeCall;
        ingredients = ingredientsCall;
        pantry = new Pantry(ourUser.pantry)
        pantry.attachNameToId(ingredients)
        showAllRecipes();
    })

   

// QuerySelectors
const favoriteButton = document.querySelector('#favorite-button');
const cookbookButton = document.querySelector('#cookbook-button')
const userGreeting = document.querySelector("#userName");
const recipeImage = document.querySelector('.card-image')
const mainBox = document.querySelector('.main-box')
const goHomeButton = document.getElementById('home-button')
const pantryButton = document.querySelector('#pantry-button')
const recipeCard = document.querySelector('.recipe-card')
const ingredientCard = document.querySelector('.ingredient-card')
let viewRecipeButtons = document.querySelectorAll('.view-recipe-button')
const recipeCardWrapper = document.querySelector('.recipe-card-wrapper')
const ingredientCardWrapper = document.querySelector('.ingredient-card-wrapper')
const searchBox = document.querySelector('.search-box');
const searchButton = document.querySelector('.search-submit');
const pantryWrapper = document.querySelector('.pantry-wrapper');


const addToCookbookButtonEventHandler = (buttons) => {
    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            let recipeToAdd = recipeRepo.allRecipes.find(recipe => recipe.id === parseInt(event.target.id))
            console.log(recipeToAdd)
            ourUser.addRecipesToCook(recipeToAdd);
        })
    })
}
// EventListeners

goHomeButton.addEventListener('click', showAllRecipes)
cookbookButton.addEventListener('click', showCookbookRecipes)
searchButton.addEventListener('click', searchRecipe)
pantryButton.addEventListener('click', showPantry)


function showAllHelper() {
    // pantry = new Pantry(ourUser.pantry)
    console.log('pantry in showAll', pantry)
    let viewRecipe = document.querySelectorAll(".view-recipe-button")
    viewRecipe.forEach((button) => {
        button.addEventListener('click', (event) => {
                showAllRecipeDetails(event.target.id)
        })
    })
}

function showAllRecipes() {
    recipeRepo = new RecipeRepository(recipes, ingredients)
    const allRecipes = recipeRepo.createAllRecipes(thisIngredient)
    recipeCardWrapper.innerHTML = '';
    allRecipes.forEach((recipe) => {
        recipeCardWrapper.innerHTML += `
        <div class="recipe-card">
        <button class="view-recipe-button" id=${recipe.id} data-recipeId=${recipe.id}> <h2 data-recipeId=${recipe.id}> ${recipe.name} </h2> 
      <img class='card-image' src=${recipe.image} data-recipeId=${recipe.id} alt=${recipe.name}>
      </button>
      </div>`
    })
    hide(ingredientCardWrapper)
    show(recipeCardWrapper)
    addRecipeEventListeners()
    cookbookIsActive = false;
}

function showAllRecipeDetails(id) {
    recipeRepo = new RecipeRepository(recipes, ingredients)
    thisRecipe = recipeRepo.allRecipes.find(recipe => recipe.id === parseInt(id));
    thisRecipe.makeIngredientData(thisIngredient);
    pantry.missingIngredients = []
    pantry.checkUserIngredients(thisRecipe)
    window.currentRecipe = thisRecipe;
    ingredientCard.innerHTML = `<div>
    <button id="add-to-cookbook" class="add-to-cookbook-button"> Add to cookbook! </button>
    <button id="lets-make-it" class="lets-make-it-button"> Let's Make It! </button>
<ul>
<h2> RECIPE INFORMATION </h2>
<p class="enjoy-meal-message"> </p>
<p> NAME: ${thisRecipe.name}</p>
<p> TOTAL COST: ${thisRecipe.getCostToDollar()}</p>
</ul>
</div>
<h3> INGREDIENTS </h3>
`
    thisRecipe.requiredIngredients.forEach(ingredient => {
        ingredientCard.innerHTML += `  <div class="recipe-information">
  <li>${ingredient.name}, ${ingredient.amount} ${ingredient.unit}</li>
  </div>
  `
    })
    ingredientCard.innerHTML += `<h3> YOU NEED TO ADD THESE INGREDIENTS! </h3>`
    pantry.missingIngredients.forEach(missing => {
        ingredientCard.innerHTML += `  <div class="recipe-information">
        <li>${missing.name}, ${missing.amount} ${missing.unit}</li>
        </div>
        `
    })
    ingredientCard.innerHTML += `<h3>
INSTRUCTIONS
</h3>`
    thisRecipe.instructions.forEach(instruction => {
        ingredientCard.innerHTML += `<div>
  <p><span>${instruction.number}. </span>${instruction.instruction}</p>
  </div>`
    });
    const addToCookbookButton = document.querySelector('.add-to-cookbook-button')
    addToCookbookButton.addEventListener('click', addSingleRecipeToCookbook)
    const letsMakeItButton = document.querySelector('.lets-make-it-button')
    letsMakeItButton.addEventListener('click', letsMakeItTrafficCop)
    hide(recipeCardWrapper)
    show(ingredientCardWrapper)
    show(ingredientCard)
    show(goHomeButton)
    hide(pantryWrapper)
}

const letsMakeItTrafficCop = () => {
    if (pantry.missingIngredients.length) {
        showPantry()
    } else {
        pantry.removeIngredients()
      const enjoyMealMessage = document.querySelector('.enjoy-meal-message')
      enjoyMealMessage.innerText = 'Enjoy Your Meal!'
    }
}

const addSingleRecipeToCookbook = () => {
    if (!ourUser.recipesToCook.includes(thisRecipe)) {
        ourUser.recipesToCook.push(thisRecipe)
    }
}

const addRecipeEventListeners = () => {
    viewRecipeButtons = document.querySelectorAll('.view-recipe-button')
    viewRecipeButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            showAllRecipeDetails(event.target.getAttribute('data-recipeId'))
        })
    })
}

function searchUserRecipes(event) {
    event.preventDefault();
    if (!searchBox.value) {
        displayRecipeBySearchResults(ourUser.recipesToCook);
    }
    const tagSearched = ourUser.filterByTagUser(searchBox.value.toLowerCase());
    const nameSearched = ourUser.filterByNameUser(searchBox.value);
    const recipesToShow = [...tagSearched, ...nameSearched];
    if (recipesToShow.length > 0) {
        displayRecipeBySearchResults(recipesToShow);
    } else {
        displayRecipeBySearchResults(ourUser.recipesToCook);
    }
}

function searchRecipe(event) {
    if (cookbookIsActive) {
        searchUserRecipes(event);
    } else {
        event.preventDefault();
        if (!searchBox.value) {
            showAllRecipes();
        }
        const tagSearched = recipeRepo.filterByTag(searchBox.value.toLowerCase());
        const nameSearched = recipeRepo.filterByName(searchBox.value);
        const recipesToShow = [...tagSearched, ...nameSearched];
        if (recipesToShow.length > 0) {
            displayRecipeBySearchResults(recipesToShow);
        } else {
            showAllRecipes();
        }
        show(goHomeButton)
        hide(pantryWrapper)
    }
}

function showCookbookRecipes(event) {
    displayRecipeBySearchResults(ourUser.recipesToCook);
    show(goHomeButton)
    hide(pantryWrapper)
    cookbookIsActive = true;
}

function removeClickHandler(event) {
    const idToRemove = parseInt(event.target.getAttribute('data-recipeId'), 10);
    // if (NaN) just return --> instead of 10 at end of 202
    const recipe = ourUser.recipesToCook.find(recipe => recipe.id === idToRemove);
    ourUser.removeRecipesToCook(recipe);
    displayRecipeBySearchResults(ourUser.recipesToCook);
}

function addRemoveClickHandlers(buttons) {
    buttons.forEach((button) => {
        button.addEventListener('click', removeClickHandler);
    })
}

function displayRecipeBySearchResults(recipes) {
    recipeCardWrapper.innerHTML = '';
    show(recipeCardWrapper)
    hide(ingredientCard)
    const addToCookIds = [];
    recipes.forEach((recipe) => {
        addToCookIds.push(`add-to-cookbook-${recipe.id}`)
        recipeCardWrapper.innerHTML += `<section class='recipe-card' id="${recipe.id}">
      <img src="${recipe.image}" class="recipe-image" alt="">
      <h3>${recipe.name}</h3>
      <div class="button-wrapper">
      <button class="view-recipe-button button-styling" id="${recipe.id}">View Recipe</button>
      <button class="remove-recipe button-styling" data-recipeId=${recipe.id} > Remove from cookbook! </button>
      <div>
      <button id="${recipe.id}" class="add-to-cook-button button-styling"> Add To Cookbook! </button>
      </div>
      </div>
      </section>`
    });
    const addToCookButtons = document.querySelectorAll('.add-to-cook-button');
    const removeCookButtons = document.querySelectorAll('.remove-recipe');
    addRemoveClickHandlers(removeCookButtons);
    addToCookbookButtonEventHandler(addToCookButtons);
    showAllHelper()
}

function showPantry(thisRecipe) {
    // we're definitely going to have to match ingredient id's so that it knows which ingredient in the pantry to update
    console.log(pantry.missingIngredients)
    // thisRecipe.requiredIngredients = []
    // console.log('required: ', thisRecipe.requiredIngredients);
    let options = pantry.missingIngredients.map((option) =>{
       return `<option value=${ option.name }> ${ option.name } </option>`
    })
    pantryWrapper.innerHTML = `<h2> ${ourUser.name.split(" ")[0]}'s Pantry </h2>
    <form>
        <label for="pantry"> Add new ingredient </label>
        <select id="pantry" name="pantry" class="input-ingredient">
           ${options}
        </select>
        <label for="addIngredient"> Add ingredient amount: </label>
        <input class="amount-input" id="addIngredient" type="number" value="1"> </input>
        <br><br>
        <button class="submit-button" type="submit"> Submit </button> 
    </form>
    `
    pantry.ingredients.forEach((item) => {
        pantryWrapper.innerHTML += `<div class="ingredients">
        <div class="amount-wrapper">
        <p> ${item.name}: </p>
        <p> ${item.amount} </p>
        </div>
        </div>`
    })
    hide(recipeCardWrapper)
    hide(ingredientCardWrapper)
    show(pantryWrapper)
};

function addIngredientToPantry(event) {
    event.preventDefault()
    let newIngredient = inputIngredient.value;
    let newAmount = inputAmount.value

/*
called when submit form is clicked.
we need to know what ingredient and how much

*/
}

    // recipe.requiredIngredients.forEach(ingredient => {
    //     const findIngredient = pantry.ingredients.find(userIngredient => userIngredient.ingredient === ingredient.id)
    //     if (!userIngredient.ingredient || userIngredient.amount < ingredient.amount) {
    //        // return alert(`You don't have enough ingredients! Go add more!`)
    //        // I don't just want to let them know they need to add ingredients in general, I want to implement the second half of checkUserIngredients to ALSO let them know what ingredients they need to add and how much of each

    //     }
    // })


    // checkUserIngredients(recipe) {      
    //     recipe.requiredIngredients.forEach(ingredient => {
    //         const found = this.ingredients.find(foundIngredient => foundIngredient.ingredient === ingredient.id)
    //         if (!found) {
    //             this.missingIngredients.push({
    //                 name: ingredient.name,
    //                 id: ingredient.id,
    //                 amount: ingredient.amount
    //             })
    //         } else {
    //             if (found.amount < ingredient.amount) {
    //                 this.missingIngredients.push({
    //                     name: ingredient.name,
    //                     id: ingredient.id,
    //                     amount: ingredient.amount - found.amount
    //                 })
    //             }
    //         }
    //     })
    // }

function show(element) {
    element.classList.remove('hidden');
};

function hide(element) {
    element.classList.add('hidden');
};

const userAttribute = (user) => {
    userGreeting.innerHTML = `Welcome ${user.name.split(" ")[0]}!`
};
const setUserData = (someData) => {
    return new Users(someData);
};

const setRecipeData = (someData) => {
    return new Recipe(someData, ingredients)
};

const setIngredientData = (someData) => {
    return new Ingredient(someData)
};