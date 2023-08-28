const recipeArea = document.querySelector(".recipe-area");
const recipeTitle = document.querySelector("#recipeCardTitle");
const recipeTagArea = document.querySelector("#recipeCardTags");
const recipeCard = document.querySelector(".recipe-card");

const createRecipeCards = (recipes) => {
  recipeArea.innerHTML = "";
  recipes.forEach((recipe) => {
    let recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");
    recipeCard.setAttribute("id", recipe.id);
    let recipeTitle = document.createElement("h2");
    recipeTitle.classList.add("recipe-title");
    recipeCard.appendChild(recipeTitle);
    recipeTitle.innerText = recipe.name;
    let recipeImage = document.createElement("img");
    recipeImage.classList.add("recipe-image");
    recipeImage.setAttribute("src", recipe.image);
    recipeCard.appendChild(recipeImage);
    recipeArea.appendChild(recipeCard);
  });
};

const locateRecipe = (recipeId, recipes) => {
  let formatRecipeId = Number(recipeId);
  let foundRecipe = recipes.find((recipe) => {
    return recipe.id === formatRecipeId;
  });
  return foundRecipe;
};

const buildRecipeTitle = (foundRecipe) => {
  recipeTitle.innerHTML = "";
  recipeTitle.innerText = foundRecipe.name;
};

const buildRecipeTags = (foundRecipe) => {
  recipeTagArea.innerHTML = "";
  foundRecipe.tags.forEach((tag) => {
    let recipeTag = document.createElement("div");
    recipeTag.classList.add("recipe-tag");
    let recipeTagText = document.createElement("p");
    recipeTagText.innerText = tag;
    recipeTag.appendChild(recipeTagText);
    recipeTagArea.appendChild(recipeTag);
  });
};

const buildRecipeCard = (recipe) => {
  buildRecipeTitle(recipe);
  buildRecipeTags(recipe);
};

export {
  createRecipeCards,
  locateRecipe,
  buildRecipeTitle,
  buildRecipeTags,
  buildRecipeCard,
};
