const chai = require('chai');
const expect = chai.expect;

const ingredientsData = require('../data/ingredients')
const Ingredient = require('../src/Ingredient');

describe('Ingredient', function() {
  beforeEach(function() {
    ingredient1 = new Ingredient(ingredientsData[0])
    ingredient2 = new Ingredient(ingredientsData[1])
  });

  it('should be a function', function() {
    expect(Ingredient).to.be.a('function')
  });

  it('should be an instance of Ingredients', function() {
    expect(ingredient1).to.be.an.instanceof(Ingredient)
  });

  it('should have an id', function() {
    expect(ingredient1.id).to.equal(20081)
  });

  it('should be able to have a different id', function() {
    expect(ingredient2.id).to.equal(18372)
  });

  it('should have a name', function() {
    expect(ingredient1.name).to.equal("wheat flour")
  });

  it('should be able to have a different name', function() {
    expect(ingredient2.name).to.equal("bicarbonate of soda")
  });

  it('should have an estimated cost in cents', function() {
    expect(ingredient1.estimatedCostInCents).to.equal(142)
  });

  it('should be able to have a different estimated cost', function() {
    expect(ingredient2.estimatedCostInCents).to.equal(582)
  });
})
