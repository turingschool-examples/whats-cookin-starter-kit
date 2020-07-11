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

	it.skip('Should determine amount of ingredients needed for a recipe', () => {
		const userPantry = new Pantry(userInfo[0]);
		const userRecipe = new Recipe(recipeInfo[0]);

		const result = userPantry.calculateIngredientsNeeded(checks);

		expect(result).to.equal([neededIngredients]);
	});
});