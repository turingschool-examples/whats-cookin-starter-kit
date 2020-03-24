const chai = require('chai');
const expect = chai.expect;

const Recipe = require('../src/Recipe');
const Pantry = require('../src/Pantry');

let recipeDataTest = require('../tests/Recipe-test-data');
let ingredientsData = require('../tests/Ingredients-test-data');

// const User = require('../src/User');

describe('Recipe', function() {
  let recipe1, pantry;
  beforeEach(function() {
    recipe1 = new Recipe(recipeDataTest[0]);
    pantry = new Pantry(ingredientsData);
  })

  it('should be a function', function () {
    expect(Recipe).to.be.a('function');
  })

  it('should instantiate recipe', function() {
    expect(recipe1).to.be.an.instanceOf(Recipe);
  })

  it('should have a name', function() {
    expect(recipe1.name).to.equal('Loaded Chocolate Chip Pudding Cookie Cups')
  })

  it('should have an id', function() {
    expect(recipe1.id).to.equal(595736);
  })

  it('should have an image', function() {
    expect(recipe1.image).to.equal('https://spoonacular.com/recipeImages/595736-556x370.jpg');
  })

  it('should have an array of ingredients', function() {
    console.log(pantry);
    
    expect(recipe1.ingredients).to.deep.equal(pantry[0].ingredients)
  })

  
})