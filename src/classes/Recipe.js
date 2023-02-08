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

  determineRecipeIngredients(ingredientsData) {
    let ingredients = [];
    this.getIngredientIds().forEach((ingredientId) => {
      ingredients = [
        ...ingredients,
        ...ingredientsData.filter(ingredient => ingredientId === ingredient.id)
      ];
    });

    const ingredientNames = ingredients.map((ingredient) => ingredient.name);
    return ingredientNames;
  }

  calculateRecipeCost(ingredientsData) {
    var prices = []

    ingredientsData.forEach(ingredient => {
        this.ingredients.forEach((item) => {
            if(item.id === ingredient.id ) {
                let cost = (item.quantity.amount * ingredient.estimatedCostInCents)/ 100
                prices.push(cost)
            }
        })
    })
    
    const totalPrice = prices.reduce((sum,cost) => {
        return sum += cost
    }, 0)
        return totalPrice.toFixed(2)
  }

  returnInstructions() {
    const retrieveInstr = this.instructions.reduce((acc, currentInstructions) => {
        const instructions = `${currentInstructions.number}: ${currentInstructions.instruction}`
        acc.push(instructions)
        return acc
    },[])
    return retrieveInstr
    }
}
export default Recipe;


