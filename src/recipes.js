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
    if (!recipe || !ingredientsData) {
      return 'Error';
    } else {
      const ingredientNames = recipe.ingredients.map(ingredient => {
        const ingredientObject = ingredientsData.find(ingredientData => {
          return ingredientData.id === ingredient.id;
        });
        return ingredientObject.name;
      }); 
      return ingredientNames;
    }
  }

  function calculateRecipeCost(recipe, ingredientsData) {
    const recipe = sampleRecipes.find(sampleRecipe => sampleRecipe.id === recipeId);
    if (!recipe) {
        return 0;
    }
    const totalCost = recipe.ingredients.reduce((acc, ingredient) => {
        const currentIngredientObject = ingredientsData.find(ingredientData => ingredientData.id === ingredient.id);
        if (currentIngredientObject) {
            return acc + (currentIngredientObject.estimatedCostInCents * ingredient.quantity.amount);
        }
        return acc;
    }, 0);

    return (totalCost / 100).toFixed(2);
}

function getRecipeDirections(recipe) {
  return recipe.instructions;
}
  module.exports = { filterRecipesByTag, 
  filterRecipesByName, getIngredientNames, calculateRecipeCost, getRecipeDirections }