const chai = require('chai');
const expect = chai.expect;
const Pantry = require('../src/Pantry');
const Recipe = require('../src/Recipe');

describe('Pantry', () => {
	let userPantry, userRecipe;
	beforeEach(() => {
		userPantry = new Pantry(
			{
			"name": "Nicole",
			"id": 1,
			"pantry": [
				{
					"ingredient": 11,
					"amount": 4
				},
				{
					"ingredient": 00,
					"amount": 4
				},
				{
					"ingredient": 1123,
					"amount": 10
				},
				{
					"ingredient": 44,
					"amount": 2
				},
				{
					"ingredient": 55,
					"amount": 2
				}]
			});
		userRecipe = new Recipe(
			{
				"id": 1111,
				"image": "image",
				"ingredients": [
					{
						"id": 11,
						"quantity": {
							"amount": 1.5,
							"unit": "c"
						}
					},
					{
						"id": 22,
						"quantity": {
							"amount": 0.5,
							"unit": "tsp"
						}
					},
					{
						"id": 1123,
						"quantity": {
							"amount": 1,
							"unit": "large"
						}
					},
					{
						"id": 44,
						"quantity": {
							"amount": 1,
							"unit": "large"
						}
					},
					{
						"id": 55,
						"quantity": {
							"amount": 0.5,
							"unit": "c"
						}
					}
				],
				"instructions": [
					{
						"instruction": "Do the thing",
						"number": 1
					},
					{
						"instruction": "Then another thing",
						"number": 2
					},
					{
						"instruction": "Lastly, the thing",
						"number": 3
					},
				],
				"name": "Loaded Chocolate Chip Pudding Cookie Cups",
				"tags": [
					"lunch",
					"sauce",
					"main dish"
				]
			}
		);
	});

	it('Should hold users ingredients', () => {
		expect(userPantry.pantry).to.deep.equal([
			{"ingredient": 11, "amount": 4},
			{"ingredient": 00, "amount": 4},
			{"ingredient": 1123, "amount": 10},
			{"ingredient": 44, "amount": 2},
			{"ingredient": 55, "amount": 2}]);
	});

	it('Should determine if it has ingredients for a recipe', () => {
		const result = userPantry.checkIngredients(userRecipe);

		expect(result).to.equal("You do not have enough ingredients for this recipe");
	});

	it('Should determine amount of ingredients needed for a recipe', () => {
		userPantry.checkIngredients(userRecipe);
		const result = userPantry.calculateIngredientsNeeded();

		expect(result).to.deep.equal([
			{ ingredient: 22, neededAmount: 0.5 }
		]);
	});
});