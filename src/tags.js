export const filterRecipeByTag = (tags, recipe_dataset) => {
  const filteredRecipes = [];

  recipe_dataset.forEach((recipe) => {
    if (tags.every((tag) => recipe.tags.includes(tag))) {
      filteredRecipes.push(recipe);
    }
  });
  return filteredRecipes;
};

export function getTagRecipeCount(tags, recipe_dataset) {
  return filterRecipeByTag(tags, recipe_dataset).reduce((list, recipe) => {
    recipe.tags.forEach((tag) => {
      if (!list.hasOwnProperty(tag)) list[tag] = 0;
      list[tag]++;
    });
    return list;
  }, {});
}
