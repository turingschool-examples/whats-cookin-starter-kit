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
  returnListOfUniqueTags,
} from "../src/functions.js";

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
    tagsHtml += `<div><button class="btn" id="${tagEl}"></button><p>${tagEl}</p></div>
    `;
  });
  tagButtons.innerHTML = tagsHtml;
}

// this can stay in here

// USING THE SEARCH BAR:

//CLICKING A TAG ELEMENT

// CLICKING A RECIPE OR A RECIPE NAME
