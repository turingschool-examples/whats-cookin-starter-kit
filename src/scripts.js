import "./styles.css";
import { getData } from "./apiCalls";
import RecipeRepository from "./classes/RecipeRepository";
import User from "./classes/User";

var recipeRepo;
var user;
var usersData;
var recipeData;
var ingredientsData;

const searchButton = document.querySelector(".submit-search");
const myRecipesButton = document.querySelector(".my-recipes-button");
const homeButton = document.querySelector(".home-button");
const myPantryButton = document.querySelector(".my-pantry");
const cookButton = document.querySelector(".cook-button");
const datalistButton = document.querySelector(".add-ingredient-quantity");
const closeIcon = document.querySelector(".close-icon");
const saveIcon = document.querySelector(".save-recipe-icon");
const defaultSearch = document.querySelector(".default-search");
const pantrySearch = document.querySelector(".pantry-ingredient-datalist");
const searchBar = document.querySelector(".search-bar");
const searchOption = document.querySelector(".search-option");
const keywordOption = document.querySelector(".keyword-option");
const greeting = document.querySelector(".greeting");
const header = document.querySelector(".header");
const keywordList = document.getElementById("keyword-list");
const keywordSection = document.querySelector(".keyword-section");
const modalCurtain = document.querySelector(".grey-out-bg");
const ingredientsListUl = document.querySelector(".ingredients ul");
const ingredientList = document.querySelector("#ingredient-list");
const pantryItemTemplate = document.querySelector(".pantry-item-card-template");
const pantry = document.querySelector(".pantry");
const datalistString = document.querySelector(".input-value");
const datalistQty = document.querySelector(".choose-ingredient-amount");
const ingredientsNeeded = document.querySelector(".ingredients-needed");
const resultTemplate = document.querySelector("#mini-recipe-template");
const resultCardsContainer = document.querySelector(".results-grid-container");
const specificRecipeSection = document.getElementById(
  "specific-recipe-section"
);

window.addEventListener("load", getData);
datalistButton.addEventListener("click", updatePantryFromDatalist);
searchButton.addEventListener("click", executeSearch);
myPantryButton.addEventListener("click", showPantry);
cookButton.addEventListener("click", cookRecipe);
myRecipesButton.addEventListener("click", displayUserRecipes);
homeButton.addEventListener("click", displayAllRecipesView);
searchOption.addEventListener("click", showKeywordsSearch);
keywordOption.addEventListener("click", showDefaultSearch);
closeIcon.addEventListener("click", closeSpecificRecipe);
saveIcon.addEventListener("click", specificRecipeClicked);
keywordList.addEventListener("click", keywordClicked);
resultCardsContainer.addEventListener("click", specificRecipeClicked);

getData().then((responses) => {
  recipeData = responses[0];
  ingredientsData = responses[1];
  usersData = responses[2];

  user = new User(usersData[Math.floor(Math.random() * 41)]);
  recipeRepo = new RecipeRepository();
  recipeRepo.importRecipesFromFile(recipeData, ingredientsData);
  loadPage();
});

function loadPage() {
  convertPantryItemNames();
  makeIngredientCard();
  addPantrySearchItems();
  displayAllRecipesView();
  listKeywords();
}

function convertPantryItemNames() {
  user.pantry.forEach((pantryItem) => {
    ingredientsData.forEach((ingredient) => {
      if (pantryItem.ingredient === ingredient.id) {
        pantryItem.name = ingredient.name;
      }
    });
  });
  return user.pantry;
}

function makeIngredientCard() {
  let alphabetizedPantry = alphabetize(user.pantry);
  alphabetizedPantry.forEach((item) => {
    let newItemCard = pantryItemTemplate.cloneNode(true);
    newItemCard.querySelector(".pantry-item-name").innerText = item.name;
    newItemCard.querySelector(".pantry-quantity").innerText = item.amount;
    pantry.appendChild(newItemCard);
    show(newItemCard);
  });
}

function addPantrySearchItems() {
  let alphabetizedIngredients = alphabetize(ingredientsData);
  alphabetizedIngredients.forEach((ingredient) => {
    let ingredientOption = document.createElement("option");
    ingredientOption.value = ingredient.name;
    ingredientOption.id = ingredient.id;
    ingredientList.appendChild(ingredientOption);
  });
}

function displayAllRecipesView() {
  hide(pantry);
  hide(pantrySearch);
  show(resultCardsContainer);
  show(defaultSearch);
  recipeRepo.clearData();
  greeting.innerText = `Welcome, ${user.name}!`;
  header.innerText = `All Recipes!`;
  header.style.color = "#000000";
  resultCardsContainer.replaceChildren();
  recipeRepo.recipes.forEach((recipe) => {
    let recipeCard = makeRecipeCard(recipe);
    addRecipeCardToResultsContainer(recipeCard);
  });
}

function listKeywords() {
  keywordList.replaceChildren();
  recipeRepo.allTags.forEach((tag) => {
    let keyword = document.createElement("button");
    keyword.classList.add("keyword");
    keyword.type = "button";
    keyword.innerText = tag;
    keywordList.appendChild(keyword);
  });
}

function updatePantryFromDatalist() {
  user.evaluatePantry(
    datalistString.value,
    parseInt(datalistQty.value),
    recipeRepo
  );
  datalistString.value = "";
  datalistQty.value = "";
  header.innerText = "Pantry Updated!";
  header.style.color = "#228B22";
  pantry.innerHTML = "";
  user.removeFromPantryView();
  makeIngredientCard();
}

function makeRecipeCard(recipe) {
  let newCard = resultTemplate.cloneNode(true);
  newCard.removeAttribute("id");
  newCard.dataset.id = recipe.id;
  if (user.recipesToCook.includes(recipe)) {
    newCard.querySelector(".favorite-button").classList.add("saved");
  }
  newCard.querySelector(".recipe-name").innerText = recipe.name;
  newCard.querySelector(".recipe-image").src = recipe.imageURL;
  show(newCard);
  return newCard;
}

function cookRecipe() {
  let recipeToCook = findSpecificRecipe(saveIcon.dataset.id);
  user.compareIngredientsNeeded(recipeToCook);
  user.compareIngredientAmounts(recipeToCook);
  if (user.notMatchingIngredients.length >= 1) {
    displayMissingIngredients();
    user.notMatchingIngredients = [];
  } else {
    ingredientsNeeded.innerHTML = `You cooked the recipe!`;
    ingredientsNeeded.style.color = "#228B22";
    user.cookRecipe(recipeToCook);
    makeIngredientCard();
  }
}

function keywordClicked(event) {
  let keywordElement = event.target.closest(".keyword");
  if (keywordElement.classList.contains("clicked")) {
    keywordElement.classList.remove("clicked");
    recipeRepo.selectedInput.find((inputItem) =>
      recipeRepo.selectedInput.splice(inputItem, 1)
    );
  } else {
    keywordElement.classList.add("clicked");
    recipeRepo.addInputToSearch(keywordElement.innerText);
  }
}

function specificRecipeClicked(event) {
  let recipeID = getRecipeIdFromClickEvent(event);
  let specificRecipe = findSpecificRecipe(recipeID);
  if (event.target.classList.contains("favorite-button")) {
    if (event.target.classList.contains("saved")) {
      event.target.classList.remove("saved");
      removeUserRecipe(specificRecipe);
    } else {
      event.target.classList.add("saved");
      addUserRecipe(specificRecipe);
    }
  } else {
    displaySpecificRecipe(specificRecipe);
  }
}

function updateSpecificRecipeCard(recipe) {
  ingredientsNeeded.innerHTML = `Ingredients:`;
  specificRecipeSection.querySelector(".title").innerText = recipe.name;
  ingredientsNeeded.style.color = "#000000";
  if (user.recipesToCook.includes(recipe)) {
    specificRecipeSection
      .querySelector(".save-recipe-icon")
      .classList.add("saved");
  }
  specificRecipeSection.querySelector(".save-recipe-icon").dataset.id =
    recipe.id;
  specificRecipeSection.querySelector(".specific-recipe-image").src =
    recipe.imageURL;
  updateSpecificRecipeIngredients(recipe);
  updateSpecificRecipeInstructions(recipe);
  specificRecipeSection.querySelector(".recipe-cost h5").innerText =
    "$" + recipe.calcTotalRecipeCost();
}

function updateSpecificRecipeIngredients(recipe) {
  ingredientsListUl.replaceChildren();
  let portions = recipe.getPortionInfo();
  portions.forEach((portion) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = ` ${portion.amount} ${portion.unit} of ${capitalize(
      portion.name
    )}`;
    ingredientsListUl.append(listItem);
  });
}

function updateSpecificRecipeInstructions(recipe) {
  let instructionsList =
    specificRecipeSection.querySelector(".instructions ol");
  instructionsList.replaceChildren();
  let instructions = recipe.getInstructions();
  instructions.forEach((instruction) => {
    let listItem = document.createElement("li");
    listItem.innerText = capitalize(instruction);
    instructionsList.append(listItem);
  });
}

function executeSearch() {
  if (!searchBar.value) {
    recipeRepo.filterByMultipleTags();
    header.innerText = `Your search results`;
    resultCardsContainer.replaceChildren();
    recipeRepo.filteredAllRecipes.forEach((recipe) => {
      let recipeCard = makeRecipeCard(recipe);
      addRecipeCardToResultsContainer(recipeCard);
    });
  } else {
    recipeRepo.clearData();
    let searchInput = searchBar.value;
    let searchTerms = searchInput.split(",");
    searchTerms.forEach((term) => recipeRepo.addInputToSearch(term));
    recipeRepo.filterByMultipleRecipeNames();
    recipeRepo.filterByMultipleIngredients();
    header.innerText = `Your search results`;
    resultCardsContainer.replaceChildren();
    recipeRepo.filteredAllRecipes.forEach((recipe) => {
      let recipeCard = makeRecipeCard(recipe);
      addRecipeCardToResultsContainer(recipeCard);
    });
  }
  showDefaultSearch();
  searchBar.value = ``;
}

function displayMissingIngredients() {
  ingredientsListUl.innerHTML = ``;
  ingredientsListUl.replaceChildren();
  ingredientsNeeded.innerHTML = `Head to the pantry you still need:`;
  ingredientsNeeded.style.color = "#880808";
  user.notMatchingIngredients.forEach((ing) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${ing.amount} ${capitalize(ing.name)}`;
    listItem.style.color = "#880808";
    ingredientsListUl.append(listItem);
  });
}

function displayUserRecipes() {
  hide(pantry);
  hide(pantrySearch);
  show(defaultSearch);
  show(resultCardsContainer);
  greeting.innerText = ``;
  if (user.recipesToCook.length >= 1) {
    header.innerText = `${user.name}'s recipes!`;
    resultCardsContainer.replaceChildren();
    user.recipesToCook.forEach((recipe) => {
      let recipeCard = makeRecipeCard(recipe);
      addRecipeCardToResultsContainer(recipeCard);
    });
  } else {
    header.innerText = `There are no recipes saved.`;
    header.style.color = "#880808";
    resultCardsContainer.replaceChildren();
  }
}

function showKeywordsSearch() {
  hide(searchBar);
  hide(searchOption);
  show(keywordSection);
  show(keywordOption);
  searchBar.value = ``;
}

function showDefaultSearch() {
  show(searchBar);
  show(keywordOption);
  show(searchOption);
  hide(keywordSection);
  hide(keywordOption);
  searchBar.value = ``;
}

function showPantry() {
  header.style.color = "#000000";
  header.innerHTML = `${user.name}'s current Ingredients:`;
  hide(resultCardsContainer);
  hide(defaultSearch);
  show(pantry);
  show(pantrySearch);
}

function displaySpecificRecipe(recipe) {
  updateSpecificRecipeCard(recipe);
  show(specificRecipeSection);
  show(modalCurtain);
}

function removeUserRecipe(recipe) {
  user.removeRecipeToCook(recipe);
}

function addUserRecipe(recipe) {
  user.addRecipeToCook(recipe);
}

function closeSpecificRecipe() {
  hide(specificRecipeSection);
  hide(modalCurtain);
}

function getRecipeIdFromClickEvent(event) {
  let specificRecipeId = event.target.closest("[data-id]").dataset.id;
  return specificRecipeId;
}

function findSpecificRecipe(recipeID) {
  let specificRecipe = recipeRepo.recipes.find((recipe) => {
    return recipe.id === parseInt(recipeID);
  });
  return specificRecipe;
}

function alphabetize(data) {
  let alphabetizedData = data.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
  return alphabetizedData;
}

function addRecipeCardToResultsContainer(recipeCard) {
  resultCardsContainer.appendChild(recipeCard);
}

function capitalize(string) {
  let stringArray = string.split("");
  stringArray[0] = stringArray[0].toUpperCase();
  return stringArray.join("");
}

function hide(domElement) {
  domElement.classList.add("hidden");
}

function show(domElement) {
  domElement.classList.remove("hidden");
}
