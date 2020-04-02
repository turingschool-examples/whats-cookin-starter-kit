const chai = require('chai');
const expect = chai.expect;

const Pantry = require('../src/Pantry');
const Ingredient = require('../src/Ingredient');
const Recipe = require('../src/Recipe');
const User = require('../src/User');

let users = require('../data/users');
let ingredients = require('../data/ingredients');
let recipes = require('../data/recipes');

describe ('Pantry', function() {
  let recipe;
  let ingredient1;
  let ingredient2;

  beforeEach(function() {
    ingredient1 = new Ingredient(ingredients[0].id, ingredients[0].name, ingredients[0].estimatedCostInCents);
    ingredient2 = new Ingredient(ingredients[1].id, ingredients[1].name, ingredients[1].estimatedCostInCents);
    pantry = new Pantry([ingredient1, ingredient2])

  })

  it('should be an instance of pantry', function() {
    expect(pantry).to.be.an.instanceOf(Pantry);
  });

  it('should be able to have multiple ingredients', function() {
    expect(pantry.ingredients).to.be.an('array');
  });

  it('should have ingredients', function() {
    expect(pantry.ingredients).to.deep.equal([ingredient1, ingredient2]);
  });

  it('should return an ingredient\'s quantity', function() {
    expect(pantry.getQuantity).to.be.a('function');
    expect(pantry.getQuantity(ingredient1)).to.equal(10);
  });

  it('should be able to check pantry for ingredients', function() {
    expect(pantry.measureIngredients).to.be.a('function');
  });
})