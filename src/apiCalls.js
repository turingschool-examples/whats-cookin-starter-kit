// Your fetch requests will live here!

// global.usersAPIData = usersAPIData;
// global.recipesAPIData = recipesAPIData;
// global.ingredientsAPIData = ingredientsAPIData;

import { displayWarning } from "../src/domUpdates.js";
import { findRecipeFromID } from "./recipes.js";

export let usersAPIData;
export let recipesAPIData;
export let ingredientsAPIData;

function fetchData(name) {
  return fetch(`http://localhost:3001/api/v1/${name}`)
    .then((r) => r.json())
    .then((data) => data[name])
    .catch((error) => {
      displayWarning(`Unable to fetch ${name} data. Please try again later.`);
    });
}

// fix this because I don't like how this is not really the init function but it also kind of is at the same time
export function fetchServerData() {
  return Promise.all([
    fetchData("users"),
    fetchData("ingredients"),
    fetchData("recipes"),
  ]).then(([users, ingredients, recipes]) => {
    usersAPIData = users;
    ingredientsAPIData = ingredients;
    recipesAPIData = recipes;
  }).then(() => {
    usersAPIData.forEach(user => {
      user.recipesToCook = user.recipesToCook.map(id => {
        return findRecipeFromID(id, recipesAPIData)
      })
    });
  })
}

export function sendServerData(userID, recipeID) {
  fetch(`http://localhost:3001/api/v1/usersRecipes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userID, recipeID }),
  })
    .then((response) => {
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      else return response.json();
    })
    .then((data) => {
      console.log(data.message);
      return data;
    })
    .catch((error) => {
      displayWarning(`${error}`);
    });
}
