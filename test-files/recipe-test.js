const chai = require("chai");
const expect = chai.expect;
let recipe;


const Recipes = ("../src/scripts/Recipes.js");

beforeEach(() => {
  // Will need to input arguments to match the data file
  recipe = new Recipes('name', 'id', 'image', 'Ingredients');
  })

describe ('Recipes', () => {

  it.skip('should be a function', () => {
    expect(Recipe).to.be.a('function');
  })

  it.skip('should be an instance of Ingredient', () => {
    expect(recipe).to.be.an.instanceof(Recipe);
  })

  it.skip('should have a unique id', () => {
    expect(recipe.id).to.equal(595736);
  })

  it.skip('should have the name of the Recipe', () => {
    expect(recipe.name).to.equal('Loaded Chocolate Chip Pudding Cookie Cups');
  })

  it.skip('should have a list of Ingredients', () => {
    expect(recipe.ingredients).to.equal('Object');
  })
});
