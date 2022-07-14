import './styles.css';
import { getData } from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import Ingredient from './classes/Ingredient.js'
import Recipe from './classes/Recipe.js'
import RecipeRepository from './classes/RecipeRepository.js'
import User from './classes/User.js'

let userData;
let recipesData;
let ingredientData;
let userRepository;
let recipeRepository;
let ingredientRepository;

function loadData( ) {
    Promise.all( [ getData( 'users' ), getData( 'recipes' ), getData( 'ingredients' ) ] ).then( data => {
        userData = data[ 0 ].usersData;
        recipesData = data[ 1 ].recipeData;
        console.log( recipesData)
        ingredientData = data[ 2 ].ingredientsData;
        userRepository = new User( userData );
        recipeRepository = new RecipeRepository( recipesData );
        ingredientRepository = new Ingredient( ingredientData );

    } );
}
loadData();


//As a user, I should be able to view a list of all recipes.
// As a user, I should be able to click on a recipe to view more information including directions, ingredients needed, and total cost.
// As a user, I should be able to filter recipes by a tag. (Extension option: by multiple tags)
// As a user, I should be able to search recipes by their name. (Extension option: by name or ingredients)

//consider using the filter function written by 
//Farelli in Ideabox: https://github.com/jfarelli/ideabox/blob/main/Idea.js



// function getRandomUser( traveler ) {
//     const randomUserIndex = Math.floor( Math.random() * traveler.length )
//     console.log(traveler[ randomUserIndex ])
//     return traveler[ randomUserIndex ]
// }