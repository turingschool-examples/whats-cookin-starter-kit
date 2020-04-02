let allRecipesDisplay = document.querySelector('.all-recipes-display');
let recipeSection = document.querySelector('.all-recipes');
let welcomeUser = document.querySelector('.welcome');
let tagsMenu = document.querySelector('.tags-menu');
let myRecipeParent = document.getElementById('my-recipes-display');
let myRecipesDisplay = document.getElementById('my-recipes-display');
var recipeScreenCount = 0;
let displayedRecipes = [];
let user;
let addedRecipes = [];
let retrievedRecipe;
let favoriteRecipeID;


window.onload = function () {
  addRecipesToDOM();
  generateAndGreetRandomUser();
}

recipeSection.addEventListener('click', clickHandler);
tagsMenu.addEventListener('change', filterRecipesByTag);
myRecipeParent.addEventListener('click', deSelectFavorite);


function clickHandler() {
  if (recipeScreenCount < 1) {
    if (event.target.classList.contains('card-image')) {
      recipeData.forEach((recipe) => {
        if (recipe.id == event.target.id) {
          retrievedRecipe = recipe;
          retrievedRecipe = new Recipe(retrievedRecipe.id, retrievedRecipe.image, retrievedRecipe.ingredients, retrievedRecipe.instructions, retrievedRecipe.name, retrievedRecipe.tags)
        }
      });
      displayRecipe(retrievedRecipe);
      recipeScreenCount++;
    }
  }

  if (event.target.classList.contains('close-button')) {
    event.target.parentNode.remove()
    recipeScreenCount--
  }

  if (event.target.classList.contains('favorite')) {
    selectFavorite();
  }
}

function selectFavorite() {
  favoriteRecipeID = event.target.closest('.recipe-card').id;
  displayedRecipes.forEach((recipe) => {
    if (recipe.id == favoriteRecipeID) {
      addedRecipes.push(recipe);
      user.addFavoriteRecipe(recipe);
    };
  })
  displayMyRecipes(user);
}

function deSelectFavorite() {
  if (event.target.classList.contains('favorite')) {
    favoriteRecipeID = event.target.closest('.recipe-card').id;
    addedRecipes.forEach((recipe) => {
      if (recipe.id == favoriteRecipeID) {
        let updatedRecipes = addedRecipes.filter((meal) => meal.id != favoriteRecipeID);
        addedRecipes = updatedRecipes;
        user.removeFavoriteRecipe(recipe);
      }
    });
  }
    displayMyRecipes(user);
}

function addRecipesToDOM() {
  allRecipesDisplay.innerHTML = '';
  recipeData.forEach((recipe) => {
    recipe = new Recipe(recipe.id, recipe.image, recipe.ingredients, recipe.instructions, recipe.name, recipe.tags);
    displayedRecipes.push(recipe);
    allRecipesDisplay.innerHTML +=
      `<div id=${recipe.id} class='recipe-card'>
        <div class='recipe-card-header'>
          <p>${recipe.name}</p>
          <div class="card-btns">
            <button class='favorite'>F</button>
            <button class='cook-next'>C</button>
          </div>
        </div>
        <div class="recipe-img">
          <img id=${recipe.id} class="card-image"src="${recipe.image}" alt="">
        </div>
      </div>`
  })
};

function generateAndGreetRandomUser() {
  let randomIndex = Math.floor(Math.random() * 50)
  let newUser = usersData[randomIndex]
  user = new User(newUser.name, newUser.id, newUser.pantry);
  welcomeUser.innerText = `Welcome ${newUser.name}`
}


function displayRecipe(recipe) {
  recipeSection.insertAdjacentHTML('afterbegin',
    `<div class="display-recipe">
      <button class="close-button" type="button" name="button">Close</button>
      <h2>${recipe.name}</h2>
      <h1>COST:${recipe.getIngredientsCost(recipe)}</h1>
      <h1>(${recipe.tags})</h1>
      <img class="card-image"src="${recipe.image}" alt="">
      <p>${getRecipeInstructions(recipe)}</p>
    </div>`)
}

function getRecipeInstructions(recipe) {
  let instructions = [];
  recipe.instructions.forEach((instruction) => {
    let parsedInstruction = Object.values(instruction)
    instructions.push(parsedInstruction);
  })
  return instructions
}

function filterRecipesByTag() {
  allRecipesDisplay.innerHTML = '';
  let filteredRecipes = [];
  let tagName = event.target.value;
  displayedRecipes.filter((recipe) => {
    if (recipe.tags.includes(tagName)) {
      filteredRecipes.push(recipe);
    }
  });

  filteredRecipes.forEach((recipe) => {
    allRecipesDisplay.innerHTML +=
      `<div id=${recipe.id} class='recipe-card'>
        <div class='recipe-card-header'>
          <p>${recipe.name}</p>
          <div class="card-btns">
          <button class='favorite'>F</button>
          <button class='cook-next'>C</button>
        </div>
      </div>
      <div class="recipe-img">
        <img id=${recipe.id} class="card-image"src="${recipe.image}" alt="">
      </div>
      </div>`
  });
}

function displayMyRecipes(user) {
  myRecipesDisplay.innerHTML = '';
  return user.favoriteRecipes.forEach(recipe => {
    myRecipesDisplay.innerHTML +=
      `<div id=${recipe.id} class='recipe-card'>
        <div class='recipe-card-header'>
          <p>${recipe.name}</p>
          <div class="card-btns">
            <button class="favorite">F</button>
            <button class="cook-next">C</button>
          </div>
        </div>
        <div class="recipe-img">
          <img id=${recipe.id} class="card-image" src="${recipe.image}" alt="">
        </div>
      </div>`
  })
}
