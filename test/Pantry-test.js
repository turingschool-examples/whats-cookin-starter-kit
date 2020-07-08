const chai = require('chai');
const expect = chai.expect;

const Pantry = require('../src/Pantry');

describe('Pantry', function() {
  let ingredient1, ingredient2, ingredient3, ingredients, pantry;
  before(function() {
    ingredient1 = {ingredient: 1, amount: 10};
    ingredient2 = {ingredient: 2, amount: 6};
    ingredient3 = {ingredient: 3, amount: 3};
    ingredients = [ingredient1, ingredient2, ingredient3];
    pantry = new Pantry(ingredients);
  })

  it('should be a function', function() {
    expect(Pantry).to.be.a('function');
  });

  it('should be an instance of Pantry', function() {
    expect(pantry).to.be.an.instanceof(Pantry);
  });
})