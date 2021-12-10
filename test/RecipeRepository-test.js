import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from '../src/classes/Recipe';
import Ingredient from '../src/classes/Ingredient';
import sampleRecipeData from '../src/data/sampleRecipeData.js';
//import ingredientsData from '../data/ingredients.js';

describe('Cookbook', () => {
  let cookbook, recipeSample1, recipeSample2, ingredient;
  beforeEach(() => {
    cookbook = new RecipeRepository([recipeSample1, recipeSample2]);
    recipeSample1 = new Recipe(sampleRecipeData[0]);
    recipeSample2 = new Recipe(sampleRecipeData[1]);
  })
  it('should be an instance of Recipe Repository', () => {
    expect(cookbook).to.be.an.instanceof(RecipeRepository)
  })
  it('should take in recipes', () => {
    expect(cookbook.recipeList.length).to.equal(2)
  })
  it.skip('should be able to filter recipes with a tag', () => {
    cookbook.filteredRecipes = []
    cookbook.filterByTag('main course');
    expect(cookbook.filteredRecipes).to.equal([sampleRecipeData[1]])
  })
  // it('should be able to filter recipes with a tag', () => {
  //   cookbook.filterByTag('main course');
  //   expect(cookbook.filterByTag()).to.deep.equal(sampleRecipeData[1])
  // })
  // it('should be able to filter recipes based on name', () => {
  //   cookbook.searchByName('Maple Dijon Apple Cider Grilled Pork Chops');)
  //   // expect(cookbook.searchByName()).to.deep.equal(sampleRecipeData[1])
  //   expect(cookbook.matchingRecipes.length).to.equal(1)
  // })
  // it('should be able to filter recipes based on ingredients', () => {
  //   cookbook.searchByIngredient('wheat flour', cookbook.recipeList)
  //   expect(cookbook.matchingRecipes).to.equal(sampleRecipeData[0])
  // })
})
