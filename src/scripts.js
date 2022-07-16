import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import recipeData from './data/recipes'
import ingredientsData from './data/ingredients'
import RecipeRepository from './classes/RecipeRepository';

let recipeRepo = new RecipeRepository()

recipeRepo.importRecipesFromFile(recipeData, ingredientsData)

const resultTemplate = document.querySelector("#mini-recipe-template")
const resultCardsContainer = document.querySelector(".results-grid-container")
const specificRecipeSection = document.getElementById("specific-recipe-section")
const modalCurtain = document.querySelector(".grey-out-bg")
const closeIcon = document.querySelector(".close-icon")
const homeButton = document.querySelector(".home-button")

window.addEventListener("load", displayAllRecipesView)
homeButton.addEventListener('click', displayAllRecipesView)
closeIcon.addEventListener('click', closeSpecificRecipe)

resultCardsContainer.addEventListener('click', specificRecipeClicked)

function specificRecipeClicked(event){
  let specificRecipeId;

  if(event.target.classList.contains("recipe-result")){
    specificRecipeId = event.target.dataset.id;
    findSpecificRecipe(specificRecipeId);    
  } else if(event.target.parentElement.classList.contains("recipe-result")) {
    specificRecipeId = event.target.parentElement.dataset.id;
    findSpecificRecipe(specificRecipeId);    
  }
}

function findSpecificRecipe(recipeID) {
  let specificRecipe = recipeRepo.recipes.find( (recipe) => {
    return recipe.id === parseInt(recipeID)
  })
  displaySpecificRecipe(specificRecipe)
}

function displaySpecificRecipe(recipe){
  console.log(recipe)
  
  specificRecipeSection.querySelector(".title").innerText = recipe.name;
  specificRecipeSection.querySelector(".specific-recipe-image").src = recipe.imageURL;
  specificRecipeSection.querySelector(".specific-recipe-image").src = recipe.imageURL;
  let ingredientsList = specificRecipeSection.querySelector(".ingredients ol")
  let portionNames = recipe.getPortionNames()
  portionNames.forEach( (portionName) => {
    let listItem = document.createElement("li")
    listItem.innerText = capitalize(portionName);
    ingredientsList.append(listItem)
  })
  
  let instructionsList = specificRecipeSection.querySelector(".instructions ol")
  let instructions = recipe.getInstructions()
  instructions.forEach( (instruction) => {
    let listItem = document.createElement("li")
    listItem.innerText = capitalize(instruction);
    instructionsList.append(listItem)
  })

  specificRecipeSection.querySelector(".recipe-cost h5").innerText = "$" + recipe.calcTotalRecipeCost();
  
  show(specificRecipeSection)
  show(modalCurtain)
}

function closeSpecificRecipe(){
  hide(specificRecipeSection)
  hide(modalCurtain)
}

function displayAllRecipesView() {
  console.log("displaying all recipes") // TODO: remove this before merging to main

  resultCardsContainer.replaceChildren()
  recipeRepo.recipes.forEach(
    (recipe) => {
      let recipeCard = makeRecipeCard(recipe)
      addRecipeCardToResultsContainer(recipeCard)
    }
  )
}

function makeRecipeCard(recipe){
  let newCard = resultTemplate.cloneNode(true)
  newCard.removeAttribute("id")

  newCard.dataset.id = recipe.id;

  newCard.querySelector(".recipe-name").innerText = recipe.name;
  newCard.querySelector(".recipe-image").src = recipe.imageURL;

  show(newCard)
  return newCard;
}

function addRecipeCardToResultsContainer(recipeCard){
  resultCardsContainer.appendChild(recipeCard)
}

function hide(domElement){
  domElement.classList.add("hidden")
}

function show(domElement){
  domElement.classList.remove("hidden")
}

function capitalize(string){
  let stringArray = string.split('')
  stringArray[0] = stringArray[0].toUpperCase()
  return stringArray.join("")  
}