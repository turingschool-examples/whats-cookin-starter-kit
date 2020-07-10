const chai = require('chai');
const expect = chai.expect;
const userInfo = require('../data/users').usersData;
const recipeInfo = require('../data/recipes').recipeData;
const Pantry = require('../src/Pantry');
const Recipe = require('../src/Recipe');

describe('Pantry', () => {
	it('Should hold users ingredients', () => {
		const userPantry = new Pantry(userInfo[0]);

		expect(userPantry.pantry).to.deep.equal(userInfo[0].pantry);
	});

	it('Should determine if it has ingredients for a recipe', () => {
		const userPantry = new Pantry(userInfo[0]);
		const userRecipe = new Recipe(recipeInfo[0]);

		const result = userPantry.checkIngredients(userRecipe);

		expect(result).to.equal("You do not have enough ingredients for this recipe");
	});
});

// Instantiate pantry and recipe and compare the two
// return true / false on each item in recipe
// If any are false, return GO TO STORE