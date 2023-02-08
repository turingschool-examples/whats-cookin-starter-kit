import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import RecipeRepository from './classes/RecipeRepository';
import Ingredient from './classes/Ingredient';
import Recipe from './classes/Recipe';
import User from './classes/User';

import recipeData from './data/recipes';

const homeButton = document.querySelector('#home-button');
const myFoodButton = document.querySelector('#my-food-button');
const searchBar = document.querySelector('#search-bar');
let cardSection;
const navBar = document.querySelector('nav');
const main = document.querySelector('main');


main.addEventListener('click', checkClick);
navBar.addEventListener('click', checkNavButtons);

console.log(recipeData)


function checkClick(e) {
    if (e.target.dataset.side) {
        e.target.dataset.side === 'front' ? flipToBack(e.target.dataset.index) : flipToFront(e.target.dataset.index)
    } 
 }

function checkNavButtons(e) {
    if (e.target.id === 'home-button') {
        displayHomePage()
    } else if (e.target.id === 'my-food-button') {
        displaySavedFoodPage()
    }
}

function flipToBack(elementIndex) {
    const frontCardToFlip = document.getElementById(`cf${elementIndex}`);
    const backCardToFlip = document.getElementById(`cb${elementIndex}`);
    show(backCardToFlip);
    hide(frontCardToFlip);
    

}

function flipToFront(elementIndex) {
    const frontCardToFlip = document.getElementById(`cf${elementIndex}`);
    const backCardToFlip = document.getElementById(`cb${elementIndex}`);
    show(frontCardToFlip);
    hide(backCardToFlip);
}

function displayHomePage() {
    console.log('workplease')
}

function displaySavedFoodPage() {
    console.log('getoffmylawn')
}

function show(element) {
    element.classList.remove('hidden')
}

function hide(element) {
    element.classList.add('hidden')
}