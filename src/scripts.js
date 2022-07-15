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

window.addEventListener("load", displayAllRecipesView)
document.querySelector(".home-button").addEventListener('click', displayAllRecipesView)

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
  // show(specificRecipeSection)
}

function displayAllRecipesView() {
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
  
  newCard.childNodes.forEach( (node) => {
    if (node.nodeName === "#text") {
      // skip
    } else if (node.classList.contains("recipe-name")){
      node.innerText = recipe.name;
    } else if (node.classList.contains("recipe-image")) {
      node.src = recipe.imageURL;
    }
  })

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