import { assert, expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';
import Recipe from '../src/classes/Recipe';
import recipeTestData from '../src/data/recipeTestData';

describe('Recipe1', () => {
  let recipe1, recipe2;

  beforeEach(() => {
    recipe1 = new Recipe(recipeTestData[0]);
    recipe2 = new Recipe(recipeTestData[1]);
  });

  it('should be a function', () => {
    assert.isFunction(Recipe);
  });

  it('should be able to create an instance of Recipe', () => {
    assert.instanceOf(recipe1, Recipe);
  });

  it('should contain its own ID number', () => {
    assert.equal(recipe1.id, 595736);
  });

  it('should contain the image path of a particular recipe preview', () =>{
    assert.equal(recipe1.image, recipeTestData[0].image);
  });

  it('should contain the ingredients used to make each recipe', () => {
    assert.equal(recipe1.ingredients, recipeTestData[0].ingredients);
  });

  it('should contain the instructions to follow to create it', () => {
    assert.equal(recipe1.instructions, recipeTestData[0].instructions);
  });

  it('should have a name', () => {
    assert.equal(recipe1.name, recipeTestData[0].name);
  });

  it('should contain recipe tags', () => {
    assert.equal(recipe1.tags, recipeTestData[0].tags)
  });

  it('should be able to return a list of its ingredients', () => {
    assert.equal(recipe1.ingredients, recipeTestData[0].ingredients);
    recipe1.retrieveIngredientInfo();
    assert.notEqual(recipe1.ingredients, recipeTestData[0].ingredients);
  });

  it('should be able to return the total cost of its own ingredients', () => {
    recipe1.retrieveIngredientInfo();
    recipe1.returnCostOfIngredients();
    assert.equal(recipe1.sum, 177.76);

    recipe2.retrieveIngredientInfo();
    recipe2.returnCostOfIngredients();
    assert.equal(recipe2.sum, 272.97);
  });

  it.skip('should be able to return the directions to make it', () => {

  });
});