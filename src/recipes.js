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
    console.log("getting here");
    return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
};

module.exports = {
  filterByTag,
  searchRecipes,
};
