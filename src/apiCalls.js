// Your fetch requests will live here!
import { currentUser } from "./scripts";

export function fetchCurrenciesCode() {
  return fetch(
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

export function fetchCurrencies() {
  return fetch(
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json"
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

export const fetchUsers = fetch("http://localhost:3001/api/v1/users")
  .then((response) => response.json())
  .then((data) => {
    return data.users;
  });

export const fetchIngredients = fetch(
  "http://localhost:3001/api/v1/ingredients"
  "http://localhost:3001/api/v1/ingredients"
)
  .then((response) => response.json())
  .then((data) => {
    return data.ingredients;
  });

export const fetchRecipes = fetch("http://localhost:3001/api/v1/recipes")
  .then((response) => response.json())
  .then((data) => {
    return data.recipes;
  });

export function sendPostRequest(currentUser, clickedRecipe) {
  return fetch("http://localhost:3001/api/v1/usersRecipes", {
    method: 'POST',
    body: JSON.stringify({
      userID: currentUser.id,
      recipeID: clickedRecipe
    }),
    headers: {
       'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log("Error:", err))
}

export function sendDeleteRequest(currentUser, clickedRecipe) {
  return fetch("http://localhost:3001/api/v1/usersRecipes", {
    method: 'DELETE',
    body: JSON.stringify({
      userID: currentUser.id,
      recipeID: clickedRecipe
    }),
    headers: {
       'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log("Error:", err))
}