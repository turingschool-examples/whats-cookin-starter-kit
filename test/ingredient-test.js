const chai = require('chai');
const expect = chai.expect;

const Ingredient = require('../src/Ingredient');
const Pantry = require('../src/Pantry');
const Recipe = require('../src/Recipe');
const User = require('../src/User');

describe ('Ingredient', function() {
  
  let ingredient;

  beforeEach(function() {

    ingredient = new Ingredient(20081, 'wheat flour', 142) 

  })

  it('should be instantiated', function() {
    expect(ingredient).to.be.an.instanceOf(Ingredient);
  });

  it('should have a name', function() {
    expect(ingredient.name).to.equal('wheat flour');
  });

  it('should have an id number', function() {
    expect(ingredient.id).to.equal(20081);
  });

  it('should have a cost', function() {
    expect(ingredient.estimatedCostInCents).to.equal(142);
  });
})