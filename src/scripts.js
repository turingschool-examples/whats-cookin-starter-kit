import './styles.css';
import apiCalls from './apiCalls';
import './images/turing-logo.png'
import "./images/heart.svg"
import RecipeRepository from '../src/classes/RecipeRepository';
import Users from '../src/classes/Users';
import { recipeData } from './data/recipes';
import Recipe from '../src/classes/Recipe'
import { ingredientsData } from './data/ingredients';
import { usersData } from './data/users';
import { fetchApiData } from './apiCalls';
// import { raw } from 'file-loader';


const getRandomUserId = () => {
    return Math.floor(Math.random() * 41) + 1;
};
const getRandomRecipe = () => {
    return Math.floor(Math.random() * 49) + 1;
}

// Global Variables
const recipePromise = fetchApiData('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes')
const userPromise = fetchApiData('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users');
const ingredientPromise = fetchApiData('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients');
let ourUser;
const users = []
const userId = getRandomUserId();
const recipeID = getRandomRecipe();
// const recipe = new Recipe(recipeData)
Promise.all([userPromise, ingredientPromise, recipePromise])
    .then((value) => {
        ourUser = setUserData(value[0].usersData[userId])
        userAttribute(ourUser)
    })
//     Promise.all([userPromise, hydrationPromise, sleepPromise, activityPromise])
//   .then((value) => {
//     setUserData(value[0].userData)
//     const thisUser = getUserData();
//     userBuildAttributes(thisUser);
//     setHydrationData(value[1].hydrationData);
//     hydrationBuildAttributes(hydrationRepo);
//     setSleepData(value[2].sleepData);
//     sleepBuildAttributes(sleepRepo);
//     setActivityData(value[3].activityData);
//     activityBuildAttributes(activityRepo);
//   })
// QuerySelectors
const favoriteButton = document.querySelector('#favorite-button');
const cookbookButton = document.querySelector('#cookbook-button')
const searchBar = document.querySelector('.search-container')
// const addToCookbookButton = document.querySelector('.add-to-cookbook-button')
const cardFavoriteButton = document.querySelector('.favorite-button')
const unFavoriteButton = document.querySelector('.un-favorite-button')
const userGreeting = document.querySelector("#userName");
const recipeLocation = document.querySelector('#recipeName')
const recipeImage = document.querySelector('.card-image')
const mainBox = document.querySelector('.main-box')
const goHomeButton = document.getElementById('home-button')
const recipeCard = document.querySelector('.recipe-card')
const ingredientCard = document.querySelector('.ingredient-card')
let viewRecipeButtons = document.querySelectorAll('.view-recipe-button')
const recipeCardWrapper = document.querySelector('.recipe-card-wrapper')
const ingredientCardWrapper = document.querySelector('.ingredient-card-wrapper')
const recipeTagInput = document.querySelector('#recipe-tag-input')
const recipeDisplay = document.querySelector('#recipeDisplay');
const recipeHeading = document.querySelector('#recipeHeading');
const radioValue = document.querySelectorAll('.radio-value');
const searchBox = document.querySelector('.search-box');
const searchButton = document.querySelector('.search-submit');


const addToCookbookButtonEventHandler = (buttons) => {
      //  viewRecipeButtons = document.querySelectorAll('.view-recipe-button')
       buttons.forEach((button) => {
           button.addEventListener('click', (event) => {
              let recipeToAdd = recipeRepo.allRecipes.find(recipe => recipe.id === parseInt(event.target.id))
              console.log(recipeToAdd)
              ourUser.addRecipesToCook(recipeToAdd);
           })
       })
}
const showFilteredIngredients = () => {
    // letsMakeIt = document.querySelector('.lets-make-it-button')
    // letsMakeIt.addEventListener('click', (id) => {
    //     showAllRecipeDetails(id)
    // })
}

// EventListeners
window.addEventListener('load', () => {
    showAllRecipes()
    // viewRecipeButtons = document.querySelectorAll('.view-recipe-button')
    // viewRecipeButtons.forEach((button) => {
    //     button.addEventListener('click', (event) => {
    //         showAllRecipeDetails(event.target.getAttribute('data-recipeId'))
    //     })
    // })
});

goHomeButton.addEventListener('click', showAllRecipes)

function showAllHelper() {
  let letsMakeIt = document.querySelectorAll(".lets-make-it-button")
  console.log(letsMakeIt)
  letsMakeIt.forEach((button) => {
      button.addEventListener('click', (event) => {
          showAllRecipeDetails(event.target.id)
      })
  })
}

// Global Variables
let recipeRepo = new RecipeRepository(recipeData)
let newRecipe = new Recipe(recipeData[0], ingredientsData)


// function addClickHandler(element, callback) {
//     element.addEventListener('click', (event) => {
//         callback(event);
//     });
// };

// const someButton = document.querySelector('some selector');
// addClickHandler(someButton, someClickHandler); 

function showAllRecipes() {
    const recipes = recipeRepo.createAllRecipes(ingredientsData)
    recipeCardWrapper.innerHTML = '';
    recipes.forEach((recipe) => {
        recipeCardWrapper.innerHTML += `
        <div class="recipe-card">
        <button class="view-recipe-button" id=${recipe.id} data-recipeId=${recipe.id}> <h2 data-recipeId=${recipe.id}> ${recipe.name} </h2> 
      <img class='card-image' src=${recipe.image} data-recipeId=${recipe.id} alt=${recipe.name}>
      </button>
      </div>`
    })
    // hide(goHomeButton)
    hide(ingredientCardWrapper)
    show(recipeCardWrapper)
    addRecipeEventListeners()
}

function showAllRecipeDetails(id) {
  console.log('recipeId', id)
    newRecipe = recipeRepo.allRecipes.find(recipe => recipe.id === parseInt(id));
    newRecipe.makeIngredientData(ingredientsData);
    window.currentRecipe = newRecipe;
    console.log('window', window.currentRecipe)
    console.log('newRecipe: ', newRecipe)
    ingredientCard.innerHTML = `<div>
    <button id="add-to-cookbook" class="add-to-cookbook-button"> Add to cookbook! </button>
<ul>
<h2> RECIPE INFORMATION </h2>
<li> NAME: ${newRecipe.name}</li>
<li> TOTAL COST: ${newRecipe.getCostToDollar()}</li>
</ul>
</div>
<h3> INGREDIENTS </h3>
`
    newRecipe.requiredIngredients.forEach(ingredient => {
        ingredientCard.innerHTML += `  <div class="recipe-information">
  <p>${ingredient.name}</p>
  </div>
  `
    })
    ingredientCard.innerHTML += `<h3>
INSTRUCTIONS
</h3>`
    newRecipe.instructions.forEach(instruction => {
        ingredientCard.innerHTML += `<div>
  <p><span>${instruction.number}. </span>${instruction.instruction}</p>
  </div>`
    });
    // addToCookbookButtonEventHandler('add-to-cookbook', newRecipe);
    const addToCookbookButton = document.querySelector('.add-to-cookbook-button')
    addToCookbookButton.addEventListener('click', addSingleRecipeToCookbook)
    hide(recipeCardWrapper)
    show(favoriteButton)
    show(ingredientCardWrapper)
    show(ingredientCard)
    show(goHomeButton)
    // showFilteredIngredients();
}

const addSingleRecipeToCookbook = () => {
  ourUser.recipesToCook.push(newRecipe)
}

const addRecipeEventListeners = () => {
  viewRecipeButtons = document.querySelectorAll('.view-recipe-button')
  viewRecipeButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
          showAllRecipeDetails(event.target.getAttribute('data-recipeId'))
      })
  })
}



function searchRecipe(event) {
    event.preventDefault();
    if (!searchBox.value) {
        showAllRecipes();
    }
    const tagSearched = recipeRepo.filterByTag(searchBox.value);
    const nameSearched = recipeRepo.filterByName(searchBox.value);
    const recipesToShow = [...tagSearched, ...nameSearched];
    if (recipesToShow.length > 0) {
        displayRecipeBySearchResults(recipesToShow);
    } else {
        showAllRecipes();
    }
    show(goHomeButton)
    // hide(ingredientCard)
}

function showCookbookrecipes(event) {
    console.log(ourUser.recipesToCook);
    displayRecipeBySearchResults(ourUser.recipesToCook);
    show(goHomeButton)
}

function displayRecipeBySearchResults(recipes) {
    recipeCardWrapper.innerHTML = '';
    show(recipeCardWrapper)
    hide(ingredientCard)
    const addToCookIds = [];
    recipes.forEach((recipe) => {
      // can add .find here? to find the selected recipe to add to cookbook
        addToCookIds.push(`add-to-cookbook-${recipe.id}`)
        recipeCardWrapper.innerHTML += `<section class='recipe-card' id="${recipe.id}">
      <img src="${recipe.image}" class="recipe-image" alt="">
      <h3>${recipe.name}</h3>
      <button class="lets-make-it-button" id="${recipe.id}">Let's Make It!</button>
      <div>
      <button id="${recipe.id}" class="add-to-cook-button"> Add to cookbook! </button>
      </div>
      </section>`
    });
    const addToCookButtons = document.querySelectorAll('.add-to-cook-button')
    addToCookbookButtonEventHandler(addToCookButtons);
    showFilteredIngredients()
    showAllHelper()
}
function show(element) {
    element.classList.remove('hidden');
};

function hide(element) {
    element.classList.add('hidden');
};
cookbookButton.addEventListener('click', showCookbookrecipes)
searchButton.addEventListener('click', searchRecipe)


const userAttribute = (user) => {
    userGreeting.innerHTML = `Welcome ${user.name.split(" ")[0]}!`
}
const setUserData = (someData) => {
    return new Users(someData);
};