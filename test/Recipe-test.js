const chai = require('chai');
const expect = chai.expect;

const Recipe = require('../classes/Recipe');
const recipeData = require('../data/recipes');

describe('Recipe', () => {
  let recipe;

  beforeEach(() => {
    recipe = new Recipe(recipeData[0]);
  });

  it('should be a function', function() {
    expect(Recipe).to.be.a('function');
  });

  it('should have default name of recipeData[0].name', function() {
    expect(recipe.name).to.equal(recipeData[0].name);
  });

  it('should have default image of recipeData[0].image', function() {
    expect(recipe.image).to.equal(recipeData[0].image);
  });

  it('should have default ingredients of recipeData[0].ingredients', function() {
    expect(recipe.ingredients).to.equal(recipeData[0].ingredients);
  });

  it('should have default instructions of recipeData[0].instructions', function() {
    expect(recipe.instructions).to.equal(recipeData[0].instructions);
  });

  it('should have default tags of recipeData[0].tags', function() {
      expect(recipe.tags).to.equal(recipeData[0].tags);
  });
})
