const chai = require("chai");
const expect = chai.expect;
let recipe;


const Recipes = require("../src/scripts/Recipes");

beforeEach(() => {
  // Will need to input arguments to match the data file
  recipe = new Recipes('Loaded Chocolate Chip Pudding Cookie Cups', 595736,
'https://spoonacular.com/recipeImages/595736-556x370.jpg', [34, 28, 21]);
  })

describe ('Recipes', () => {

  it('should be a function', () => {
    expect(Recipes).to.be.a('function');
  })

  it('should be an instance of a Recipe', () => {
    expect(recipe).to.be.an.instanceof(Recipes);
  })

  it('should have the name of the Recipe', () => {
    expect(recipe.name).to.equal('Loaded Chocolate Chip Pudding Cookie Cups');
  })

  it('should have a unique id', () => {
    expect(recipe.id).to.equal(595736);
  })

  it('should have a unique image path', () => {
    expect(recipe.image).to.equal('https://spoonacular.com/recipeImages/595736-556x370.jpg');
  })

  it('should have a list of Ingrediets', () => {
    expect(recipe.ingredients).to.deep.equal([34, 28, 21]);
  })
});
