const chai = require('chai');
const expect = chai.expect;

const Recipes = require('../src/recipes');
const recipeData = require('../data/recipes')

let recipe;

describe ('Recipes', function() {

  beforeEach(() => {
    user = new Recipe(recipe[0]);
  });

  it('should be an instance of a Recipe', function() {
    expect(recipe).to.be.an.instanceOf(Recipe);
  });

  it('should have a name', function () {

  });

  it('should have an id', function() {

  });

  it('should have a unique image', function() {

  });

  it('should have instructions', function() {

  });

  it('should have a list of ingredients', function() {

  });

  it('should have tags', function() {

  });


});
