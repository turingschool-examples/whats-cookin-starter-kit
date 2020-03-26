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
