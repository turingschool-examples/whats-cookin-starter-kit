const copyItem = item => JSON.parse(JSON.stringify(item))

const getIngredientProperty = (currentIngredient, allIngredients, property) => {
  let matchingIngredient = allIngredients.find(ingredient => ingredient.id === currentIngredient.id)
  return matchingIngredient[property]
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

const toggleView = elements => {
  elements.forEach(element => {
    element.classList.toggle('selected-view')
    element.classList.toggle('unselected-view')
  })
}

// const getUniqueIngredients = () => {
//   const output = [];
//   recipes.forEach(recipe => { 
//     recipe.ingredients.forEach(ingredient => {
//       if (!output.includes(ingredient.id)) {
//         output.push(ingredient.id);
//       }
//     })
//   })
//   console.log(ingredientsData.filter(ingredient => output.includes(ingredient.id)) )
// }


export {copyItem, getIngredientProperty, getRandomIndex, toggleView}
