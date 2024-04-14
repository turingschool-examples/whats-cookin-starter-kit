/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertToUS: () => (/* binding */ convertToUS),
/* harmony export */   currentRecipe: () => (/* binding */ currentRecipe),
/* harmony export */   currentUser: () => (/* binding */ currentUser),
/* harmony export */   getRandomUser: () => (/* binding */ getRandomUser),
/* harmony export */   randomNumber: () => (/* binding */ randomNumber),
/* harmony export */   setCurrentRecipe: () => (/* binding */ setCurrentRecipe),
/* harmony export */   setCurrentUser: () => (/* binding */ setCurrentUser),
/* harmony export */   toggleConversion: () => (/* binding */ toggleConversion)
/* harmony export */ });
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50);
/* harmony import */ var _images_turing_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55);
//NOTE: Data model and non-dom manipulating logic will live in this file.



// An example of how you tell webpack to use an image (also need to link to it in the index.html)

// Below are examples of how you can import functions from either the recipes or domUpdates files.

let currentUser;
let currentRecipe;
let convertToUS = true;

function getRandomUser(user_dataset) {
  return user_dataset[randomNumber(user_dataset.length)];
}

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

function setCurrentUser(user) {
  currentUser = user;
}

function setCurrentRecipe(recipe) {
  currentRecipe = recipe;
  return currentRecipe;
}

function toggleConversion() {
  convertToUS = !convertToUS;
  return convertToUS;
}


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchData: () => (/* binding */ fetchData),
/* harmony export */   ingredientsAPIData: () => (/* binding */ ingredientsAPIData),
/* harmony export */   recipesAPIData: () => (/* binding */ recipesAPIData),
/* harmony export */   usersAPIData: () => (/* binding */ usersAPIData)
/* harmony export */ });
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
// Your fetch requests will live here!

// global.usersAPIData = usersAPIData;
// global.recipesAPIData = recipesAPIData;
// global.ingredientsAPIData = ingredientsAPIData;



let usersAPIData;
let recipesAPIData;
let ingredientsAPIData;

function fetchUser() {
  return fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users")
    .then((r) => r.json())
    .then((data) => data.users)
    .catch((error) => console.log(error));
}

function fetchIngredients() {
  return fetch(
    "https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients"
  )
    .then((r) => r.json())
    .then((data) => data.ingredients)
    .catch((error) => console.log(error));
}

function fetchRecipes() {
  return fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes")
    .then((r) => r.json())
    .then((data) => data.recipes)
    .catch((error) => console.log(error));
}

// fix this because I don't like how this is not really the init function but it also kind of is at the same time
function fetchData() {
  Promise.all([fetchUser(), fetchIngredients(), fetchRecipes()]).then(
    ([user, ingredient, recipes]) => {
      usersAPIData = user;
      ingredientsAPIData = ingredient;
      recipesAPIData = recipes;
      (0,_domUpdates__WEBPACK_IMPORTED_MODULE_0__.init)();
    }
  );
}


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayRecipes: () => (/* binding */ displayRecipeCards),
/* harmony export */   init: () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _src_tags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _cost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _recipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49);







let recipesToDisplay;
let viewChanged = false;
let isSavedRecipesView = false;

const body = document.querySelector("body");
const logo = document.querySelector(".logo");
// main view query selectors
const main = document.querySelector("main");
const mainDirectory = document.getElementById("directory-page");
const mainRecipe = document.getElementById("recipe-page");
// Filter query selectors
const filterSection = document.querySelector("nav.filter-container");
const searchBox = document.querySelector(".search-box");
const tagsContainer = document.querySelector(".tags-container");
// changing view query selectors
const navButtonContainer = document.querySelector(".nav-buttons");
const randomRecipeButton = document.querySelector(".random-recipe");

const heartOn =
  '<svg class="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: #b30202;transform: ;msFilter:;"><path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path></svg>';
const heartOff = `<svg class="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style=" fill: rgba(157, 150, 139, 1); transform: scaleX(-1); msFilter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)';"> <path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path></svg>`;

// EVENT LISTENERS
addEventListener("load", _apiCalls__WEBPACK_IMPORTED_MODULE_1__.fetchData);
searchBox.addEventListener("input", filterRecipes);
tagsContainer.addEventListener("click", function (e) {
  if (!e.target.classList.contains("tag")) return;

  e.target.classList.toggle("tag-active");
  filterRecipes();
});
mainDirectory.addEventListener("scroll", () => {
  if (isSentinelInView()) displayRecipeCards(recipesToDisplay);
});
main.addEventListener("click", (e) => {
  switch (main.getAttribute("id")) {
    case "directory-page":
      if (!e.target.closest(".recipe-card")) return;

      const clickedRecipe = e.target.closest(".recipe-card");
      const recipe = (0,_recipes__WEBPACK_IMPORTED_MODULE_3__.findRecipeFromID)(clickedRecipe.dataset.id, _apiCalls__WEBPACK_IMPORTED_MODULE_1__.recipesAPIData);
      (0,_scripts__WEBPACK_IMPORTED_MODULE_4__.setCurrentRecipe)(recipe);

      if (e.target.closest(".heart-container")) {
        toggleHeart(
          e.target.closest(".heart-container"),
          _scripts__WEBPACK_IMPORTED_MODULE_4__.currentRecipe,
          _scripts__WEBPACK_IMPORTED_MODULE_4__.currentUser.recipesToCook
        );
      } else {
        main.innerHTML = "";
        main.append(createRecipePageHTML(_scripts__WEBPACK_IMPORTED_MODULE_4__.currentRecipe));
        main.setAttribute("id", "recipe-page");
        filterSection.classList.add("hidden");
        body.style.cssText = "--sidebar-width: 0px";
      }
      break;
    case "recipe-page":
      if (e.target.classList.contains("conversion-slider")) {
        (0,_scripts__WEBPACK_IMPORTED_MODULE_4__.toggleConversion)();
        const ingredientsContainer = document.querySelector(".ingredients");
        ingredientsContainer.innerHTML = `${getIngredientQuantity(
          _scripts__WEBPACK_IMPORTED_MODULE_4__.currentRecipe,
          _apiCalls__WEBPACK_IMPORTED_MODULE_1__.ingredientsAPIData
        )}`;
      } else if (e.target.closest(".heart-container")) {
        toggleHeart(
          e.target.closest(".heart-container"),
          _scripts__WEBPACK_IMPORTED_MODULE_4__.currentRecipe,
          _scripts__WEBPACK_IMPORTED_MODULE_4__.currentUser.recipesToCook
        );
      }
      break;
  }
});
randomRecipeButton.addEventListener("click", () => {
  const randomIndex = (0,_scripts__WEBPACK_IMPORTED_MODULE_4__.randomNumber)(_apiCalls__WEBPACK_IMPORTED_MODULE_1__.recipesAPIData.length);
  const randomRecipe = _apiCalls__WEBPACK_IMPORTED_MODULE_1__.recipesAPIData[randomIndex];

  main.innerHTML = "";
  main.append(createRecipePageHTML(randomRecipe));
  main.setAttribute("id", "recipe-page");
  filterSection.classList.add("hidden");
  body.style.cssText = "--sidebar-width: 0px";
});

navButtonContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("cookbook")) {
    isSavedRecipesView = false;
    recipesToDisplay = _apiCalls__WEBPACK_IMPORTED_MODULE_1__.recipesAPIData;
  } else if (e.target.classList.contains("saved-recipes")) {
    isSavedRecipesView = true;
    recipesToDisplay = _scripts__WEBPACK_IMPORTED_MODULE_4__.currentUser.recipesToCook;
  } else {
    return;
  }

  viewChanged = true;
  filterSection.classList.remove("hidden");
  body.style.cssText = "--sidebar-width: 300px";

  mainDirectory.innerHTML = "";
  main.setAttribute("id", "directory-page");
  displayRecipeCards(recipesToDisplay);
  resetFilters(recipesToDisplay);
});

// FUNCTIONS
function init() {
  (0,_scripts__WEBPACK_IMPORTED_MODULE_4__.setCurrentUser)((0,_scripts__WEBPACK_IMPORTED_MODULE_4__.getRandomUser)(_apiCalls__WEBPACK_IMPORTED_MODULE_1__.usersAPIData));
  recipesToDisplay = _apiCalls__WEBPACK_IMPORTED_MODULE_1__.recipesAPIData;
  displayRecipeCards(recipesToDisplay);
  updateTags(recipesToDisplay);
  logo.innerText += ` ${_scripts__WEBPACK_IMPORTED_MODULE_4__.currentUser.name}`;
}

const infiniteLoad = (function () {
  let currentPage = 1;
  const recipesPerPage = 5;

  function resetView() {
    viewChanged = false;
    mainDirectory.scrollTop = 0;
    currentPage = 1;
  }

  return function (recipes) {
    if (viewChanged) resetView();

    const recipesToRender = recipes.slice(0, currentPage * recipesPerPage);
    recipesToRender.forEach((recipe) =>
      mainDirectory.append(createRecipeHTML(recipe))
    );
    currentPage++;

    const sentinel = document.querySelector(".sentinel");
    if (sentinel) sentinel.remove();
    mainDirectory.append(createSentinelHTML());
  };
})();

function resetFilters(recipe_dataset) {
  searchBox.value = "";
  const activeTags = tagsContainer.querySelectorAll(".tag-active");
  activeTags.forEach((tag) => tag.classList.remove("tag-active"));
  updateTags(recipe_dataset);
}

function displayRecipeCards(recipe_dataset) {
  if (!recipe_dataset || !recipe_dataset.length) {
    mainDirectory.style.justifyContent = "center";
    mainDirectory.innerHTML =
      '<div class="gatile" style="text-align: center; font-size: 5vh">No recipes found.</div>';
  } else {
    mainDirectory.style.justifyContent = null;
    mainDirectory.innerHTML = "";
    infiniteLoad(recipe_dataset);
  }
}

function createSentinelHTML() {
  const sentinel = document.createElement("div");
  sentinel.classList.add("sentinel");
  return sentinel;
}

function createRecipeHTML(recipe) {
  const article = document.createElement("article");
  article.classList.add("recipe-card");
  article.dataset.id = recipe.id;

  const heartIcon = (0,_recipes__WEBPACK_IMPORTED_MODULE_3__.isRecipeFavorited)(recipe, _scripts__WEBPACK_IMPORTED_MODULE_4__.currentUser.recipesToCook)
    ? heartOn
    : heartOff;

  (0,_recipes__WEBPACK_IMPORTED_MODULE_3__.isRecipeFavorited)(recipe, _scripts__WEBPACK_IMPORTED_MODULE_4__.currentUser.recipesToCook)
    ? (0,_recipes__WEBPACK_IMPORTED_MODULE_3__.addRecipeToArray)(_scripts__WEBPACK_IMPORTED_MODULE_4__.currentUser.recipesToCook, recipe)
    : (0,_recipes__WEBPACK_IMPORTED_MODULE_3__.removeRecipeFromArray)(_scripts__WEBPACK_IMPORTED_MODULE_4__.currentUser.recipesToCook, recipe);

  article.innerHTML = `
    <div class="recipe-image">
      <img src="${recipe.image}" alt="${recipe.name}">
    </div>
    <div class="recipe-info">
      <div class="tags-and-heart">
        <h3 class="recipe-tags">${recipe.tags.join(", ")}</h3>
        <div class="heart-container">${heartIcon}</div>
      </div>
      <h2 class="recipe-name">${recipe.name}</h2>
      <h3 class="recipe-ingredients">
      <span class="label"> ingredients </span>
      ${(0,_recipes__WEBPACK_IMPORTED_MODULE_3__.findRecipeIngredients)(recipe, _apiCalls__WEBPACK_IMPORTED_MODULE_1__.ingredientsAPIData).join(", ")}
    </h3>
    </div>`;

  return article;
}

function createRecipePageHTML(recipe) {
  const recipeContainer = document.createElement("div");
  recipeContainer.classList.add("recipe-container");
  recipeContainer.dataset.id = recipe.id;

  const instructionsList = (0,_recipes__WEBPACK_IMPORTED_MODULE_3__.findRecipeInstructions)(recipe).reduce(
    (innerHTML, instruction) => {
      innerHTML += `<li>${instruction}</li>`;
      return innerHTML;
    },
    ""
  );

  const heartIcon = (0,_recipes__WEBPACK_IMPORTED_MODULE_3__.isRecipeFavorited)(recipe, _scripts__WEBPACK_IMPORTED_MODULE_4__.currentUser.recipesToCook)
    ? heartOn
    : heartOff;

  const checkboxChecked = _scripts__WEBPACK_IMPORTED_MODULE_4__.convertToUS ? "" : "checked";

  recipeContainer.innerHTML = `
    <div class="recipe-main">
      <div class="image-container">
        <img src="${recipe.image}" alt="${recipe.name}"/>
      </div>
      <div class="title-container">
        <h1 class="title gatile">${recipe.name}</h1>
      </div>
    </div>
    <div class="instructions">
      <h1 class="gatile">Instructions</h1>
      <ol>${instructionsList}</ol>
    </div>
    <div class="ingredients-container">
      <div class="ingredients-background">
        <div class="ingredients-and-heart">
          <h1 class="gatile">Ingredients</h1>
          <div class="heart-container">${heartIcon}</div>
        </div>
        <div class="ingredient-settings">
        <div>$${(0,_cost__WEBPACK_IMPORTED_MODULE_2__.calculateRecipeCost)(recipe, _apiCalls__WEBPACK_IMPORTED_MODULE_1__.ingredientsAPIData)}</div>
          <label class="switch">
            <input type="checkbox" ${checkboxChecked} class="conversion-slider">
            <span class="slider round"></span>
          </label>
        </div>
        <hr />
        <ul class="ingredients">${getIngredientQuantity(
          recipe,
          _apiCalls__WEBPACK_IMPORTED_MODULE_1__.ingredientsAPIData
        )}</ul>
      </div>
    </div>`;

  return recipeContainer;
}

function getIngredientQuantity(recipe, ingredient_dataset) {
  const ingredientList = (0,_recipes__WEBPACK_IMPORTED_MODULE_3__.findRecipeIngredients)(recipe, ingredient_dataset);
  const quantityList = (0,_recipes__WEBPACK_IMPORTED_MODULE_3__.findRecipeIngredientsQuantity)(recipe, _scripts__WEBPACK_IMPORTED_MODULE_4__.convertToUS);

  return ingredientList
    .map((ingredient, index) => {
      return `<li><div class="ingredient-name">${ingredient}</div><div class="ingredient-amount">${quantityList[index]}</div></li>`;
    })
    .join("");
}

function toggleHeart(element, recipe, recipe_dataset) {
  const isFavorited = (0,_recipes__WEBPACK_IMPORTED_MODULE_3__.isRecipeFavorited)(recipe, recipe_dataset);
  if (!isFavorited) {
    element.innerHTML = heartOn;
    (0,_recipes__WEBPACK_IMPORTED_MODULE_3__.addRecipeToArray)(recipe_dataset, recipe);
  } else {
    element.innerHTML = heartOff;
    (0,_recipes__WEBPACK_IMPORTED_MODULE_3__.removeRecipeFromArray)(recipe_dataset, recipe);
  }
}

function getActiveTags() {
  const activeTags = document.querySelectorAll(".tag-active");
  return Array.from(activeTags).map((button) => button.dataset.tag);
}

function updateTags(recipes) {
  const activeTags = getActiveTags();
  const tagRecipeCount = (0,_src_tags__WEBPACK_IMPORTED_MODULE_0__.getTagRecipeCount)(activeTags, recipes);
  const tagNames = Object.keys(tagRecipeCount);

  tagsContainer.innerHTML = "";
  tagNames.forEach((tagName) => {
    const button = document.createElement("button");
    button.className = "tag";
    button.dataset.tag = tagName;
    button.textContent = `${tagName} (${tagRecipeCount[tagName]})`;

    if (activeTags.includes(tagName)) button.classList.add("tag-active");
    tagsContainer.appendChild(button);
  });
}

function isSentinelInView() {
  const sentinel = document.querySelector(".sentinel");
  if (!sentinel) return false;
  const rect = sentinel.getBoundingClientRect();
  return rect.top <= window.innerHeight;
}

function filterRecipes() {
  viewChanged = true;
  const recipe_dataset = isSavedRecipesView
    ? _scripts__WEBPACK_IMPORTED_MODULE_4__.currentUser.recipesToCook
    : _apiCalls__WEBPACK_IMPORTED_MODULE_1__.recipesAPIData;
  let filteredRecipes = (0,_src_tags__WEBPACK_IMPORTED_MODULE_0__.filterRecipeByTag)(getActiveTags(), recipe_dataset);

  recipesToDisplay = (0,_search__WEBPACK_IMPORTED_MODULE_5__.search)(
    searchBox.value.trim(),
    filteredRecipes,
    _apiCalls__WEBPACK_IMPORTED_MODULE_1__.ingredientsAPIData
  );

  displayRecipeCards(recipesToDisplay);
  updateTags(recipesToDisplay);
}




/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterRecipeByTag: () => (/* binding */ filterRecipeByTag),
/* harmony export */   getTagRecipeCount: () => (/* binding */ getTagRecipeCount)
/* harmony export */ });
const filterRecipeByTag = (tags, recipe_dataset) => {
  const filteredRecipes = [];

  recipe_dataset.forEach((recipe) => {
    if (tags.every((tag) => recipe.tags.includes(tag))) {
      filteredRecipes.push(recipe);
    }
  });
  return filteredRecipes;
};

function getTagRecipeCount(tags, recipe_dataset) {
  return filterRecipeByTag(tags, recipe_dataset).reduce((list, recipe) => {
    recipe.tags.forEach((tag) => {
      if (!list.hasOwnProperty(tag)) list[tag] = 0;
      list[tag]++;
    });
    return list;
  }, {});
}


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateRecipeCost: () => (/* binding */ calculateRecipeCost)
/* harmony export */ });
/* harmony import */ var _recipes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


const calculateRecipeCost = (recipe, ingredient_dataset) => {
  if (!recipe.hasOwnProperty("ingredients")) return 0;
  if (!Array.isArray(recipe.ingredients)) return 0;

  const totalPrice = recipe.ingredients.reduce((totalPrice, ingredient) => {
    const ingredientData = (0,_recipes_js__WEBPACK_IMPORTED_MODULE_0__.findIngredient)(ingredient.id, ingredient_dataset);
    const ingredientPrice =
      (ingredient.quantity.amount * ingredientData.estimatedCostInCents) / 100;
    return totalPrice + ingredientPrice;
  }, 0);
  return +totalPrice.toFixed(2);
};


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addRecipeToArray: () => (/* binding */ addRecipeToArray),
/* harmony export */   findIngredient: () => (/* binding */ findIngredient),
/* harmony export */   findRecipeFromID: () => (/* binding */ findRecipeFromID),
/* harmony export */   findRecipeIngredients: () => (/* binding */ findRecipeIngredients),
/* harmony export */   findRecipeIngredientsQuantity: () => (/* binding */ findRecipeIngredientsQuantity),
/* harmony export */   findRecipeInstructions: () => (/* binding */ findRecipeInstructions),
/* harmony export */   isFavorited: () => (/* binding */ isFavorited),
/* harmony export */   isRecipeFavorited: () => (/* binding */ isRecipeFavorited),
/* harmony export */   removeRecipeFromArray: () => (/* binding */ removeRecipeFromArray)
/* harmony export */ });
/* harmony import */ var convert_units__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var convert_units__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(convert_units__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
//Here is an example demonstrating logic separated that can be imported into the scripts and test files. Feel free to update this later!



const findRecipeIngredients = (recipe, ingredient_dataset) => {
  return recipe.ingredients.reduce((list, recipeIngredient) => {
    list.push(findIngredient(recipeIngredient.id, ingredient_dataset).name);
    return list;
  }, []);
};

function findRecipeIngredientsQuantity(recipe, convertToUS) {
  return recipe.ingredients.map((ingredient) => {
    const amount = ingredient.quantity.amount;
    const unit = sanitizeUnit(ingredient.quantity.unit);
    const converted = ingredientConvertor(amount, unit, convertToUS);
    console.log(converted);
    const space = unit.length ? " " : "";

    return `${+converted.amount.toFixed(2)}${space}${converted.unit}`;
  });
}

function sanitizeUnit(unit) {
  const measurements = {
    // volume metric
    ml: ["milliliter", "ml"],
    l: ["l", "litter"],
    // volume US
    tsp: ["teaspoon", "tsp", "t"],
    Tbs: ["tablespoon", "tbsp", "tbs"],
    "fl-oz": ["fluid ounce", "fl-oz", "fl oz"],
    cup: ["c", "cup"],
    pnt: ["pint"],
    qt: ["quart", "qt"],
    gal: ["gallon", "gal"],
    // mass metric
    g: ["g", "gram"],
    kg: ["kilogram", "kg"],
    // mass US
    oz: ["ounce", "oz"],
    lb: ["pound", "lb"],
  };

  const sanitizedUnit = (0,_search__WEBPACK_IMPORTED_MODULE_1__.sanitizeString)(unit);
  const units = Object.keys(measurements);
  const convertedUnit = units.find((unit) =>
    measurements[unit].find(
      (unitName) =>
        sanitizedUnit === unitName || sanitizedUnit === `${unitName}s`
    )
  );

  if (convertedUnit) return convertedUnit;
  else return unit;
}

function ingredientConvertor(amountToConvert, unitToConvert, convertToUS) {
  try {
    const toConvert = convert_units__WEBPACK_IMPORTED_MODULE_0___default()(amountToConvert).from(unitToConvert);
    const possibleMeasurements = toConvert.possibilities();
    let unitToConvertTo;

    if (possibleMeasurements.includes("oz")) {
      unitToConvertTo = convertToUS ? "oz" : "g";
    } else if (possibleMeasurements.includes("cup")) {
      unitToConvertTo = convertToUS ? "cup" : "ml";
    } else {
      unitToConvertTo = unitToConvert;
    }

    const convertedIngredient = toConvert.to(unitToConvertTo);
    const convertedIngredientBest = convert_units__WEBPACK_IMPORTED_MODULE_0___default()(convertedIngredient)
      .from(unitToConvertTo)
      .toBest({
        exclude: [
          "pnt",
          "fl-oz",
          "mcg",
          "mg",
          "mt",
          "t",
          "mm3",
          "m3",
          "km3",
          "in3",
          "ft3",
          "yd3",
          "cl",
          "tsk",
          "cm3",
          "msk",
          "dl",
          "glas",
          "kkp",
        ],
      });

    return {
      amount: convertedIngredientBest.val,
      unit: convertedIngredientBest.unit,
    };
  } catch (error) {
    return {
      amount: amountToConvert,
      unit: unitToConvert,
    };
  }
}

const findRecipeInstructions = (recipe) => {
  return recipe.instructions
    .sort((a, b) => a.number - b.number)
    .map((step) => step.instruction);
};

function findIngredient(ingredientID, ingredient_dataset) {
  return ingredient_dataset.find(
    (ingredientData) => ingredientData.id == ingredientID
  );
}

function addRecipeToArray(recipesArray, recipeToAdd) {
  const recipeExists = recipesArray.some(
    (recipe) => recipe.id === recipeToAdd.id
  );
  if (!recipeExists) {
    recipesArray.push(recipeToAdd);
  }
}

function removeRecipeFromArray(recipesArray, recipeToRemove) {
  const recipeIndex = recipesArray.findIndex(
    (recipe) => recipe.id === recipeToRemove.id
  );
  if (recipeIndex > -1) {
    recipesArray.splice(recipeIndex, 1);
  }
}

function findRecipeFromID(recipeID, recipe_dataset) {
  return recipe_dataset.find((recipe) => recipe.id === +recipeID);
}

function isFavorited(favoriteRecipes, recipe_dataset) {
  return favoriteRecipes.filter((recipe) =>
    recipe_dataset.some((dataRecipe) => dataRecipe.id === recipe.id)
  );
}

function isRecipeFavorited(recipe, recipe_dataset) {
  return recipe_dataset.find((currentRecipe) => {
    return currentRecipe.id === recipe.id;
  });
}


/***/ }),
/* 6 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var convert
  , keys = __webpack_require__(7)
  , each = __webpack_require__(12)
  , measures = {
      length: __webpack_require__(26)
    , area: __webpack_require__(27)
    , mass: __webpack_require__(28)
    , volume: __webpack_require__(29)
    , each: __webpack_require__(30)
    , temperature: __webpack_require__(31)
    , time: __webpack_require__(32)
    , digital: __webpack_require__(33)
    , partsPer: __webpack_require__(34)
    , speed: __webpack_require__(35)
    , pace: __webpack_require__(36)
    , pressure: __webpack_require__(37)
    , current: __webpack_require__(38)
    , voltage: __webpack_require__(39)
    , power: __webpack_require__(40)
    , reactivePower: __webpack_require__(41)
    , apparentPower: __webpack_require__(42)
    , energy: __webpack_require__(43)
    , reactiveEnergy: __webpack_require__(44)
    , volumeFlowRate: __webpack_require__(45)
    , illuminance: __webpack_require__(46)
    , frequency: __webpack_require__(47)
    , angle : __webpack_require__(48)
    }
  , Converter;

Converter = function (numerator, denominator) {
  if(denominator)
    this.val = numerator / denominator;
  else
    this.val = numerator;
};

/**
* Lets the converter know the source unit abbreviation
*/
Converter.prototype.from = function (from) {
  if(this.destination)
    throw new Error('.from must be called before .to');

  this.origin = this.getUnit(from);

  if(!this.origin) {
    this.throwUnsupportedUnitError(from);
  }

  return this;
};

/**
* Converts the unit and returns the value
*/
Converter.prototype.to = function (to) {
  if(!this.origin)
    throw new Error('.to must be called after .from');

  this.destination = this.getUnit(to);

  var result
    , transform;

  if(!this.destination) {
    this.throwUnsupportedUnitError(to);
  }

  // Don't change the value if origin and destination are the same
  if (this.origin.abbr === this.destination.abbr) {
    return this.val;
  }

  // You can't go from liquid to mass, for example
  if(this.destination.measure != this.origin.measure) {
    throw new Error('Cannot convert incompatible measures of '
      + this.destination.measure + ' and ' + this.origin.measure);
  }

  /**
  * Convert from the source value to its anchor inside the system
  */
  result = this.val * this.origin.unit.to_anchor;

  /**
  * For some changes it's a simple shift (C to K)
  * So we'll add it when convering into the unit (later)
  * and subtract it when converting from the unit
  */
  if (this.origin.unit.anchor_shift) {
    result -= this.origin.unit.anchor_shift
  }

  /**
  * Convert from one system to another through the anchor ratio. Some conversions
  * aren't ratio based or require more than a simple shift. We can provide a custom
  * transform here to provide the direct result
  */
  if(this.origin.system != this.destination.system) {
    transform = measures[this.origin.measure]._anchors[this.origin.system].transform;
    if (typeof transform === 'function') {
      result = transform(result)
    }
    else {
      result *= measures[this.origin.measure]._anchors[this.origin.system].ratio;
    }
  }

  /**
  * This shift has to be done after the system conversion business
  */
  if (this.destination.unit.anchor_shift) {
    result += this.destination.unit.anchor_shift;
  }

  /**
  * Convert to another unit inside the destination system
  */
  return result / this.destination.unit.to_anchor;
};

/**
* Converts the unit to the best available unit.
*/
Converter.prototype.toBest = function(options) {
  if(!this.origin)
    throw new Error('.toBest must be called after .from');

  var options = Object.assign({
    exclude: [],
    cutOffNumber: 1,
  }, options)

  var best;
  /**
    Looks through every possibility for the 'best' available unit.
    i.e. Where the value has the fewest numbers before the decimal point,
    but is still higher than 1.
  */
  each(this.possibilities(), function(possibility) {
    var unit = this.describe(possibility);
    var isIncluded = options.exclude.indexOf(possibility) === -1;

    if (isIncluded && unit.system === this.origin.system) {
      var result = this.to(possibility);
      if (!best || (result >= options.cutOffNumber && result < best.val)) {
        best = {
          val: result,
          unit: possibility,
          singular: unit.singular,
          plural: unit.plural
        };
      }
    }
  }.bind(this));

  return best;
}

/**
* Finds the unit
*/
Converter.prototype.getUnit = function (abbr) {
  var found;

  each(measures, function (systems, measure) {
    each(systems, function (units, system) {
      if(system == '_anchors')
        return false;

      each(units, function (unit, testAbbr) {
        if(testAbbr == abbr) {
          found = {
            abbr: abbr
          , measure: measure
          , system: system
          , unit: unit
          };
          return false;
        }
      });

      if(found)
        return false;
    });

    if(found)
      return false;
  });

  return found;
};

var describe = function(resp) {
  return {
    abbr: resp.abbr
  , measure: resp.measure
  , system: resp.system
  , singular: resp.unit.name.singular
  , plural: resp.unit.name.plural
  };
}

/**
* An alias for getUnit
*/
Converter.prototype.describe = function (abbr) {
  var resp = Converter.prototype.getUnit(abbr);
  var desc = null;

  try {
    desc = describe(resp);
  } catch(err) {
    this.throwUnsupportedUnitError(abbr);
  }

  return desc;
};

/**
* Detailed list of all supported units
*/
Converter.prototype.list = function (measure) {
  var list = [];

  each(measures, function (systems, testMeasure) {
    if(measure && measure !== testMeasure)
      return;

    each(systems, function (units, system) {
      if(system == '_anchors')
        return false;

      each(units, function (unit, abbr) {
        list = list.concat(describe({
          abbr: abbr,
          measure: testMeasure
        , system: system
        , unit: unit
        }));
      });
    });
  });

  return list;
};

Converter.prototype.throwUnsupportedUnitError = function (what) {
  var validUnits = [];

  each(measures, function (systems, measure) {
    each(systems, function (units, system) {
      if(system == '_anchors')
        return false;

      validUnits = validUnits.concat(keys(units));
    });
  });

  throw new Error('Unsupported unit ' + what + ', use one of: ' + validUnits.join(', '));
}

/**
* Returns the abbreviated measures that the value can be
* converted to.
*/
Converter.prototype.possibilities = function (measure) {
  var possibilities = [];
  if(!this.origin && !measure) {
	  each(keys(measures), function (measure){
		  each(measures[measure], function (units, system) {
		    if(system == '_anchors')
		      return false;

		    possibilities = possibilities.concat(keys(units));
		  });
	  });
  } else {
	  measure = measure || this.origin.measure;
	  each(measures[measure], function (units, system) {
	    if(system == '_anchors')
	      return false;

	    possibilities = possibilities.concat(keys(units));
	  });
  }

  return possibilities;
};

/**
* Returns the abbreviated measures that the value can be
* converted to.
*/
Converter.prototype.measures = function () {
  return keys(measures);
};

convert = function (value) {
  return new Converter(value);
};

module.exports = convert;


/***/ }),
/* 7 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var isObject = __webpack_require__(8),
    reNative = __webpack_require__(10),
    shimKeys = __webpack_require__(11);

/* Native method shortcuts for methods with the same name as other `lodash` methods */
var nativeKeys = reNative.test(nativeKeys = Object.keys) && nativeKeys;

/**
 * Creates an array composed of the own enumerable property names of an object.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns an array of property names.
 * @example
 *
 * _.keys({ 'one': 1, 'two': 2, 'three': 3 });
 * // => ['one', 'two', 'three'] (property order is not guaranteed across environments)
 */
var keys = !nativeKeys ? shimKeys : function(object) {
  if (!isObject(object)) {
    return [];
  }
  return nativeKeys(object);
};

module.exports = keys;


/***/ }),
/* 8 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var objectTypes = __webpack_require__(9);

/**
 * Checks if `value` is the language type of Object.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // check if the value is the ECMAScript language type of Object
  // http://es5.github.io/#x8
  // and avoid a V8 bug
  // http://code.google.com/p/v8/issues/detail?id=2291
  return !!(value && objectTypes[typeof value]);
}

module.exports = isObject;


/***/ }),
/* 9 */
/***/ ((module) => {

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/** Used to determine if values are of the language type Object */
var objectTypes = {
  'boolean': false,
  'function': true,
  'object': true,
  'number': false,
  'string': false,
  'undefined': false
};

module.exports = objectTypes;


/***/ }),
/* 10 */
/***/ ((module) => {

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/** Used for native method references */
var objectProto = Object.prototype;

/** Used to resolve the internal [[Class]] of values */
var toString = objectProto.toString;

/** Used to detect if a method is native */
var reNative = RegExp('^' +
  String(toString)
    .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    .replace(/toString| for [^\]]+/g, '.*?') + '$'
);

module.exports = reNative;


/***/ }),
/* 11 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var objectTypes = __webpack_require__(9);

/** Used for native method references */
var objectProto = Object.prototype;

/** Native method shortcuts */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A fallback implementation of `Object.keys` which produces an array of the
 * given object's own enumerable property names.
 *
 * @private
 * @type Function
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns an array of property names.
 */
var shimKeys = function(object) {
  var index, iterable = object, result = [];
  if (!iterable) return result;
  if (!(objectTypes[typeof object])) return result;
    for (index in iterable) {
      if (hasOwnProperty.call(iterable, index)) {
        result.push(index);
      }
    }
  return result
};

module.exports = shimKeys;


/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseCreateCallback = __webpack_require__(13),
    forOwn = __webpack_require__(25);

/**
 * Iterates over elements of a collection, executing the callback for each
 * element. The callback is bound to `thisArg` and invoked with three arguments;
 * (value, index|key, collection). Callbacks may exit iteration early by
 * explicitly returning `false`.
 *
 * Note: As with other "Collections" methods, objects with a `length` property
 * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
 * may be used for object iteration.
 *
 * @static
 * @memberOf _
 * @alias each
 * @category Collections
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function} [callback=identity] The function called per iteration.
 * @param {*} [thisArg] The `this` binding of `callback`.
 * @returns {Array|Object|string} Returns `collection`.
 * @example
 *
 * _([1, 2, 3]).forEach(function(num) { console.log(num); }).join(',');
 * // => logs each number and returns '1,2,3'
 *
 * _.forEach({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { console.log(num); });
 * // => logs each number and returns the object (property order is not guaranteed across environments)
 */
function forEach(collection, callback, thisArg) {
  var index = -1,
      length = collection ? collection.length : 0;

  callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);
  if (typeof length == 'number') {
    while (++index < length) {
      if (callback(collection[index], index, collection) === false) {
        break;
      }
    }
  } else {
    forOwn(collection, callback);
  }
  return collection;
}

module.exports = forEach;


/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var bind = __webpack_require__(14),
    identity = __webpack_require__(23),
    setBindData = __webpack_require__(19),
    support = __webpack_require__(24);

/** Used to detected named functions */
var reFuncName = /^\s*function[ \n\r\t]+\w/;

/** Used to detect functions containing a `this` reference */
var reThis = /\bthis\b/;

/** Native method shortcuts */
var fnToString = Function.prototype.toString;

/**
 * The base implementation of `_.createCallback` without support for creating
 * "_.pluck" or "_.where" style callbacks.
 *
 * @private
 * @param {*} [func=identity] The value to convert to a callback.
 * @param {*} [thisArg] The `this` binding of the created callback.
 * @param {number} [argCount] The number of arguments the callback accepts.
 * @returns {Function} Returns a callback function.
 */
function baseCreateCallback(func, thisArg, argCount) {
  if (typeof func != 'function') {
    return identity;
  }
  // exit early for no `thisArg` or already bound by `Function#bind`
  if (typeof thisArg == 'undefined' || !('prototype' in func)) {
    return func;
  }
  var bindData = func.__bindData__;
  if (typeof bindData == 'undefined') {
    if (support.funcNames) {
      bindData = !func.name;
    }
    bindData = bindData || !support.funcDecomp;
    if (!bindData) {
      var source = fnToString.call(func);
      if (!support.funcNames) {
        bindData = !reFuncName.test(source);
      }
      if (!bindData) {
        // checks if `func` references the `this` keyword and stores the result
        bindData = reThis.test(source);
        setBindData(func, bindData);
      }
    }
  }
  // exit early if there are no `this` references or `func` is bound
  if (bindData === false || (bindData !== true && bindData[1] & 1)) {
    return func;
  }
  switch (argCount) {
    case 1: return function(value) {
      return func.call(thisArg, value);
    };
    case 2: return function(a, b) {
      return func.call(thisArg, a, b);
    };
    case 3: return function(value, index, collection) {
      return func.call(thisArg, value, index, collection);
    };
    case 4: return function(accumulator, value, index, collection) {
      return func.call(thisArg, accumulator, value, index, collection);
    };
  }
  return bind(func, thisArg);
}

module.exports = baseCreateCallback;


/***/ }),
/* 14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var createWrapper = __webpack_require__(15),
    reNative = __webpack_require__(10),
    slice = __webpack_require__(21);

/**
 * Creates a function that, when called, invokes `func` with the `this`
 * binding of `thisArg` and prepends any additional `bind` arguments to those
 * provided to the bound function.
 *
 * @static
 * @memberOf _
 * @category Functions
 * @param {Function} func The function to bind.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {...*} [arg] Arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * var func = function(greeting) {
 *   return greeting + ' ' + this.name;
 * };
 *
 * func = _.bind(func, { 'name': 'fred' }, 'hi');
 * func();
 * // => 'hi fred'
 */
function bind(func, thisArg) {
  return arguments.length > 2
    ? createWrapper(func, 17, slice(arguments, 2), null, thisArg)
    : createWrapper(func, 1, null, null, thisArg);
}

module.exports = bind;


/***/ }),
/* 15 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseBind = __webpack_require__(16),
    baseCreateWrapper = __webpack_require__(20),
    isFunction = __webpack_require__(22);

/**
 * Used for `Array` method references.
 *
 * Normally `Array.prototype` would suffice, however, using an array literal
 * avoids issues in Narwhal.
 */
var arrayRef = [];

/** Native method shortcuts */
var push = arrayRef.push;

/**
 * Creates a function that, when called, either curries or invokes `func`
 * with an optional `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to reference.
 * @param {number} bitmask The bitmask of method flags to compose.
 *  The bitmask may be composed of the following flags:
 *  1 - `_.bind`
 *  2 - `_.bindKey`
 *  4 - `_.curry`
 *  8 - `_.curry` (bound)
 *  16 - `_.partial`
 *  32 - `_.partialRight`
 * @param {Array} [partialArgs] An array of arguments to prepend to those
 *  provided to the new function.
 * @param {Array} [partialRightArgs] An array of arguments to append to those
 *  provided to the new function.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new function.
 */
function createWrapper(func, bitmask, partialArgs, partialRightArgs, thisArg, arity) {
  var isBind = bitmask & 1,
      isBindKey = bitmask & 2,
      isCurry = bitmask & 4,
      isCurryBound = bitmask & 8,
      isPartial = bitmask & 16,
      isPartialRight = bitmask & 32;

  if (!isBindKey && !isFunction(func)) {
    throw new TypeError;
  }
  if (isPartial && !partialArgs.length) {
    bitmask &= ~16;
    isPartial = partialArgs = false;
  }
  if (isPartialRight && !partialRightArgs.length) {
    bitmask &= ~32;
    isPartialRight = partialRightArgs = false;
  }
  var bindData = func && func.__bindData__;
  if (bindData && bindData !== true) {
    bindData = bindData.slice();

    // set `thisBinding` is not previously bound
    if (isBind && !(bindData[1] & 1)) {
      bindData[4] = thisArg;
    }
    // set if previously bound but not currently (subsequent curried functions)
    if (!isBind && bindData[1] & 1) {
      bitmask |= 8;
    }
    // set curried arity if not yet set
    if (isCurry && !(bindData[1] & 4)) {
      bindData[5] = arity;
    }
    // append partial left arguments
    if (isPartial) {
      push.apply(bindData[2] || (bindData[2] = []), partialArgs);
    }
    // append partial right arguments
    if (isPartialRight) {
      push.apply(bindData[3] || (bindData[3] = []), partialRightArgs);
    }
    // merge flags
    bindData[1] |= bitmask;
    return createWrapper.apply(null, bindData);
  }
  // fast path for `_.bind`
  var creater = (bitmask == 1 || bitmask === 17) ? baseBind : baseCreateWrapper;
  return creater([func, bitmask, partialArgs, partialRightArgs, thisArg, arity]);
}

module.exports = createWrapper;


/***/ }),
/* 16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseCreate = __webpack_require__(17),
    isObject = __webpack_require__(8),
    setBindData = __webpack_require__(19);

/**
 * Used for `Array` method references.
 *
 * Normally `Array.prototype` would suffice, however, using an array literal
 * avoids issues in Narwhal.
 */
var arrayRef = [];

/** Native method shortcuts */
var push = arrayRef.push;

/**
 * The base implementation of `_.bind` that creates the bound function and
 * sets its meta data.
 *
 * @private
 * @param {Array} bindData The bind data array.
 * @returns {Function} Returns the new bound function.
 */
function baseBind(bindData) {
  var func = bindData[0],
      partialArgs = bindData[2],
      thisArg = bindData[4];

  function bound() {
    // `Function#bind` spec
    // http://es5.github.io/#x15.3.4.5
    if (partialArgs) {
      var args = partialArgs.slice();
      push.apply(args, arguments);
    }
    // mimic the constructor's `return` behavior
    // http://es5.github.io/#x13.2.2
    if (this instanceof bound) {
      // ensure `new bound` is an instance of `func`
      var thisBinding = baseCreate(func.prototype),
          result = func.apply(thisBinding, args || arguments);
      return isObject(result) ? result : thisBinding;
    }
    return func.apply(thisArg, args || arguments);
  }
  setBindData(bound, bindData);
  return bound;
}

module.exports = baseBind;


/***/ }),
/* 17 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var isObject = __webpack_require__(8),
    noop = __webpack_require__(18),
    reNative = __webpack_require__(10);

/* Native method shortcuts for methods with the same name as other `lodash` methods */
var nativeCreate = reNative.test(nativeCreate = Object.create) && nativeCreate;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(prototype, properties) {
  return isObject(prototype) ? nativeCreate(prototype) : {};
}
// fallback for browsers without `Object.create`
if (!nativeCreate) {
  baseCreate = (function() {
    function Object() {}
    return function(prototype) {
      if (isObject(prototype)) {
        Object.prototype = prototype;
        var result = new Object;
        Object.prototype = null;
      }
      return result || __webpack_require__.g.Object();
    };
  }());
}

module.exports = baseCreate;


/***/ }),
/* 18 */
/***/ ((module) => {

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * A no-operation function.
 *
 * @static
 * @memberOf _
 * @category Utilities
 * @example
 *
 * var object = { 'name': 'fred' };
 * _.noop(object) === undefined;
 * // => true
 */
function noop() {
  // no operation performed
}

module.exports = noop;


/***/ }),
/* 19 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var noop = __webpack_require__(18),
    reNative = __webpack_require__(10);

/** Used as the property descriptor for `__bindData__` */
var descriptor = {
  'configurable': false,
  'enumerable': false,
  'value': null,
  'writable': false
};

/** Used to set meta data on functions */
var defineProperty = (function() {
  // IE 8 only accepts DOM elements
  try {
    var o = {},
        func = reNative.test(func = Object.defineProperty) && func,
        result = func(o, o, o) && func;
  } catch(e) { }
  return result;
}());

/**
 * Sets `this` binding data on a given function.
 *
 * @private
 * @param {Function} func The function to set data on.
 * @param {Array} value The data array to set.
 */
var setBindData = !defineProperty ? noop : function(func, value) {
  descriptor.value = value;
  defineProperty(func, '__bindData__', descriptor);
};

module.exports = setBindData;


/***/ }),
/* 20 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseCreate = __webpack_require__(17),
    isObject = __webpack_require__(8),
    setBindData = __webpack_require__(19),
    slice = __webpack_require__(21);

/**
 * Used for `Array` method references.
 *
 * Normally `Array.prototype` would suffice, however, using an array literal
 * avoids issues in Narwhal.
 */
var arrayRef = [];

/** Native method shortcuts */
var push = arrayRef.push;

/**
 * The base implementation of `createWrapper` that creates the wrapper and
 * sets its meta data.
 *
 * @private
 * @param {Array} bindData The bind data array.
 * @returns {Function} Returns the new function.
 */
function baseCreateWrapper(bindData) {
  var func = bindData[0],
      bitmask = bindData[1],
      partialArgs = bindData[2],
      partialRightArgs = bindData[3],
      thisArg = bindData[4],
      arity = bindData[5];

  var isBind = bitmask & 1,
      isBindKey = bitmask & 2,
      isCurry = bitmask & 4,
      isCurryBound = bitmask & 8,
      key = func;

  function bound() {
    var thisBinding = isBind ? thisArg : this;
    if (partialArgs) {
      var args = partialArgs.slice();
      push.apply(args, arguments);
    }
    if (partialRightArgs || isCurry) {
      args || (args = slice(arguments));
      if (partialRightArgs) {
        push.apply(args, partialRightArgs);
      }
      if (isCurry && args.length < arity) {
        bitmask |= 16 & ~32;
        return baseCreateWrapper([func, (isCurryBound ? bitmask : bitmask & ~3), args, null, thisArg, arity]);
      }
    }
    args || (args = arguments);
    if (isBindKey) {
      func = thisBinding[key];
    }
    if (this instanceof bound) {
      thisBinding = baseCreate(func.prototype);
      var result = func.apply(thisBinding, args);
      return isObject(result) ? result : thisBinding;
    }
    return func.apply(thisBinding, args);
  }
  setBindData(bound, bindData);
  return bound;
}

module.exports = baseCreateWrapper;


/***/ }),
/* 21 */
/***/ ((module) => {

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * Slices the `collection` from the `start` index up to, but not including,
 * the `end` index.
 *
 * Note: This function is used instead of `Array#slice` to support node lists
 * in IE < 9 and to ensure dense arrays are returned.
 *
 * @private
 * @param {Array|Object|string} collection The collection to slice.
 * @param {number} start The start index.
 * @param {number} end The end index.
 * @returns {Array} Returns the new array.
 */
function slice(array, start, end) {
  start || (start = 0);
  if (typeof end == 'undefined') {
    end = array ? array.length : 0;
  }
  var index = -1,
      length = end - start || 0,
      result = Array(length < 0 ? 0 : length);

  while (++index < length) {
    result[index] = array[start + index];
  }
  return result;
}

module.exports = slice;


/***/ }),
/* 22 */
/***/ ((module) => {

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * Checks if `value` is a function.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 */
function isFunction(value) {
  return typeof value == 'function';
}

module.exports = isFunction;


/***/ }),
/* 23 */
/***/ ((module) => {

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * This method returns the first argument provided to it.
 *
 * @static
 * @memberOf _
 * @category Utilities
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'name': 'fred' };
 * _.identity(object) === object;
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 24 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var reNative = __webpack_require__(10);

/** Used to detect functions containing a `this` reference */
var reThis = /\bthis\b/;

/**
 * An object used to flag environments features.
 *
 * @static
 * @memberOf _
 * @type Object
 */
var support = {};

/**
 * Detect if functions can be decompiled by `Function#toString`
 * (all but PS3 and older Opera mobile browsers & avoided in Windows 8 apps).
 *
 * @memberOf _.support
 * @type boolean
 */
support.funcDecomp = !reNative.test(__webpack_require__.g.WinRTError) && reThis.test(function() { return this; });

/**
 * Detect if `Function#name` is supported (all but IE).
 *
 * @memberOf _.support
 * @type boolean
 */
support.funcNames = typeof Function.name == 'string';

module.exports = support;


/***/ }),
/* 25 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseCreateCallback = __webpack_require__(13),
    keys = __webpack_require__(7),
    objectTypes = __webpack_require__(9);

/**
 * Iterates over own enumerable properties of an object, executing the callback
 * for each property. The callback is bound to `thisArg` and invoked with three
 * arguments; (value, key, object). Callbacks may exit iteration early by
 * explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @type Function
 * @category Objects
 * @param {Object} object The object to iterate over.
 * @param {Function} [callback=identity] The function called per iteration.
 * @param {*} [thisArg] The `this` binding of `callback`.
 * @returns {Object} Returns `object`.
 * @example
 *
 * _.forOwn({ '0': 'zero', '1': 'one', 'length': 2 }, function(num, key) {
 *   console.log(key);
 * });
 * // => logs '0', '1', and 'length' (property order is not guaranteed across environments)
 */
var forOwn = function(collection, callback, thisArg) {
  var index, iterable = collection, result = iterable;
  if (!iterable) return result;
  if (!objectTypes[typeof iterable]) return result;
  callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);
    var ownIndex = -1,
        ownProps = objectTypes[typeof iterable] && keys(iterable),
        length = ownProps ? ownProps.length : 0;

    while (++ownIndex < length) {
      index = ownProps[ownIndex];
      if (callback(iterable[index], index, collection) === false) return result;
    }
  return result
};

module.exports = forOwn;


/***/ }),
/* 26 */
/***/ ((module) => {

var metric,
imperial;

metric = {
  mm: {
    name: {
      singular: 'Millimeter',
      plural: 'Millimeters'
    },
    to_anchor: 1/1000
  },
  cm: {
    name: {
      singular: 'Centimeter',
      plural: 'Centimeters'
    },
    to_anchor: 1/100
  },
  m: {
    name: {
      singular: 'Meter',
      plural: 'Meters'
    },
    to_anchor: 1
  },
  km: {
    name: {
      singular: 'Kilometer',
      plural: 'Kilometers'
    },
    to_anchor: 1000
  }
};

imperial = {
  'in': {
    name: {
      singular: 'Inch',
      plural: 'Inches'
    },
    to_anchor: 1/12
  },
  yd: {
    name: {
      singular: 'Yard',
      plural: 'Yards'
    },
    to_anchor: 3
  },
  'ft-us': {
    name: {
      singular: 'US Survey Foot',
      plural: 'US Survey Feet'
    },
    to_anchor: 1.000002
  },
  ft: {
    name: {
      singular: 'Foot',
      plural: 'Feet'
    },
    to_anchor: 1
  },
  mi: {
    name: {
      singular: 'Mile',
      plural: 'Miles'
    },
    to_anchor: 5280
  }
};

module.exports = {
  metric: metric,
  imperial: imperial,
  _anchors: {
    metric: {
      unit: 'm',
      ratio: 3.28084
    },
    imperial: {
      unit: 'ft',
      ratio: 1/3.28084
    }
  }
};


/***/ }),
/* 27 */
/***/ ((module) => {

var metric
  , imperial;

metric = {
  mm2: {
    name: {
      singular: 'Square Millimeter'
    , plural: 'Square Millimeters'
    }
  , to_anchor: 1/1000000
  }
, cm2: {
    name: {
      singular: 'Centimeter'
    , plural: 'Centimeters'
    }
  , to_anchor: 1/10000
  }
, m2: {
    name: {
      singular: 'Square Meter'
    , plural: 'Square Meters'
    }
  , to_anchor: 1
  }
, ha: {
    name: {
      singular: 'Hectare'
    , plural: 'Hectares'
    }
  , to_anchor: 10000
  }
, km2: {
    name: {
      singular: 'Square Kilometer'
    , plural: 'Square Kilometers'
    }
  , to_anchor: 1000000
  }
};

imperial = {
  'in2': {
    name: {
      singular: 'Square Inch'
    , plural: 'Square Inches'
    }
  , to_anchor: 1/144
  }
, yd2: {
    name: {
      singular: 'Square Yard'
    , plural: 'Square Yards'  
    }
  , to_anchor: 9
  }
, ft2: {
    name: {
      singular: 'Square Foot'
    , plural: 'Square Feet'
    }
  , to_anchor: 1
  }
, ac: {
    name: {
      singular: 'Acre'
    , plural: 'Acres'
    }
  , to_anchor: 43560
  }
, mi2: {
    name: {
      singular: 'Square Mile'
    , plural: 'Square Miles'
    }
  , to_anchor: 27878400
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'm2'
    , ratio: 10.7639
    }
  , imperial: {
      unit: 'ft2'
    , ratio: 1/10.7639
    }
  }
};


/***/ }),
/* 28 */
/***/ ((module) => {

var metric
  , imperial;

metric = {
  mcg: {
    name: {
      singular: 'Microgram'
    , plural: 'Micrograms'
    }
  , to_anchor: 1/1000000
  }
, mg: {
    name: {
      singular: 'Milligram'
    , plural: 'Milligrams'
    }
  , to_anchor: 1/1000
  }
, g: {
    name: {
      singular: 'Gram'
    , plural: 'Grams'
    }
  , to_anchor: 1
  }
, kg: {
    name: {
      singular: 'Kilogram'
    , plural: 'Kilograms'
    }
  , to_anchor: 1000
}
, mt: {
    name: {
      singular: 'Metric Tonne'
    , plural: 'Metric Tonnes'
    }
  , to_anchor: 1000000
  }
};

imperial = {
  oz: {
    name: {
      singular: 'Ounce'
    , plural: 'Ounces'
    }
  , to_anchor: 1/16
  }
, lb: {
    name: {
      singular: 'Pound'
    , plural: 'Pounds'
    }
  , to_anchor: 1
}, t: {
  name: {
    singular: 'Ton',
    plural: 'Tons',
  },
    to_anchor: 2000,
  },
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'g'
    , ratio: 1/453.592
    }
  , imperial: {
      unit: 'lb'
    , ratio: 453.592
    }
  }
};


/***/ }),
/* 29 */
/***/ ((module) => {

var metric
  , imperial;

metric = {
  mm3: {
      name: {
        singular: 'Cubic Millimeter'
      , plural: 'Cubic Millimeters'
      }
    , to_anchor: 1/1000000
  }
, cm3: {
    name: {
      singular: 'Cubic Centimeter'
    , plural: 'Cubic Centimeters'
    }
  , to_anchor: 1/1000
  }
, ml: {
    name: {
      singular: 'Millilitre'
    , plural: 'Millilitres'
    }
  , to_anchor: 1/1000
  }
, cl: {
    name: {
      singular: 'Centilitre'
    , plural: 'Centilitres'
    }
  , to_anchor: 1/100
  }
, dl: {
    name: {
      singular: 'Decilitre'
    , plural: 'Decilitres'
    }
  , to_anchor: 1/10
  }
, l: {
    name: {
      singular: 'Litre'
    , plural: 'Litres'
    }
  , to_anchor: 1
  }
, kl: {
    name: {
      singular: 'Kilolitre'
    , plural: 'Kilolitres'
    }
  , to_anchor: 1000
  }
, m3: {
    name: {
      singular: 'Cubic meter'
    , plural: 'Cubic meters'
    }
  , to_anchor: 1000
  }
, km3: {
    name: {
      singular: 'Cubic kilometer'
    , plural: 'Cubic kilometers'
    }
  , to_anchor: 1000000000000
  }

// Swedish units
, krm: {
  name: {
    singular: 'Matsked'
    , plural: 'Matskedar'
  }
  , to_anchor: 1/1000
}
, tsk: {
    name: {
      singular: 'Tesked'
    , plural: 'Teskedar'
    }
  , to_anchor: 5/1000
  }
, msk: {
    name: {
      singular: 'Matsked'
      , plural: 'Matskedar'
    }
    , to_anchor: 15/1000
  }
, kkp: {
    name: {
      singular: 'Kaffekopp'
      , plural: 'Kaffekoppar'
    }
    , to_anchor: 150/1000
  }
, glas: {
    name: {
      singular: 'Glas'
      , plural: 'Glas'
    }
    , to_anchor: 200/1000
  }
, kanna: {
    name: {
      singular: 'Kanna'
    , plural: 'Kannor'
    }
  , to_anchor: 2.617
  }
};

imperial = {
  tsp: {
    name: {
      singular: 'Teaspoon'
    , plural: 'Teaspoons'
    }
  , to_anchor: 1/6
  }
, Tbs: {
    name: {
      singular: 'Tablespoon'
    , plural: 'Tablespoons'
    }
  , to_anchor: 1/2
  }
, in3: {
    name: {
      singular: 'Cubic inch'
    , plural: 'Cubic inches'
    }
  , to_anchor: 0.55411
  }
, 'fl-oz': {
    name: {
      singular: 'Fluid Ounce'
    , plural: 'Fluid Ounces'
    }
  , to_anchor: 1
  }
, cup: {
    name: {
      singular: 'Cup'
    , plural: 'Cups'
    }
  , to_anchor: 8
  }
, pnt: {
    name: {
      singular: 'Pint'
    , plural: 'Pints'
    }
  , to_anchor: 16
  }
, qt: {
    name: {
      singular: 'Quart'
    , plural: 'Quarts'
    }
  , to_anchor: 32
  }
, gal: {
    name: {
      singular: 'Gallon'
    , plural: 'Gallons'
    }
  , to_anchor: 128
  }
, ft3: {
    name: {
      singular: 'Cubic foot'
    , plural: 'Cubic feet'
    }
  , to_anchor: 957.506
  }
, yd3: {
    name: {
      singular: 'Cubic yard'
    , plural: 'Cubic yards'
    }
  , to_anchor: 25852.7
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'l'
    , ratio: 33.8140226
    }
  , imperial: {
      unit: 'fl-oz'
    , ratio: 1/33.8140226
    }
  }
};


/***/ }),
/* 30 */
/***/ ((module) => {

var metric
  , imperial;

metric = {
  ea: {
    name: {
      singular: 'Each'
    , plural: 'Each'
    }
  , to_anchor: 1
  },
  dz: {
    name: {
      singular: 'Dozen'
    , plural: 'Dozens'
    }
  , to_anchor: 12
  }
};

module.exports = {
  metric: metric
, imperial: {}
, _anchors: {
    metric: {
      unit: 'ea'
    , ratio: 1
    }
  }
};


/***/ }),
/* 31 */
/***/ ((module) => {

var metric
  , imperial;

metric = {
  C: {
    name: {
      singular: 'degree Celsius'
    , plural: 'degrees Celsius'
    }
  , to_anchor: 1
  , anchor_shift: 0
  },
  K: {
    name: {
      singular: 'degree Kelvin'
    , plural: 'degrees Kelvin'
    }
  , to_anchor: 1
  , anchor_shift: 273.15
  }
};

imperial = {
  F: {
    name: {
      singular: 'degree Fahrenheit'
    , plural: 'degrees Fahrenheit'
    }
  , to_anchor: 1
  },
  R: {
    name: {
      singular: 'degree Rankine'
    , plural: 'degrees Rankine'
    }
  , to_anchor: 1
  , anchor_shift: 459.67
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'C'
    , transform: function (C) { return C / (5/9) + 32 }
    }
  , imperial: {
      unit: 'F'
    , transform: function (F) { return (F - 32) * (5/9) }
    }
  }
};



/***/ }),
/* 32 */
/***/ ((module) => {

var time;
var daysInYear = 365.25;

time = {
  ns: {
    name: {
      singular: 'Nanosecond'
    , plural: 'Nanoseconds'
    }
  , to_anchor: 1/1000000000
  }
, mu: {
    name: {
      singular: 'Microsecond'
    , plural: 'Microseconds'
    }
  , to_anchor: 1/1000000
  }
, ms: {
    name: {
      singular: 'Millisecond'
    , plural: 'Milliseconds'
    }
  , to_anchor: 1/1000
  }
, s: {
    name: {
      singular: 'Second'
    , plural: 'Seconds'
    }
  , to_anchor: 1
  }
, min: {
    name: {
      singular: 'Minute'
    , plural: 'Minutes'
    }
  , to_anchor: 60
  }
, h: {
    name: {
      singular: 'Hour'
    , plural: 'Hours'
    }
  , to_anchor: 60 * 60 
  }
, d: {
    name: {
      singular: 'Day'
    , plural: 'Days'
    }
  , to_anchor: 60 * 60 * 24
  }
, week: {
    name: {
      singular: 'Week'
    , plural: 'Weeks'
    }
  , to_anchor: 60 * 60 * 24 * 7
  }
, month: {
    name: {
      singular: 'Month'
    , plural: 'Months'
    }
  , to_anchor: 60 * 60 * 24 * daysInYear / 12
  }
, year: {
    name: {
      singular: 'Year'
    , plural: 'Years'
    }
  , to_anchor: 60 * 60 * 24 * daysInYear
  }
};


module.exports = {
  metric: time 
, _anchors: {
    metric: {
      unit: 's'
    , ratio: 1
    }
  }
};


/***/ }),
/* 33 */
/***/ ((module) => {

var bits
  , bytes;

bits = {
  b: {
    name: {
      singular: 'Bit'
    , plural: 'Bits'
    }
  , to_anchor: 1
  }
, Kb: {
    name: {
      singular: 'Kilobit'
    , plural: 'Kilobits'
    }
  , to_anchor: 1024
  }
, Mb: {
    name: {
      singular: 'Megabit'
    , plural: 'Megabits'
    }
  , to_anchor: 1048576
  }
, Gb: {
    name: {
      singular: 'Gigabit'
    , plural: 'Gigabits'
    }
  , to_anchor: 1073741824
  }
, Tb: {
    name: {
      singular: 'Terabit'
    , plural: 'Terabits'
    }
  , to_anchor: 1099511627776
  }
};

bytes = {
  B: {
    name: {
      singular: 'Byte'
    , plural: 'Bytes'
    }
  , to_anchor: 1
  }
, KB: {
    name: {
      singular: 'Kilobyte'
    , plural: 'Kilobytes'
    }
  , to_anchor: 1024
  }
, MB: {
    name: {
      singular: 'Megabyte'
    , plural: 'Megabytes'
    }
  , to_anchor: 1048576
  }
, GB: {
    name: {
      singular: 'Gigabyte'
    , plural: 'Gigabytes'
    }
  , to_anchor: 1073741824
  }
, TB: {
    name: {
      singular: 'Terabyte'
    , plural: 'Terabytes'
    }
  , to_anchor: 1099511627776
  }
};

module.exports = {
  bits: bits
, bytes: bytes
, _anchors: {
    bits: {
      unit: 'b'
    , ratio: 1/8
    }
  , bytes: {
      unit: 'B'
    , ratio: 8
    }
  }
};


/***/ }),
/* 34 */
/***/ ((module) => {

var metric
  , imperial;

metric = {
  ppm: {
    name: {
      singular: 'Part-per Million'
      , plural: 'Parts-per Million'
    }
    , to_anchor: 1
  }
  , ppb: {
    name: {
      singular: 'Part-per Billion'
      , plural: 'Parts-per Billion'
    }
    , to_anchor: .001
  }
  , ppt: {
    name: {
      singular: 'Part-per Trillion'
      , plural: 'Parts-per Trillion'
    }
    , to_anchor: .000001
  }
  , ppq: {
    name: {
      singular: 'Part-per Quadrillion'
      , plural: 'Parts-per Quadrillion'
    }
    , to_anchor: .000000001
  }
};

module.exports = {
  metric: metric
  , imperial: {}
  , _anchors: {
    metric: {
      unit: 'ppm'
      , ratio: .000001
    }
  }
};


/***/ }),
/* 35 */
/***/ ((module) => {

var metric
  , imperial;

metric = {
  'm/s': {
    name: {
      singular: 'Metre per second'
    , plural: 'Metres per second'
    }
  , to_anchor: 3.6
  }
, 'km/h': {
    name: {
      singular: 'Kilometre per hour'
    , plural: 'Kilometres per hour'
    }
  , to_anchor: 1
  }
}

  imperial = {
    'm/h': {
      name: {
        singular: 'Mile per hour'
      , plural: 'Miles per hour'
      }
    , to_anchor: 1
    }
  , knot: {
      name: {
        singular: 'Knot'
      , plural: 'Knots'
      }
    , to_anchor: 1.150779
    }
  , 'ft/s': {
      name: {
        singular: 'Foot per second'
      , plural: 'Feet per second'
      }
    , to_anchor: 0.681818
      }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'km/h'
    , ratio: 1/1.609344
    }
  , imperial: {
      unit: 'm/h'
    , ratio: 1.609344
    }
  }
};


/***/ }),
/* 36 */
/***/ ((module) => {

var metric
  , imperial;

metric = {
  'min/km': {
    name: {
      singular: 'Minute per kilometre'
    , plural: 'Minutes per kilometre'
    }
  , to_anchor: 0.06
  }
  ,'s/m': {
    name: {
      singular: 'Second per metre'
    , plural: 'Seconds per metre'
    }
  , to_anchor: 1
  }
}

imperial = {
    'min/mi': {
      name: {
        singular: 'Minute per mile'
      , plural: 'Minutes per mile'
      }
    , to_anchor: 0.0113636
   }
   , 's/ft': {
      name: {
        singular: 'Second per foot'
      , plural: 'Seconds per foot'
      }
    , to_anchor: 1
   }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 's/m'
    , ratio: 0.3048
    }
  , imperial: {
      unit: 's/ft'
    , ratio: 1/0.3048
    }
  }
};


/***/ }),
/* 37 */
/***/ ((module) => {

var metric
  , imperial;

metric = {
  Pa: {
    name: {
      singular: 'pascal'
    , plural: 'pascals'
    }
  , to_anchor: 1/1000
  }
, kPa: {
    name: {
      singular: 'kilopascal'
    , plural: 'kilopascals'
    }
  , to_anchor: 1
  }
, MPa: {
    name: {
      singular: 'megapascal'
    , plural: 'megapascals'
    }
  , to_anchor: 1000
  }
, hPa: {
    name: {
      singular: 'hectopascal'
    , plural: 'hectopascals'
    }
  , to_anchor: 1/10
  }
, bar: {
    name: {
      singular: 'bar'
    , plural: 'bar'
    }
  , to_anchor: 100
  }
, torr: {
    name: {
      singular: 'torr'
    , plural: 'torr'
    }
  , to_anchor: 101325/760000
  }
};

imperial = {
  psi: {
    name: {
      singular: 'pound per square inch'
    , plural: 'pounds per square inch'
    }
  , to_anchor: 1/1000
  }
, ksi: {
    name: {
      singular: 'kilopound per square inch'
    , plural: 'kilopound per square inch'
    }
  , to_anchor: 1
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'kPa'
    , ratio: 0.00014503768078
    }
  , imperial: {
      unit: 'psi'
    , ratio: 1/0.00014503768078
    }
  }
};


/***/ }),
/* 38 */
/***/ ((module) => {

var current;

current = {
  A: {
    name: {
      singular: 'Ampere'
    , plural: 'Amperes'
    }
  , to_anchor: 1
  }
, mA: {
    name: {
      singular: 'Milliampere'
      , plural: 'Milliamperes'
    }
    , to_anchor: .001
  }
, kA: {
    name: {
      singular: 'Kiloampere'
    , plural: 'Kiloamperes'
    }
  , to_anchor: 1000
  }
};

module.exports = {
  metric: current
, _anchors: {
    metric: {
      unit: 'A'
    , ratio: 1
    }
  }
};


/***/ }),
/* 39 */
/***/ ((module) => {

var voltage;

voltage = {
  V: {
    name: {
      singular: 'Volt'
    , plural: 'Volts'
    }
  , to_anchor: 1
  }
, mV: {
    name: {
      singular: 'Millivolt'
      , plural: 'Millivolts'
    }
    , to_anchor: .001
  }
, kV: {
    name: {
      singular: 'Kilovolt'
    , plural: 'Kilovolts'
    }
  , to_anchor: 1000
  }
};

module.exports = {
  metric: voltage
, _anchors: {
    metric: {
      unit: 'V'
    , ratio: 1
    }
  }
};


/***/ }),
/* 40 */
/***/ ((module) => {

var power;

power = {
  W: {
    name: {
      singular: 'Watt'
    , plural: 'Watts'
    }
  , to_anchor: 1
  }
, mW: {
    name: {
      singular: 'Milliwatt'
      , plural: 'Milliwatts'
    }
    , to_anchor: .001
  }
, kW: {
    name: {
      singular: 'Kilowatt'
    , plural: 'Kilowatts'
    }
  , to_anchor: 1000
  }
, MW: {
    name: {
      singular: 'Megawatt'
    , plural: 'Megawatts'
    }
  , to_anchor: 1000000
  }
, GW: {
    name: {
      singular: 'Gigawatt'
    , plural: 'Gigawatts'
    }
  , to_anchor: 1000000000
  }
};

module.exports = {
  metric: power
, _anchors: {
    metric: {
      unit: 'W'
    , ratio: 1
    }
  }
};


/***/ }),
/* 41 */
/***/ ((module) => {

var reactivePower;

reactivePower = {
  VAR: {
    name: {
      singular: 'Volt-Ampere Reactive'
    , plural: 'Volt-Amperes Reactive'
    }
  , to_anchor: 1
  }
, mVAR: {
    name: {
      singular: 'Millivolt-Ampere Reactive'
      , plural: 'Millivolt-Amperes Reactive'
    }
    , to_anchor: .001
  }
, kVAR: {
    name: {
      singular: 'Kilovolt-Ampere Reactive'
    , plural: 'Kilovolt-Amperes Reactive'
    }
  , to_anchor: 1000
  }
, MVAR: {
    name: {
      singular: 'Megavolt-Ampere Reactive'
    , plural: 'Megavolt-Amperes Reactive'
    }
  , to_anchor: 1000000
  }
, GVAR: {
    name: {
      singular: 'Gigavolt-Ampere Reactive'
    , plural: 'Gigavolt-Amperes Reactive'
    }
  , to_anchor: 1000000000
  }
};

module.exports = {
  metric: reactivePower
, _anchors: {
    metric: {
      unit: 'VAR'
    , ratio: 1
    }
  }
};


/***/ }),
/* 42 */
/***/ ((module) => {

var apparentPower;

apparentPower = {
  VA: {
    name: {
      singular: 'Volt-Ampere'
    , plural: 'Volt-Amperes'
    }
  , to_anchor: 1
  }
, mVA: {
    name: {
      singular: 'Millivolt-Ampere'
      , plural: 'Millivolt-Amperes'
    }
    , to_anchor: .001
  }
, kVA: {
    name: {
      singular: 'Kilovolt-Ampere'
    , plural: 'Kilovolt-Amperes'
    }
  , to_anchor: 1000
  }
, MVA: {
    name: {
      singular: 'Megavolt-Ampere'
    , plural: 'Megavolt-Amperes'
    }
  , to_anchor: 1000000
  }
, GVA: {
    name: {
      singular: 'Gigavolt-Ampere'
    , plural: 'Gigavolt-Amperes'
    }
  , to_anchor: 1000000000
  }
};

module.exports = {
  metric: apparentPower
, _anchors: {
    metric: {
      unit: 'VA'
    , ratio: 1
    }
  }
};


/***/ }),
/* 43 */
/***/ ((module) => {

var energy;

energy = {
  Wh: {
    name: {
      singular: 'Watt-hour'
    , plural: 'Watt-hours'
    }
  , to_anchor: 3600
  }
, mWh: {
    name: {
      singular: 'Milliwatt-hour'
      , plural: 'Milliwatt-hours'
    }
    , to_anchor: 3.6
  }
, kWh: {
    name: {
      singular: 'Kilowatt-hour'
    , plural: 'Kilowatt-hours'
    }
  , to_anchor: 3600000
  }
, MWh: {
    name: {
      singular: 'Megawatt-hour'
    , plural: 'Megawatt-hours'
    }
  , to_anchor: 3600000000
  }
, GWh: {
    name: {
      singular: 'Gigawatt-hour'
    , plural: 'Gigawatt-hours'
    }
  , to_anchor: 3600000000000
  }
, J: {
    name: {
      singular: 'Joule'
    , plural: 'Joules'
    }
  , to_anchor: 1
  }
, kJ: {
    name: {
      singular: 'Kilojoule'
    , plural: 'Kilojoules'
    }
  , to_anchor: 1000
  }
};

module.exports = {
  metric: energy
, _anchors: {
    metric: {
      unit: 'J'
    , ratio: 1
    }
  }
};


/***/ }),
/* 44 */
/***/ ((module) => {

var reactiveEnergy;

reactiveEnergy = {
  VARh: {
    name: {
      singular: 'Volt-Ampere Reactive Hour'
    , plural: 'Volt-Amperes Reactive Hour'
    }
  , to_anchor: 1
  }
, mVARh: {
    name: {
      singular: 'Millivolt-Ampere Reactive Hour'
      , plural: 'Millivolt-Amperes Reactive Hour'
    }
    , to_anchor: .001
  }
, kVARh: {
    name: {
      singular: 'Kilovolt-Ampere Reactive Hour'
    , plural: 'Kilovolt-Amperes Reactive Hour'
    }
  , to_anchor: 1000
  }
, MVARh: {
    name: {
      singular: 'Megavolt-Ampere Reactive Hour'
    , plural: 'Megavolt-Amperes Reactive Hour'
    }
  , to_anchor: 1000000
  }
, GVARh: {
    name: {
      singular: 'Gigavolt-Ampere Reactive Hour'
    , plural: 'Gigavolt-Amperes Reactive Hour'
    }
  , to_anchor: 1000000000
  }
};

module.exports = {
  metric: reactiveEnergy
, _anchors: {
    metric: {
      unit: 'VARh'
    , ratio: 1
    }
  }
};


/***/ }),
/* 45 */
/***/ ((module) => {

var metric
  , imperial;

metric = {
  'mm3/s': {
      name: {
        singular: 'Cubic Millimeter per second'
      , plural: 'Cubic Millimeters per second'
      }
    , to_anchor: 1/1000000
  }
, 'cm3/s': {
    name: {
      singular: 'Cubic Centimeter per second'
    , plural: 'Cubic Centimeters per second'
    }
  , to_anchor: 1/1000
  }
, 'ml/s': {
    name: {
      singular: 'Millilitre per second'
    , plural: 'Millilitres per second'
    }
  , to_anchor: 1/1000
  }
, 'cl/s': {
    name: {
      singular: 'Centilitre per second'
    , plural: 'Centilitres per second'
    }
  , to_anchor: 1/100
  }
, 'dl/s': {
    name: {
      singular: 'Decilitre per second'
    , plural: 'Decilitres per second'
    }
  , to_anchor: 1/10
  }
, 'l/s': {
    name: {
      singular: 'Litre per second'
    , plural: 'Litres per second'
    }
  , to_anchor: 1
  }
, 'l/min': {
    name: {
      singular: 'Litre per minute'
    , plural: 'Litres per minute'
    }
  , to_anchor: 1/60
  }
, 'l/h': {
    name: {
      singular: 'Litre per hour'
    , plural: 'Litres per hour'
    }
  , to_anchor: 1/3600
  }
, 'kl/s': {
    name: {
      singular: 'Kilolitre per second'
    , plural: 'Kilolitres per second'
    }
  , to_anchor: 1000
  }
, 'kl/min': {
    name: {
      singular: 'Kilolitre per minute'
    , plural: 'Kilolitres per minute'
    }
  , to_anchor: 50/3
  }
, 'kl/h': {
    name: {
      singular: 'Kilolitre per hour'
    , plural: 'Kilolitres per hour'
    }
  , to_anchor: 5/18
  }
, 'm3/s': {
    name: {
      singular: 'Cubic meter per second'
    , plural: 'Cubic meters per second'
    }
  , to_anchor: 1000
  }
, 'm3/min': {
    name: {
      singular: 'Cubic meter per minute'
    , plural: 'Cubic meters per minute'
    }
  , to_anchor: 50/3
  }
, 'm3/h': {
    name: {
      singular: 'Cubic meter per hour'
    , plural: 'Cubic meters per hour'
    }
  , to_anchor: 5/18
  }
, 'km3/s': {
    name: {
      singular: 'Cubic kilometer per second'
    , plural: 'Cubic kilometers per second'
    }
  , to_anchor: 1000000000000
  }
};

imperial = {
  'tsp/s': {
    name: {
      singular: 'Teaspoon per second'
    , plural: 'Teaspoons per second'
    }
  , to_anchor: 1/6
  }
, 'Tbs/s': {
    name: {
      singular: 'Tablespoon per second'
    , plural: 'Tablespoons per second'
    }
  , to_anchor: 1/2
  }
, 'in3/s': {
    name: {
      singular: 'Cubic inch per second'
    , plural: 'Cubic inches per second'
    }
  , to_anchor: 0.55411
  }
, 'in3/min': {
    name: {
      singular: 'Cubic inch per minute'
    , plural: 'Cubic inches per minute'
    }
  , to_anchor: 0.55411/60
  }
, 'in3/h': {
    name: {
      singular: 'Cubic inch per hour'
    , plural: 'Cubic inches per hour'
    }
  , to_anchor: 0.55411/3600
  }
, 'fl-oz/s': {
    name: {
      singular: 'Fluid Ounce per second'
    , plural: 'Fluid Ounces per second'
    }
  , to_anchor: 1
  }
, 'fl-oz/min': {
    name: {
      singular: 'Fluid Ounce per minute'
    , plural: 'Fluid Ounces per minute'
    }
  , to_anchor: 1/60
  }
, 'fl-oz/h': {
    name: {
      singular: 'Fluid Ounce per hour'
    , plural: 'Fluid Ounces per hour'
    }
  , to_anchor: 1/3600
  }
, 'cup/s': {
    name: {
      singular: 'Cup per second'
    , plural: 'Cups per second'
    }
  , to_anchor: 8
  }
, 'pnt/s': {
    name: {
      singular: 'Pint per second'
    , plural: 'Pints per second'
    }
  , to_anchor: 16
  }
, 'pnt/min': {
    name: {
      singular: 'Pint per minute'
    , plural: 'Pints per minute'
    }
  , to_anchor: 4/15
  }
, 'pnt/h': {
    name: {
      singular: 'Pint per hour'
    , plural: 'Pints per hour'
    }
  , to_anchor: 1/225
  }
, 'qt/s': {
    name: {
      singular: 'Quart per second'
    , plural: 'Quarts per second'
    }
  , to_anchor: 32
  }
, 'gal/s': {
    name: {
      singular: 'Gallon per second'
    , plural: 'Gallons per second'
    }
  , to_anchor: 128
  }
, 'gal/min': {
    name: {
      singular: 'Gallon per minute'
    , plural: 'Gallons per minute'
    }
  , to_anchor: 32/15
  }
, 'gal/h': {
    name: {
      singular: 'Gallon per hour'
    , plural: 'Gallons per hour'
    }
  , to_anchor: 8/225
  }
, 'ft3/s': {
    name: {
      singular: 'Cubic foot per second'
    , plural: 'Cubic feet per second'
    }
  , to_anchor: 957.506
  }
, 'ft3/min': {
    name: {
      singular: 'Cubic foot per minute'
    , plural: 'Cubic feet per minute'
    }
  , to_anchor: 957.506/60
  }
, 'ft3/h': {
    name: {
      singular: 'Cubic foot per hour'
    , plural: 'Cubic feet per hour'
    }
  , to_anchor: 957.506/3600
  }
, 'yd3/s': {
    name: {
      singular: 'Cubic yard per second'
    , plural: 'Cubic yards per second'
    }
  , to_anchor: 25852.7
  }
, 'yd3/min': {
    name: {
      singular: 'Cubic yard per minute'
    , plural: 'Cubic yards per minute'
    }
  , to_anchor: 25852.7/60
  }
, 'yd3/h': {
    name: {
      singular: 'Cubic yard per hour'
    , plural: 'Cubic yards per hour'
    }
  , to_anchor: 25852.7/3600
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'l/s'
    , ratio: 33.8140227
    }
  , imperial: {
      unit: 'fl-oz/s'
    , ratio: 1/33.8140227
    }
  }
};


/***/ }),
/* 46 */
/***/ ((module) => {

var metric,
imperial;

metric = {
  'lx': {
    name: {
      singular: 'Lux',
      plural: 'Lux'
    },
    to_anchor: 1
  }
};

imperial = {
  'ft-cd': {
    name: {
      singular: 'Foot-candle',
      plural: 'Foot-candles'
    },
    to_anchor: 1
  }
};

module.exports = {
  metric: metric,
  imperial: imperial,
  _anchors: {
    metric: {
      unit: 'lx',
      ratio: 1/10.76391
    },
    imperial: {
      unit: 'ft-cd',      
	  ratio: 10.76391
    }
  }
};


/***/ }),
/* 47 */
/***/ ((module) => {

var frequency;

frequency = {
  mHz: {
    name: {
      singular: 'millihertz'
    , plural: 'millihertz'
    }
  , to_anchor: 1/1000
  }
, Hz: {
    name: {
      singular: 'hertz'
    , plural: 'hertz'
    }
  , to_anchor: 1
  }
, kHz: {
    name: {
      singular: 'kilohertz'
    , plural: 'kilohertz'
    }
  , to_anchor: 1000
  }
, MHz: {
    name: {
      singular: 'megahertz'
    , plural: 'megahertz'
    }
  , to_anchor: 1000 * 1000
  }
, GHz: {
    name: {
      singular: 'gigahertz'
    , plural: 'gigahertz'
    }
  , to_anchor: 1000 * 1000 * 1000
  }
, THz: {
    name: {
      singular: 'terahertz'
    , plural: 'terahertz'
    }
  , to_anchor: 1000 * 1000 * 1000 * 1000
  }
, rpm: {
    name: {
      singular: 'rotation per minute'
    , plural: 'rotations per minute'
    }
  , to_anchor: 1/60
  }
, "deg/s": {
    name: {
      singular: 'degree per second'
    , plural: 'degrees per second'
    }
  , to_anchor: 1/360
  }
, "rad/s": {
    name: {
      singular: 'radian per second'
    , plural: 'radians per second'
    }
  , to_anchor: 1/(Math.PI * 2)
  }
};


module.exports = {
  metric: frequency
, _anchors: {
    frequency: {
      unit: 'hz'
    , ratio: 1
    }
  }
};


/***/ }),
/* 48 */
/***/ ((module) => {

var angle;

angle = {
  rad: {
    name: {
      singular: 'radian'
    , plural: 'radians'
    }
  , to_anchor: 180/Math.PI
  }
, deg: {
    name: {
      singular: 'degree'
    , plural: 'degrees'
    }
  , to_anchor: 1
  }
, grad: {
    name: {
      singular: 'gradian'
    , plural: 'gradians'
    }
  , to_anchor: 9/10
  }
, arcmin: {
    name: {
      singular: 'arcminute'
    , plural: 'arcminutes'
    }
  , to_anchor: 1/60
  }
, arcsec: {
    name: {
      singular: 'arcsecond'
    , plural: 'arcseconds'
    }
  , to_anchor: 1/3600
  }
};

module.exports = {
  metric: angle
, _anchors: {
    metric: {
      unit: 'deg'
    , ratio: 1
    }
  }
};


/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sanitizeString: () => (/* binding */ sanitizeString),
/* harmony export */   search: () => (/* binding */ search)
/* harmony export */ });
/* harmony import */ var _recipes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


function search(searchQuery, recipe_dataset, ingredient_dataset) {
  const searchResult = [];
  const sanitizedQuery = sanitizeString(searchQuery);

  return searchResult.concat(
    recipe_dataset.filter((recipe) => {
      return (
        matchName(recipe, sanitizedQuery) ||
        matchIngredient(recipe, sanitizedQuery, ingredient_dataset)
      );
    })
  );
}

function matchName(recipe, searchQuery) {
  const sanitizedQuery = sanitizeString(searchQuery);
  return sanitizeString(recipe.name).includes(sanitizedQuery);
}

function matchIngredient(recipe, searchQuery, ingredient_dataset) {
  const sanitizedQuery = sanitizeString(searchQuery);
  const ingredients = (0,_recipes__WEBPACK_IMPORTED_MODULE_0__.findRecipeIngredients)(recipe, ingredient_dataset);

  for (const ingredient of ingredients)
    if (sanitizeString(ingredient).includes(sanitizedQuery)) return true;
  return false;
}

function sanitizeString(string) {
  return string.toLowerCase();
}


/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),
/* 51 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 52 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --sidebar-width: 300px;\n}\n\n.hidden {\n  visibility: hidden !important;\n}\n\n.gatile {\n  font-family: \"Gatile\";\n}\n\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n  max-height: 100vh;\n}\n\nhtml {\n  background-color: #fefaf7;\n  font-family: sans-serif;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: var(--sidebar-width) 1fr;\n  grid-template-rows: 100px 1fr;\n  gap: 10px;\n  color: #2d2b2b;\n}\n\nheader {\n  grid-column: 1/-1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 40px;\n}\nheader .header-nav {\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n}\nheader .cookbook,\nheader .saved-recipes {\n  background-color: #d39738;\n  color: white;\n  font-family: sans-serif;\n  border-radius: 4px;\n  border: none;\n  height: 50px;\n  width: 200px;\n  font-size: 20px;\n}\nheader .logo {\n  font-size: 3rem;\n}\n\nnav.filter-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  top: 100px;\n  position: sticky;\n  height: 500px;\n  background-color: #fff3e0;\n  border-radius: 4px;\n  padding: 10px;\n}\nnav.filter-container .filter-settings {\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n}\nnav.filter-container .search-box {\n  border: none;\n  border-radius: 15px;\n  height: 30px;\n  padding-left: 15px;\n  font-size: 1rem;\n}\nnav.filter-container h3 {\n  margin: 0;\n}\nnav.filter-container .tags-container .tag {\n  background-color: #9d968b;\n  font-size: 0.95rem;\n  margin-right: 5px;\n  margin-bottom: 3px;\n}\nnav.filter-container .random-recipe {\n  background-color: #d39738;\n  color: white;\n  font-size: 1.25rem;\n  padding: 10px;\n}\nnav.filter-container .tag,\nnav.filter-container .random-recipe {\n  font-family: sans-serif;\n  border: none;\n  border-radius: 4px;\n}\n\n/* CODE FOR COOKBOOK OR SAVED RECIPES PAGE */\nmain#directory-page {\n  background-color: #fff3e0;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  overflow: scroll;\n  border-radius: 4px;\n}\n\n.recipe-card {\n  display: grid;\n  grid-template-columns: 3fr 4fr;\n  height: 200px;\n  padding: 10px;\n}\n.recipe-card img {\n  width: 100%;\n}\n.recipe-card .recipe-info {\n  margin-left: 25px;\n}\n.recipe-card .recipe-name {\n  font-family: \"Gatile\";\n}\n.recipe-card .recipe-ingredients,\n.recipe-card .recipe-tags {\n  color: #9d968b;\n  font-weight: 100;\n}\n.recipe-card .recipe-tags {\n  font-size: 15px;\n}\n.recipe-card .label {\n  font-weight: bold;\n}\n.recipe-card .tags-and-heart {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.recipe-card .heart {\n  height: 35px;\n  width: 35px;\n}\n.recipe-card .recipe-image {\n  object-fit: cover;\n  overflow: hidden;\n  border-top-left-radius: 15px;\n  border-bottom-left-radius: 15px;\n  mask-image: linear-gradient(to right, rgb(0, 0, 0), rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0) 100%);\n}\n\n.sentinel {\n  position: relative;\n  height: 1px;\n}\n\n.tag-active {\n  color: white !important;\n  background-color: #d39738 !important;\n}\n\n.tag-inactive {\n  opacity: 0.2;\n}\n\n/* CODE FOR INDIVIDUAL RECIPE PAGE */\nmain#recipe-page {\n  display: flex;\n  justify-content: center;\n}\nmain#recipe-page .recipe-container {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  grid-template-rows: 300px 1fr;\n  gap: 50px;\n  width: 1000px;\n}\nmain#recipe-page .ingredients-and-heart {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\nmain#recipe-page .heart-container {\n  height: 30px;\n  width: 30px;\n}\nmain#recipe-page .recipe-main {\n  position: relative;\n  grid-column: 1/-1;\n}\nmain#recipe-page .recipe-main .title-container {\n  position: absolute;\n  top: 25%;\n  left: 0;\n  max-width: 750px;\n  overflow: hidden;\n}\nmain#recipe-page .recipe-main .title-container .title {\n  font-size: 3.5rem;\n  padding: 10px;\n  background-color: #fefaf7;\n  display: inline;\n}\nmain#recipe-page .image-container {\n  height: 100%;\n  overflow: hidden;\n  border-radius: 15px;\n}\nmain#recipe-page .image-container img {\n  object-fit: cover;\n  width: 100%;\n}\nmain#recipe-page .instructions h1 {\n  font-family: \"Gatile\";\n  text-align: center;\n}\nmain#recipe-page .instructions li {\n  padding-left: 25px;\n  margin-top: 20px;\n}\nmain#recipe-page .ingredient-settings {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nmain#recipe-page .ingredients-container .ingredients-background {\n  background-color: #fff2e1;\n  padding: 20px;\n}\nmain#recipe-page .ingredients-container ul {\n  padding: 0;\n  margin: 0;\n}\nmain#recipe-page .ingredients-container ul li {\n  list-style: none;\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\nmain#recipe-page .ingredients-container .ingredient-name {\n  max-width: 75%;\n}\nmain#recipe-page .ingredients-container .ingredient-amount {\n  color: rgb(150, 150, 150);\n}\n\n/* SLIDER BUTTON CODE */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox  */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #d39738;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #d39738;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAA;AACF;;AAEA;EACE,6BAAA;AACF;;AAEA;EACE,qBAAA;AACF;;AAEA;;EAEE,UAAA;EACA,SAAA;EACA,iBAAA;AACF;;AAEA;EACE,yBAAA;EACA,uBAAA;AACF;;AAEA;EACE,aAAA;EACA,+CAAA;EACA,6BAAA;EACA,SAAA;EAEA,cAAA;AAAF;;AAGA;EACE,iBAAA;EAEA,aAAA;EACA,8BAAA;EACA,mBAAA;EAEA,aAAA;AAFF;AAIE;EACE,aAAA;EACA,SAAA;EACA,yBAAA;AAFJ;AAIE;;EAEE,yBAAA;EACA,YAAA;EACA,uBAAA;EACA,kBAAA;EACA,YAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;AAFJ;AAKE;EACE,eAAA;AAHJ;;AAOA;EACE,aAAA;EACA,sBAAA;EACA,8BAAA;EAEA,UAAA;EACA,gBAAA;EACA,aAAA;EACA,yBAAA;EACA,kBAAA;EACA,aAAA;AALF;AAOE;EACE,aAAA;EACA,SAAA;EACA,sBAAA;EACA,uBAAA;EACA,oBAAA;AALJ;AAOE;EACE,YAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;AALJ;AAQE;EACE,SAAA;AANJ;AAUI;EACE,yBAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;AARN;AAYE;EACE,yBAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;AAVJ;AAaE;;EAEE,uBAAA;EACA,YAAA;EACA,kBAAA;AAXJ;;AAeA,4CAAA;AACA;EACE,yBAAA;EAEA,aAAA;EACA,sBAAA;EACA,SAAA;EACA,gBAAA;EACA,kBAAA;AAbF;;AAgBA;EACE,aAAA;EACA,8BAAA;EAEA,aAAA;EACA,aAAA;AAdF;AAgBE;EACE,WAAA;AAdJ;AAiBE;EACE,iBAAA;AAfJ;AAkBE;EACE,qBAAA;AAhBJ;AAmBE;;EAEE,cAAA;EACA,gBAAA;AAjBJ;AAoBE;EACE,eAAA;AAlBJ;AAqBE;EACE,iBAAA;AAnBJ;AAsBE;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;AApBJ;AAuBE;EACE,YAAA;EACA,WAAA;AArBJ;AAwBE;EACE,iBAAA;EACA,gBAAA;EACA,4BAAA;EACA,+BAAA;EACA,4FAAA;AAtBJ;;AA+BA;EACE,kBAAA;EACA,WAAA;AA5BF;;AA+BA;EACE,uBAAA;EACA,oCAAA;AA5BF;;AA+BA;EACE,YAAA;AA5BF;;AA+BA,oCAAA;AACA;EACE,aAAA;EACA,uBAAA;AA5BF;AA8BE;EACE,aAAA;EACA,gCAAA;EACA,6BAAA;EACA,SAAA;EAEA,aAAA;AA7BJ;AAgCE;EACE,aAAA;EACA,8BAAA;EACA,uBAAA;AA9BJ;AAiCE;EACE,YAAA;EACA,WAAA;AA/BJ;AAkCE;EACE,kBAAA;EACA,iBAAA;AAhCJ;AAkCI;EACE,kBAAA;EACA,QAAA;EACA,OAAA;EAEA,gBAAA;EACA,gBAAA;AAjCN;AAmCM;EACE,iBAAA;EACA,aAAA;EACA,yBAAA;EACA,eAAA;AAjCR;AAsCE;EACE,YAAA;EACA,gBAAA;EACA,mBAAA;AApCJ;AAsCI;EACE,iBAAA;EACA,WAAA;AApCN;AAyCI;EACE,qBAAA;EACA,kBAAA;AAvCN;AAyCI;EACE,kBAAA;EACA,gBAAA;AAvCN;AA2CE;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;AAzCJ;AA6CI;EACE,yBAAA;EACA,aAAA;AA3CN;AA8CI;EACE,UAAA;EACA,SAAA;AA5CN;AA8CM;EACE,gBAAA;EAEA,aAAA;EACA,WAAA;EACA,8BAAA;EACA,mBAAA;AA7CR;AAiDI;EACE,cAAA;AA/CN;AAkDI;EACE,yBAAA;AAhDN;;AAqDA,uBAAA;AACA;EACE,kBAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;AAlDF;;AAqDA,gCAAA;AACA;EACE,UAAA;EACA,QAAA;EACA,SAAA;AAlDF;;AAqDA,eAAA;AACA;EACE,kBAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,sBAAA;EACA,wBAAA;EACA,gBAAA;AAlDF;;AAqDA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,SAAA;EACA,WAAA;EACA,uBAAA;EACA,wBAAA;EACA,gBAAA;AAlDF;;AAqDA;EACE,yBAAA;AAlDF;;AAqDA;EACE,2BAAA;AAlDF;;AAqDA;EACE,mCAAA;EACA,+BAAA;EACA,2BAAA;AAlDF;;AAqDA,oBAAA;AACA;EACE,mBAAA;AAlDF;;AAqDA;EACE,kBAAA;AAlDF","sourcesContent":[":root {\n  --sidebar-width: 300px;\n}\n\n.hidden {\n  visibility: hidden !important;\n}\n\n.gatile {\n  font-family: \"Gatile\";\n}\n\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n  max-height: 100vh;\n}\n\nhtml {\n  background-color: #fefaf7;\n  font-family: sans-serif;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: var(--sidebar-width) 1fr;\n  grid-template-rows: 100px 1fr;\n  gap: 10px;\n\n  color: #2d2b2b;\n}\n\nheader {\n  grid-column: 1 / -1;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  padding: 40px;\n\n  .header-nav {\n    display: flex;\n    gap: 10px;\n    justify-content: flex-end;\n  }\n  .cookbook,\n  .saved-recipes {\n    background-color: #d39738;\n    color: white;\n    font-family: sans-serif;\n    border-radius: 4px;\n    border: none;\n    height: 50px;\n    width: 200px;\n    font-size: 20px;\n  }\n\n  .logo {\n    font-size: 3rem;\n  }\n}\n\nnav.filter-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  top: 100px;\n  position: sticky;\n  height: 500px;\n  background-color: #fff3e0;\n  border-radius: 4px;\n  padding: 10px;\n\n  .filter-settings {\n    display: flex;\n    gap: 10px;\n    flex-direction: column;\n    justify-content: center;\n    align-items: stretch;\n  }\n  .search-box {\n    border: none;\n    border-radius: 15px;\n    height: 30px;\n    padding-left: 15px;\n    font-size: 1rem;\n  }\n\n  h3 {\n    margin: 0;\n  }\n\n  .tags-container {\n    .tag {\n      background-color: #9d968b;\n      font-size: 0.95rem;\n      margin-right: 5px;\n      margin-bottom: 3px;\n    }\n  }\n\n  .random-recipe {\n    background-color: #d39738;\n    color: white;\n    font-size: 1.25rem;\n    padding: 10px;\n  }\n\n  .tag,\n  .random-recipe {\n    font-family: sans-serif;\n    border: none;\n    border-radius: 4px;\n  }\n}\n\n/* CODE FOR COOKBOOK OR SAVED RECIPES PAGE */\nmain#directory-page {\n  background-color: #fff3e0;\n\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  overflow: scroll;\n  border-radius: 4px;\n}\n\n.recipe-card {\n  display: grid;\n  grid-template-columns: 3fr 4fr;\n\n  height: 200px;\n  padding: 10px;\n\n  img {\n    width: 100%;\n  }\n\n  .recipe-info {\n    margin-left: 25px;\n  }\n\n  .recipe-name {\n    font-family: \"Gatile\";\n  }\n\n  .recipe-ingredients,\n  .recipe-tags {\n    color: #9d968b;\n    font-weight: 100;\n  }\n\n  .recipe-tags {\n    font-size: 15px;\n  }\n\n  .label {\n    font-weight: bold;\n  }\n\n  .tags-and-heart {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  .heart {\n    height: 35px;\n    width: 35px;\n  }\n\n  .recipe-image {\n    object-fit: cover;\n    overflow: hidden;\n    border-top-left-radius: 15px;\n    border-bottom-left-radius: 15px;\n    mask-image: linear-gradient(\n      to right,\n      rgba(0, 0, 0, 1),\n      rgba(0, 0, 0, 1) 75%,\n      rgba(0, 0, 0, 0) 100%\n    );\n  }\n}\n\n.sentinel {\n  position: relative;\n  height: 1px;\n}\n\n.tag-active {\n  color: white !important;\n  background-color: #d39738 !important;\n}\n\n.tag-inactive {\n  opacity: 0.2;\n}\n\n/* CODE FOR INDIVIDUAL RECIPE PAGE */\nmain#recipe-page {\n  display: flex;\n  justify-content: center;\n\n  .recipe-container {\n    display: grid;\n    grid-template-columns: 1fr 300px;\n    grid-template-rows: 300px 1fr;\n    gap: 50px;\n\n    width: 1000px;\n  }\n\n  .ingredients-and-heart {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n  }\n\n  .heart-container {\n    height: 30px;\n    width: 30px;\n  }\n\n  .recipe-main {\n    position: relative;\n    grid-column: 1/-1;\n\n    .title-container {\n      position: absolute;\n      top: 25%;\n      left: 0;\n\n      max-width: 750px;\n      overflow: hidden;\n\n      .title {\n        font-size: 3.5rem;\n        padding: 10px;\n        background-color: #fefaf7;\n        display: inline;\n      }\n    }\n  }\n\n  .image-container {\n    height: 100%;\n    overflow: hidden;\n    border-radius: 15px;\n\n    img {\n      object-fit: cover;\n      width: 100%;\n    }\n  }\n\n  .instructions {\n    h1 {\n      font-family: \"Gatile\";\n      text-align: center;\n    }\n    li {\n      padding-left: 25px;\n      margin-top: 20px;\n    }\n  }\n\n  .ingredient-settings {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  .ingredients-container {\n    .ingredients-background {\n      background-color: #fff2e1;\n      padding: 20px;\n    }\n\n    ul {\n      padding: 0;\n      margin: 0;\n\n      li {\n        list-style: none;\n\n        display: flex;\n        width: 100%;\n        justify-content: space-between;\n        margin-bottom: 10px;\n      }\n    }\n\n    .ingredient-name {\n      max-width: 75%;\n    }\n\n    .ingredient-amount {\n      color: rgb(150, 150, 150);\n    }\n  }\n}\n\n/* SLIDER BUTTON CODE */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox  */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #d39738;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #d39738;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 53 */
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),
/* 54 */
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 55 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/turing-logo.png");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map