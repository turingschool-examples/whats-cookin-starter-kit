const chai = require('chai');
const expect = chai.expect;
const Pantry = require('../src/pantry');
const userData = require('../data/users.js');
const recipeData = require('../data/recipes.js');
const ingredientsData = require('../data/ingredients.js');

describe('Pantry', () => {
  beforeEach(() => {
    pantry = new Pantry(userData[0], userData[0].pantry, recipeData, ingredientsData);
  });
  it('should be an instance of Pantry', function() {
    expect(pantry).to.be.an.instanceof(Pantry);
  });

  it('determine if user has enough ingredients', function() {
    pantry.checkIngredients(recipeData[0].ingredients)

  });

  it('should give a list of needed ingredients', function() {

  });

  it('should remove used ingredients from pantry after recipe is made', function() {

  });
});
