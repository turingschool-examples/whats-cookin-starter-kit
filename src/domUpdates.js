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

import recipeData from "../src/data/recipes.js";

const recipeDisplay = document.querySelector(".recipes");

document.addEventListener("DOMContentLoaded", (event) => {
  displayRecipes();
});

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

export { displayRecipes };
