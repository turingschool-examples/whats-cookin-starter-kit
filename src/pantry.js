class Pantry {
  constructor(user, pantry, recipeData, ingredientsData) {
    this.user = user;
    this.ingredients = pantry;
    this.recipeData = recipeData;
    this.ingredientsData = ingredientsData;
  }
  checkIngredients(recipe) {
    const pantry = this.ingredients;
    return recipe.map(recipeIngredient => {
      const itemInPantry = pantry.find(item => item.ingredient === recipeIngredient.id)
    })
  }
  addIngredient() {

  }
  removeIngredient() {

  }
}

if (typeof module !== 'undefined') {
  module.exports = Pantry;
}
