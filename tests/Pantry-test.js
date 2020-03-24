const chai = require('chai');
const expect = chai.expect;

const Recipe = require('../src/Recipe');
const Pantry = require('../src/Pantry');
const User = require('../src/User');

let recipeDataTest = require('../tests/Recipe-test-data');
let ingredientsData = require('../tests/Ingredients-test-data');

describe('Pantry', function() {
  let recipe1, pantry, user;
  beforeEach(function() {
    recipe1 = new Recipe(recipeDataTest[0]);
    pantry = new Pantry(ingredientsData);
    user = new User(pantry)
  })

  it('should be a function', function () {
    expect(Pantry).to.be.a('function');
  })

  it('should instantiate pantry', function() {
    expect(pantry).to.be.an.instanceOf(Pantry);
  })

  it('should have all users ingredients', function() {
    expect(pantry).to.deep.equal(user.pantry)
  })


})
