import { filterRecipeByTag, getTagRecipeCount } from "../src/tags";
import recipeData from "./data/recipes";
import {
  findRecipeIngredients,
  findRecipeIngredientsQuantity,
  findRecipeInstructions,
} from "./recipes";

//Here is an example function just to demonstrate one way you can export/import between the two js files. You'll want to delete this once you get your own code going.

let recipesToDisplay = [];

const tagsContainer = document.querySelector(".tags-container");
const mainElement = document.getElementById("directory-page");

addEventListener("load", init);
tagsContainer.addEventListener("click", function (e) {
  if (!e.target.classList.contains("tag")) return;

  e.target.classList.toggle("tag-active");
  recipesToDisplay = filterRecipeByTag(getActiveTags());
  displayRecipes(recipesToDisplay);
  updateTagsToDOM();
});

// FUNCTIONS
function init() {
  recipesToDisplay = recipesToDisplay.concat(recipeData);
  displayRecipes(recipesToDisplay);
  updateTagsToDOM();
}

function displayRecipes(dataBase) {
  mainElement.innerHTML = "";
  dataBase.forEach((recipe) => mainElement.append(createRecipeHTML(recipe)));
  console.log(`Displaying recipes now`);
}

// function createRecipeHTML(recipe) {
//   const article = document.createElement("article");
//   article.classList.add("recipe-card");
//   article.setAttribute("data-id", recipe.id);

//   article.innerHTML = `
//     <div class="recipe-image">
//       <img src="${recipe.image}" alt="${recipe.name}">
//     </div>
//     <div class="recipe-info">
//       <div class="tags-and-heart">
//         <h3 class="recipe-tags">${recipe.tags.join(", ")}</h3>
//         <svg class="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//           <!-- SVG content omitted for brevity -->
//         </svg>
//       </div>
//       <h2 class="recipe-name">${recipe.name}</h2>
//       <h3 class="recipe-ingredients"><span class="label">Ingredients:</span> ${findRecipeIngredients(recipe).join(", ")}</h3>
//     </div>`;

//   article.addEventListener("click", () => {
//     displayRecipes([recipe]);
//   });

//   return article;
// }

function createRecipeHTML(recipe) {
  const article = document.createElement("article");
  article.classList.add("recipe-card");
  article.setAttribute("data-id", recipe.id);

  article.innerHTML = `
    <div class="recipe-image">
      <img src="${recipe.image}" alt="${recipe.name}">
    </div>
    <div class="recipe-info">
      <div class="tags-and-heart">
        <h3 class="recipe-tags">${recipe.tags.join(", ")}</h3>
        <svg class="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <!-- SVG content omitted for brevity -->
        </svg>
      </div>
      <h2 class="recipe-name">${recipe.name}</h2>
      <h3 class="recipe-ingredients"><span class="label">Ingredients:</span> ${findRecipeIngredients(
        recipe
      ).join(", ")}</h3>
    </div>`;

  article.addEventListener("click", () => {
    console.log("recipe", recipe.instructions[0]);
    const main = document.querySelector("main");
    main.innerHTML = "";

    const instructionsList = findRecipeInstructions(recipe).reduce(
      (innerHTML, instruction) => {
        innerHTML += `<li>${instruction}</li>`;
        return innerHTML;
      },
      ""
    );

    const ingredientList = findRecipeIngredients(recipe);
    const quantityList = findRecipeIngredientsQuantity(recipe);

    let ingredientQuantityHTML = "";

    ingredientList.forEach((ingredient, index) => {
      ingredientQuantityHTML += `<li>
      <div class="ingredient-name">${ingredient}</div>
      <div class="ingredient-amount">${quantityList[index]}</div>
       </li>`;
    });

    main.innerHTML = `
    <div class="recipe-title">
      <div class="image-container">
        <img src="${recipe.image}" alt="${recipe.name} Image" />
      </div>
      <h1>${recipe.name}</h1>
    </div>

    <div class="instructions">
      <h1>Instructions</h1>
      <ol>${instructionsList}</ol>
    </div>

    <div class="ingredients">
      <h1>Ingredients</h1>
      <ul>${ingredientQuantityHTML}</ul>
    </div>`;
  });

  return article;
}

function getActiveTags() {
  const activeTags = document.querySelectorAll(".tag-active");
  return Array.from(activeTags).map((button) => button.dataset.tag);
}

function updateTagsToDOM() {
  const activeTags = getActiveTags();
  const tagRecipeCount = getTagRecipeCount(activeTags);
  const tagNames = Object.keys(tagRecipeCount);

  tagsContainer.innerHTML = "";
  tagNames.forEach((tagName) => {
    const button = document.createElement("button");
    button.className = "tag";
    if (activeTags.includes(tagName)) button.classList.add("tag-active");
    button.dataset.tag = tagName;
    button.textContent = `${tagName} (${tagRecipeCount[tagName]})`;
    tagsContainer.appendChild(button);
  });
}

export { displayRecipes };
