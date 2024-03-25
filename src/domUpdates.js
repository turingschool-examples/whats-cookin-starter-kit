//NOTE: Your DOM manipulation will occur in this file

import recipeData from "./data/recipes"

//Here is an example function just to demonstrate one way you can export/import between the two js files. You'll want to delete this once you get your own code going.

const recipeTags = document.querySelectorAll('.recipe-tags')
const recipeName = document.querySelectorAll('.recipe-name')
const recipeIngredients = document.querySelectorAll('.recipe-ingredients')

function displayRecipeTags(recipeData) {
  recipeData.forEach((recipe, index) => {
    const tagsElement = recipeTags[index];
    tagsElement.innerText = '';

    recipe.tags.forEach(tag => {
      const tagSpan = document.createElement('span');
      tagSpan.innerText = tag;
      tagsElement.appendChild(tagSpan);
    });
  });
}

function displayRecipeNames(recipeData){
  recipeData.forEach((recipe, index) => {
    const nameElement = recipeName[index];
    nameElement.innerText = recipe.name;
  })
}

displayRecipeTags(recipeData)
displayRecipeNames(recipeData)




export {
  displayRecipeTags,
}