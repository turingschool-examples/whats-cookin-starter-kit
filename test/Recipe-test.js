import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
const data = require('../src/data/recipes.js');
const data1 = require('../src/data/ingredients.js');
const testRecipeData = data.testRecipeData;
const testIngData = data1.testIngredients;

describe('Recipe', () => {

  let recipe;
  let recipe2;
  let recipe3;

  beforeEach(() => {
    recipe = new Recipe(testRecipeData[0], testIngData);
    recipe2 = new Recipe(testRecipeData[1], testIngData);
    recipe3 = new Recipe(testRecipeData[2], testIngData);
  });

  it('should be a function', () => {
    expect(Recipe).to.be.a('function');
  });

  it('should be a new instance of Recipe', () => {
    expect(recipe).to.be.an.instanceOf(Recipe);
  });

  it('should hold a recipe ID', () => {
    expect(recipe2.id).to.equal(testRecipeData[1].id);
  });

  it('should hold a recipe image', () => {
    expect(recipe.image).to.equal(testRecipeData[0].image);
  });

  it('should hold recipe ingredients', () => {
    expect(recipe2.ingredients).to.deep.equal(testRecipeData[1].ingredients);
  });

  it('should hold recipe instructions', () => {
    expect(recipe.instructions).to.deep.equal(testRecipeData[0].instructions);
  });

  it('should hold recipe names', () => {
    expect(recipe3.names).to.equal(testRecipeData[2].names);
  });

  it('should hold recipe tags', () => {
    expect(recipe2.tags).to.equal(testRecipeData[1].tags);
  });

  it('should have a method to get ingredient names', () => {
    expect(recipe.getIngredientNames()).to.deep.equal(['wheat flour', 'bicarbonate of soda', 'eggs'])
  });
});
