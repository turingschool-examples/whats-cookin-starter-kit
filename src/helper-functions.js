const copyItem = item => JSON.parse(JSON.stringify(item))

const getIngredientProperty = (currentIngredient, allIngredients, property) => {
  let matchingIngredient = allIngredients.find(ingredient => ingredient.id === currentIngredient.id)
  return matchingIngredient[property]
}

export {copyItem, getIngredientProperty}