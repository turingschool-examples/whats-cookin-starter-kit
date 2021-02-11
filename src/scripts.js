const allRecipesArray = [];
const recipeImages = [];

const allRecipesButton = document.getElementById("allRecipesButton")
const allRecipesPage = document.getElementById("allRecipesPage")
const randomRecipesLeft = document.getElementById("leftRecipe")
const randomRecipesRight = document.getElementById("reightRecipe")


allRecipesButton.addEventListener("click", displayAllRecipesPage);
window.addEventListener("load", loadAllRecipes);

function loadAllRecipes() {
  createRecipes();
}


function createRecipes() {
  dummyRecipeData.forEach((recipe, i) => {
    let recipeToBePushed = new Recipe(recipeData[i])
    allRecipesArray.push(recipeToBePushed)
  })
}

function displayAllRecipesPage() {
  allRecipesPage.classList.toggle("hidden");
  randomRecipesLeft.classList.toggle("hidden");
  randomRecipesRight.classList.toggle("hidden");
  if(allRecipesButton.innerHTML === "All Recipes") {
    allRecipesButton.innerHTML = "Home";
  } else {
    allRecipesButton.innerHTML = "All Recipes";
  }
  collectRecipeImages();
  displayRecipeImages();
}

function collectRecipeImages() {
  allRecipesArray.forEach(recipes => {
    recipeImages.push(recipes.image)
  })
}

function displayRecipeImages() {
  recipeImages.forEach(image => {
    allRecipesPage.innerHTML +=
    `<img class="all-recipes-images" src=${image}>`
  })
}
