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

  it('should be able to have a different id, name, estimated cost in cents', () => {
    expect(ingredient2.id).to.equal(2);
    expect(ingredient2.name).to.equal('wine');
    expect(ingredient2.estimatedCostInCents).to.equal(1250);
  })

})