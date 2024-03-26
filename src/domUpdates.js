import { filterRecipeByTag, getAvailableTags } from "../src/tags";
import recipeData from "./data/recipes";
import { findRecipeIngredients } from "./recipes";

//Here is an example function just to demonstrate one way you can export/import between the two js files. You'll want to delete this once you get your own code going.

let recipesToDisplay = [];
const tagsContainer = document.querySelector(".tags-container");

addEventListener("load", init);
tagsContainer.addEventListener("click", function (e) {
  if (!e.target.classList.contains("tag")) return;

  e.target.classList.toggle("tag-active");
  const activeTags = Array.from(this.querySelectorAll(".tag-active")).map(
    (button) => button.dataset.tag
  );
  const filteredRecipes = filterRecipeByTag(activeTags);
  filteredDomRecipes(filteredRecipes);
});

// FUNCTIONS
function init() {
  recipesToDisplay = recipesToDisplay.concat(recipeData);
}

const displayRecipes = (dataBase) => {
  const mainElement = document.getElementById("directory-page");
  mainElement.innerHTML = "";
  dataBase.forEach((recipe) => mainElement.append(createRecipeHTML(recipe)));
  console.log(`Displaying recipes now`);
};

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
      ${findRecipeIngredients(recipe).join(", ")}
    </h3>
    </div>`;

  return article;
}

function filteredDomRecipes(recipeData) {
  const mainElement = document.getElementById("directory-page");
  mainElement.innerHTML = "";

  recipeData.forEach((recipe) => mainElement.append(createRecipeHTML(recipe)));
}

const updateTagsToDOM = () => {
  const currentlyDisplayedRecipes = [];
  const recipeTags = getAvailableTags(currentlyDisplayedRecipes);
  const tagsContainer = document.querySelector(".tags-container");

  Object.keys(recipeTags).forEach((tag) => {
    const button = document.createElement("button");
    button.className = "tag";
    button.dataset.tag = tag;
    button.textContent = `${tag} (${recipeTags[tag]})`;
    tagsContainer.appendChild(button);
  });
};

updateTagsToDOM();

export { displayRecipes };
