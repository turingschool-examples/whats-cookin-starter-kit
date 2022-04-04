import Ingredient from './Ingredient';

class Recipe {
	constructor(recipe, ingredientData) {
		this.id = recipe.id;
		this.img = recipe.image;
		this.ingredientsInfo = recipe.ingredients;
		this.instructions = recipe.instructions;
		this.name = recipe.name;
		this.tags = recipe.tags;
		this.saved = false;
		this.wantToCook = false;
		this.ingredients = this.collectIngredients(ingredientData);
	};

	collectIngredients(ingredientData) {
		return this.ingredientsInfo.map((ingredient) => {
			ingredientData.forEach((dataPoint) => {
				if(dataPoint.id === ingredient.id) {
					ingredient = new Ingredient(dataPoint);
				};
			});
			return ingredient;
		});
	};

	calculateCost() {
		return this.ingredients.reduce((cost, ingredient) => {
			let numOfUnits;
			this.ingredientsInfo.forEach((data) => {
				if(data.id === ingredient.id) {
					numOfUnits = data.quantity.amount;
				};
			});
			return cost += (ingredient.costInCents * numOfUnits);
		}, 0);
	};

	giveInstructions () {
		return this.instructions.map((instruction) => ({
			[`${instruction.number}`]: instruction.instruction
		}));
	};
};


export default Recipe;
