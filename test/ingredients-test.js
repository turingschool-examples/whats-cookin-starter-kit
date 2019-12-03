const chai = require('chai');
const expect = chai.expect;

const Ingredient = require('../src/ingredients.js');

describe('Ingredients', function() {

  beforeEach(() => {
      ingredient = new Ingredient(20081, 'wheat flour', 142);
    });

    it('should be a function', function() {
      expect(Ingredient).to.be.a('function');
    });

    it('should instantiate a new ingredient', function() {
      expect(ingredient).to.be.an.instanceof(Ingredient);
    });

    describe('stored data', function() {
      it('should know the correct ID number', function() {
        expect(ingredient.id).to.equal(20081);
      });

      it('should know the correct name', function() {
        expect(ingredient.name).to.equal('wheat flour');
      });

      it('should know the correct cost in cents', function() {
        expect(ingredient.estimatedCostInCents).to.equal(142);
      });

    });

});
