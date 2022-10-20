import "./styles.css";
import apiCalls from "./apiCalls";
import RecipeRepository from "./classes/RecipeRepository";
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import "./images/turing-logo.png";
import "./images/AndrewProfile.png";
import "./images/BrettProfile.png";
import "./images/CourtneyProfile.png";
import "./images/DaniProfile.png";

console.log("Hello world");

const allRecipes = new RecipeRepository();
console.log(allRecipes);
