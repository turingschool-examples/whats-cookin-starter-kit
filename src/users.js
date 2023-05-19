import { copyItem, getRandomIndex } from "./helper-functions";

const addUniqueRecipes = (userRecipes, newRecipe) => {
  if(!userRecipes.find(item => item.id === newRecipe.id)) userRecipes.push(newRecipe)
};

const addRecipeToCook = (user, recipe) => {
  const updatedUser = copyItem(user);
  let recipes = updatedUser.recipesToCook;
  if (!recipes) recipes = [recipe];
  addUniqueRecipes(recipes, recipe)
  updatedUser.recipesToCook = recipes;
  return updatedUser;
};

const getRandomUser = users => {
  return users[getRandomIndex(users)]
}


export { addRecipeToCook, getRandomUser };
