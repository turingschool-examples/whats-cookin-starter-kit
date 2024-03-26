import recipeData from "../src/data/recipes.js";

export const filterRecipeByTag = (tags) => {
  const filteredRecipes = [];

  recipeData.forEach((recipe) => {
    if (tags.every((tag) => recipe.tags.includes(tag))) {
      filteredRecipes.push(recipe);
    }
  });
  return filteredRecipes;
};

export function getTagRecipeCount(tags) {
  return filterRecipeByTag(tags).reduce((list, recipe) => {
    recipe.tags.forEach((tag) => {
      if (!list.hasOwnProperty(tag)) list[tag] = 0;
      list[tag]++;
    });
    return list;
  }, {});
}
