const expect = require('chai').expect;

const Ingredient = require('../src/Ingredient');

describe('Ingredient', function() {

  let ingredient;
  beforeEach(function() {
    ingredient = new Ingredient();
  });

  it('should be a function', function() {
    expect(Ingredient).to.be.a('function');

  });

});
