const chai = require('chai');
const expect = chai.expect;
const Ingredient = require('../src/ingredient');

describe('Ingredient', () => {
  let ingredient1;
  let ingredient2;

  beforeEach(() => {
    ingredient1 = new Ingredient(1, 'cheese', 350);
    ingredient2 = new Ingredient(2, 'wine', 1250);
  })

  it('should be a function', () => {
    expect(Ingredient).to.be.a('function');
  })

  it('should be an instance of Ingredient class', () => {
    expect(ingredient1).to.be.an.instanceof(Ingredient);
  })

  it('should have an id, name, estimated cost in cents', () => {
    expect(ingredient1.id).to.equal(1);
    expect(ingredient1.name).to.equal('cheese');
    expect(ingredient1.estimatedCostInCents).to.equal(350);
  })

  it('should estimate its cost in dollars and cents', () => {
    const ingredientCost1 = ingredient1.calculateIngredientCost();
    const ingredientCost2 = ingredient2.calculateIngredientCost();
    expect(ingredientCost1).to.equal(3.50);
    expect(ingredientCost2).to.equal(12.50);
  })
})