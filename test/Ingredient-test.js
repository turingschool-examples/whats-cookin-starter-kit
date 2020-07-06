const expect = require('chai').expect;

const Ingredient = require('../src/Ingredient');

describe('Ingredient', function() {

  let ingredient;
  beforeEach(function() {
    ingredient = new Ingredient();
  });

  it('should be a function', function() {
    expect(Ingredient).to.be.a('function');
  });

  it('should be an instance of Ingredient', function() {
    expect(ingredient).to.be.an.instanceof(Ingredient);
  });

  // instance
  // intialize
  // has id / different id
  // has name / different name
  // has estimatedCost / different cost

});
