import { returnListOfUniqueTags } from "../src/functions.js";

const recipeDisplay = document.querySelector(".recipes");
const tagButtons = document.querySelector(".tag-buttons");

export function displayRecipes(recipes, innerText) {
  let recipeHTML = ``;
  recipes.forEach((recipeEl) => {
    recipeHTML += `<div tabindex="0" class="recipe-card" id="${recipeEl.id}"><div class="title-recipe" id="${recipeEl.id}">${recipeEl.name}</div>
    <img
      src="${recipeEl.image}"
      alt="${recipeEl.image}"
      id="${recipeEl.id}"
    />
    <button class="save-recipe-btn">${innerText}</button>
    </div>`;
  });
  recipeDisplay.innerHTML = recipeHTML;
}

export function displayTags(recipes) {
  const tags = returnListOfUniqueTags(recipes);
  let tagsHtml = "";
  tags.forEach((tagEl) => {
    tagsHtml += `<div><img tabindex="0" class="tag-btn" alt="${tagEl}" id="${tagEl}" src="/images/${tagEl}.png"><p>${tagEl}</p></div>
    `;
  });
  tagButtons.innerHTML = tagsHtml;
}

export function displayFilteredRecipes(recipeData, currentUserRecipes) {
  // store user recipes ids
  const savedRecipeIDs = currentUserRecipes.map((userRecipe) => userRecipe.id);

  // display on html
  let filteredRecipeHTML = ``;
  let innerText = ``;
  let buttonClass = ``;

  recipeData.forEach((recipe) => {
    // changing innerText and setting buttonClass for DOM
    const isSaved = savedRecipeIDs.includes(recipe.id);
    if (isSaved) {
      innerText = `✓ Saved`;
      buttonClass = "is-saved";
    } else {
      innerText = `Save Recipe`;
      buttonClass = "is-not-saved";
    }

    filteredRecipeHTML += `<div class="recipe-card"><div class="title-recipe" id=${recipe.id}>${recipe.name}</div>
    <img
      src="${recipe.image}"
      alt="recipe-img"
      id=${recipe.id}
    />
    <button class="save-recipe-btn ${buttonClass}">${innerText}</button>
    </div>`;
  });

  recipeDisplay.innerHTML = filteredRecipeHTML;
}
