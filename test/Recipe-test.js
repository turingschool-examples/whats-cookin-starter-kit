const chai = require('chai');
const expect = chai.expect;

const Recipe = require('../src/Recipe')

describe('Recipe', function() {
  it('should be a function', function() {
    const recipe = new Recipe;
    expect(Recipe).to.be.a('function');
  });

  it('should be an instance of Recipe', function() {
    const recipe = new Recipe;
    expect(recipe).to.be.an.instanceOf(Recipe);
  });

  it('should list names of ingredients needed', function() {
    const recipe = new Recipe;
    expect(recipe.returnIngredients).to.equal()
  })
})
