import { returnListOfUniqueTags } from "../src/functions.js";

const recipeDisplay = document.querySelector(".recipes");
const tagButtons = document.querySelector(".tag-buttons");

export function displayRecipes(recipes, innerText) {
  let recipeHTML = ``;
  recipes.forEach((recipeEl) => {
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

export function displayTags(recipes) {
  const tags = returnListOfUniqueTags(recipes);
  let tagsHtml = "";
  tags.forEach((tagEl) => {
    tagsHtml += `<div><img class="tag-btn" id="${tagEl}" src="/images/${tagEl}.png"><p>${tagEl}</p></div>
    `;
  });
  tagButtons.innerHTML = tagsHtml;
}