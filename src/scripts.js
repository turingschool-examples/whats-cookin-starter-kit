import './styles.css';
import './images/turing-logo.png';
import { getData } from './apiCalls';
import User from './classes/User'
import Recipe from './classes/Recipe'
import Ingredient from './classes/Ingredient'
import RecipeRepository from './classes/RecipeRepository'

let userList;
let recipeList;
let recipeClass;
let ingredientList;
let ingredientClass;
let recipeRepository;
let currentUser;
let newRecipe;


//Query Selectors
let welcomeUserMessage = document.getElementById( 'welcomeUserMessage' );
let favoriteRecipeButton = document.querySelector('.favorite-button');
let recipeCard = document.querySelector(".recipe-grid-container");

//Event Listeners
window.addEventListener( 'load', loadData );
favoriteRecipeButton.addEventListener('click', addToFaves);


function loadData( ) {
Promise.all( [ getData( 'users' ), getData( 'recipes' ), getData( 'ingredients' ) ] ).then( data => {
        userList = data[ 0 ].usersData;
        recipeList = data[ 1 ].recipeData;
        ingredientList = data[ 2 ].ingredientsData;
        currentUser = new User( userList[ Math.floor( Math.random() * userList.length ) ] );
        ingredientClass = new Ingredient( ingredientList.map(ingredient => ingredient.id), ingredientList.map(ingredient => ingredient.name), ingredientList.map(ingredient =>  ingredient.estimatedCostInCents) );
        recipeClass = new Recipe( recipeList[0], ingredientList );
        recipeRepository = new RecipeRepository( recipeList );
        displayRandomUserName( );
        displayAllRecipesOnPage( );
    } );
}

function addToFaves (e) {
    const favorites = []
    let recipeCards = recipeCard; //<<<< need this to access the grid conatiner
    //without this, null error persists
    //will need to access both this and an event listener for the faves botton?????
    //how to pull these id's on click on this button to push into array
    newRecipe.recipes.map((favoriteDish) => {
        if(e.target.id == favoriteDish.id) {
            favorites.push(favoriteDish)
        }
    })
    console.log(favorites)
    return favorites
}

// Display random users name on page load
function displayRandomUserName( ) {
    welcomeUserMessage.innerText = `Welcome, ${ currentUser.name.split( ' ' )[ 0 ] }!`
}

// Display all recipes on page
function displayAllRecipesOnPage(  ) {
    let recipeCards = recipeCard;
    newRecipe = new RecipeRepository( recipeList  )
    const result = newRecipe.recipes.map( recipe => {
        // const recipePreview = ( `<section class='recipe-card' id="recipeCard">
        //            <img src="${ recipe.image }" class="recipe-image" alt="">
        //            <h3>${ recipe.name }</h3>
        //            <button>Let's Make It!</button>
        //            <div>
        //               <button>Favorite!</button>
        //               <button>Save it!</button>
        //            </div>
        //        </section>`)
        // return recipePreview;
        return `<section class='recipe-card' id="recipeCard">
        <img src="${ recipe.image }" class="recipe-image" alt="">
        <h3>${ recipe.name }</h3>
        <button id="${ recipe.id }">Let's Make It!</button>
        <div>
        <button class="favorite-button">Favorite!</button>
        <button class="save-button">Save it!</button>
        </div>
        </section>`
    } );
    return recipeCards.innerHTML = result;
    
};


let recipeModal = document.querySelector( '.recipe-modal' );
let recipeContainer = document.querySelector( '.recipe-grid-container' );
let h4 = document.querySelector( '.rec-name' )
let totalCost = document.querySelector( '.dish-cost' )
recipeContainer.addEventListener( 'click' , displayModal );

function show(element) {
    element.classList.remove('hidden')
}

function displayModal( e ){
    newRecipe = new RecipeRepository( recipeList )
    newRecipe.recipes.map(( dish ) => {
        if( e.target.id == dish.id ){
            recipeModal.classList.remove('hidden')
            recipeModal.id = dish.id  
            h4.innerText = dish.name        
            // recipeClass = new Recipe(dish, dish.ingredients)
            // console.log(recipeClass)
            // totalCost.innerText = recipeClass.totalCost
            return 
        }       
    })
}

function assignCost(dish) {
    
}

function hide(element) {
    element.classList.add('hidden')
}


function viewFaves () {

}

//As a user, I should be able to view a list of all recipes.
// As a user, I should be able to click on a recipe to view more information including directions, ingredients needed, and total cost.
// As a user, I should be able to filter recipes by a tag. (Extension option: by multiple tags)
// As a user, I should be able to search recipes by their name. (Extension option: by name or ingredients)

//consider using the filter function written by 
//Farelli in Ideabox: https://github.com/jfarelli/ideabox/blob/main/Idea.js



