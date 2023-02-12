import './styles.css';
import fetchAll from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import Recipe from './classes/recipe';
import User from './classes/user';
import RecipeRepository from './classes/RecipeRepository';
import './images/turing-logo.png'


let userData;
let ingredientsData;
let recipeRolodex;
let userProfile;


const recipeContainer = document.querySelector('.recipe-container');
const miniCardSection = document.getElementById('miniCardSection');
const miniCardList = document.getElementById('miniCardList');
const defaultView = document.getElementById('mainScreen');
const overlay = document.querySelector('.overlay');

const buttonHome = document.getElementById('homeButton');
const buttonViewAll = document.getElementById('viewAllButton');
const buttonSavedRecipes = document.getElementById('savedRecipesButton');

const buttonSearch = document.getElementById('searchBtn');
const searchBar = document.getElementById('search-bar');

buttonSearch.addEventListener('click', searchForRecipe);


// const searchForRecipe = () => {
//     let input = searchBar.value
//     RecipeRepository.getRecipeByTag(input)
//     RecipeRepository.getRecipeByName(input)
// }

window.addEventListener('load', () => {
    fetchAll()
    .then(data => {
        const idNum = getRandomUserId()
        // console.log(data[0])
        userProfile = new User(data[0].usersData.find(user => user.id === idNum))
        console.log('user profile:', userProfile)

    // ingredientsData = allApis[1]
    recipeRolodex = new RecipeRepository(data[2].recipeData)
    // console.log(recipeRolodex)
    viewHomePage()
    }) 
});

buttonSearch.addEventListener('click', function() {
    let input = searchBar.value
    searchForRecipe(input)
});


// STUFF WE NEED:
//  save button on recipe
//  



function getRandomUserId(){
    return Math.floor(Math.random() * 41);
}

function searchForRecipe() {
    let input = searchBar.value
    if(recipeRolodex.getRecipeByTag(input).length > 0) {
      viewRecipesByTag(input)
    } 
    else if(recipeRolodex.getRecipeByName(input).length > 0){
        viewRecipeByName(input)
      } else { 
           "Cool Shiba says, no. Try again."
  }
};

function show(element) {
  element.classList.remove('hidden');
};
function hide(element) {
  element.classList.add('hidden');
};

const viewHomePage = () => {
//   let recipeData = data[2].recipeData;
//   console.log(recipeRolodex) 
  let recipeHTML = recipeRolodex.recipes.map(recipe => `
    <article class="recipe">
      <h2 class="recipe-title">${recipe.name}</h2>
      <img class="recipe-image" src="${recipe.image}" alt="${recipe.name}">
    </article>
  `).join('');
  recipeContainer.innerHTML = recipeHTML;
}

function viewRecipesByTag(tag) {
  let tagHTML = recipeRolodex.getRecipeByTag(tag).map(recipe => ` <article class="recipe">
  <h2 class="recipe-title">${recipe.name}</h2>
  <img class="recipe-image" src="${recipe.image}" alt="${recipe.name}">
</article>`).join('')
recipeContainer.innerHTML = tagHTML;
}

function viewRecipeByName(name){
  let nameHTML = recipeRolodex.getRecipeByName(name)(recipe => ` <article class="recipe">
  <h2 class="recipe-title">${recipe.name}</h2>
  <img class="recipe-image" src="${recipe.image}" alt="${recipe.name}">
</article>`)
recipeContainer.innerHTML = nameHTML;
}





/*
As a user, I should be able to view a list of all recipes.
As a user, I should be able to click on a recipe to view more information including directions, ingredients needed, and total cost.
As a user, I should be able to filter recipes by a tag. (Extension option: by multiple tags)
As a user, I should be able to search recipes by their name. (Extension option: by name or ingredients)
*/