const chai = require('chai');
const expect = chai.expect;

const Recipe = require('../src/Recipe');
const Pantry = require('../src/Pantry');

let ingredientsData = require('../tests/Ingredients-test-data');
let recipeData = require('../tests/Recipe-test-data');

// const User = require('../src/User');

describe('Recipe', function() {
  let recipe, pantry;
  beforeEach(function() {
    recipe = new Recipe();
    pantry = new Pantry();
  })

  it('should be a function', function () {
    expect(Recipe).to.be.a('function');
  })

  it('should instantiate recipe', function() {
    expect(recipe).to.be.an.instanceOf(Recipe);
  })

  it('should have a name', function () {

    expect(recipeData[0].name).to.equal('Loaded Chocolate Chip Pudding Cookie Cups');
  })

  // it.skip('should have an id', function () {

  //   expect(recipe.id).to.be.a('function');
  // })

  // it.skip('should be a function', function () {

  //   expect(Recipe).to.be.a('function');
  // })
})