const filterByTag = (tag, recipes) => {
  const searchedTags = tag.toLowerCase().split(' ');
  const searchedRecipes = recipes.filter((recipe) => {
      return searchedTags.every((searchedTag) => {
        return recipe.tags.includes(searchedTag);
      });
  });
  if (searchedTags[0] === '') {
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
