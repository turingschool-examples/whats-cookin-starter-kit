
class Recipe {
  constructor(recipeInfo) {
    this.name = recipeInfo.name
    this.id = recipeInfo.id
    this.image = recipeInfo.image
    this.ingredients = recipeInfo.ingredients
    this.instructions = recipeInfo.instructions
    this.tags = recipeInfo.tags
  }

  findIngredientNames() {
    this.ingredients.map(ingredient => ingredient.id)
  }
}

module.exports = Recipe;