const getInstructions = recipe => {
  return recipe.instructions.map(item => item.instruction)
}

const getIngredients = (recipe, ingredients) => {
  return recipe.ingredients.map(ingredient => ingredients.find(item => item.id === ingredient.id).name)
}

const calculateRecipeCost = recipe => {

}

export {
  getInstructions,
  getIngredients,
  calculateRecipeCost
}
