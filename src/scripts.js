const user = new User(chooseRandomUser);
const allRecipesArray = [];
const allIngredientsArray = [];
let allTags = [];
let allNames = [];
let allIngredients = [];
let recipeToBePushed;
const recipeRepository = new RecipeRepository(allRecipesArray);
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

allRecipesButton.addEventListener("click", displayAllRecipesPage);
window.addEventListener("load", loadAllRecipes);
allRecipesPage.addEventListener("click", displayRecipeInfo);
favoritesButton.addEventListener("click", displayFavoriteRecipes);

nameDdl.addEventListener('change', helperName);
ingredientsDdl.addEventListener('change', helperIngredient);
tag1Ddl.addEventListener(`change`, testFunction);
addToFavoritesButton.addEventListener('click', pushToFavorites);
addToCookButton.addEventListener('click', pushToCookList);


function testFunction() {
  console.log(tag1Ddl.value)
}



function loadAllRecipes() {
  chooseRandomUser();
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

function displayAllRecipesPage() {
  allRecipesPage.classList.toggle("hidden");
  randomRecipes.classList.toggle("hidden");
  addToFavoritesButton.classList.toggle("hidden")
  addToCookButton.classList.toggle('hidden')
  if(allRecipesButton.innerHTML === "All Recipes") {
    allRecipesButton.innerHTML = "Home";
  } else {
    allRecipesButton.innerHTML = "All Recipes";
  }
  displayAllRecipeImages();
}

function displayAllRecipeImages() {
  allRecipesPage.innerHTML = `` ;
  allRecipesArray.forEach(recipe => {
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
  elementToBeChanged.innerHTML = ''
  let filteredTags = recipeRepository.filterRecipeByTag(tag1Ddl.value, tag2Ddl.value, tag3Ddl.value)
  filteredTags.forEach(recipe => {
    elementToBeChanged.innerHTML +=
    `<img id=${recipe.id} class="all-recipes-images" src=${recipe.image}>`;
  })

}


function displayNameFilteredRecipes(elementToBeChanged) {
  elementToBeChanged.innerHTML = ''
  let filteredNames = recipeRepository.filterRecipeByName(nameDdl.value)
  filteredNames.forEach(recipe => {
    elementToBeChanged.innerHTML +=
    `<img id=${recipe.id} class="all-recipes-images" src=${recipe.image}>`;
  })
}

function displayIngredientFilteredRecipe(elementToBeChanged) {
  elementToBeChanged.innerHTML = ''
  let filteredIngredients = recipeRepository.filterRecipeByIngredients(ingredientsDdl.value)
  filteredIngredients.forEach(recipe => {
    elementToBeChanged.innerHTML +=
    `<img id=${recipe.id} class="all-recipes-images" src=${recipe.image}>`;
  })
}

function pushToFavorites() {
  user.favoriteRecipes(recipeToBePushed);
  console.log(user.favoriteRecipesArray);
}

function pushToCookList() {
  user.recipesToCook(recipeToBePushed);
  console.log(user.recipesToCookArray);
}
