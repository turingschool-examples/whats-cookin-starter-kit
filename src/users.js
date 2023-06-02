import { copyItem, getRandomIndex } from "./helper-functions";
import { currentUser, postRecipeToCook } from "./apiCalls";

const getRandomUser = users => {
  return users[getRandomIndex(users)]
}

const addUniqueRecipe = (userRecipes, newRecipe, e) => {
  if(!userRecipes.find(recipeID => recipeID.toString() === newRecipe.id.toString())) {
    console.log("currentUSer in addUnique", currentUser)
    postRecipeToCook(currentUser.id, newRecipe.id, e);
  } 
  // userRecipes.push(newRecipe);
};

// const addRecipe = (userRecipes, newRecipe) => {
//   if (!userRecipes) userRecipes = [];
//   addUniqueRecipes(userRecipes, newRecipe);
//   return userRecipes;
// }

const removeRecipe = (userRecipes, recipeToRemove) => {
  let found = userRecipes.find(recipe => recipe.id === recipeToRemove.id);
  if (found) userRecipes.splice(userRecipes.indexOf(found), 1);
  return userRecipes;
}

const updateRecipesToCook = (e, recipe, change) => {
  console.log("user in updateRecipesToCOok", currentUser)
  let userRecipes = currentUser.recipesToCook;
  let recipeUpdate = {
    add: () => addUniqueRecipe(userRecipes, recipe, e),
    remove: () => removeRecipe(userRecipes, recipe)
  }
  recipeUpdate[change]();
};


export { updateRecipesToCook, getRandomUser };
