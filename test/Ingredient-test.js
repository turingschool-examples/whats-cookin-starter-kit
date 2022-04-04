import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';
const { ingredientsData } = require('../src/data/sampleDatasets');

describe('Ingredient', () => {
	let ingredient;

	beforeEach(() => {
		ingredient = new Ingredient(ingredientsData[0]);
	});

	it('should be a function', () => {
		expect(Ingredient).to.be.a('function');
	});

	it('should have an id', () => {
		expect(ingredient.id).to.equal(ingredientsData[0].id);
	});

	it('should have a name', () => {
		expect(ingredient.name).to.equal(ingredientsData[0].name);
	});

	it('should have a cost in cents', () => {
		expect(ingredient.costInCents).to.equal(ingredientsData[0].estimatedCostInCents);
	});

})
