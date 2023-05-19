import usersData from "./data/users";

var recipesToCook = [];
var currentUser;

const saveRecipe = (recipe) => {
  if(!recipesToCook.includes(recipe)) {
    recipesToCook.push(recipe);
    return recipesToCook;
  }
  return recipesToCook;
}

const deleteRecipe = (recipe) => {
  recipesToCook.splice(recipe);
  return recipesToCook;
}

const addSavedRecipesToUser = (user, savedRecipes) => {
  user.recipesToCook = savedRecipes;
  return user;
}

export {
  recipesToCook,
  saveRecipe,
  deleteRecipe,
  addSavedRecipesToUser
}