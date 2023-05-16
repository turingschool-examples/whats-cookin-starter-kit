const compileIngredientQuantity = (recipe, ingredientsData) => {
  return recipe.ingredients.map((quantity) => {
     quantity = {
     id: quantity.id,
     quantity: quantity.quantity.amount
   }
     return quantity});
 }

   const sumTotalIngredientQuantity = (sampleRecipeData, sampleIngredientsData) => {
    console.log(sampleRecipeData[0])
    
   const ingQuantityData = compileIngredientQuantity(sampleRecipeData[0], sampleIngredientsData)
    return ingQuantityData.reduce((acc, curr) => {
    acc += curr.quantity
    return acc
  }, 0)} 



export { compileIngredientQuantity, sumTotalIngredientQuantity };
