const chai = require('chai');
const expect = chai.export;

const testRecipes = require('./test-data.js');
const Recipe = require('../src/recipe');

describe('Recipe', function() {

  it('should be an instance of Recipe', function() {
    const recipe = new Recipe();
    expect(Recipe).to.be.an.instanceof(Recipe);
  })

  it('should take in an object', function() {
    const recipe = new Recipe(testRecipe[0])
    expect(recipe.id).to.deep.equal(testRecipe[0].id)
  })

  it('should return names of ingredients', function() {
    const recipe = new Recipe(testRecipe[0]);
    expect(recipe.returnIngredientNames()).to.deep.equal(["wheat flour", "bicarbonate of soda", "eggs", "sucrose"])
  })

  it('should return the total cost of ingredients', function() {
    const recipe = new Recipe(testRecipe[0]);
    expect(recipe.returnTotalCost()).to.deep.equal(20.98);
  })

  it('should return recipe instructions in order', function() {
    const recipe = new Recipe(testRecipe[0]);
    expect(recipe.returnInstructions()).to.deep.equal(testRecipe[0].instructions)
  })

})
