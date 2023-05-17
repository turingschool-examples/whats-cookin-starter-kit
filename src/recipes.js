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

const getIngredients = (currentRecipe, allIngredients) => {
  if(!allIngredients.length){
    return 'Sorry, no ingredients given!'
  }
  return currentRecipe.ingredients.reduce((ingredients, ingredient) => {
    let foundIngredients = allIngredients.find(item => ingredient.id === item.id)
    ingredients.push(foundIngredients)
    return ingredients;
  },[]);
};

const getIngredientNames = (ingredients) => {
  if(!ingredients.length){
    return 'Sorry, no ingredients given!'
  }
  let ingredientNames = [];
  ingredients.forEach(item => ingredientNames.push(item.name))
  return ingredientNames;
}

const calculateRecipeCost = (ingredients, recipe) => {
  return ingredients.reduce((totalCost, ingredient) => {
    let ingredientQuantity = recipe.ingredients.find(recipe => recipe.id === ingredient.id) 
    totalCost += (ingredient.estimatedCostInCents * ingredientQuantity.quantity.amount)
    return totalCost
  }, 0);
};

export { 
  filterRecipes, 
  getRecipeInstructions, 
  getRecipeById,
  getIngredients,
  getIngredientNames,
  calculateRecipeCost
};

