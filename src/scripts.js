const recipeData = require('../data/recipes');

function searchByTag(searchedTag, recipeList) {
    let selectedRecipes = [];
    recipeList.forEach(recipe => {
    if (recipe.tags.includes(searchedTag)) {
      selectedRecipes.push(recipe);
    };
    return selectedRecipes;
  });
  return selectedRecipes;
}

module.exports = {
  searchByTag: searchByTag
}
