const bigRecipeCard = document.querySelector('.recipe-pop-up');
const allRecipesDisplay = document.querySelector('.all-recipes-display');
const userPageDisplay = document.querySelector('.user-window');
const nav = document.querySelector('nav');
//data instantiation
const currentUser = new User(generateRandomUser());
const instantiatedRecipes = recipeData.map(recipe => new Recipe(recipe));
//onload 
window.onload = handleLoad();
//event listening
allRecipesDisplay.addEventListener('click', smallRecipeHandler);
bigRecipeCard.addEventListener('click', bigRecipeHandler);
nav.addEventListener('click', navHandler);
//event handling
function handleLoad() {
  propagateCards(recipeData, allRecipesDisplay);
  showUserName();
}
function smallRecipeHandler(event) {
  if (event.target.classList.contains('star-icon')) {
    makeFavoriteRecipe(event);
    displayFavorites();
  } else if (event.target.id) {
    showRecipeCard(event);
  }
}

const makeFavoriteRecipe = (event) => {
  let chosenRecipe = findById(event.target.id, instantiatedRecipes);
  currentUser.chooseRecipe(chosenRecipe, currentUser.favoriteRecipes);
}

const displayFavorites = () => {
  const favoriteRecipesDisplay = document.querySelector('.favorite-recipes');
  favoriteRecipesDisplay.innerHTML = '';
  propagateCards(currentUser.favoriteRecipes, favoriteRecipesDisplay);

}

function navHandler(event) {
  if (event.target.id.includes('page')){
  goToPage(event.target.id) 
  }
}

function bigRecipeHandler(event) {
  if (event.target.classList.contains('exit-button')) {
    hideRecipeCard();
  }
}
// user functions
function generateRandomUser() {
  return usersData[Math.round(Math.random() * usersData.length)];
}

function showUserName() {
  userButton = document.getElementById('user-page-button');

  userButton.innerText = currentUser.name.toUpperCase();
}
// page views
const goToPage = (buttonID) => {
  if (buttonID === "recipe-page-button") {
    allRecipesDisplay.classList.remove('hidden');
    userPageDisplay.classList.add('hidden');
  } else if (buttonID === "user-page-button") {
    allRecipesDisplay.classList.add('hidden');
    userPageDisplay.classList.remove('hidden');
  }
}

function propagateCards(recipeCards, section) {
  recipeCards.forEach((recipe) => {
    section.innerHTML +=
      `<div class="recipe-card" id="${recipe.id}" style="background-image: url(${recipe.image})">
    <div class="card-info">
    <img class="star-icon" id="${recipe.id} src="https://www.clipartmax.com/png/middle/175-1753277_free-image-on-pixabay-star-icon-png.png" />
    <div class="recipe-title" id="${recipe.id}">${recipe.name}</div>
    </div>
    </div>`
  })
}
// big recipe card
const showRecipeCard = (event) => {
  const blackout = document.querySelector('.body-blackout');
  bigRecipeCard.classList.remove('hidden');

  blackout.classList.remove('hidden');
  populateRecipeCard(event);
}

const populateRecipeCard = (event) => {
  const currentRecipe = new Recipe(retrieveCard(event.target.id));
  const ingredientList = currentRecipe.createIngredientList();
  const fullIngredientList = generateReadableIngredientList(ingredientList, currentRecipe);
  const instructionList = currentRecipe.giveInstructions();

  insertCardHTML(currentRecipe);
  populateIngredients(fullIngredientList);
  populateInstructions(instructionList);
}

const insertCardHTML = (recipe) => {
bigRecipeCard.innerHTML =
  `<button class="exit-button">Back to all recipes</button>
  <img class="star-icon"" src="https://www.clipartmax.com/png/middle/175-1753277_free-image-on-pixabay-star-icon-png.png" />
  <img class="recipe-img" src="${recipe.image}"></img>
  <h2>Ingredients</h2>
  <section class="ingredients"></section>
  <h2>Instructions</h2>
  <section class="instructions"></section>
  `
}

const populateIngredients = (fullIngredientList) => {
  const ingredientsSection = document.querySelector('.ingredients');

  fullIngredientList.forEach(ingredient => {
    ingredientsSection.innerHTML +=
      `<p class="ingredient">${ingredient}</p>`
  })
};

const populateInstructions = (instructionList) => {
  const instructionsSection = document.querySelector('.instructions');

  instructionList.forEach(instruction => {
    instructionsSection.innerHTML +=
      `<p class="instruction">${instruction}</p>`
  })
}

const generateReadableIngredientList = (ingredientList, recipe) => {
  const measurements = createMeasurementList(recipe);
  const fullDirectionList = measurements.reduce((directions, measurement) => {
    const ingredientMatch = ingredientList.find(ingredient => {
      return ingredientList.indexOf(ingredient) === measurements.indexOf(measurement);
    });
    const fullDirectionSentence = measurement + ingredientMatch.name;
    return directions.concat(fullDirectionSentence);
  }, []);

  return fullDirectionList;
}

const createMeasurementList = (recipe) => {
  return recipe.requiredIngredients.map((ingredient) => {
    return `${ingredient.quantity.amount} ${ingredient.quantity.unit} of `
  });
}

const hideRecipeCard = () => {
  const blackout = document.querySelector('.body-blackout');
  bigRecipeCard.classList.add('hidden');

  blackout.classList.add('hidden');
}
// other (could possibly put this in one of the class files, I'll start with it here)
const retrieveCard = (cardID) => {
  return recipeData.find(recipe => recipe.id == cardID);
}

function findById(id, location) {
  id = typeof id !== 'number' ? parseInt(id) : id;
  if (Array.isArray(location)) {
    let ingredient = location.find(item => item.id === id);
    return ingredient;
  }
}
