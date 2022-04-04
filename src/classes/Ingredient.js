class Ingredient {
	constructor(ingredient) {
		this.id = ingredient.id;
		this.name = ingredient.name;
		this.costInCents = ingredient.estimatedCostInCents;
	};
};

export default Ingredient;