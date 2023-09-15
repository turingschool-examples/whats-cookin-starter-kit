// Your fetch requests will live here!

import { printError } from "./domUpdates";


const fetchData = (type, link, fn) => {
  return fetch(link)
    .then(response => response.json())
    .then(data => {
      return fn(data[type]);
    })
    .catch(error => {
       console.error(`An error occurred: ${error}`);
       printError(error, type)
    })
};

const updateUsers = (currentUser, savedRecipe) => {
  console.log("BAM", currentUser);
  console.log("BOOM", savedRecipe);

    console.log("recipesToCook:", currentUser['recipesToCook']);
  
    const existingRecipe = currentUser['recipesToCook'].find(item => item === savedRecipe);
  
    console.log("Existing Recipe:", existingRecipe);
  
    if (existingRecipe) {
      console.error('Duplicate recipeID found. Cannot add the same recipe twice.');
      return Promise.reject('Duplicate recipeID');
    }

  const promise = fetch("http://localhost:3001/api/v1/usersRecipes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "userID": currentUser['id'],
      "recipeID": savedRecipe['id'],
    }),
  })
    .then((response) => response.json())
    .catch((err) => console.log(`You got an ${err}`));
  return promise;
};









export {
  fetchData,
  updateUsers
};



  



