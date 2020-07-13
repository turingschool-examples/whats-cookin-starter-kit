const chai = require('chai');
const expect = chai.expect;
const Recipe = require('../src/Recipe');

describe('Recipe', () => {
	let recipe1;
	beforeEach(() => {
		recipe1 = new Recipe(
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
			},
			[
        {
          "id": 11,
          "name": "wheat flour",
          "estimatedCostInCents": 142
        },
        {
          "id": 22,
          "name": "bicarbonate of soda",
          "estimatedCostInCents": 582
        },
        {
          "id": 1123,
          "name": "eggs",
          "estimatedCostInCents": 472
        },
        {
          "id": 44,
          "name": "sucrose",
          "estimatedCostInCents": 902
        },
        {
          "id": 55,
          "name": "instant vanilla pudding",
          "estimatedCostInCents": 660
        },
        {
          "id": 66,
          "name": "brown sugar",
          "estimatedCostInCents": 559
        },
        {
          "id": 77,
          "name": "salt",
          "estimatedCostInCents": 280
        },
        {
          "id": 88,
          "name": "fine sea salt",
          "estimatedCostInCents": 528
        },
        {
          "id": 99,
          "name": "semi sweet chips",
          "estimatedCostInCents": 253
        },
        {
          "id": 00,
          "name": "unsalted butter",
          "estimatedCostInCents": 617
        },
        {
          "estimatedCostInCents": 926
        }
      ]
		)
	});
	it('Should instantiate a new recipe', () => {
		expect(recipe1).to.be.an.instanceOf(Recipe);
	});

	it('Should be able to calculate the cost of ingredients', () => {
		const total = recipe1.getTotalCost();
		
		expect(total).to.equal(2208);
	});

	it('Should be able to get its instructions', () => {
		const instructions = recipe1.getInstructions();

		expect(instructions).to.equal(recipe1.instructions);
	});
});