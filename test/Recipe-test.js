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

});