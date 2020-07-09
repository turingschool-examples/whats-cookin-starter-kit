const chai = require('chai');
const expect = chai.expect;
const Recipe = require('../src/Recipe');
const userInfo = require('../data/users').usersData;
const recipeInfo = require('../data/recipes').recipeData;
const ingredientInfo = require('../data/ingredients').ingredientsData;

describe('Recipe', () => {
	it('Should instantiate a new recipe', () => {
		const recipe = new Recipe(recipeInfo[0]);

		expect(recipe).to.be.an.instanceOf(Recipe);
	});

	it('Should be able to calculate the cost of ingredients', () => {
		const recipe = new Recipe(recipeInfo[0]);

		const total = recipe.getTotalCost();
		
		expect(total).to.equal(17776);
	});

	it('Should be able to get its instructions', () => {
		const recipe = new Recipe(recipeInfo[0]);

		const instructions = recipe.getInstructions();

		expect(instructions).to.equal(recipeInfo[0].instructions);
	})

});