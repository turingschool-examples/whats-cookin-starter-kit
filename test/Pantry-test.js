const expect = require('chai').expect;
const Pantry = require('../src/Pantry')
const Ingredient = require('../src/Ingredient');
const pantryIngredients = [
  {
    "id": 20081,
    "name": "wheat flour",
    "estimatedCostInCents": 142
  },
  {
    "id": 18372,
    "name": "bicarbonate of soda",
    "estimatedCostInCents": 582
  },
  {
    "id": 1123,
    "name": "eggs",
    "estimatedCostInCents": 472
  }
];

describe('Pantry', function() {


  let pantry;
  beforeEach(function() {
    pantry = new Pantry(pantryIngredients);
  });

  it('should be a function', function() {
    expect(Pantry).to.be.a('function');
  });

  it('should have ingredients', function() {
    expect(pantry.ingredients).to.equal(pantryIngredients);
  });


  // instance
  // intialize
  // pantry has a property that is an array to hold all ingredient objects - default to empty array first
  // method (name?) to determine if Pantry has enough ingredients to cook a given recipe; determine the amount of ingredients still needed to cook a recipe if  it does not have enough ingredients
  //icebox - remove ingred for given meal from pantry once meal has been made

});
