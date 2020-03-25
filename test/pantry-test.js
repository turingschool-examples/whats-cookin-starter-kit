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

  it('should check to see if the user has enough ingredients for a recipe', function() {
    pantry.checkIngredients(recipeData[0].ingredients)


  })
});
