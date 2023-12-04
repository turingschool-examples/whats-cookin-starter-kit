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

module.exports = {
  filterByTag,
  filterByName
};