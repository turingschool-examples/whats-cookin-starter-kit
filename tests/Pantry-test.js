const chai = require('chai');
const expect = chai.expect;

const Recipe = require('../src/recipe');
const Pantry = require('../src/pantry');
const User = require('../src/user');

let recipeDataTest = require('../tests/Recipe-test-data');
let ingredientsTestData = require('../tests/Ingredients-test-data');
let userTestData = require('../tests/user-test-data');

describe('Pantry', function() {
  let recipe1, pantry, user;

  beforeEach(function() {
    recipe1 = new Recipe(recipeDataTest[0]);
    user = new User(userTestData)
    pantry = user.pantry
  })

  it('should be a function', function () {
    expect(Pantry).to.be.a('function');
  })

  it('should instantiate pantry', function() {
    expect(user.pantry).to.be.an.instanceOf(Pantry);
  })

  it('should have all users ingredients', function() {
    expect(user.pantry).to.equal(pantry)
  })

  it('should be able to check if it contains all ingridients needed for a meal', function() {
    pantry.validateMealToCook();


  })


})
