import { displayRecipes } from "./domUpdates.js";
import { displayTags } from "./domUpdates.js";
import { setCurrentUser } from "./functions";
import { usersData, ingredientsData, recipeData } from "./scripts.js"

// Your fetch requests will live here!
const fetchUsers = fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users")
  .then(response => response.json())
  .then(data => {
    usersData = data.users;
  });

const fetchIngredients = fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients")
  .then(response => response.json())
  .then(data => {
    ingredientsData = data.ingredients;
  });
  
const fetchRecipes = fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes")
  .then(response => response.json())
  .then(data => {
    recipeData = data.recipes;
  });

// Promise.all to wait for all fetch requests to complete
Promise.all([fetchUsers, fetchIngredients, fetchRecipes])
  .then(() => {
    console.log('Data has been fetched:', usersData, ingredientsData, recipeData);

    // now available
    setCurrentUser(usersData);
    displayRecipes(recipeData, "Save Recipe");
    displayTags(recipeData);
    
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });

console.log('I will be a fetch request!');