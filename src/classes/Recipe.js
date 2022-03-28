class Recipe {
	constructor(recipe) {
		this.id = recipe.id
		this.img = recipe.image
		this.ingredientsInfo = recipe.ingredients // or ingredients listed (what the recipe object gives us)
		this.instructions = recipe.instructions
		// this.ingredients = []
	}
};


export default Recipe;