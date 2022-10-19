class Ingredient {
    constructor(IngredientData) {
			this.id = IngredientData.id;
      this.name = IngredientData.name;
      this.costInCents = IngredientData.estimatedCostInCents;
    };
};

module.exports = Ingredient;