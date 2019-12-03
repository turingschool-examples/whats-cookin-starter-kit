const chai = require('chai');
const expect = chai.expect;
const Recipes = require('../src/recipes-class');

describe('recipes', function() {

  it('should be a function', function() {
    expect(Recipes).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Recipes();
    expect(turn).to.be.an.instanceof(Recipes);
  });
});
