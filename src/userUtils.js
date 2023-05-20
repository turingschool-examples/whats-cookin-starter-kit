import usersData from "./data/users";

var recipesToCook = [];
var currentUser;

const saveRecipe = (recipes, recipeName) => {
  let fullRecipe = recipes.find(recipe => recipe.name === recipeName);
  if(!recipesToCook.includes(fullRecipe)) {
    recipesToCook.push(fullRecipe);
    console.log(recipesToCook)
    return recipesToCook;
  }
  return recipesToCook;
};

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