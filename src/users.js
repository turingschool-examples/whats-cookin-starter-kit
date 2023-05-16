const copyItem = item => JSON.parse(JSON.stringify(item))

const addRecipeToCook = (user, recipe) => {
  const updatedUser = copyItem(user);
  let recipes = updatedUser.recipesToCook;
  if (!recipes) recipes = [recipe];
  if (!recipes.find(item => item.id === recipe.id)) recipes.push(recipe);
  updatedUser.recipesToCook = recipes;
  return updatedUser;
};

export { addRecipeToCook };
