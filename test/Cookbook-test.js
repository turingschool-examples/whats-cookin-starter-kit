const chai = require('chai');
const expect = chai.expect;
const Cookbook = require('../src/Cookbook');
const Recipe = require('../src/Recipe');
const recipeInfo = require('../data/recipes').recipeData;

describe('Cookbook', () => {
  it('Should hold recipes', () => {
    const allRecipes = recipeInfo.map(item => {
      return new Recipe(item);
    });
    const cookbook = new Cookbook(allRecipes);

    expect(cookbook.allRecipes).to.equal(allRecipes);
  });

  it('Should be able to filter all recipes by tag', () => {
    const allRecipes = recipeInfo.map(item => {
      return new Recipe(item);
    });
    const cookbook = new Cookbook(allRecipes);

    expect(cookbook.filterAllRecipesByTag('sauce')).to.deep.equal([allRecipes[2]]);
    
  });
    
  it('Should be able to filter all recipes by ingredient', () => {
    const allRecipes = recipeInfo.map(item => {
      return new Recipe(item);
    });
    const cookbook = new Cookbook(allRecipes);

    expect(cookbook.filterAllRecipesByIngredient("pudding")).to.deep.equal([allRecipes[0], allRecipes[33]]);
    
  });

});
