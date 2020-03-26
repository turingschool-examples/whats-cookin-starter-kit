const chai = require('chai');
const expect = chai.expect;
const Ingredient = require('../src/ingredient');
const testIngredients = require('../data/test-ingredients.js');

describe('Ingredient', () => {
  beforeEach(() => {
    ingredient = new Ingredient(testIngredients[0]);
  });

  it('should be an instance of Ingredient', function() {
    expect(ingredient).to.be.an.instanceof(Ingredient);
  });

  it('should have an id', function() {
    expect(ingredient.id).to.equal(20081);
  });

  it('should have a name', function() {
    expect(ingredient.name).to.equal('wheat flour');
  });

  it('should have an estimed cost', function() {
    expect(ingredient.estimatedCostInCents).to.equal(142);
  });
});
