const {ingredientsData} = require('../data/ingredients');
const {recipeData} = require('../data/recipes');
import Ingredient from './Ingredient';

class Recipe {
	constructor(recipe) {
		this.id = recipe.id
		this.img = recipe.image
		this.ingredientsInfo = recipe.ingredients // or ingredients listed (what the recipe object gives us)
		this.instructions = recipe.instructions
		this.name = recipe.name
		this.tags = recipe.tags
		this.ingredients;
		this.ingredientNames;
	}

	collectIngredients() {
		this.ingredients = this.ingredientsInfo.map((ingredient) => {
			ingredientsData.forEach((dataPoint) => {
				if(dataPoint.id === ingredient.id) {
					ingredient = new Ingredient(dataPoint)
				} 
			})
			return ingredient
		})
	}

	nameIngredients() {
		this.ingredientNames = this.ingredients.map((ingredient) => {
			return ingredient.name
		})
	}

	calculateCost() {
		return this.ingredients.reduce((cost, ingredient) => {
			let numOfUnits;
			this.ingredientsInfo.forEach((data) => {
				if(data.id === ingredient.id) {
					numOfUnits = data.quantity.amount
				}
			})
			return cost += (ingredient.costInCents * numOfUnits)		
		}, 0)
	}

	giveInstructions () {
	return this.instructions.map((instruction) => ({
	[`${instruction.number}`]: instruction.instruction
		}))
	}

};


export default Recipe;