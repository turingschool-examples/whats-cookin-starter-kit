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


window.addEventListener("load", displayAllRecipesView)
document.querySelector(".home-button").addEventListener('click', displayAllRecipesView)

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
  
  newCard.childNodes.forEach( (node) => {
    if (node.nodeName === "#text") {
      // skip
    } else if (node.classList.contains("recipe-name")){
      node.innerText = recipe.name;
    } else if (node.classList.contains("recipe-image")) {
      node.src = recipe.imageURL;
    }
  })

  newCard.classList.remove("hidden")
  return newCard;
}

function addRecipeCardToResultsContainer(recipeCard){
  resultCardsContainer.appendChild(recipeCard)
}



