const getRecipeById = (recipes, id) => {
  const recipe = recipes.find(recipe => recipe.id === id);
  return recipe;
};

const getRecipeInstructions = (recipe) => {
  return recipe.instructions.reduce((instructions, instruction) => {
    instructions.push(`${instruction.number}. ${instruction.instruction}`);
    return instructions;
  }, []);
};

const filterRecipes = (data, filterTerm) => {
  const filteredRecipes = data.filter((recipe) => {
     return recipe.tags.includes(filterTerm) || recipe.name === filterTerm
  })
  if(filteredRecipes.length === 0) {
    return 'Sorry, no matching results!'
  }
  return filteredRecipes
}

const calculateRecipeCost = (recipeId) => {
  // const recipe = sampleRecipeData.find(function(recipe){
  //   return recipeId === recipe.id
  // }) 
  // // if (!recipe) {
  // //   re
  // // }
  return recipe.ingredients.reduce(function(amount, ingredient) {
    // use ingredient.id to get the sample ingredient data
    // find out the $amount for that ing by multiplying the amount of that ingredient
    // by the estimatedCostInCents
    // add that to the amount
    // return the amount
  }
  , 0)
};
export { 
  filterRecipes, 
  getRecipeInstructions, 
  getRecipeById 
};

