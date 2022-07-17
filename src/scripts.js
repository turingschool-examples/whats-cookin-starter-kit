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
let userRepo;
const users = []
const userId = getRandomUserId();
const recipeID = getRandomRecipe();
const recipe = new Recipe(recipeData)
Promise.all([userPromise, ingredientPromise, recipePromise])
    .then((value) => {
        setUserData(value[0].name)
        const ourUser = setUserData()
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
const addToCookbookButton = document.querySelector('.add-to-cookbook-button')
const cardFavoriteButton = document.querySelector('.favorite-button')
const unFavoriteButton = document.querySelector('.un-favorite-button')
const userGreeting = document.querySelector("#userName");
const recipeLocation = document.querySelector('#recipeName')
const recipeImage = document.querySelector('.card-image')
const mainBox = document.querySelector('.main-box')
const goHomeButton = document.querySelector('#home-button')
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


const addToCookbookButtonEventHandler = (id, recipeToAdd) => {
    const addToCookbook = document.querySelector(`#${id}`);
    addToCookbook.addEventListener('click', (event) => {
        user.addRecipesToCook(recipeToAdd);
    });
}
const showFilteredIngredients = () => {
    const letsMakeIt = document.querySelector('.lets-make-it-button')
    letsMakeIt.addEventListener('click', (id) => {
        showAllRecipeDetails(id)
    })
}

// EventListeners
window.addEventListener('load', () => {
    showAllRecipes()
    viewRecipeButtons = document.querySelectorAll('.view-recipe-button')
    viewRecipeButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            showAllRecipeDetails(event.target.getAttribute('data-recipeId'))
        })
    })
    console.log({ favoriteButton });
    console.log('HERE');
});

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
    recipeCard.innerHTML = '';
    console.log('SHOWING!')
    recipes.forEach((recipe) => {
        recipeCard.innerHTML += `<button class="view-recipe-button" id=${recipe.id} data-recipeId=${recipe.id}> <h2 data-recipeId=${recipe.id}> ${recipe.name} </h2> 
      <img class='card-image' src=${recipe.image} data-recipeId=${recipe.id} alt=${recipe.name}>
      </button>`
    })
    hide(goHomeButton)
    hide(ingredientCardWrapper)
    show(recipeCardWrapper)
}

function showAllRecipeDetails(id) {
    newRecipe.makeIngredientData();
    newRecipe = recipeRepo.allRecipes.find(recipe => recipe.id === parseInt(id));
    window.currentRecipe = newRecipe;
    ingredientCard.innerHTML = `<div>
    <button id="add-to-cookbook" class=""> Add to cookbook! </button>
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
    addToCookbookButtonEventHandler('add-to-cookbook', newRecipe);
    hide(recipeCardWrapper)
    show(favoriteButton)
    show(ingredientCardWrapper)
    show(goHomeButton)
    showFilteredIngredients();
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
    hide(ingredientCard)
}

function showCookbookrecipes(event) {
    console.log({ userRecipes: user.recipesToCook });
    displayRecipeBySearchResults(user.recipesToCook);
}

function displayRecipeBySearchResults(recipes) {
    recipeCard.innerHTML = '';
    recipes.forEach((recipe, index) => {
        console.log('TAG RECIPE: ', recipe);
        const addToCookbookId = `add-to-cookbook-${index}`
        recipeCard.innerHTML += `<section class='recipe-card' id="recipeCard">
      <img src="${recipe.image}" class="recipe-image" alt="">
      <h3>${recipe.name}</h3>
      <button class="lets-make-it-button" id="${recipe.id}">Let's Make It!</button>
      <div>
      <button id="${addToCookbookId}" class=""> Add to cookbook! </button>
      </div>
      </section>`
        addToCookbookButtonEventHandler(addToCookbookId, recipe);
        showFilteredIngredients()
    });

}
function show(element) {
    element.classList.remove('hidden');
};

function hide(element) {
    element.classList.add('hidden');
};
cookbookButton.addEventListener('click', showCookbookrecipes)
searchButton.addEventListener('click', searchRecipe)
goHomeButton.addEventListener('click', showAllRecipes,);


const userAttribute = (user) => {
    userGreeting.innerHTML = `Welcome ${user.name.split(" ")[0]}!`
}
const setUserData = (someData) => {
    userRepo = new Users(someData);
};