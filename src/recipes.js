const filterByTag = (tag, recipes, status) => {
  if (status === true) {
    return recipes.filter(recipe => {
      return recipe.tags.includes(tag);
    });
  } else return recipes;
};

const searchRecipes = (searchTerm, recipes) => {
  return recipes.filter(recipe => {
    return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
};

const getIngredientNames = (recipe, ingredients) => {
  let ingredientIds = recipe.ingredients.map(ingr => {
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

module.exports = {
  filterByTag,
  searchRecipes,
  getIngredientNames,
};
