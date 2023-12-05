function filterByTag(recipes, tag) {
  const recipesByTag = recipes.filter(recipe => {
    return recipe.tags.includes(tag);
  });
  return recipesByTag;
};

function filterByName(recipes, name) {
  const recipesByName = recipes.filter(recipe => {
    if (recipe.name === name) {
      return recipe;
    }
  });
  return recipesByName;
};

function listRecipeIngredients(sampleRecipe, sampleIngredients) {
  const ingredientIds = sampleRecipe.ingredients.map(ingredient => {
    return ingredient.id;
  })
  console.log(ingredientIds)
  const requiredIngredients = sampleIngredients.filter(ingredient => {
    return ingredientIds.includes(ingredient.id);
  })
  console.log(requiredIngredients)
  const ingredientNames = requiredIngredients.map(ingredient => {
    return ingredient.name;
  })
  console.log(ingredientNames)
  return ingredientNames;
}


module.exports = {
  filterByTag,
  filterByName,
  listRecipeIngredients
};