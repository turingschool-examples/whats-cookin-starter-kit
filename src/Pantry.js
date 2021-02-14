class Pantry {
  constructor(ingredients) {
    this.ingredients = ingredients

  }

  checkUserIngredients(recipe) {
    let result = "You can cook this!"
    console.log(recipe.ingredients)
    console.log(this.ingredients)
    recipe.ingredients.forEach(recipeIngredient => {
      if(!this.ingredients.find(pantryIngredient =>
        recipeIngredient.id === pantryIngredient.ingredient && recipeIngredient.quantity.amount <= pantryIngredient.amount
      )) {
        result = "You can't cook this"
      }
    })
    return result
  }
}

if (typeof module !== 'undefined') {
  module.exports = Pantry;
}
