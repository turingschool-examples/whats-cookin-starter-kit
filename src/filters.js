const filterByTag = (tag, recipes) => {
  const searchedTag = tag.toLowerCase();
  const searchedRecipes = recipes.filter((recipe) => {
    return recipe.tags.includes(searchedTag);
  });
  if (!searchedTag) {
    return 'You need to enter a tag before you search!';
  }
  if (!searchedRecipes.length) {
    return 'Sorry, there are no recipes with this tag!';
  }
  return searchedRecipes;
};

const filterByName = (name, recipes) => {
  const searchedName = name.toLowerCase();
  const searchedRecipes = recipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(searchedName);
  });
  if (!searchedName) {
    return 'You need to enter a name before you search!';
  }
  if (!searchedRecipes.length) {
    return 'Sorry, there are no recipes with this name!';
  }
  return searchedRecipes;
};

export { filterByTag, filterByName };
