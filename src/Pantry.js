const userInfo = require('../data/users').usersData;
const recipeInfo = require('../data/recipes').recipeData;

class Pantry {
	constructor({ name, id, pantry }) {
		this.name = name;
		this.id = id;
		this.pantry = pantry;
	};

	checkIngredients(recipe) {
		let checks = recipe.ingredients.reduce((evaluatedIngredientList, recipeItem) => {
			let recipeAmount = recipeItem.quantity.amount;

			if ((this.pantry.find(item => item.ingredient === recipeItem.id)) === undefined) {
				evaluatedIngredientList.userNeeds.push({ ingredient: recipeItem.id, amount: recipeAmount });
			}

			this.pantry.forEach(pantryItem => {
				if (pantryItem.ingredient === recipeItem.id && recipeAmount > pantryItem.amount) {
					evaluatedIngredientList.userNeeds.push(pantryItem);
				} else if (pantryItem.ingredient === recipeItem.id && recipeAmount < pantryItem.amount) {
					evaluatedIngredientList.userHas.push(pantryItem);
				}
			});
			console.log(evaluatedIngredientList)
			return evaluatedIngredientList;
		}, { userHas: [], userNeeds: [] });

		if (checks.userNeeds !== []) {
			// this.calculateIngredientsNeeded(checks);
			return "You do not have enough ingredients for this recipe"
		} else {
			return "You have enough ingredients for this recipe"
		};
	};

	// calculateIngredientsNeeded(checks) {
	// 	console.log(checks)
	// };
};

module.exports = Pantry;