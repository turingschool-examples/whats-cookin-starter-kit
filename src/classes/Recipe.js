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
    this.ingredientsNeeded.push(ingredient.name);
  });
  return this.ingredientsNeeded
  console.log(this.ingredientsNeeded);
  }

  getInstructions() {
    console.log(this.instructions)
  }  
}

export default Recipe;
