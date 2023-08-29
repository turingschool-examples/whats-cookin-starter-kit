import recipeData from "./data/recipes.js";
import ingredientsData from "./data/ingredients.js";

const recipeArea = document.querySelector(".recipe-area");
const recipeTitle = document.querySelector("#recipeCardTitle");
const recipeTagArea = document.querySelector("#recipeCardTags");
const recipeIngredientsArea = document.querySelector("#recipeCardIngredients");
const recipeCost = document.querySelector("#recipeCardTotalCost");
const recipeImageSection = document.querySelector("#recipeImageSection");
const recipeCard = document.querySelector("#recipeCardBlowup");
const recipeInstructionsSection = document.querySelector(
  "#recipeCardInstructions"
);

import { getIngredientNames, calculateCost } from "../src/recipes.js";

const createRecipeCards = (recipes) => {
  recipeArea.innerHTML = "";
  recipes.forEach((recipe) => {
    let recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");
    recipeCard.setAttribute("id", recipe.id);
    let recipeTitle = document.createElement("h2");
    recipeTitle.classList.add("recipe-title");
    recipeCard.appendChild(recipeTitle);
    recipeTitle.innerText = recipe.name;
    let recipeImage = document.createElement("img");
    recipeImage.classList.add("recipe-image");
    recipeImage.setAttribute("src", recipe.image);
    recipeCard.appendChild(recipeImage);
    recipeArea.appendChild(recipeCard);
  });
};

const locateRecipe = (recipeId, recipes) => {
  let formatRecipeId = Number(recipeId);
  let foundRecipe = recipes.find((recipe) => {
    return recipe.id === formatRecipeId;
  });
  return foundRecipe;
};

const buildRecipeTitle = (foundRecipe) => {
  recipeTitle.innerText = foundRecipe.name;
};

const buildRecipeImage = (foundRecipe) => {
  recipeImageSection.innerHTML = "";
  let recipeImage = document.createElement("img");
  recipeImage.classList.add("recipe-image-blowup");
  recipeImage.setAttribute("src", foundRecipe.image);
  recipeImageSection.appendChild(recipeImage);
  // need to eventually set alt text attr.
};

const buildRecipeTags = (foundRecipe) => {
  recipeTagArea.innerHTML = "";
  foundRecipe.tags.forEach((tag) => {
    let recipeTag = document.createElement("div");
    recipeTag.classList.add("recipe-tag");
    let recipeTagText = document.createElement("p");
    recipeTagText.innerText = tag;
    recipeTag.appendChild(recipeTagText);
    recipeTagArea.appendChild(recipeTag);
  });
};

const buildRecipeCost = (foundRecipe) => {
  let cost = calculateCost(foundRecipe, ingredientsData);
  recipeCost.innerText = `The total cost is $${cost}`;
};

const buildIngredients = (foundRecipe) => {
  recipeIngredientsArea.innerHTML = "";
  let recipeIngredients = getIngredientNames(foundRecipe, ingredientsData);
  recipeIngredients.forEach((ingredient) => {
    let recipeIngredient = document.createElement("p");
    recipeIngredient.innerText = ingredient;
    recipeIngredientsArea.appendChild(recipeIngredient);
  });
};

const buildInstructions = (foundRecipe) => {
  recipeInstructionsSection.innerHTML = "";
  foundRecipe.instructions.forEach((instruction) => {
    let recipeInstruction = document.createElement("p");
    recipeInstruction.innerText = `Step ${instruction.number}. ${instruction.instruction}`;
    recipeInstructionsSection.appendChild(recipeInstruction);
  });
};

const buildRecipeCard = (recipe) => {
  buildRecipeTitle(recipe);
  buildRecipeImage(recipe);
  buildRecipeTags(recipe);
  buildRecipeCost(recipe);
  buildIngredients(recipe);
  buildInstructions(recipe);
};

const displayRecipeCard = () => {
  recipeArea.classList.toggle("hidden", true);
  recipeCard.classList.toggle("hidden", false);
};

const displayRecipeArea = () => {
  recipeArea.classList.toggle("hidden", false);
  recipeCard.classList.toggle("hidden", true);
};

export {
  createRecipeCards,
  locateRecipe,
  buildRecipeTitle,
  buildRecipeTags,
  buildRecipeCard,
  buildRecipeCost,
  displayRecipeCard,
  displayRecipeArea,
};
