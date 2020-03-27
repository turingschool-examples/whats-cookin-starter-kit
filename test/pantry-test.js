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
    let recipe = recipeData[0];

    pantry.determineIfHasIngredients(recipe);

    expect(pantry.determineIfHasIngredients(recipe)).to.equal(false)
  });

  it('should give a list of needed ingredients', function() {
    let recipe = recipeData[0];

    pantry.getNeededIngredients(recipe)

    expect(pantry.getNeededIngredients(recipe)).to.deep.equal([
  { ingredient: 18372, amount: 0.5 },
  { ingredient: 1123, amount: 1 },
  { ingredient: 19335, amount: 0.5 },
  { ingredient: 19206, amount: 3 },
  { ingredient: 19334, amount: 0.5 },
  { ingredient: 1012047, amount: 24 },
  { ingredient: 10019903, amount: 2 },
  { ingredient: 1145, amount: 0.5 },
  { ingredient: 2050, amount: 0.5 }
])
  });

  it.skip('should remove used ingredients from pantry after recipe is made', function() {

  });
});
