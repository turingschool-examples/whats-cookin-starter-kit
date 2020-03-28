const chai = require('chai');
const expect = chai.expect;

const Recipe = require('../src/recipe');
const Pantry = require('../src/pantry');
const User = require('../src/user');

let recipeDataTest = require('../tests/Recipe-test-data');
let userTestData = require('../tests/user-test-data');
let ingredientsData = require('../data/ingredients.js')


describe('Pantry', function() {
  let recipe1, pantry, user;

  beforeEach(function() {
    recipe1 = new Recipe(recipeDataTest[0]);
    user = new User(userTestData)
    pantry = user.pantry
  })

  it.skip('should be a function', function () {
    expect(Pantry).to.be.a('function');
  })

  it.skip('should instantiate pantry', function() {
    expect(user.pantry).to.be.an.instanceOf(Pantry);
  })

  it.skip('should have all users ingredients', function() {
    expect(user.pantry).to.equal(pantry)
  })

  it.skip('it should be able to gain the properties of ingredients', function() {
    pantry.getIngredientDetails(ingredientsData);
    expect(pantry.pantry[0]).to.have.property('name')
  })


})
