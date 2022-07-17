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
var testEvent;
recipeRepo.importRecipesFromFile(recipeData, ingredientsData);

const resultTemplate = document.querySelector("#mini-recipe-template");
const resultCardsContainer = document.querySelector(".results-grid-container");
const specificRecipeSection = document.getElementById(
  "specific-recipe-section"
);
const modalCurtain = document.querySelector(".grey-out-bg");
//const greeting = document.querySelector(".greeting");
const closeIcon = document.querySelector(".close-icon");
const homeButton = document.querySelector(".home-button");
//const header = document.querySelector(".results-header");
//const results = document.querySelector(".results");
const saveIcon = document.querySelector(".save-recipe-icon");
//resultTemplate.addEventListener("click", removeUserRecipes);
//heartBtn.addEventListener("click", removeUserRecipes);
window.addEventListener("load", displayAllRecipesView);
homeButton.addEventListener("click", displayAllRecipesView);
closeIcon.addEventListener("click", closeSpecificRecipe);
saveIcon.addEventListener("click", specificRecipeClicked);
// document.querySelector(".results").addEventListener("click", removeUserRecipes);
resultCardsContainer.addEventListener("click", specificRecipeClicked);
// document
//   .querySelector(".mini-card")
//   .addEventListener("click", removeUserRecipes);
// document
//   .querySelector(".home-button")
//   .addEventListener("click", displayAllRecipesView);
// document
//   .querySelector(".my-recipes")
//   .addEventListener("click", displayUserRecipes);
// document
//   .querySelector(".my-pantry")
//   .addEventListener("click", displayUserPantry);

// function populateTest() {
//   user.addRecipeToCook(recipeRepo.recipes[8]);
//   user.addRecipeToCook(recipeRepo.recipes[4]);
//   user.addRecipeToCook(recipeRepo.recipes[22]);
// }

// function addUserRecipes(event) {
//   let clickedCardId = event.currentTarget.id;
//  recipeRepo.forEach((recipe) => {
//     if (recipe.id === clickedCardId) {
//       return user.recipesToCook.push(recipe)
//     }
//   });
// displayUserRecipes();
// }

// function removeUserRecipes(event) {
//   let clickedCardId = event.currentTarget.id;
//   console.log(event.currentTarget);
//   user.recipesToCook.forEach((recipe) => {
//     if (recipe.id === clickedCardId) {
//       return user.recipesToCook.splice(recipe, 1);
//     }
//   });
//   //displayUserRecipes();
// }

function addUserRecipes(recipe) {
  user.addRecipeToCook(recipe);
  console.log(user.recipesToCook);
}

function specificRecipeClicked(event) {

  let recipeID = getRecipeIdFromClickEvent(event);
  let specificRecipe = findSpecificRecipe(recipeID);
  if (event.target.classList.contains("favorite-button")) {
    addUserRecipes(specificRecipe);
  } else {
    displaySpecificRecipe(specificRecipe);
  }
}

function getRecipeIdFromClickEvent(event) {
  let specificRecipeId = event.target.closest("[data-id]").dataset.id;
  return specificRecipeId;
}

function findSpecificRecipe(recipeID) {
  let specificRecipe = recipeRepo.recipes.find((recipe) => {
    return recipe.id === parseInt(recipeID);
  });
  return specificRecipe;
}

function displaySpecificRecipe(recipe) {
  updateSpecificRecipeCard(recipe);
  show(specificRecipeSection);
  show(modalCurtain);
}

function updateSpecificRecipeCard(recipe) {
  specificRecipeSection.querySelector(".title").innerText = recipe.name;
  specificRecipeSection.querySelector(".save-recipe-icon").dataset.id =
    recipe.id;
  specificRecipeSection.querySelector(".specific-recipe-image").src =
    recipe.imageURL;
  updateSpecificRecipeIngredients(recipe);
  updateSpecificRecipeInstructions(recipe);
  specificRecipeSection.querySelector(".recipe-cost h5").innerText =
    "$" + recipe.calcTotalRecipeCost();
}

function updateSpecificRecipeIngredients(recipe) {
  let ingredientsList = specificRecipeSection.querySelector(".ingredients ol");
  ingredientsList.replaceChildren();
  let portionNames = recipe.getPortionNames();
  portionNames.forEach((portionName) => {
    let listItem = document.createElement("li");
    listItem.innerText = capitalize(portionName);
    ingredientsList.append(listItem);
  });
}

function updateSpecificRecipeInstructions(recipe) {
  let instructionsList =
    specificRecipeSection.querySelector(".instructions ol");
  instructionsList.replaceChildren();
  let instructions = recipe.getInstructions();
  instructions.forEach((instruction) => {
    let listItem = document.createElement("li");
    listItem.innerText = capitalize(instruction);
    instructionsList.append(listItem);
  });
}

function closeSpecificRecipe() {
  hide(specificRecipeSection);
  hide(modalCurtain);
}

// function displayUserRecipes() {
//   greeting.innerText = ``;
//   header.innerText = `${user.name}'s recipes!`;
//   resultCardsContainer.replaceChildren();
//   user.recipesToCook.forEach((recipe) => {
//     let recipeCard = makeRecipeCard(recipe);
//     addRecipeCardToResultsContainer(recipeCard);
//   });
// }

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
  //greeting.innerText = `Welcome, ${user.name}!`;
  // header.innerText = `All Recipes!`;
  resultCardsContainer.replaceChildren();
  recipeRepo.recipes.forEach((recipe) => {
    let recipeCard = makeRecipeCard(recipe);
    addRecipeCardToResultsContainer(recipeCard);
  });
}

function makeRecipeCard(recipe) {
  let newCard = resultTemplate.cloneNode(true);
  newCard.removeAttribute("id");
  newCard.dataset.id = recipe.id;
  newCard.querySelector(".recipe-name").innerText = recipe.name;
  newCard.querySelector(".recipe-image").src = recipe.imageURL;
  show(newCard);
  return newCard;
}

function addRecipeCardToResultsContainer(recipeCard) {
  resultCardsContainer.appendChild(recipeCard);
}

function hide(domElement) {
  domElement.classList.add("hidden");
}

function show(domElement) {
  domElement.classList.remove("hidden");
}

function capitalize(string) {
  let stringArray = string.split("");
  stringArray[0] = stringArray[0].toUpperCase();
  return stringArray.join("");
}
