const matchRecipe = (id, recipeData) => {
    return recipeData.find((recipe) => {
       return recipe.id === parseInt(id);
     });
};

const recipesToCook = (eventId, currentUser, recipeData) => {
  currentUser.recipesToCook.push(matchRecipe(eventId, recipeData));
}

const removeRecipes = (eventId, currentUser) => {
  const index = currentUser.recipesToCook.indexOf(eventId)
    currentUser.recipesToCook.splice(index, 1);
}

export { recipesToCook, removeRecipes }
