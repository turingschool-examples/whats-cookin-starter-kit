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
const searchBar = document.getElementById('searchBar');

// buttonSearch.addEventListener('click', searchForRecipe);

// const searchForRecipe = () => {
//     let input = searchBar.value
//     RecipeRepository.getRecipeByTag(input)
//     RecipeRepository.getRecipeByName(input)
// }

window.addEventListener('load', () => {
    fetchAll()
    .then(data => {
    const idNum = getRandomUserId()
    userProfile = new User(data[0].usersData.find(user => user.id === idNum))
    console.log('user profile:', userProfile)
    // ingredientsData = allApis[1]
    recipeRolodex = new RecipeRepository(data[2].recipeData)
    console.log(recipeRolodex)
    viewHomePage()
    }) 
});

buttonSearch.addEventListener('click', function() {
  if (searchBar.value.startsWith("#")) {
      searchForRecipeTag(searchBar.value.slice(1))
  } else {
      searchForRecipeName(searchBar.value)
  }
});

function searchForRecipeName(input) {
  const recipeNameFound = recipeRolodex.getRecipeByName(input)
if(input.length > 0) {
  recipeContainer.innerHTML = ""
  viewRecipesByName(recipeNameFound)
} else {
  recipeContainer.innerHTML = `<h2>Cool Shiba says, no. Try again.</h2>`
  }
}

function searchForRecipeTag(input) {
    const recipeFound = recipeRolodex.getRecipeByTag(input)
    console.log("recipe found:", recipeFound)
  // console.log("recipe repository:", recipeRolodex)
    if(input.length > 0) {
    console.log("here", recipeRolodex.getRecipeByTag(input).length)
    recipeContainer.innerHTML = ""
    viewRecipesByTag(recipeFound)
    } else { 
    recipeContainer.innerHTML = `<h2>Cool Shiba says, no. Try again.</h2>`
  }
} 


// else if(recipeRolodex.getRecipeByName(input).length > 0){
//   viewRecipeByName(input)

function getRandomUserId(){
    return Math.floor(Math.random() * 41);
};

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};

const viewHomePage = () => {
  let recipeHTML = recipeRolodex.recipes.map(recipe => `
    <article class="recipe">
      <h2 class="recipe-title">${recipe.name}</h2>
      <img class="recipe-image" src="${recipe.image}" alt="${recipe.name}">
    </article>
  `).join('');
  recipeContainer.innerHTML = recipeHTML;
};

function viewRecipesByTag(recipeTag) {
  // console.log("tag name:", recipeTag.name)
  const searchTag = recipeTag.forEach(recipe => {
  recipeContainer.innerHTML += ` 
    <article class="recipe">
      <h2 class="recipe-title">${recipe.name}</h2>
      <img class="recipe-image" src="${recipe.image}" alt="${recipe.name}">   
    </article>`
  });
  return searchTag
};

function viewRecipesByName(recipeTag){
console.log("recipe name:", recipeTag.name)
const searchName = recipeTag.forEach(recipe => {
  recipeContainer.innerHTML += `
  <article class="recipe">
      <h2 class="recipe-title">${recipe.name}</h2>
      <img class="recipe-image" src="${recipe.image}" alt="${recipe.name}">   
    </article>
  `
});
return searchName
};


/*
As a user, I should be able to view a list of all recipes.
As a user, I should be able to click on a recipe to view more information including directions, ingredients needed, and total cost.
As a user, I should be able to filter recipes by a tag. (Extension option: by multiple tags)
As a user, I should be able to search recipes by their name. (Extension option: by name or ingredients)
*/