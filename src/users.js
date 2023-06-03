import { copyItem, getRandomIndex } from "./helper-functions";
import { currentUser, postRecipeToCook, deleteRecipeToCook } from "./apiCalls";

const getRandomUser = users => {
  return users[getRandomIndex(users)]
}

const addUniqueRecipe = (userRecipes, newRecipe, e) => {
  if(!userRecipes.find(recipeID => recipeID.toString() === newRecipe.id.toString())) {
    postRecipeToCook(currentUser.id, newRecipe.id, e);
  }
};

const removeExistingRecipe = (userRecipes, recipeToRemove, e) => {
  let found = userRecipes.find(recipeID => recipeID.toString() === recipeToRemove.id.toString());
  if (found) {
    console.log(currentUser, "before")
    deleteRecipeToCook(currentUser.id, recipeToRemove.id, e)
  }
}

const updateRecipesToCook = (e, recipe, change) => {
  let userRecipes = currentUser.recipesToCook;
  let recipeUpdate = {
    add: () => addUniqueRecipe(userRecipes, recipe, e),
    remove: () => removeExistingRecipe(userRecipes, recipe, e)
  }
  recipeUpdate[change]();
};


export { updateRecipesToCook, getRandomUser };
