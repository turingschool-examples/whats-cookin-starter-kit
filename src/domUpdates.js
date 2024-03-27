import { filterRecipeByTag, getTagRecipeCount } from "../src/tags";
import ingredientsData from "./data/ingredients";
import recipeData from "./data/recipes";
import { findRecipeIngredients } from "./recipes";

let recipesToDisplay = [];
const tagsContainer = document.querySelector(".tags-container");
const mainElement = document.getElementById("directory-page");
let viewChanged = false;

addEventListener("load", init);
tagsContainer.addEventListener("click", function (e) {
  if (!e.target.classList.contains("tag")) return;
  viewChanged = true;
  e.target.classList.toggle("tag-active");
  recipesToDisplay = filterRecipeByTag(getActiveTags(), recipeData);
  displayRecipes(recipesToDisplay);
  updateTagsToDOM();
});
mainElement.addEventListener("scroll", () => {
  if (isSentinelInView()) displayRecipes(recipesToDisplay);
});

// FUNCTIONS
function init() {
  recipesToDisplay = recipesToDisplay.concat(recipeData);
  displayRecipes(recipesToDisplay);
  updateTagsToDOM();
}

const loadMoreRecipes = (function () {
  let currentPage = 1;
  const recipesPerPage = 5;

  return function (recipes) {
    if (viewChanged) {
      viewChanged = false;
      mainElement.scrollTop = 0;
      currentPage = 1;
    }
    currentPage++;
    const recipesToRender = recipes.slice(0, currentPage * recipesPerPage);
    recipesToRender.forEach((recipe) =>
      mainElement.append(createRecipeHTML(recipe))
    );

    const sentinel = document.querySelector(".sentinel");
    if (sentinel) sentinel.remove();
    mainElement.append(createSentinelHTML());
  };
})();

function displayRecipes(recipe_dataset) {
  mainElement.innerHTML = "";
  loadMoreRecipes(recipesToDisplay);
}

function createSentinelHTML() {
  const sentinel = document.createElement("div");
  sentinel.classList.add("sentinel");
  return sentinel;
}

function createRecipeHTML(recipe) {
  const article = document.createElement("article");
  article.classList.add("recipe-card");

  article.innerHTML = `
    <div class="recipe-image">
      <img src="${recipe.image}" alt="${recipe.name}">
    </div>
    <div class="recipe-info">
      <div class="tags-and-heart">
        <h3 class="recipe-tags">${recipe.tags.join(", ")}</h3>
        <svg
        class="heart"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        style="
          fill: rgba(157, 150, 139, 1);
          transform: scaleX(-1);
          msfilter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);
        ">
      </div>
      <h2 class="recipe-name">${recipe.name}</h2>
      <h3 class="recipe-ingredients">
      <span class="label"> ingredients </span>
      ${findRecipeIngredients(recipe, ingredientsData).join(", ")}
    </h3>
    </div>`;

  return article;
}

function getActiveTags() {
  const activeTags = document.querySelectorAll(".tag-active");
  return Array.from(activeTags).map((button) => button.dataset.tag);
}

function updateTagsToDOM() {
  const activeTags = getActiveTags();
  const tagRecipeCount = getTagRecipeCount(activeTags, recipeData);
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

function isSentinelInView() {
  const sentinel = document.querySelector(".sentinel");
  if (!sentinel) return false;
  const rect = sentinel.getBoundingClientRect();
  return rect.top <= window.innerHeight;
}

//laurel's code

export { displayRecipes };
