const matchRecipe = (id, recipeData) => {
  return recipeData.find((recipe) => {
    return recipe.id === parseInt(id);
  });
};

const recipesToCook = (eventId, currentUser, recipeData) => {
  currentUser.recipesToCook.push(matchRecipe(eventId, recipeData));
};

const removeRecipes = (eventId, currentUser) => {
  if(!eventId){
    return  'Cannot delete recipe'
  } else {
  const recipes = currentUser.recipesToCook
    .map((recipe) => {
      return recipe.id;
    }).map(String);

  const index = recipes.indexOf(`${eventId}`);

  currentUser.recipesToCook.splice(index, 1);
}
};

export { recipesToCook, removeRecipes, matchRecipe };
