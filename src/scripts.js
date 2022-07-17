import "./styles.css";
import apiCalls from "./apiCalls";
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import "./images/turing-logo.png";
import recipeData from "./data/recipes";
import ingredientsData from "./data/ingredients";
import usersData from "./data/users";
import RecipeRepository from "./classes/RecipeRepository";
import User from "./classes/User";

const recipeRepo = new RecipeRepository();
const user = new User(usersData[Math.floor(Math.random() * 41)]);

recipeRepo.importRecipesFromFile(recipeData, ingredientsData);

const resultTemplate = document.querySelector("#mini-recipe-template");
const resultCardsContainer = document.querySelector(".results-grid-container");
const greeting = document.querySelector(".greeting");
const header = document.querySelector(".results-header");
//const results = document.querySelector(".results");
const favoriteBtn = document.querySelector(".favorite-button");
//resultTemplate.addEventListener("click", removeUserRecipes);
//heartBtn.addEventListener("click", removeUserRecipes);
window.addEventListener("load", displayAllRecipesView);
document.querySelector(".results").addEventListener("click", removeUserRecipes);
document
  .querySelector(".mini-card")
  .addEventListener("click", removeUserRecipes);
document
  .querySelector(".home-button")
  .addEventListener("click", displayAllRecipesView);
document
  .querySelector(".my-recipes")
  .addEventListener("click", displayUserRecipes);
// document
//   .querySelector(".my-pantry")
//   .addEventListener("click", displayUserPantry);

function populateTest() {
  user.addRecipeToCook(recipeRepo.recipes[8]);
  user.addRecipeToCook(recipeRepo.recipes[4]);
  user.addRecipeToCook(recipeRepo.recipes[22]);
}

// function addUserRecipes() {
// }

function addUserRecipes(event) {
  let clickedCardId = event.currentTarget.id;
 recipeRepo.forEach((recipe) => {
    if (recipe.id === clickedCardId) {
      return user.recipesToCook.push(recipe)
    }
  });
  //displayUserRecipes();
}

function removeUserRecipes(event) {
  let clickedCardId = event.currentTarget.id;
  console.log(event.currentTarget);
  user.recipesToCook.forEach((recipe) => {
    if (recipe.id === clickedCardId) {
      return user.recipesToCook.splice(recipe, 1);
    }
  });
  //displayUserRecipes();
}

function displayUserRecipes() {
  greeting.innerText = ``;
  header.innerText = `${user.name}'s recipes!`;
  resultCardsContainer.replaceChildren();
  user.recipesToCook.forEach((recipe) => {
    let recipeCard = makeRecipeCard(recipe);
    addRecipeCardToResultsContainer(recipeCard);
  });
}

// function displayUserPantry() {
// user.pantry.forEach((pantryItem) => {
//     ingredientsData.forEach((ingredient) => {
//       console.log(ingredient.name)
//       if (pantryItem.ingredient === ingredient.id) {
//         return pantryItem.ingredient = ingredientsData.name
//       }
//     });
// })
// console.log("event", user.pantry);
// return user.pantry;
// }

function displayAllRecipesView() {
  greeting.innerText = `Welcome, ${user.name}!`;
  header.innerText = `All Recipes!`;
  resultCardsContainer.replaceChildren();
  recipeRepo.recipes.forEach((recipe) => {
    let recipeCard = makeRecipeCard(recipe);
    addRecipeCardToResultsContainer(recipeCard);
  });
  populateTest();
}

function makeRecipeCard(recipe) {
  let newCard = resultTemplate.cloneNode(true);
  //newCard.removeAttribute("id")

  newCard.childNodes.forEach((node) => {
    if (node.nodeName === "#text") {
      // skip
    } else if (node.classList.contains("recipe-name")) {
      node.innerText = recipe.name;
    } else if (node.classList.contains("recipe-image")) {
      node.src = recipe.imageURL;
      node.id = recipe.id;
    } else if (node.classList.contains("mini-card recipe-result")) {
      node.id = recipe.id;
    }
  });
  newCard.classList.remove("hidden");
  return newCard;
}

function addRecipeCardToResultsContainer(recipeCard) {
  resultCardsContainer.appendChild(recipeCard);
}
