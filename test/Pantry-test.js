const chai = require('chai');
const expect = chai.expect;
const Pantry = require('../src/Pantry');
const Recipe = require('../src/Recipe');
const testData = require('../data/test-data');
const recipeTestData = testData.recipeTestData;
const usersTestData = testData.usersTestData;

describe('Pantry', () => {
	it('Should hold users ingredients', () => {
		const userPantry = new Pantry(usersTestData[0]);

		expect(userPantry.pantry).to.deep.equal(usersTestData[0].pantry);
	});

	it('Should determine if it has ingredients for a recipe', () => {
		const userPantry = new Pantry(usersTestData[0]);
		const userRecipe = new Recipe(recipeTestData[0]);

		const result = userPantry.checkIngredients(userRecipe);

		expect(result).to.deep.equal("You do not have enough ingredients for this recipe");
	});

	it('Should determine if it has ingredients for a recipe', () => {
		const userPantry = new Pantry(usersTestData[1]);
		const userRecipe = new Recipe(recipeTestData[1]);

		const result = userPantry.checkIngredients(userRecipe);

		expect(result).to.equal("You have enough ingredients for this recipe");
	});

	it('Should determine amount of ingredients needed for a recipe', () => {
		const userPantry = new Pantry(usersTestData[0]);
		const userRecipe = new Recipe(recipeTestData[0]);

		userPantry.checkIngredients(userRecipe);
		const result = userPantry.calculateIngredientsNeeded();

		expect(result).to.deep.equal([
			{ ingredient: 9079, neededAmount: 1.5 },
			{ ingredient: 11935, neededAmount: 0.5 },
			{ ingredient: 2042, neededAmount: 1 },
			{ ingredient: 2069, neededAmount: 0.5 }
		]);
	});
});