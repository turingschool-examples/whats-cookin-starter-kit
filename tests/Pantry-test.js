const chai = require('chai');
const expect = chai.expect;

const Recipe = require('../src/Recipe');
const Pantry = require('../src/Pantry');

let recipeDataTest = require('../tests/Recipe-test-data');
let ingredientsTestData = require('../tests/Ingredients-test-data');
let userTestData = require('../tests/user-test-data');

describe('Pantry', function() {
  let recipe1, pantry, user;

  beforeEach(function() {
    recipe1 = new Recipe(recipeDataTest[0]);
    user = userTestData;
    pantry = new Pantry(user.pantry);
  })

  it('should be a function', function () {
    expect(Pantry).to.be.a('function');
  })

  it('should instantiate pantry', function() {
    expect(pantry).to.be.an.instanceOf(Pantry);
  })

  it('should have all users ingredients', function() {
    expect(pantry.pantry).to.deep.equal(user.pantry)
  })

  it.only('should be able to check if it contains all ingridients needed for a meal', function() {
    pantry.validateMealToCook();
    // expect(pantry.pantry).to.include(recipe1.ingredients)
  })


})
