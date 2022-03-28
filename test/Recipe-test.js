import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
const {recipeData} = require('../src/data/recipes');

describe.only('Recipe', () => {
	let recipe;

	beforeEach(() => {
		recipe = new Recipe(recipeData[0])
	})

	it('should be a function', () => {
		expect(Recipe).to.be.a('function')
	})

	it('should have an id', () => {
		expect(recipe.id).to.equal(recipeData[0].id)
	})

	it('should have an array of data regarding ingrdient amounts and an id', () => {
		expect(recipe.ingredientsInfo[0]).to.be.a('object')
		expect(recipe.ingredientsInfo[1].id).to.equal(18372)
		expect(recipe.ingredientsInfo.length).to.equal(11)
	})

	it('should have an image', () => {
		expect(recipe.img).to.equal(recipeData[0].image)
	})

	it('should have instructions', () => {
		expect(recipe.instructions).to.be.a('array')
		expect(recipe.instructions[0].number).to.equal(1)
		expect(recipe.instructions[0].instruction).to.be.a('string')
	})


	

})