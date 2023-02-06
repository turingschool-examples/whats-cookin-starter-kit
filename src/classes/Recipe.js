class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
  }

  getIngredientIds() {
    let ingredientIds = this.ingredients.map((ingredient) => ingredient.id);
    return ingredientIds;
  }

  determineRecipeIngredients(ingredientData) {
    let ingredients = [];
    this.getIngredientIds().forEach((ingredientId) => {
      ingredients = [
        ...ingredients,
        ...ingredientData.filter(
          (ingredient) => ingredientId === ingredient.id
        ),
      ];
    });

    const ingredientNames = ingredients.map((ingredient) => ingredient.name);
    return ingredientNames;
  }
  calculateRecipeCost(ingredientData) {
    const totalIngredietCost = ingredientData.reduce((total, currentIngredient) => {
        
        return total
    },0)
// Goal: Get the cost of its ingredients
// Input: object with an array of objects 
// Output: return a number for total cost
// We need iterate over the object and use the estimated cost in cents * amount to return the total value. Method--> reduce? returning a total cost

 }
}

export default Recipe;