const chai = require('chai');
const expect = chai.expect;
const Ingredient = require('../src/ingredient');

describe('Ingredient', () => {
  let ingredient;

  beforeEach(() => {
    ingredient = new Ingredient(1, 'cheese', 350);
  })

  it('should be a function', () => {
    expect(Ingredient).to.be.a('function');
  })

  it('should be an instance of Ingredient class', () => {
    expect(ingredient).to.be.an.instanceof(Ingredient);
  })

  it('should have an id, name, estimated cost in cents', () => {
    expect(ingredient.id).to.equal(1);
    expect(ingredient.name).to.equal('cheese');
    expect(ingredient.estimatedCostInCents).to.equal(350);
  })

  it('should estimate its cost in dollars and cents', () => {
    const calculatedCost = ingredient.calculateCost();
    expect(calculatedCost).to.equal(3.50);
  })
})