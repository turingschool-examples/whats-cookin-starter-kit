const userInfo = require('../data/users').usersData;
const recipeInfo = require('../data/recipes').recipeData;

class Pantry {
	constructor({ name, id, pantry }) {
		this.name = name;
		this.id = id;
		this.pantry = pantry;
	};

	checkIngredients(recipe) {
		let checks = recipe.ingredients.reduce((acc, ingredient) => {
			let recipeAmount = ingredient.quantity.amount;
			let pantryItem = this.pantry.find(item => item.ingredient === ingredient.id);
			let pantryAmount = null;
			if (pantryItem) {
				pantryAmount = pantryItem.amount
			};
			if (recipeAmount < pantryAmount) {
				acc.push(true);
			} else {
				acc.push(false);
			};
			return acc;
		}, []);
		if (checks.includes(false)) {
			return "You do not have enough ingredients for this recipe"
		} else {
			return "You have enough ingredients for this recipe"
		};
	};
};

//get the id of the ingredient that is in the recipe and in the pantry
//declare variable for recipe ingredient amount
//declare variable for pantry ingredient amount
//compare the two values, if recipe ingredient > pantry ingredient then return false, else return true

module.exports = Pantry;

// compare 