class Recipe {
	constructor(recipeData, ingredientsData) {
		this.id = recipeData.id;
		this.image = recipeData.image;
		this.ingredients = recipeData.ingredients;
		this.instructions = recipeData.instructions;
		this.name = recipeData.name;
		this.tags = recipeData.tags;
		this.allIngredients = ingredientsData;
	};

	getTotalCost() {
		return this.ingredients.reduce((sum, ingredient) => {
			const foundIngredients = this.allIngredients.find(item => item.id === ingredient.id);
			return sum + foundIngredients.estimatedCostInCents * ingredient.quantity.amount;
		}, 0);
	};

	getInstructions() {
		return this.instructions;
	};
};

if (typeof module !== 'undefined') {
  module.exports = Recipe;
};