import { assert, expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import recipeTestData from '../src/data/recipeTestData';

describe('Recipe', () => {
  let recipes
  beforeEach(() => {
    recipes = new RecipeRepository(recipeTestData);
  });

  it('should be a function', () => {
    assert.isFunction(RecipeRepository);
  });

  it('should contain recipe data', () => {
    assert.equal(recipes.recipeList, recipeTestData);
  });

  it('should get recipes based on a tag input', () => {
    const findTag = recipes.filterByTag('snack');
    const tagNotFound = recipes.filterByTag('False Tag');

    assert.deepEqual(findTag, [recipes.recipeList[0]]);
    assert.notEqual(tagNotFound, 'Recipe Not Found');
  });

  it('should get recipes based of ingredient input', () => {
    const findName = recipes.filterByName("Loaded Chocolate Chip Pudding Cookie Cups");
    const foodNotFound = recipes.filterByName('False Name');

    assert.deepEqual(findName, [recipes.recipeList[0]]);
    assert.notEqual(foodNotFound, 'Recipe Not Found');
  });

  it('should contain a filtered list of returned results', () => {
    assert.equal(recipes.filteredList, null);
    recipes.filterByTag('starter');
    assert.include(recipes.filteredList, recipes.recipeList[0]);
    
    recipes.filterByTag('False Tag');
    assert.notInclude(recipes.filteredList, 'Recipe Not Found')
  });
});