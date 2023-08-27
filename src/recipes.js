const filterByTag = (tag, recipes, status) => {
  if (status === true) {
    return recipes.filter((recipe) => {
      return recipe.tags.includes(tag);
    });
  } else return recipes;
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
