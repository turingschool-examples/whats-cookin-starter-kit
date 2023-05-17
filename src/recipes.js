const getInstructions = recipe => {
  return recipe.instructions.map(item => item.instruction)
}

const getIngredientProperty = (currentIngredient, allIngredients, property) => {
    let matchingIngredient = allIngredients.find(ingredient => ingredient.id === currentIngredient.id)
    return matchingIngredient[property]
}

const getIngredients = (recipe, ingredients) => {
  return recipe.ingredients.map(ingredient => getIngredientProperty(ingredient, ingredients, 'name'))
}

const calculateRecipeCost = (recipe, ingredients) => {
  /*map over the array of ingredients in the recipe 
      get the cost in cents property based on the matching id from the full ingredients array 
      return an object with a key of how many of the item is needed and a key of the cost 
    reduce over that new array, 
      for the current value (each new recipe object )
        multiply the properties and += the sum to the acc 
  */
  console.log(recipe.ingredients[0])
  const recipeIngredients = recipe.ingredients.map(ingredient => ({amount: ingredient.quantity.amount, costPerUnit: getIngredientProperty(ingredient, ingredients, 'estimatedCostInCents')}))
  const costInCents = recipeIngredients.reduce((totalCost, curr) => totalCost += (curr.amount * curr.costPerUnit), 0);
  return `$${(costInCents/100).toFixed(2)}`
}

export {
  getInstructions,
  getIngredients,
  calculateRecipeCost
}
