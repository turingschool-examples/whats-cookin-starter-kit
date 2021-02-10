const chai = require('chai');
const expect = chai.expect;
const recipes = require('./Data');
const allRecipes = recipes.dummyRecipeData;
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
    const recipeRepository2 = new RecipeRepository(allRecipes)
    const recipeRepository3 = new RecipeRepository(allRecipes)

    expect(recipeRepository.filterRecipeByTag('snack')).to.deep.equal([allRecipes[0]])
    expect(recipeRepository.filterRecipeByTag('snack', 'side dish')).to.deep.equal([allRecipes[0], allRecipes[1], allRecipes[3]])
    expect(recipeRepository.filterRecipeByTag('snack', 'side dish', 'sauce')).to.deep.equal([allRecipes[0], allRecipes[1], allRecipes[2], allRecipes[3]])
  })

  it('should return recipe by name', function() {
    const recipeRepository = new RecipeRepository(allRecipes);
    console.log(recipeRepository.filterRecipeByIngredients(10010062))
    expect(recipeRepository.filterRecipeByName("Dirty Steve's Original Wing Sauce")).to.deep.equal([allRecipes[2]])
  })
});
