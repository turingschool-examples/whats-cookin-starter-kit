const chai = require('chai');
const expect = chai.expect;
const userData = '../data/users.js';

const Ingredient = require('../src/Ingredient');

describe('Ingredient', function() {

  let user1, ingredient1;

  beforeEach(function() {
    // user1 = new User({name: "Saige O'Kon", id: 1, pantry: [{ingredient: 11477, amount: 4}, {ingredient: 11297, amount: 4}]});
    ingredient1 = new Ingredient({id: 20081,
    name: "wheat flour",
    estimatedCostInCents: 142});
  });

  it('should be a function', function() {
    expect(Ingredient).to.be.a('function');
  });

  it('should be an instance of the Ingredient class', function() {
    expect(ingredient1).to.be.an.instanceof(Ingredient);;
  });

});
