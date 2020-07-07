const expect = require('chai').expect;

const Ingredient = require('../src/Ingredient');

describe('Pantry', function() {

  let ingredient;
  beforeEach(function() {
    pantry = new Pantry();
  });

  it.skip('should be a function', function() {
    expect(Pantry).to.be.a('function');

  });

  // instance
  // intialize
  // pantry has a property that is an array to hold all ingredient objects - default to empty array first
  // method (name?) to determine if Pantry has enough ingredients to cook a given recipe; determine the amount of ingredients still needed to cook a recipe if  it does not have enough ingredients
  //icebox - remove ingred for given meal from pantry once meal has been made

});
