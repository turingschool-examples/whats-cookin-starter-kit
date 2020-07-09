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

    expect(cookbook.filterAllRecipesByTag('sauce')[0]).to.equal(allRecipes[2]);
    
  });
    
});
