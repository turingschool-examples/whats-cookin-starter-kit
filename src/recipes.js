const filterByTag = (tag, status, recipes) => {
  if (status === "tag-active") {
    return recipes.filter((recipe) => {
      return recipe.tags.includes(tag);
    });
  } else return recipes;
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
