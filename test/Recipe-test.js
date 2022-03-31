import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
const {recipeData} = require('../src/data/recipes');
import Ingredient from '../src/classes/Ingredient';

describe.only('Recipe', () => {
	let recipe, recipe2;

	beforeEach(() => {
		recipe = new Recipe(recipeData[0])
		recipe2 = new Recipe(recipeData[1])
	});

	it('should be a function', () => {
		expect(Recipe).to.be.a('function')
	});

	it('should have an id', () => {
		expect(recipe.id).to.equal(recipeData[0].id)
	});

	it('should have an array of data regarding ingrdient amounts and an id', () => {
		expect(recipe.ingredientsInfo[0]).to.be.a('object')
		expect(recipe.ingredientsInfo[1].id).to.equal(18372)
		expect(recipe.ingredientsInfo.length).to.equal(11)
	});

	it('should have an image', () => {
		expect(recipe.img).to.equal(recipeData[0].image)
	});

	it('should have instructions', () => {
		expect(recipe.instructions).to.be.a('array')
		expect(recipe.instructions[0].number).to.equal(1)
		expect(recipe.instructions[0].instruction).to.be.a('string')
	});

	it('should have a name', () => {
		expect(recipe.name).to.equal('Loaded Chocolate Chip Pudding Cookie Cups')
	});

	it('should have a list of tags', () => {
		expect(recipe.tags).to.be.a('array')
		expect(recipe.tags[0]).to.equal('antipasti')
	})

	it('should hold a list of ingredient instances', () => {
		recipe.collectIngredients()
		for(let i = 0; i < recipe.ingredients.length; i++) {
			expect(recipe.ingredients[i]).instanceOf(Ingredient)
			expect(recipe.ingredients[i]).to.be.a('object')
		}
		expect(recipe.ingredients[2].id).to.equal(1123)
		expect(recipe.ingredients.length).to.equal(recipe.ingredientsInfo.length)
	})

	it('should have a list of names of its ingredients', () => {
		recipe.collectIngredients()
		recipe.nameIngredients()
		recipe.ingredientNames.forEach((name) => {
			expect(name).to.be.a('string')
		})
		expect(recipe.ingredientNames[0]).to.equal('wheat flour')
	})

	it('should have be able to calculate the cost of its ingredients', () => {
		recipe.collectIngredients()
		recipe.nameIngredients()
		let output = recipe.calculateCost()

		console.log(recipe.ingredients.map((ingredient) => {
		  return ingredient.costInCents
		}))

		console.log(recipe.ingredientsInfo.map((ingredient) => {
			return ingredient.quantity.amount
		}))

		expect(output).to.equal(17776)
	})

	it('should return an array of instructions', () => {
		recipe.collectIngredients()
		let output = recipe.giveInstructions()
		expect(output).to.be.a('array')
		expect(output[0]['1']).to.equal("In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
		"number")
	});

	it('should have a string of its main displayedTag', () => {
			recipe.showDisplayTag();
			console.log(recipe.displayedTag);
			recipe2.showDisplayTag();
			console.log(recipe2.displayedTag);
	});

});
