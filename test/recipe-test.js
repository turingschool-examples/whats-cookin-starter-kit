const chai = require('chai');
const expect = chai.expect;
const Recipe = require('../src/recipe');
const recipeData = require('../data/recipes.js');
const ingredientsData = require('../data/ingredients.js');

// let recipe;
// console.log(recipeData[0]);


describe('Recipe', () => {
  beforeEach(() => {
    recipe = new Recipe(recipeData[0], ingredientsData, recipeData);
  });
  it('should be an instance of Recipe', function() {
    expect(recipe).to.be.an.instanceof(Recipe);
  });

  it.skip('Should be able to calculate the cost of its ingredients', () => {
    expect(recipe.calculateCost()).to.equal(177.76);
  });
});
