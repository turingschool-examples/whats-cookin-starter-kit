const filterByTag = (tags, recipes) => {
  let filteredRecipes = [];
  tags.forEach((tag) => {
    let filterRecipe = recipes.filter((recipe) => {
      return recipe.tags.includes(tag);
    });
    filteredRecipes.push(...filterRecipe);
  });
  return filteredRecipes;
};

const searchRecipes = (searchTerm, recipes) => {
  return recipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
};

const getIngredientNames = (recipe, ingredients) => {
  let ingredientIds = recipe.ingredients.map((ingr) => {
    return ingr.id;
  });

  let ingredientNames = ingredients.reduce((acc, cv) => {
    if (ingredientIds.includes(cv.id)) {
      acc.push(cv.name);
    }
    return acc;
  }, []);
  return ingredientNames;
};

const getRecipeInstructions = (recipeName, recipes) => {
  let recipe = recipes.find((recipe) => {
    return recipe.name === recipeName;
  });
  if (recipe) {
    return recipe.instructions;
  } else {
    return [];
  }
};

module.exports = {
  filterByTag,
  searchRecipes,
  getIngredientNames,
  getRecipeInstructions,
};
