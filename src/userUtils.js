
var recipesToCook = [];

const saveRecipe = (recipes, recipeName) => {
  let fullRecipe = recipes.find(recipe => recipe.name === recipeName);
  if(recipesToCook.find(cook => fullRecipe.id === cook.id)== null) {
    recipesToCook.push(fullRecipe);
    return recipesToCook;
  }
  return recipesToCook;
};

const deleteRecipe = (recipeName) => {
  let foundIndex = recipesToCook.findIndex(index => index.name === recipeName)
  recipesToCook.splice(foundIndex, 1);
  return recipesToCook;
};

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