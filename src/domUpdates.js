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
const recipeCardClose = document.querySelector(".close");
const recipeCardBookmark = document.querySelector(".bookmark");
const tagSection = document.querySelector(".tag-area");
const bookmarkIcon = document.querySelector(".icon-bookmark");
const solidBookmarkIcon = document.querySelector(".solid-bookmark");

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

const buildRecipeCost = (foundRecipe, ingredients) => {
  let cost = calculateCost(foundRecipe, ingredients);
  recipeCost.innerText = `The total cost is $${cost}`;
};

const buildIngredients = (foundRecipe, ingredients) => {
  recipeIngredientsArea.innerHTML = "";
  let recipeIngredients = getIngredientNames(foundRecipe, ingredients);
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

const buildRecipeCard = (recipe, ingredients) => {
  recipeCardBookmark.setAttribute("id", recipe.id);
  buildRecipeTitle(recipe);
  buildRecipeImage(recipe);
  buildRecipeTags(recipe);
  buildRecipeCost(recipe, ingredients);
  buildIngredients(recipe, ingredients);
  buildInstructions(recipe);
  
};

const displayRecipeCard = () => {
  recipeArea.classList.toggle("hidden", true);
  recipeCard.classList.toggle("hidden", false);
  solidBookmarkIcon.classList.toggle("hidden", true);
  tagSection.classList.toggle("hidden", true);
  bookmarkIcon.classList.toggle("hidden", false);

};

const displayRecipeArea = () => {
  recipeArea.classList.toggle("hidden", false);
  recipeCard.classList.toggle("hidden", true);
};

const saveRecipeCard = () => {
  bookmarkIcon.classList.toggle("hidden", true);
  solidBookmarkIcon.classList.toggle("hidden", false);
  tagSection.classList.toggle("hidden", true);
};

const displaySavedRecipeCards = () => {
  tagSection.classList.toggle("hidden", true);
};

const saveRecipe = (id, user, recipes) => {
  let foundRecipe = locateRecipe(id, recipes);
  if (user.savedRecipes.includes(foundRecipe)) {
    let foundRecipeIndex = user.savedRecipes.findIndex((recipe) => {
      return recipe.id === foundRecipe.id;
    });
    user.savedRecipes.splice(foundRecipeIndex, 1);
  } else {
    user.savedRecipes.push(foundRecipe);
  }
  // deleteRecipeCard()
  saveRecipeCard();
  solidBookmarkIcon.classList.toggle("hidden", false);
};

const saveRecipe2 = (id, user) => {
  // locate recipe 
  // push recipe into
}

const deleteRecipe = (id, user) => {
  // locate recipe 
  // find the index of the recipe 
  // splice it out 
}


const displayRecipeTag = (id, currentUser) => {
  // locate the id that is currently on dislay
  // if that recipe id is in saved recipes display filled in tag 
  // if recipe not there show the empty one 

}

export {
  createRecipeCards,
  locateRecipe,
  buildRecipeTitle,
  buildRecipeTags,
  buildRecipeCard,
  buildRecipeCost,
  displayRecipeCard,
  displayRecipeArea,
  saveRecipe,
  displayRecipeTag,
  displaySavedRecipeCards
};
