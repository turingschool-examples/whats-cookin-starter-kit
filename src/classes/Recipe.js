class Recipe {
  constructor(recipeData) {
    this.id = recipeData.id;
    this.image = recipeData.image;
    this.ingredients = recipeData.ingredients;
    this.instructions = recipeData.instructions;
    this.name = recipeData.name;
    this.tags = recipeData.tags;
  }

  listIngredients(ingredientData) {
    const ingredientNames = this.ingredients.map(ingredient => {
      const ingredientId = ingredient.id;
      const ingredientDataNames = ingredientData.filter(ingredient => ingredient.id === ingredientId).map(ingredient => ingredient.name);
      return ingredientDataNames
    });
    return ingredientNames.flat();
  }

  /*
Determine the names of ingredients needed - DONE
Get the cost of its ingredients
Return its directions / instructions
  */

}

export default Recipe;