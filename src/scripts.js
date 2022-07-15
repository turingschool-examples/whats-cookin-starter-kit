import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import "./images/heart.svg"
import RecipeRepository from '../src/classes/RecipeRepository';
import { recipeData } from './data/recipes';
// import { raw } from 'file-loader';
import Recipe from '../src/classes/Recipe'
import { ingredientsData } from './data/ingredients';

const getRandomId = () => {return Math.floor(Math.random()) * 41 + 1}
const users = []

// QuerySelectors
const allRecipesButton = document.querySelector('#recipe-button')
const favoriteButton = document.querySelector('#favorite-button')
const cookbookButton = document.querySelector('#cookbook-button')
const searchBar = document.querySelector('.search-container')
const radioSearchButton = document.querySelector('.radio-search-container')
const viewRecipeButton = document.querySelector('.view-recipe-button')
const addToCookbookButton = document.querySelector('.add-to-cookbook-button')
const cardFavoriteButton = document.querySelector('.favorite-button')
const unFavoriteButton = document.querySelector('.un-favorite-button')

// EventListeners
// favoriteButton.addEventListener('click',)
// cookbookButton.addEventListener('click',)
// radioSearchButton.addEventListener('click',)
// viewRecipeButton.addEventListener('click',)
// addToCookbookButton.addEventListener('click',)
// cardFavoriteButton.addEventListener('click',)
// unFavoriteButton.addEventListener('click',)

// Global Variables
let recipeRepo = new RecipeRepository(recipeData)
const newRecipe = new Recipe(ingredientsData)



function showAllRecipes() {
    recipeRepo.createAllRecipes()
    hide(searchBar)
    // HERE we need to: recipeRepo.allRecipes append to main section of our app
    // want to loop through all recipes somehow, forEach/for loop
    // in order to get it to populate on the DOM
    // inner.HTML
    hide(favoriteButton)
    hide(cookbookButton)
    hide(cardFavoriteButton);
    hide(allRecipesButton);
    hide(addToCookbookButton);
    hide(unFavoriteButton);
    hide(wholeImage);
    show(goBack)
    console.log('IT WOEKS')
    var currentRecipe = new Recipe(data.id, data.image. data.name)
}
// function getRandomCoverPageLoad(event) {
//     var cover = covers[getRandomIndex(covers)]
//     var title = titles[getRandomIndex(titles)]
//     var descriptor1 = descriptors[getRandomIndex(descriptors)]
//     var descriptor2 = descriptors[getRandomIndex(descriptors)]
//     currentCover = new Cover(cover, title, descriptor1, descriptor2)
//     coverImage.src = currentCover.cover
//     coverTitle.innerText = currentCover.title
//     taglineOne.innerText = currentCover.tagline1
//     taglineTwo.innerText = currentCover.tagline2
//   }
//   getRandomCoverPageLoad()

allRecipesButton.addEventListener('click', showAllRecipes, console.log(recipeRepo.createAllRecipes()))

function show(element) {
  element.classList.remove('hidden');
};
function hide(element) {
  element.classList.add('hidden');
}