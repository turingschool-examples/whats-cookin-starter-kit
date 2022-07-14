class Recipe {
  constructor(recipeInfo) {
    this.id = recipeInfo.id;
    this.image = recipeInfo.image;
    this.ingredients = recipeInfo.ingredients;
    this.instructions = recipeInfo.instructions;
    this.name = recipeInfo.name;
    this.tags = recipeInfo.tags;
    this.ingredientsNeeded = [];
  }

  getIngredients(ingredients) {
  const ingredientIds = this.ingredients.map(ingredient => {
    return ingredient.id;
  });
  const filteredIngredients = ingredients.filter(ingredient => {
    if (ingredientIds.includes(ingredient.id)) {
      return ingredient;
    };
  });
  filteredIngredients.forEach(ingredient => {
    this.ingredientsNeeded.push(ingredient);
  });
  const ingredientNames = this.ingredientsNeeded.map(ingredient => ingredient.name)
  return ingredientNames

  }

  getInstructions() {
    return this.instructions
  }  

  getCost() {
    const recipeCostTotal = this.ingredientsNeeded.reduce((arr, values) => arr + values.estimatedCostInCents, 0)
    return recipeCostTotal/100
  }
}

export default Recipe;
