//NOTE: Data model and non-dom manipulating logic will live in this file.

import "./domUpdates";
import "./styles.scss";
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import "boxicons";
import "./images/turing-logo.png";
// Below are examples of how you can import functions from either the recipes or domUpdates files.

export let currentUser;
export let currentRecipe;
export let convertToUS = true;

export function getRandomUser(userDataset) {
  return userDataset[randomNumber(userDataset.length)];
}

export function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

export function setCurrentUser(user) {
  currentUser = user;
}

export function setCurrentRecipe(recipe) {
  currentRecipe = recipe;
  return currentRecipe;
}

export function toggleConversion() {
  convertToUS = !convertToUS;
  return convertToUS;
}
