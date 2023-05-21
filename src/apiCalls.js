//IMPORTS 
import { getRandomUser } from "./users"
import { pageLoadRenders } from "./domUpdates"
import { copyItem } from "./helper-functions"

// DATA MODEL 
let currentUser;
let pageData = {
  activeTags: [],
  currentView: 'ourRecipes',
  currentRecipeCard: {}
};

// API CALLS

const assignCurrentUser = () => {
  fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users')
    .then(response => response.json())
    .then(users => {
      currentUser = getRandomUser(users.users);
    })
    .catch(error => {
      console.error(error)
    })
}

const fetchRecipes = () => {
    fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes')
        .then(response => response.json())
        .then(recipes => {
            pageData.allRecipes = recipes.recipes;
            pageData.recipesOfInterest = copyItem(pageData.allRecipes);
            pageLoadRenders(pageData.recipesOfInterest);
        })
        .catch(error => {
            console.error(error);
        });
}

const fetchIngredients = () => {
  fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients`)
  .then(response => response.json())
  .then(ingredientData => {pageData.allIngredients = ingredientData.ingredients})
  .catch(error => console.log(error))
}

const dataLoad = () => {
  assignCurrentUser();
  fetchRecipes();
  fetchIngredients();
}

const updateCurrentUser = (user) => {
  currentUser = user;
};

export { currentUser, pageData, updateCurrentUser, dataLoad };


