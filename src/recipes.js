const filterByTag = (tag, recipes) => {
  return recipes.filter((recipe) => {
    return recipe.tags.includes(tag);
  });
};

const searchRecipes = (searchTerm, recipes) => {
  return recipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
};


module.exports = {
  filterByTag,
  searchRecipes,
};
