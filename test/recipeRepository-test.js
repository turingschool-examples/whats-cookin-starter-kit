const chai = require('chai');
const expect = chai.expect;
const recipes = require('../data/recipes');
const allRecipes = recipes.recipeData;
const RecipeRepository = require('../src/recipeRepository')

describe('RecipeRepository', function() {
  it('should be a function', function() {
    const recipeRepository = new RecipeRepository(allRecipes);
    expect(RecipeRepository).to.be.a('function');
  });

  it('should be an instance of Recipe', function() {
    const recipeRepository = new RecipeRepository(allRecipes);
    expect(recipeRepository).to.be.an.instanceOf(RecipeRepository);
  });

  it('should return recipes by tag', function() {
    const recipeRepository = new RecipeRepository(allRecipes);
    console.log(recipeRepository.recipes[0].tags)
    console.log(recipeRepository.filterRecipeByTag('snack').length)
    expect(recipeRepository.filterRecipeByTag(snack)).to.equal('')
  })
});
