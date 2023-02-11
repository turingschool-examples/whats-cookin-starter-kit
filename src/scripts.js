import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import Recipe from './recipe';
import User from './user';
import './images/turing-logo.png'

const miniCardSection = document.getElementById('miniCardSection');
const miniCardList = document.getElementById('miniCardList');

const buttonHome = document.getElementById('homeButton');
const buttonViewAll = document.getElementById('viewAllButton');
const buttonSavedRecipes = document.getElementById('savedRecipesButton')







/*
As a user, I should be able to view a list of all recipes.
As a user, I should be able to click on a recipe to view more information including directions, ingredients needed, and total cost.
As a user, I should be able to filter recipes by a tag. (Extension option: by multiple tags)
As a user, I should be able to search recipes by their name. (Extension option: by name or ingredients)
*/