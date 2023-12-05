//Here is an example demonstrating logic separated that can be imported into the scripts and test files. Feel free to update this later! 

// export const findRecipeIngredients = recipe => {
//   console.log(recipe)
// }

function filterRecipesByTag(recipes, tags) {
const filteredRecipesByTag = recipes.filter(recipe => {
  const allTagsMatch = tags.every(tag => recipe.tags.includes(tag));
  return allTagsMatch;
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

  function getIngredientNames(recipe, ingredientsData) {
    const ingredientNames = recipe.ingredients.map(ingredient => {
      const ingredientObject = ingredientsData.find(ingredientData => {
        return ingredientData.id === ingredient.id;
      });
      return ingredientObject.name;
    }); 
    return ingredientNames;
  }

  module.exports = { filterRecipesByTag, 
  filterRecipesByName, getIngredientNames }