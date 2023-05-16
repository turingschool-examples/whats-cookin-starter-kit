const compileIngredientQuantity = (recipe, ingredientsData) => {
  return recipe.ingredients.map((quantity) => {
     quantity = {
     id: quantity.id,
     quantity: quantity.quantity.amount
   }
     return quantity});
 }
 
export { compileIngredientQuantity };
