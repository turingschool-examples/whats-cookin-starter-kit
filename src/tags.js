export const filterRecipeByTag = (tags, recipeDataset) => {
  const filteredRecipes = [];

  recipeDataset.forEach((recipe) => {
    if (tags.every((tag) => recipe.tags.includes(tag))) {
      filteredRecipes.push(recipe);
    }
  });
  return filteredRecipes;
};

export function getTagRecipeCount(tags, recipeDataset) {
  return filterRecipeByTag(tags, recipeDataset).reduce((list, recipe) => {
    recipe.tags.forEach((tag) => {
      if (!list.hasOwnProperty(tag)) list[tag] = 0;
      list[tag]++;
    });
    return list;
  }, {});
}
