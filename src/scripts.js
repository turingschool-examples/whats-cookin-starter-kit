import "./styles.css";
import loadData from "./apiCalls";
import RecipeRepository from "./classes/RecipeRepository";
import Recipe from "./classes/Recipe";
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import "./images/turing-logo.png";
import "./images/AndrewProfile.png";
import "./images/BrettProfile.png";
import "./images/CourtneyProfile.png";
import "./images/DaniProfile.png";

console.log("Hello world");

const allRecipes = new RecipeRepository();
console.log(allRecipes);

let userData;
let ingredientsData;
let recipeData;
let currentUser;

// const allRecipes = new RecipeRepository(allRecipesList);
Promise.all([
  loadData("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users"),
  loadData(
    "https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients"
  ),
  loadData("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes"),
]).then((data) => {
  userData = data[0];
  ingredientsData = data[1];
  recipeData = data[2];

  const newRecipeData = cleanUpData(recipeData);

  let allRecipes = new RecipeRepository(newRecipeData);

  console.log("USER DAAAATA", userData);
  console.log("INGREEEEEDIENT", ingredientsData);
  console.log("RECIPEEEE", recipeData);
  console.log(currentUser);
  console.log(allRecipes);
  console.log(newRecipeData);
});

function createInstances(dataSet1, dataSet2) {
  makeRecipesList(dataSet1)
}

function makeRecipesList(dataSet) {
  return dataSet.recipeData.map((element) => {
    return new Recipe(element);
  });
}

function makeIngredientsList(dataSet) {
  dataSet.
}