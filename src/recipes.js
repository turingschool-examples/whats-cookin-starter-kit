//Here is an example demonstrating logic separated that can be imported into the scripts and test files. Feel free to update this later! 

// export const findRecipeIngredients = recipe => {
//   console.log(recipe)
// }

function filterRecipesByTag(recipes, tags) {
const filteredRecipesByTag = recipes.filter(recipe => {
  return tags.every(tag => recipe.tags.includes(tag));
});
return filteredRecipesByTag;
}

function filterRecipesByName(recipes, name) {
  const filteredRecipesByName = recipes.filter(recipe => {
    const upperCaseRecipeName = recipe.name.toUpperCase();
    return upperCaseRecipeName.includes(name.toUpperCase());
  });
  return filteredRecipesByName;
  }


  module.exports = { filterRecipesByTag, 
  filterRecipesByName }