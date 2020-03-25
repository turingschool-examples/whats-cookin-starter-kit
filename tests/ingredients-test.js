const chai = require('chai');
const expect = chai.expect;

const Ingredient = require('../src/Ingredients-class');

describe('Ingredient', function() {

  let ingredient;

  beforeEach(function() {
    ingredient = new Ingredient({
      "id": 20081,
      "name": "wheat flour",
      "estimatedCostInCents": 142
    });
});
    it('should be an instance of Ingredient', function() {
      expect(ingredient).to.be.an.instanceOf(Ingredient);
    });

    it('should have an id', function() {
      expect(ingredient.id).to.equal(20081);
    });

    it('should have a name', function() {
      expect(ingredient.name).to.equal("wheat flour");
    });

    it('should have an estimated cost in cents', function() {
      expect(ingredient.estimatedCost).to.equal(142)
    });
});

// it should have an id
// it should have a name
// it should have a quantity - just in the recipe?
    // which holds the amount and the meassuring unit
// it should have an estimated cost in cents
