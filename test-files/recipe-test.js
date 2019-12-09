const chai = require('chai');
const expect = chai.expect;
let recipe;

const Recipes = require('../src/scripts/Recipes');
const recipeData = require('../data/recipes');

beforeEach(() => {
    recipe = new Recipes(recipeData[0]);
  })

describe ('Recipes', () => {

  it('should be a function', () => {
    expect(Recipes).to.be.a('function');
  })

  it('should be an instance of a Recipe', () => {
    expect(recipe).to.be.an.instanceof(Recipes);
  })

  it('should have the name of the Recipe', () => {
    expect(recipe.name).to.equal(recipeData[0].name);
  })

  it('should have a unique id', () => {
    expect(recipe.id).to.equal(recipeData[0].id);
  })

  it('should have a unique image path', () => {
    expect(recipe.image).to.equal(recipeData[0].image);
  })

  it('should have instructions', () => {
    expect(recipe.instructions).to.deep.equal(recipeData[0].instructions)
  })

  it('should have a list of Ingrediets', () => {
    expect(recipe.ingredients).to.deep.equal(recipeData[0].ingredients);
  })

  it('should have a list of tags', () => {
    expect(recipe.tags).to.deep.equal(recipeData[0].tags);
  })
});
