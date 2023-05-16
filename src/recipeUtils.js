function recipesFromTag(recipes, tag) {
  return recipes.filter((recipe) => {
    return recipe.tags.includes(tag)
  });
}

function recipesfromName(recipes, name) {
  return recipes.filter((recipe) => {
    return recipe.name.includes(name)
  })
}

const findRecipe = (recipeData, recipeName) => {
  const recipe = recipeData.find(({ name }) => name === recipeName);
  return recipe
};  

const findIngredientNames = (recipeData, ingredientsData, recipeName) => {
  const recipe = findRecipe(recipeData, recipeName);
    if (recipe === undefined) {
      return "Sorry, we don't have that recipe."
    }
  const ingredientIds = recipe.ingredients.map(({ id }) => id);
  const ingredients = ingredientsData.filter(({ id }) => ingredientIds.includes(id));
  return ingredients.map(({ name }) => name);
};



export {
  recipesFromTag,
  recipesfromName,
  findRecipe,
  findIngredientNames,
  
}