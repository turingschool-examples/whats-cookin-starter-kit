const allRecipesArray = [];
const allIngredientsArray = [];
let allTags = [];
let allNames = [];
let allIngredients = [];
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
const nameDdl = document.querySelector('.name-filter')
const ingredientsDdl = document.querySelector('.ingredients-filter')

allRecipesButton.addEventListener("click", displayAllRecipesPage);
window.addEventListener("load", loadAllRecipes);
allRecipesPage.addEventListener("click", displayRecipeInfo);




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
}



function createRecipes() {
  recipeData.forEach((recipe, i) => {
    let recipeToBePushed = new Recipe(recipeData[i]);
    allRecipesArray.push(recipeToBePushed);
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

function displayRandomRecipeInfo() {

}

function displayAllRecipesPage() {
  allRecipesPage.classList.toggle("hidden");
  randomRecipes.classList.toggle("hidden");
  // randomRecipesRight.classList.toggle("hidden");
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
    if(recipe.id === Number(clickedRecipeImage.id)){
      recipeCardDisplay(recipe.id)
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
  // tagFilterDdl.forEach(tag => tag.addEventListener('change', displayFilteredRecipes));
}

function createIngredientsArray() {
  tempTags = []
  allIngredientsArray.forEach(ingredient => tempTags.push(ingredient.name))
  allInredients = [...new Set(tempTags)]
  allInredients.sort()
  console.log(allInredients)
}

function loadIngredientsArray() {
  allInredients.forEach(ingredient => {
      ingredientsDdl.innerHTML +=
      `<option value="${ingredient}">${ingredient}</option>`
    })
  // tagFilterDdl.forEach(tag => tag.addEventListener('change', displayFilteredRecipes));
}


function loadTagOptions() {
  allTags.forEach(tag => {
    tagFilterDdl.forEach(ddl => {
      ddl.innerHTML +=
      `<option value="${tag}">${tag}</option>`
    })
  })
  // tagFilterDdl.forEach(tag => tag.addEventListener('change', displayFilteredRecipes));
}

function displayFilteredRecipes(e) {
  // e.preventDefault();
  allRecipesPage.innerHTML = ''
  allRecipesArray.forEach(recipe => {
    if(recipe.tags.includes(e.target.value)) {
      allRecipesPage.innerHTML +=
      `<img id=${recipe.id} class="all-recipes-images" src=${recipe.image}>`
    }
  })
}
