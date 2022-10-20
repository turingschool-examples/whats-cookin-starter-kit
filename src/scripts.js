import "./styles.css";
import loadData from "./apiCalls";
import RecipeRepository from "./classes/RecipeRepository";
import Recipe from "./classes/Recipe";
import Ingredient from "./classes/Ingredient-class";
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

  createInstances(recipeData, ingredientsData);

  let allRecipes = new RecipeRepository(recipeData);

  console.log("USER DAAAATA", userData);
  console.log("INGREEEEEDIENT", ingredientsData);
  console.log("RECIPEEEE", recipeData);
  console.log(currentUser);
  console.log(allRecipes);
});

function createInstances(dataSet1, dataSet2) {
  makeRecipesList(dataSet1);
  makeIngredientsList(dataSet2);
}

function makeRecipesList(dataSet) {
  recipeData = dataSet.recipeData.map((element) => {
    return new Recipe(element);
  });
}

function makeIngredientsList(dataSet) {
  ingredientsData = dataSet.ingredientsData.map((element) => {
    return new Ingredient(element);
  });
}
