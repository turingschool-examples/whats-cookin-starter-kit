class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
    this.totalCost;
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

  calculateRecipeCost(ingredientsData) {
    this.determineRecipeIngredients(ingredientsData)
    var prices = []
    this.totalCost = ingredientsData.reduce((total, ingredient) => {
        this.ingredients.forEach((item) => {
            if(item.id === ingredient.id ) {
                let cost = (item.quantity.amount * ingredient.estimatedCostInCents)/ 100
                prices.push(cost)
            }
        })
    }, 0)
    const totalPrice = prices.reduce((sum,cost) => {
        return sum += cost
    }, 0)
        return totalPrice.toFixed(2)
  }
}

 

export default Recipe;