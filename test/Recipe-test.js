const expect = require('chai').expect;

const Recipe = require('../src/Recipe');

describe('Recipe', function() {

  let recipe, recipe2;
  beforeEach(function() {
    recipe1 = new Recipe();
    recipe2 = new Recipe();
  });

  it('should be a function', function() {
    expect(Recipe).to.be.a('function');
  });

  it('should be an instance of Recipe', function() {
    expect(recipe).to.be.an.instanceof(Recipe);
  });

});
