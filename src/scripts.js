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

var andrew = document.querySelector("#andrew");
andrew.src = "./images/AndrewProfile.png";

var brett = document.querySelector("#brett");
brett.src = "./images/BrettProfile.png";

var courtney = document.querySelector("#courtney");
courtney.src = "./images/CourtneyProfile.png";

var dani = document.querySelector("#dani");
dani.src = "./images/DaniProfile.png";
