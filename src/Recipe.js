const ingredientInfo = require('../data/ingredients').ingredientsData;

class Recipe {
	constructor({ id, image, ingredients, instructions, name, tags }) {
		this.id = id;
		this.image = image;
		this.ingredients = ingredients;
		this.instructions = instructions;
		this.name = name;
		this.tags = tags;
	};

	getTotalCost() {
		return this.ingredients.reduce((sum, ingredient) => {
			const foundIngredients = ingredientInfo.find(item => item.id === ingredient.id);
			return sum + foundIngredients.estimatedCostInCents * ingredient.quantity.amount;
		}, 0);
	};

	getInstructions() {
		return this.instructions;
	};
};

module.exports = Recipe;