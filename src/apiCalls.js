//IMPORTS 
import { getRandomUser } from "./users"

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
  
export {assignCurrentUser, currentUser, pageData}


