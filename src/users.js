import { copyItem, getRandomIndex } from "./helper-functions";
import { currentUser, postRecipeToCook } from "./apiCalls";

const getRandomUser = users => {
  return users[getRandomIndex(users)]
}

const addUniqueRecipes = (userRecipes, newRecipe) => {
  console.log(currentUser.name, currentUser.id, newRecipe.id)
  if(!userRecipes.find(item => item.id === newRecipe.id)) userRecipes.push(newRecipe);
  postRecipeToCook(currentUser.id, newRecipe.id);
};

const addRecipe = (userRecipes, newRecipe) => {
  if (!userRecipes) userRecipes = [];
  addUniqueRecipes(userRecipes, newRecipe);
  return userRecipes;
}

const removeRecipe = (userRecipes, recipeToRemove) => {
  let found = userRecipes.find(recipe => recipe.id === recipeToRemove.id);
  if (found) userRecipes.splice(userRecipes.indexOf(found), 1);
  return userRecipes;
}

const updateRecipesToCook = (user, recipe, change) => {
  const updatedUser = copyItem(user);
  let recipes = updatedUser.recipesToCook;
  let recipeUpdate = {
    add: () => addRecipe(recipes, recipe),
    remove: () => removeRecipe(recipes, recipe)
  }
  updatedUser.recipesToCook = recipeUpdate[change]();
  return updatedUser;
};


export { updateRecipesToCook, getRandomUser };
