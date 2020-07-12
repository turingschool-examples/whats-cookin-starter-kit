const userInfo = require('../data/users').usersData;
const recipeInfo = require('../data/recipes').recipeData;

class Pantry {
	constructor({ name, id, pantry }) {
		this.name = name;
		this.id = id;
		this.pantry = pantry;
		this.userNeeds = [];
	};

	checkIngredients(recipe) {
		recipe.ingredients.reduce((evaluatedIngredientList, recipeItem) => {
			let recipeAmount = recipeItem.quantity.amount;
			if ((this.pantry.find(item => item.ingredient === recipeItem.id)) === undefined) {
				evaluatedIngredientList.push({ ingredient: recipeItem.id, recipeAmount: recipeAmount });
			}
			this.pantry.forEach(pantryItem => {
				if (pantryItem.ingredient === recipeItem.id && recipeAmount > pantryItem.amount) {
					evaluatedIngredientList.push({ ingredient: recipeItem.id, recipeAmount: recipeAmount });
				}
			});
			return evaluatedIngredientList;
		}, this.userNeeds);
		if (this.userNeeds.length === 0) {
			return "You have enough ingredients for this recipe"
		} else {
			return "You do not have enough ingredients for this recipe"
		};
	};

	calculateIngredientsNeeded() {
		let groceryList = [];
		this.userNeeds.forEach(neededItem => {
			this.pantry.forEach(pantryItem => {
				if (neededItem.ingredient === pantryItem.ingredient) {
					groceryList.push({ingredient: pantryItem.ingredient, neededAmount: neededItem.recipeAmount - pantryItem.amount});
				};
			});
			if (groceryList.find(item => item.ingredient === neededItem.ingredient) === undefined) {
			groceryList.push({ ingredient: neededItem.ingredient, neededAmount: neededItem.recipeAmount });
			};
		});
		return groceryList;
	};
};

module.exports = Pantry;