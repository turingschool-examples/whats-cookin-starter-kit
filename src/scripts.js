const user = new User(chooseRandomUser());
const allRecipesArray = [];
const allIngredientsArray = [];
let allTags = [];
let allNames = [];
let allIngredients = [];
let recipeToBePushed;
let recipeRepository = new RecipeRepository(allRecipesArray);
const filterRecipeButton = document.getElementById('filterRecipeButton');
const allRecipesButton = document.getElementById("allRecipesButton");
const allRecipesPage = document.getElementById("allRecipesPage");
const randomRecipesLeft = document.getElementById("leftRecipe");
const randomRecipesRight = document.getElementById("reightRecipe");
const randomRecipes = document.getElementById("randomRecipes");
const tag1Ddl = document.getElementById("dropdown1");
const tag2Ddl = document.getElementById("dropdown2");
const tag3Ddl = document.getElementById("dropdown3");
const tagFilterDdl = document.querySelectorAll(".tag-filter");
const nameDdl = document.querySelector('.name-filter');
const ingredientsDdl = document.querySelector('.ingredients-filter');
const addToFavoritesButton = document.getElementById('addToFavoritesButton');
const addToCookButton = document.getElementById('addToCookButton');
const favoritesButton = document.getElementById('favoriteRecipesButton')
const recipesToCookButton = document.getElementById('recipesToCookButton');
const myPantryButton = document.getElementById("myPantryButton");
const filterButtons = document.getElementById("filterButtons");
const nameDisplay = document.getElementById("userName");


allRecipesButton.addEventListener("click", allRecipesHelper);
window.addEventListener("load", loadAllRecipes);
allRecipesPage.addEventListener("click", displayRecipeInfo);
favoritesButton.addEventListener("click", favoriteRecipesHelper);
recipesToCookButton.addEventListener("click", addToCookHelper);

nameDdl.addEventListener('change', helperName);
ingredientsDdl.addEventListener('change', helperIngredient);
addToFavoritesButton.addEventListener('click', pushToFavorites);
addToCookButton.addEventListener('click', pushToCookList);


function loadAllRecipes() {
  createRecipes();
  createIngredients();
  generateRandomRecipe();
  displayRandomRecipe();
  createTagArray();
  loadTagOptions();
  createNamesArray();
  loadNamesArray();
  createIngredientsArray();
  loadIngredientsArray();
  displayUserName();
}

function displayUserName() {
  nameDisplay.innerText = `${user.name}`
}

function addToCookHelper() {
  toggleButtonText(recipesToCookButton, "Recipes to Cook", favoritesButton, allRecipesButton, myPantryButton)
  displayAllRecipesPage(user.recipesToCookArray)
  recipeRepository = new RecipeRepository(user.recipesToCookArray)
}

function favoriteRecipesHelper() {
toggleButtonText(favoritesButton, "Favorite Recipes", recipesToCookButton, allRecipesButton, myPantryButton)
  displayAllRecipesPage(user.favoriteRecipesArray)
  recipeRepository = new RecipeRepository(user.favoriteRecipesArray)
}

function allRecipesHelper() {
  toggleButtonText(allRecipesButton, "All Recipes", favoritesButton, recipesToCookButton, myPantryButton)
  displayAllRecipesPage(allRecipesArray)
}

function toggleButtonText(element, innerText, buttonToHide, buttonToHide2, buttonToHide3) {
  if(element.innerHTML === innerText) {
    element.innerHTML = "Home";
  } else {
    element.innerHTML = innerText;
  }
  buttonToHide.classList.toggle("hidden")
  buttonToHide2.classList.toggle("hidden")
  buttonToHide3.classList.toggle("hidden")
  filterButtons.classList.toggle("hidden")
  addToFavoritesButton.classList.add("hidden")
  addToCookButton.classList.add('hidden')
}

function chooseRandomUser() {
  let randomUser = usersData[Math.floor(Math.random() * usersData.length)]

  return randomUser;

}

function createRecipes() {
  recipeData.forEach((recipe, i) => {
    let recipeToBeCreated = new Recipe(recipeData[i]);
    allRecipesArray.push(recipeToBeCreated);
  })
}

function createIngredients() {
  ingredientsData.forEach((ingredient, i) => {
    let ingredientToBePushed = new Ingredient(ingredientsData[i]);
    allIngredientsArray.push(ingredientToBePushed);
  })
}

function generateRandomRecipe() {
  return allRecipesArray[Math.floor(Math.random() * allRecipesArray.length)];
}

function displayRandomRecipe() {
  const randomRecipe = generateRandomRecipe()
  const randomRecipe2 = generateRandomRecipe()
  randomRecipes.innerHTML =
    `<img id=${randomRecipe.id} class="cover-recipes-images" src=${randomRecipe.image}>
      <p class="recipe-name">${randomRecipe.name}</p>
     <img id=${randomRecipe2.id} class="cover-recipes-images" src=${randomRecipe2.image}>
      <p class="recipe-name">${randomRecipe2.name}</p>`
}

function displayAllRecipesPage(array) {
  allRecipesPage.classList.toggle("hidden");
  randomRecipes.classList.toggle("hidden");
  displayAllRecipeImages(array);
}

function displayAllRecipeImages(array) {
  allRecipesPage.innerHTML = `` ;
  array.forEach(recipe => {
    allRecipesPage.innerHTML +=
    `<img id=${recipe.id} class="all-recipes-images" src=${recipe.image}>`;
  })
}

function displayRecipeInfo() {
  const clickedRecipeImage = event.target.closest('.all-recipes-images');
  allRecipesArray.forEach(recipe => {
    if(clickedRecipeImage && recipe.id === Number(clickedRecipeImage.id)){
      recipeCardDisplay(recipe.id)
      recipeToBePushed = recipe;
    }
  })
  addToFavoritesButton.classList.remove("hidden")
  addToCookButton.classList.remove('hidden')
}

function recipeCardDisplay(id) {
  allRecipesArray.forEach(recipe => {
    if(recipe.id === id) {
      allRecipesPage.innerHTML =
      `<section class="recipe-name">${recipe.name}</section>
       <section class="recipe-ingredients">${recipe.returnIngredients()}</section>
       <section class="recipe-cost">${recipe.returnTotalCost()}</section>
       <section class="recipe-instructions" >${recipe.returnInstructions()}</section>`
    }
  } )
}

function createTagArray() {
  tempTags = []
  allRecipesArray.forEach(recipe => tempTags.push(...recipe.tags))
  allTags = [...new Set(tempTags)]
  allTags.sort()
}

function createNamesArray() {
  tempTags = []
  allRecipesArray.forEach(recipe => tempTags.push(recipe.name))
  allNames = [...new Set(tempTags)]
  allNames.sort()
}

function loadNamesArray() {
  allNames.forEach(name => {
      nameDdl.innerHTML +=
      `<option value="${name}">${name}</option>`
    })
}

function createIngredientsArray() {
  tempTags = []
  allIngredientsArray.forEach(ingredient => tempTags.push(ingredient.name))
  allInredients = [...new Set(tempTags)]
  allInredients.sort()
}

function loadIngredientsArray() {
  allInredients.forEach(ingredient => {
      ingredientsDdl.innerHTML +=
      `<option value="${ingredient}">${ingredient}</option>`
    })
}


function loadTagOptions() {
  allTags.forEach(tag => {
    tagFilterDdl.forEach(ddl => {
      ddl.innerHTML +=
      `<option value="${tag}">${tag}</option>`
    })
  })
  tagFilterDdl.forEach(tag => tag.addEventListener('change', helperTag));
}

function helperTag() {
  if(!allRecipesPage.classList.contains("hidden")) {
    displayFilteredRecipes(allRecipesPage)
  } else if(!favorites.classList.contains("hidden")) {
    displayFilteredRecipes(favorites)
  }
}

function helperName() {
  if(!allRecipesPage.classList.contains("hidden")) {
    displayNameFilteredRecipes(allRecipesPage)
  } else if(!favorites.classList.contains("hidden")) {
    displayNameFilteredRecipes(favorites)
  }
}

function helperIngredient() {
  if(!allRecipesPage.classList.contains("hidden")) {
    displayIngredientFilteredRecipe(allRecipesPage)
  } else if(!favorites.classList.contains("hidden")) {
    displayIngredientFilteredRecipe(favorites)
  }
}

function displayFilteredRecipes(elementToBeChanged) {
  allRecipesPage.innerHTML = ''
  let filteredTags = recipeRepository.filterRecipeByTag(tag1Ddl.value, tag2Ddl.value, tag3Ddl.value)
  filteredTags.forEach(recipe => {
    allRecipesPage.innerHTML +=
    `<img id=${recipe.id} class="all-recipes-images" src=${recipe.image}>`;
  })

}


function displayNameFilteredRecipes(elementToBeChanged) {
  allRecipesPage.innerHTML = ''
  let filteredNames = recipeRepository.filterRecipeByName(nameDdl.value)
  filteredNames.forEach(recipe => {
    allRecipesPage.innerHTML +=
    `<img id=${recipe.id} class="all-recipes-images" src=${recipe.image}>`;
  })
}

function displayIngredientFilteredRecipe(elementToBeChanged) {
  allRecipesPage.innerHTML = ''
  let filteredIngredients = recipeRepository.filterRecipeByIngredients(ingredientsDdl.value)
  filteredIngredients.forEach(recipe => {
    allRecipesPage.innerHTML +=
    `<img id=${recipe.id} class="all-recipes-images" src=${recipe.image}>`;
  })
}

function pushToFavorites() {
  user.favoriteRecipes(recipeToBePushed);
}

function pushToCookList() {
  user.recipesToCook(recipeToBePushed);
}
