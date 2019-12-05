const chai = require('chai');
const expect = chai.expect;

const Ingredients = require('../src/ingredients');
const ingredientData = require('../data/ingredients')

let ingredient;

describe ('Ingredients', function() {

  beforeEach(() => {
    user = new Ingredient(ingredient[0]);
  });

  it('should be an instance of a Ingredient', function() {
    expect(user).to.be.an.instanceOf(Ingredient);
  });

  it('should have an id', function() {

  });

  it('should have a name', function() {

  });

  it('should have a price', function() {

  });

  it('should show the price in dollars', function() {
    
  });

});
