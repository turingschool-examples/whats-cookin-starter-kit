
// filter by tag function

const filterByTag = (recipeData, tagInput) => {
  const filteredRecipes = recipeData.reduce((acc, recipe) => {
    recipe.tags.forEach(tag => {
      if (tag === tagInput) {
        acc.push(recipe)
      } 
    })
    return acc;
  }, [])
  if (filteredRecipes.length === 0) {
    return 'Error: try a new tag';
  } else {
    return filteredRecipes;
  }
};

function filterByName(recipeData, name) {
  var filteredRecipesByName = [];
  var lowerCaseName = name.toLowerCase()
  var lowerCaseRecipe;
    for(var i = 0; i < recipeData.length; i++) {
      lowerCaseRecipe = recipeData[i].name.toLowerCase()
      if(lowerCaseRecipe.includes(lowerCaseName)) {
        filteredRecipesByName.push(recipeData[i]);
      };
    };
  if (!filteredRecipesByName.length) {
    return 'No results';
  } 
  return filteredRecipesByName;
};

export { filterByTag, filterByName }
