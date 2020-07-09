const chai = require('chai');
const expect = chai.expect;
const Cookbook = require('../src/Cookbook');
const Recipe = require('../src/Recipe');
const recipeInfo = require('../data/recipes').recipeData;

describe('Cookbook', () => {
  it('Should hold recipes', () => {
    const allRecipes = recipeInfo.map(object => {
      return new Recipe(object);
    });

    const cookbook = new Cookbook(allRecipes);

    expect(cookbook.allRecipes).to.equal(allRecipes);
  });
    
});