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

const calculateRecipeCost = recipe => {

}

export {
  getInstructions,
  getIngredients,
  calculateRecipeCost
}
