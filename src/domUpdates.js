import {recipeTestData, ingredientTestData, userTestData} from './data/testData.js';
import {calculateCost, determineIngredientNames, recipesToCook, returnInstructions, toggleRecipesToCook} from './recipe.js';

//Query Selectors
const mainRecipe = document.querySelector('.main-recipe');
const favoriteButton = document.querySelector('.favorite-button');  
const tagButtons = document.querySelectorAll('.tag');
const searchButton = document.querySelector('.submit-button');
const userInput = document.querySelector('#search-bar');
const page = {mode: 'home'}
const user = document.querySelector('.user')
let testBox;



// Event Handlers
const viewRecipe = (recipe) => {
  mainRecipe.innerHTML += `
  <section class='recipe-container box' id='${recipe.id}'>
  <img class='recipe-image box' id='${recipe.id}' src='${recipe.image}' alt='${recipe.name}'>
  <h3 class='recipe-text box' id="${recipe.id}">${recipe.name}</h3>
</section>
`
}



const viewAllRecipes = (recipes) => {
  mainRecipe.innerHTML = '';
  if(page.mode === 'home'){
    recipes = recipeTestData
  }else {
    recipes = recipesToCook
  }
  recipes.forEach(recipe => viewRecipe(recipe));

}

const viewRecipeInfo = (e) => {
 if(e.target.classList.contains('box')) {
  const selectedRecipe = recipeTestData.find(recipe => recipe.id === Number(e.target.id))
  mainRecipe.innerHTML= `
  <div class="test">
  <h2 class='recipe-name'> ${selectedRecipe.name}</h2>
  <img class='recipe-img' id='${selectedRecipe.id}' src='${selectedRecipe.image}' alt='${selectedRecipe.name}'>
  <p class='ingredients'>${determineIngredientNames(recipeTestData, ingredientTestData, selectedRecipe.name).join(' -- ')}</p>
  <p class='instructions'>${returnInstructions(selectedRecipe)}</p>
  <p class='cost'>Total cost: $${calculateCost(selectedRecipe)}</p>
  </div>
  `
  }
}

const selectFavoriteRecipes = e => {
  toggleRecipesToCook(e);
}

const filterRecipeByTag = (e, recipes) => {
  if(page.mode === 'home'){
    recipes = recipeTestData
  }else {
    recipes = recipesToCook
  }
  mainRecipe.innerHTML = ''
  recipes.forEach(recipe => {
  if (recipe.tags.includes(e.target.id)) {
    viewRecipe(recipe)
  }
})
 
}

const searchRecipe = (recipes) => {
  mainRecipe.innerHTML = ''
  if(page.mode === 'home'){
    recipes = recipeTestData
  }else {
    recipes = recipesToCook
  }
  
  let input = userInput.value.toLowerCase()
   recipes.forEach(recipe => {
    let recipe1 = recipe.name.toLowerCase()
    if (recipe1.includes(input)) {
      // searchButton.disable = false
      mainRecipe.innerHTML = ''
      
    } 
  })
  if (!input){
    mainRecipe.innerHTML = ''
    viewAllRecipes()   
  }
}

const toggleMode = (e) => {
page.mode = e.target.id
}

const getRandomIndex= (array) => {
  return Math.floor(Math.random() * array.length);
}

const displayRandomUser = () => {
  console.log(userTestData.name)
  user.innerText = userTestData[getRandomIndex(userTestData)].name
}


export {
  viewAllRecipes,
  viewRecipeInfo, 
  mainRecipe, 
  favoriteButton,
  testBox, 
  selectFavoriteRecipes,
  filterRecipeByTag,
  searchRecipe,
  tagButtons,
  searchButton,
  userInput,
  toggleMode, 
  displayRandomUser
}