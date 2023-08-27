//NOTE: Your DOM manipulation will occur in this file

//Here are 2 example functions just to demonstrate one way you can export/import between the two js files. You'll want to delete these once you get your own code going.
// function exampleFunction1(person) {
//   console.log(`oh hi there ${person}`)
// }

// function exampleFunction2(person) {
//   console.log(`bye now ${person}`)
// }

// export {
//   exampleFunction1,
//   exampleFunction2,
// }
import {
  createFunction,
  returnFilteredListName,
  returnIngredientNames,
  returnFilteredTag,
  returnRecipeCost,
  returnRecipeDirections,
} from "../src/scripts.js";

import ingredientsData from "../src/data/ingredients.js";

import recipeData from "../src/data/recipes.js";

import usersData from "../src/data/users.js";

const recipeDisplay = document.querySelector(".recipes");

const modal = document.querySelector(".modal");

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("dom loaded");
  displayRecipes();
});

recipeDisplay.addEventListener("click", () => {
  getRecipeClicked();
  const idClicked = displayRecipes();
  returnRecipeDirections(recipeData, idClicked);
});

function getRecipeClicked() {
  recipeDisplay.addEventListener("click", (event) => {
    return event.target.id;
  });
}

function displayRecipes() {
  let recipeHTML = "";
  recipeData.forEach((recipeEl) => {
    recipeHTML += `<div class="recipe-card">
    <img
      src="${recipeEl.image}"
      alt="recipe-img"
      id=${recipeEl.id}
    />
    <button class="save-recipe-btn">Save Recipe</button>
   </div>`;
  });
  recipeDisplay.innerHTML = recipeHTML;
}

export { displayRecipes, getRecipeClicked };
