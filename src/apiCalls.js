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

const updateCurrentUser = (user) => {
  currentUser = user;
};

export { assignCurrentUser, fetchRecipes, currentUser, pageData, updateCurrentUser };


