export const filterRecipeByTag = (tags, dataset) => {
  const filteredRecipes = [];

  dataset.forEach((recipe) => {
    if (tags.every((tag) => recipe.tags.includes(tag))) {
      filteredRecipes.push(recipe);
    }
  });
  return filteredRecipes;
};

export function getTagRecipeCount(tags, dataset) {
  return filterRecipeByTag(tags, dataset).reduce((list, recipe) => {
    recipe.tags.forEach((tag) => {
      if (!list.hasOwnProperty(tag)) list[tag] = 0;
      list[tag]++;
    });
    return list;
  }, {});
}
