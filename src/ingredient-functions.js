const findRecipeIngredients = (recipeData, ingredientsData, id) => {
  let givenRecipe = recipeData.find(recipe => {
    return recipe["id"] == id
  })

  let ingredientIds = givenRecipe["ingredients"].map(ingredient => {
    return ingredient["id"]
  })

  let recipeIngredients = ingredientsData.filter(ingredient => {
    return ingredientIds.includes(ingredient["id"])
  })

  return recipeIngredients.map(ingredient => {
    let ingredientNames = ingredient["name"]
    return ingredientNames
  } )
}

const calculateCost = (recipeData, ingredientsData, clickedId) => {
  const clickedRecipe = recipeData.find(recipe => recipe.id == clickedId);
  let reducedIngredients = clickedRecipe.ingredients.reduce((accumulator, currentValue) => {
    let ingredientPrice = ingredientsData.find(ingredientDetail => ingredientDetail.id === currentValue.id);
    accumulator += ingredientPrice.estimatedCostInCents * currentValue.quantity.amount;
    return accumulator;
  }, 0);
  const costInDollars = (reducedIngredients / 100).toFixed(2); 
  return `$${costInDollars}`;
};

const findDirections = (recipeData, recipeName) => {
  let chosenRecipe = recipeData.find(recipe => {
    return recipeName === recipe.name
  })
    return chosenRecipe.instructions
}

export {
  findRecipeIngredients,
  calculateCost,
  findDirections
}