
var currentUser;
var recipesToCook = [];

const saveRecipe = (recipes, recipeName) => {
  let fullRecipe = recipes.find(recipe => recipe.name === recipeName);
  if(!recipesToCook.includes(fullRecipe)) {
    recipesToCook.push(fullRecipe);
    return recipesToCook;
  }
  return recipesToCook;
};

// why are there two return statements? 

const deleteRecipe = (recipeName) => {
  let found = recipesToCook.find(recipe => recipe.name === recipeName)
  recipesToCook.splice(found);
  return recipesToCook;
};

const addSavedRecipesToUser = (user, savedRecipes) => {
  user.recipesToCook = savedRecipes;
  return user;
}

export {
  recipesToCook,
  currentUser,
  saveRecipe,
  deleteRecipe,
  addSavedRecipesToUser
}