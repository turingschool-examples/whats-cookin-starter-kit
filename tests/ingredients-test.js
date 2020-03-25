const chai = require('chai');
const expect = chai.expect;

const Ingredient = require('../src/Ingredients-class');

describe('Ingredient', function() {

  let ingredient;

  beforeEach(function() {
    ingredient1 = new Ingredient(20081, "wheat flour", 142);
});
    it('should be an instance of Ingredient', function() {
      expect(ingredient1).to.be.an.instanceOf(Ingredient);
    });

    it('should have an id', function() {
      expect(ingredient1.id).to.equal(20081);
    });

    it('should have a name', function() {
      expect(ingredient1.name).to.equal("wheat flour");
    });

    it('should have an estimated cost in cents', function() {
      expect(ingredient1.estimatedCostInCents).to.equal(142)
    });

});
