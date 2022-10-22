import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import Recipe from './classes/Recipe';
import RecipeRepository from './classes/RecipeRepository';
import Ingredient from './classes/Ingredient';
import ingredientsData from './data/ingredients';
import recipesData from "./data/recipes"

let allIngredients = ingredientsData;
let allRecipes = recipesData.map((recipe) => {
  const newRecipe = new Recipe(recipe);
  newRecipe.retrieveIngredients(allIngredients);
  return newRecipe;
}).sort((a, b) => {
return a.name > b.name ? 1 : -1;
})
let recipeRepository = new RecipeRepository(allRecipes);
console.log(allRecipes)


//query selectors go here
let allRecipesButton = document.querySelector(".all-recipes-button");
let allRecipesPage = document.querySelector(".all-recipes-page");
let homePage = document.querySelector(".home-page");
let currentRecipePage = document.querySelector(".current-recipe");
let searchButton = document.querySelector(".search-button");


//let currentUser;
//keep me
//window.addEventListener("load", selectRandomUser)
allRecipesButton.addEventListener("click", viewAllRecipes)

// function selectRandomUser() {
//   let randomIndex = Math.floor(Math.random() * userRepo.userCatalog.length)
//   let randomUser = userRepo.userCatalog[randomIndex]
//   currenUser = new User(randomUser)
//   console.log(currentUser)
// }


//event listeners go here
allRecipesButton.addEventListener("click", viewAllRecipes);
searchButton.addEventListener("click", searchForRecipes)

//event handlers go here

function viewAllRecipes() {
  console.log(recipeRepository)
    addHidden(homePage)
    removeHidden(allRecipesPage)
    recipeRepository.newRecipes.forEach((recipe) => {
      const newSection = document.createElement('section')
      newSection.className = 'recipe-card-container'
      newSection.innerHTML = `
        <img class="image" id="${recipe.id}" src="${recipe.image}">
        <p class="recipe-name"> ${recipe.name} </p>`

      allRecipesPage.appendChild(newSection)
      newSection.addEventListener('click', seeRecipe)
   });
};


//click on image, grab the recipe and display the whole recipe
//section in html called current recipe
//render recipe will allow a recipe to be displayed in innerHTML of current-recipe
function seeRecipe(event) {
  let visibleRecipe = recipeRepository.newRecipes.find(recipe => {
    return parseInt(event.target.id) === recipe.id
  });
  let fullRecipe = new Recipe(visibleRecipe);
  // let totalCost = recipeInstructions.getCost()
  console.log(fullRecipe.instructions);
  console.log(allIngredients)
  renderRecipe(fullRecipe);

function searchForRecipes() {

}

//other functions go here 

function seeRecipe(event) {
  let visibleRecipe = recipeRepository.newRecipes.find(recipe => {
    return parseInt(event.target.id) === recipe.id
  }); 
  renderRecipe(visibleRecipe);

};

function renderRecipe(recipe) {
  addHidden(allRecipesPage)
  removeHidden(currentRecipePage)

  recipe.retrieveIngredients(allIngredients)


 

  const newSection = document.createElement('section')
    newSection.className = 'recipe-details'
    newSection.innerHTML += `
      <img class="image" src="${recipe.image}">
      <ul>`

    newSection.innerHTML = `<li> ${recipe.instructions} </li>`
    newSection.innerHTML = `<li> ${recipe.ingredients} </li>`
    newSection.innerHTML = `<li> ${recipe.getCost()} </li>

    newSection.innerHTML += renderIngredients(recipe.ingredients)
    newSection.innerHTML += renderInstructions(recipe.instructions)
    newSection.innerHTML += `<li> ${recipe.getCost()} </li>

      </ul>`

    currentRecipePage.appendChild(newSection)
    newSection.addEventListener('click', seeRecipe)

}

function renderInstructions(instructions) {
  let html = "";
  instructions.forEach((item) => {
    html += `<li>${item.instruction}</li>`})

  return `<ol>
  <p>Instructions:</p>
  ${html}
  </ol>`
}

function renderIngredients(ingredients) {
  let html = "";
  ingredients.forEach((item) => {
    html += `<li>${item.quantity.amount} ${item.quantity.unit} ${item.name}</li>`
  })
  return `<ul>
  <p>Ingredients</p>
  ${html}
  </ul>`
}

function addHidden(element) {
    element.classList.add("hidden")
};

function removeHidden(element) {
    element.classList.remove("hidden")
};
