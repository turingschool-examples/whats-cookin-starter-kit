import { getRandomIndex } from "./helper-functions";
import { currentUser, updateServerRecipe } from "./apiCalls";

const getRandomUser = users => {
  return users[getRandomIndex(users)]
}

const addUniqueRecipe = (userRecipes, newRecipe, e) => {
  if(!userRecipes.find(recipeID => recipeID.toString() === newRecipe.id.toString())) {
    updateServerRecipe(currentUser.id, newRecipe.id, e, "POST");
  }
};

const removeExistingRecipe = (userRecipes, recipeToRemove, e) => {
  let found = userRecipes.find(recipeID => recipeID.toString() === recipeToRemove.id.toString());
  if (found) {
    updateServerRecipe(currentUser.id, recipeToRemove.id, e, "DELETE")
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
