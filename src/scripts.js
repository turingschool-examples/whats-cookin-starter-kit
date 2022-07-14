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


let welcomeUserMessage = document.getElementById( 'welcomeUserMessage' );
window.addEventListener( 'load', loadData );

function loadData( ) {
    Promise.all( [ getData( 'users' ), getData( 'recipes' ), getData( 'ingredients' ) ] ).then( data => {
        userList = data[ 0 ].usersData;
        recipeList = data[ 1 ].recipeData;
        ingredientList = data[ 2 ].ingredientsData;
        currentUser = new User( userList[ Math.floor( Math.random() * userList.length ) ] );
        ingredientClass = new Ingredient( ingredientList.map(ingredient => ingredient.id), ingredientList.map(ingredient => ingredient.name), ingredientList.map(ingredient =>  ingredient.estimatedCostInCents) );
        recipeClass = new Recipe( recipeList[0], ingredientList )
        recipeRepository = new RecipeRepository( recipeList );
        displayRandomUserName( );
        displayAllRecipesOnPage( );
    } );
}


// Display random users name on page load
function displayRandomUserName( ) {
    welcomeUserMessage.innerText = `Welcome, ${ currentUser.name.split( ' ' )[ 0 ] }!`
}

// Display all recipes on page
function displayAllRecipesOnPage(  ) {
    let recipeCard = document.querySelector(".recipe-grid-container")
    let newRecipe = new RecipeRepository( recipeList  )
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
                   <button>Let's Make It!</button>
                   <div>
                      <button>Favorite!</button>
                      <button>Save it!</button>
                   </div>
               </section>`
   } );
   const recipeInfo = recipeCard;
   recipeInfo.innerHTML = result;
   return recipeInfo
}



//As a user, I should be able to view a list of all recipes.
// As a user, I should be able to click on a recipe to view more information including directions, ingredients needed, and total cost.
// As a user, I should be able to filter recipes by a tag. (Extension option: by multiple tags)
// As a user, I should be able to search recipes by their name. (Extension option: by name or ingredients)

//consider using the filter function written by 
//Farelli in Ideabox: https://github.com/jfarelli/ideabox/blob/main/Idea.js



