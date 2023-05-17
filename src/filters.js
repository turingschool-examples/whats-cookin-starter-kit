const filterByTag = (tag, recipes) => {
  const searchedTags = tag.toLowerCase().split(' ');
  const searchedRecipes = recipes.filter((recipe) => {
      return searchedTags.every((searchedTag) => {
        return splitTags(recipe.tags).includes(searchedTag);
      });
  });
  if (!searchedRecipes.length) {
    return 'Sorry, no recipes were found in your search!';
  }
  return searchedRecipes;
};

const filterByName = (name, recipes) => {
  const searchedName = name.toLowerCase();
  const searchedRecipes = recipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(searchedName);
  });
  if (!searchedRecipes.length) {
    return 'Sorry, no recipes were found in your search!';
  }
  return searchedRecipes;
};

const splitTags = (tags) => {
  return tags.flatMap((tag) => {
    return tag.split(' ')
  })
}


export { filterByTag, filterByName };
