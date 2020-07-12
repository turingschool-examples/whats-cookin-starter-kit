const chai = require('chai');
const expect = chai.expect;

const ingredientsData = require('../data/ingredients')
const Ingredients = require('../src/Ingredients');

describe('Ingredients', function() {
  beforeEach(function() {
    ingredient1 = new Ingredients(ingredientsData[0])
    ingredient2 = new Ingredients(ingredientsData[1])
  });

  it('should be a function', function() {
    expect(Ingredients).to.be.a('function')
  });

  it('should be an instance of Ingredients', function() {
    expect(ingredient1).to.be.an.instanceof(Ingredients)
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
