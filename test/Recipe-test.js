import { assert, expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';
import Recipe from '../src/classes/Recipe';
import recipeTestData from '../src/data/recipeTestData';

describe('Recipe1', () => {
  let recipe;

  beforeEach(() => {
    recipe = new Recipe(recipeTestData[0]);
    // console.log('line 10', recipe.details);
    // console.log('line 11', recipe.details.id)
  });

  it.skip('should be a function', () => {
    assert.isFunction(Recipe);
  });

  it.skip('should be able to create an instance of Recipe', () => {
    assert.instanceOf(recipe, Recipe);
  });

  it.skip('should contain its own ID number', () => {
    assert.equal(recipe.details.id, 595736);
  });

  it.skip('should contain the image path of a particular recipe preview', () => {
    assert.equal(recipe.details.image, recipeTestData[0].image);
  });

  it.skip('should contain the ingredients used to make each recipe', () => {
    assert.equal(recipe.details.ingredients, recipeTestData[0].ingredients);
  });

  it.skip('should contain the instructions to follow to create it.skip', () => {
    assert.equal(recipe.details.instructions, recipeTestData[0].instructions);
  });

  it.skip('should contain the name of each recipe', () => {
    assert.equal(recipe.details.name, recipeTestData[0].name);
  });

  it.skip('should contain the tags that enable each recipe to be filtered or searched', () => {
    assert.equal(recipe.details.tags, recipeTestData[0].tags);
  });

  it.skip('should be able to return a list of its ingredients', () => {
    assert.equal(recipe.nameIngredients(),  ["wheat flour", "bicarbonate of soda", "eggs", "sucrose","instant vanilla pudding", "brown sugar", "salt", "fine sea salt", "semi sweet chips", "unsalted butter", "vanilla"]);
  });

  it.skip('should be able to return the total cost of its own ingredients', () => {
    assert.equal(recipe.returnCost(), );
  });

  it.skip('should be able to return the directions to make it.skip', () => {
    assert.equal(recipe.giveDirections(), );
  });
});