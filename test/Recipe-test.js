const chai = require('chai');
const expect = chai.expect;
const Recipe = require('../src/Recipe');
// const userInfo = require('../data/users').usersData;
// const recipeInfo = require('../data/recipes').recipeData;
// const ingredientInfo = require('../data/ingredients').ingredientsData;

const testData = require('../data/test-data');
const recipeTestData = testData.recipeTestData;
const usersTestData = testData.usersTestData;

describe('Recipe', () => {
	let recipe1;
	beforeEach(() => {
		recipe1 = new Recipe(recipeTestData[0]);
	});
	it('Should instantiate a new recipe', () => {
		const recipe = new Recipe(recipe1);

		expect(recipe).to.be.an.instanceOf(Recipe);
	});

	it('Should be able to calculate the cost of ingredients', () => {
		const recipe = new Recipe(recipe1);

		const total = recipe.getTotalCost();
		
		expect(total).to.equal(2552.5);
	});

	it('Should be able to get its instructions', () => {
		const recipe = new Recipe(recipe1);

		const instructions = recipe.getInstructions();

		expect(instructions).to.equal(recipe1.instructions);
	})

});