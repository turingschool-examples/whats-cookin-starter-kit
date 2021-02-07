const chai = require('chai');
const expect = chai.expect;

const Recipe = require('../src/recipe.js');

const recipeData = require('../data/recipes.js');

let recipe = recipeData[0];

describe('Recipe', function() {

  it.skip('should be a function', function() {
    const recipe = new Recipe();
    expect(recipe).to.be.a('function');
  });

  it.skip('should be an instance of Recipe', function() {
    const recipe = new Recipe();
    expect(recipe).to.be.an.instanceOf(Recipe);
  });

  it.skip('should initialize with an ID', function () {
    const recipe = new Recipe();
    expect(recipe.id).to.eq(123456);
  });

  it.skip('should initialize with an Image', function () {
    const recipe = new Recipe();
    expect(recipe.image).to.eq("image");
  });

  it.skip('should initialize with an array of ingredients', function () {
    const recipe = new Recipe();
    expect(recipe.ingredients).to.deep.eq([]);
  });

  it.skip('should initialize with an array of instructions', function () {
    const recipe = new Recipe();
    expect(recipe.instructions).to.eq([]);
  });

  it.skip('should have a name', function () {
    const recipe = new Recipe();
    expect(recipe.name).to.eq("")
  });

  it.skip('should initialize with an array of tags', function () {
    const recipe = new Recipe();
    expect(recipe.tags).to.eq([])
  });

});