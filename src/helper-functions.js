const copyItem = item => JSON.parse(JSON.stringify(item))

const getIngredientProperty = (currentIngredient, allIngredients, property) => {
  let matchingIngredient = allIngredients.find(ingredient => ingredient.id === currentIngredient.id)
  return matchingIngredient[property]
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

const toggleViewBtns = elements => {
  elements.forEach(element => {
    element.classList.toggle('selected-view')
    element.classList.toggle('unselected-view')
  })
}

export {copyItem, getIngredientProperty, getRandomIndex, toggleViewBtns}
