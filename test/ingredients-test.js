const chai = require('chai');
const expect = chai.expect;

const Ingredient = require('../src/ingredient.js')

describe('Ingredient', () => {
  let ingredient;

  beforeEach(() => {
    ingredient = new Ingredient(1123, 'eggs', 472);
  })

  it('should be an instance of Ingredient', () => {
    expect(ingredient).to.be.an.instanceOf(Ingredient)
  })

  it('should have an id property', () => {
    expect(ingredient.id).to.equal(1123)
  })

  it('should have a name property', () => {
    expect(ingredient.name).to.equal('eggs')
  })

  it('should have an estimated cost in cents', () => {
    expect(ingredient.estimatedCostInCents).to.equal(472)
  })

  it('should check to see if available', () => {
    expect(ingredient.available).to.equal(false)
  })
});
