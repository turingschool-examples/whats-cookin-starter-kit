var recipesToCook = [];

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

export {
  recipesToCook,
  saveRecipe,
  deleteRecipe
}