const Ingredient = require("./Ingredient")

class Recipe {
  constructor(recipeData, ingredientsData) {
    this.id = recipeData.id
    this.name = recipeData.name
    this.image = recipeData.image
    this.instructions = recipeData.instructions
    this.tags = recipeData.tags
    this.ingredients = this.instantiateIngredients(recipeData, ingredientsData)
  };

  instantiateIngredients(recipeData, ingredientsData) {
    return recipeData.ingredients.map(recipeObject => {
      let targetDatasetObject = ingredientsData.find(datasetObj => recipeObject.id === datasetObj.id);
      return new Ingredient(targetDatasetObject, recipeObject)}); 
    };

  totalCost() {
    let total = this.ingredients.reduce((acc, ingredient) => {
      return acc = acc += ingredient.estimatedCostInCents * ingredient.amount;
    }, 0) / 100;
    return `$${total.toString()}`
  };
};

module.exports = Recipe;