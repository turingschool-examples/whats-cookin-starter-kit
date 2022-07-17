import './styles.css';
import './images/nav-background.jpg'
import { getData } from './apiCalls';
import User from './classes/User'
import Recipe from './classes/Recipe'
import Ingredient from './classes/Ingredient'
import RecipeRepository from './classes/RecipeRepository'

import MicroModal from 'micromodal';

let userList;
let recipeList;
let recipeClass;
let ingredientList;
let ingredientClass;
let recipeRepository;
let currentUser;
let newRecipe;
let matchingTagConditions = [];
let matchingNameConditions = [];

// Query Selectors <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
let searchButton = document.querySelector(".search-button");
let searchBox = document.querySelector(".recipe-search")
let welcomeUserMessage = document.getElementById( 'welcomeUserMessage' );
let recipeModal = document.querySelector( '.recipe-modal' );
let recipeContainer = document.querySelector( '.recipe-grid-container' );
let h4 = document.querySelector( '.rec-name' );
let instructionText = document.querySelector( '.modal-instructions' );
let totalCost = document.querySelector( '.dish-cost' );
let ingredientText = document.querySelector( '.modal-ingredients')
let recipeCard = document.querySelector(".recipe-grid-container");
let recipeCardGridContainer = document.getElementById("gridContainer")
let closeModalButton = document.getElementById("closeModal")
let navViewProfileButton = document.querySelector('.view-profile-button')
// let 

// Event Listeners <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
searchButton.addEventListener("click", searchRecipe);
window.addEventListener( 'load', loadData );
recipeContainer.addEventListener( 'click' , displayRecipeInfo );
navViewProfileButton.addEventListener( 'click' , showCookingProfile);

//POSSIBLE TO COMBINE EVENT LISTENER METHODS WITH A CONDITIONAL RATHER THAN REWRITING???

recipeCardGridContainer.addEventListener('click', ( e ) => {
    if (e.target.classList == 'save-button') {
      return  saveRecipeToRecipesToCook( e );
    };
}) 

recipeCardGridContainer.addEventListener('click', ( e ) => {
if(e.target.classList == 'remove-button') {
 return deleteRecipeFromRecipesToCook( e );
    };
});

recipeCardGridContainer.addEventListener('click', (e) => {
    if (e.target.classList == 'lets-make-it-button') {
        MicroModal.show('recipeModal');
    }  
})

closeModalButton.addEventListener('click', () => {
    MicroModal.close('recipeModal')
})


function loadData( ) {
Promise.all( [ getData( 'users' ), getData( 'recipes' ), getData( 'ingredients' ) ] ).then( data => {
        userList = data[ 0 ].usersData;
        recipeList = data[ 1 ].recipeData;
        ingredientList = data[ 2 ].ingredientsData;
        currentUser = new User( userList[ Math.floor( Math.random() * userList.length ) ] );
        ingredientClass = new Ingredient( ingredientList.map(ingredient => ingredient.id), ingredientList.map(ingredient => ingredient.name), ingredientList.map(ingredient =>  ingredient.estimatedCostInCents) );
        recipeClass = new Recipe( recipeList, ingredientList );
        recipeRepository = new RecipeRepository( recipeList );
        displayRandomUserName( );
        displayAllRecipesOnPage( );

    } );
}



function displayRandomUserName( ) {
    welcomeUserMessage.innerText = `Welcome, ${ currentUser.name.split( ' ' )[ 0 ] }!`
}


function searchRecipe() {
    if ( !searchBox.value ) {
      displayAllRecipesOnPage( );
    }
    const tagSearched = recipeRepository.filterRecipeByTag( searchBox.value );
    const nameSearched = recipeRepository.filterRecipeByName( searchBox.value);
    if ( tagSearched.length > 0 ) {
        console.log( 'tagSearched: ', tagSearched )
        matchingTagConditions = tagSearched 
        displayFilteredRecipesByTagOnPage(  )

    } else if ( nameSearched.length > 0 ) {
        console.log( 'nameSearched: ', nameSearched )
        matchingNameConditions = nameSearched 
        return displayFilteredRecipesByNameOnPage(  )
    } else {
      return displayAllRecipesOnPage( );
    }
  }


  function displayFilteredRecipesByTagOnPage( ) {
    const result = matchingTagConditions.map( recipe => {
        console.log( 'TAG RECIPE: ', recipe)
        return `<section class='recipe-card' id=${recipe.id}>
        <img src="${ recipe.image }" class="recipe-image" alt="">
        <h3>${ recipe.name }</h3>
        <button class="lets-make-it-button" id="${ recipe.id }">Let's Make It!</button>
        <div>
        <button class="save-button" id= ${ recipe.id }>Save to cooking profile!</button>
        </div>
        </section>`
    } );
    matchingTagConditions = recipeCard;
    return recipeCard.innerHTML = result;
}


function displayFilteredRecipesByNameOnPage( ) {
    const result = matchingNameConditions.map( recipe => {
        console.log( 'NAME RECIPE: ', recipe)
        return `<section class='recipe-card' id=${recipe.id}>
        <img src="${ recipe.image }" class="recipe-image" alt="">
        <h3>${ recipe.name }</h3>
        <button class="lets-make-it-button" id="${ recipe.id }">Let's Make It!</button>
        <div>
        <button id= ${recipe.id} class="save-button">Save to cooking profile!</button>
        </div>
        </section>`
    } );
    // console.log('NEW MATCHING NAMES ARRAY: ', matchingNameConditions )
    matchingNameConditions = recipeCard;
    return recipeCard.innerHTML = result;
}


function displayAllRecipesOnPage( e ) {
    
    let recipeCards = recipeCard;
    newRecipe = new RecipeRepository( recipeList  )
    const result = newRecipe.recipes.map( recipe => {
        return `<section class='recipe-card' id=${recipe.id}>
        <img src="${ recipe.image }" class="recipe-image" alt="">
        <h3>${ recipe.name }</h3>
        <button class="lets-make-it-button" id="${ recipe.id }">Let's Make It!</button>
        <div>
        <button id= ${recipe.id} class="save-button">Save to cooking profile!</button>
        </div>
        </section>`
    } ).join('');
    return recipeCards.innerHTML = result;
};

// recipeContainer.addEventListener( 'click' , displayRecipeInfo );

function show(element) {
    element.classList.remove('hidden');
};

function displayRecipeInfo( e ){
    newRecipe = new RecipeRepository( recipeList )
    newRecipe.recipes.map(( dish ) => {
        if( e.target.id == dish.id ){
            recipeClass = new Recipe( dish, dish.ingredients );
            recipeClass.getIngredientsWithNames(dish.ingredients, ingredientList);
            // console.log('DEEEZ:', dish);
            h4.innerText = dish.name;  
            instructionText.innerText = dish.instructions.map( task => `${ task.number }: ${ task.instruction }` ).join( '  ' );
            ingredientText.innerText = dish.ingredients.map( foodItem => ` ${ ( foodItem.quantity.amount ).toFixed( 2 ) } ${ foodItem.quantity.unit } ${ foodItem.name }` );
            totalCost.innerText = `Total Cost: $${ parseFloat( recipeClass.getCostOfIngredients( dish.ingredients, ingredientList ) * .01 ).toFixed( 2 ) }`;
            return 
        };       
    });
};

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// Save the recipe cards when button is clicked:
//NEED TO ADD A FOCUS TO SHOW WHEN THE RECIPE HAS BEEN SAVED
function saveRecipeToRecipesToCook ( e ) {
    return newRecipe.recipes.filter((favoriteDish) => {
        if((e.target.id == favoriteDish.id) && (!currentUser.recipesToCook.includes(favoriteDish))) {
           currentUser.addRecipeToRecipesToCook(favoriteDish)
        }
        // console.log('SAVED RECIPES: ', currentUser.recipesToCook)
        return currentUser.recipesToCook;
    })
}



// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// Display the saved recipe cards on new page after
// * Need to change 'View My Cooking Profile' button to 'Return to Main Page" when the 
// saved page is displayed
function hide(element) {
    element.classList.add('hidden');
}

function showCookingProfile( e ) {
    if(e.target.innerText == 'View Your Cooking Profile') {
        navViewProfileButton.innerText = "Return Home"
        const result = currentUser.recipesToCook.map( recipe => {
            // console.log('RECIPE: ', recipe)
            return `<section class='recipe-card' id=${recipe.id}>
            <img src=${ recipe.image } class="recipe-image" alt="">
            <h3>${ recipe.name }</h3>
            <button class="lets-make-it-button" id=${ recipe.id }>Let's Make It!</button>
            <div>
            <button id= ${recipe.id} class="remove-button">Remove from cooking profile!</button>
            </div>
            </section>`
        } );
        return recipeCard.innerHTML = result;
    }
    if(e.target.innerText == 'Return Home'){
        returnHome()
    }
}

function deleteRecipeFromRecipesToCook( e ) { 
    if(e.target.classList.contains("remove-button")) {
        newRecipe.recipes.find(removeDish => {
            e.target.closest('section').remove();
            return currentUser.removeRecipeFromRecipesToCook(removeDish.id)
        })  
    };
    return currentUser.recipesToCook
}
//^^^^need to remove commas rendering on page in saved recipes

function returnHome(  ) {
    navViewProfileButton.innerText = "View Your Cooking Profile"
    displayAllRecipesOnPage(  )
}