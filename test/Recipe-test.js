const chai = require('chai');
const expect = chai.expect;
const recipes = require('./Data');
const allRecipes = recipes.dummyRecipeData;
const data = require('../test/Data')
dummyIngredientData = data.dummyIngredientData
const Recipe = require('../src/Recipe')

describe('Recipe', function() {
  it('should be a function', function() {
    const recipe = new Recipe(allRecipes[0]);
    expect(Recipe).to.be.a('function');
  });

  it('should be an instance of Recipe', function() {
    const recipe = new Recipe(allRecipes[0]);
    expect(recipe).to.be.an.instanceOf(Recipe);
  });

  it('should list names of ingredients needed', function() {
    const recipe = new Recipe(allRecipes[0]);
    expect(recipe.returnIngredients()).to.deep.equal(["wheat flour"
      ,  "bicarbonate of soda"
      ,  "eggs"
      ,  "sucrose"
      ,  "instant vanilla pudding"
      ,  "brown sugar"
      ,  "salt"
      ,  "fine sea salt"
      ,  "semi sweet chips"
      ,  "unsalted butter"
      ,  "vanilla"

])
});

it('should return total cost converted to dollars', function() {
  const recipe = new Recipe(allRecipes[0]);
  expect(recipe.returnTotalCost()).to.equal( 177.76)
});

it('should return list of instructions', function() {
  const recipe = new Recipe(allRecipes[0]);
  expect(recipe.returnInstructions()).to.equal(allRecipes[0].instructions);
})

})
