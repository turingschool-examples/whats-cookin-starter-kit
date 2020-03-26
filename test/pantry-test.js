const chai = require('chai');
const expect = chai.expect;
const Pantry = require('../src/pantry');
const userData = require('../data/test-user.js');
const recipeData = require('../data/test-recipes.js');
const ingredientsData = require('../data/test-ingredients.js');

describe('Pantry', () => {
  beforeEach(() => {
    pantry = new Pantry(userData, userData.pantry, recipeData, ingredientsData);
  });
  it('should be an instance of Pantry', function() {
    expect(pantry).to.be.an.instanceof(Pantry);
  });

  it('determine if user has enough ingredients', function() {

  });

  it('should give a list of needed ingredients', function() {

  });

  it('should remove used ingredients from pantry after recipe is made', function() {

  });
});
