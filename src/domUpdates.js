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
  returnRecipeTitle,
  returnRecipeTags,
  returnRecipeImgUrl,
  returnListOfUniqueTags,
  returnFilteredRecipeArrayByTagID,
  findRecipeByIngredient,
  findRecipeByName,
  getUserInput,
  saveRecipe,
  deleteRecipe,
} from "../src/functions.js";

//any function nthat needs data, it gets passed the data when it's invoked
/// change to functions

// import ingredientsData from "../src/data/ingredients.js";

// import recipeData from "../src/data/recipes.js";

// import usersData from "../src/data/users.js";

// make this ^ live in scripts.

//VIEWING SAVED RECIPES:

//SAVING A RECIPE

//ON PAGE LOAD

const recipeDisplay = document.querySelector(".recipes");
const tagButtons = document.querySelector(".tag-buttons");

export function displayRecipes(array, innerText) {
  let recipeHTML = "";
  array.forEach((recipeEl) => {
    recipeHTML += `<div class="recipe-card"><div class="title-recipe" id=${recipeEl.id}>${recipeEl.name}</div>
    <img
      src="${recipeEl.image}"
      alt="recipe-img"
      id=${recipeEl.id}
    />
    <button class="save-recipe-btn">${innerText}</button>
   </div>`;
  });
  recipeDisplay.innerHTML = recipeHTML;
}

export function displayTags(array) {
  const tagsArray = returnListOfUniqueTags(array);
  let tagsHtml = "";
  tagsArray.forEach((tagEl) => {
    tagsHtml += `<p><button class="btn" id="${tagEl}">image</button>${tagEl}</p>
    `;
  });
  tagButtons.innerHTML = tagsHtml;
}

// this can stay in here

// USING THE SEARCH BAR:

//CLICKING A TAG ELEMENT

// CLICKING A RECIPE OR A RECIPE NAME
