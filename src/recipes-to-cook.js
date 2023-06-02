const matchRecipe = (id, recipeData) => {
  if (!id) {
    return "No recipe matches that ID";
  } else {
    return recipeData.find((recipe) => {
      return recipe.id === parseInt(id);
    });
  };
};

const recipesToCook = (eventId, currentUser, recipeData) => {
  if (!eventId) {
    return "The recipe could not be found";
  } else {
    currentUser.recipesToCook.push(matchRecipe(eventId, recipeData));
  };
};

const removeRecipes = (eventId, currentUser) => {
  if (!eventId || currentUser.recipesToCook.length === 0) {
    return "Cannot delete recipe";
  } else {
    const recipes = currentUser.recipesToCook
      .map((recipe) => {
        return recipe.id;
      })
      .map(String);

    const index = recipes.indexOf(`${eventId}`);

    const deleted = currentUser.recipesToCook.splice(index, 1);
    currentUser.deletedRecipes.push(deleted)
  };
};

export { recipesToCook, removeRecipes, matchRecipe };
