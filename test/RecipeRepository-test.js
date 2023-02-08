import { assert, expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import recipeTestData from '../src/data/recipeTestData';

describe('Recipe', () => {
  let recipes
  beforeEach(() => {
    recipes = new RecipeRepository(recipeTestData);
  });

  it('Should be a function', () => {
    assert.isFunction(RecipeRepository);
  });

  it('Should contain recipe data', () => {
    assert.equal(recipes.recipeList, recipeTestData);
  });

  it('Should get recipes based on a tags', () => {
    const findTag = recipes.filterByTag('snack');
    assert.deepEqual(findTag, [recipes.recipeList[0]]);
    const tagNotFound = recipes.filterByTag('Tag Not Found');
    assert.notEqual(tagNotFound, 'Recipe Not Found')
  });

  it.skip('Should get recipes based of ingredient', () => {
    const findName = recipes.filterByName("Loaded Chocolate Chip Pudding Cookie Cups");
    assert.deepEqual(findName, [recipes.recipeList[0]]);
  });

  it('Should contain a filtered list of returned results', () => {
    assert.equal(recipes.filteredList);
    recipes.filterByTag('starter');
    assert.include(recipes.filteredList, recipes.recipeList[0]);
    recipes.filterByTag('Food Not Found');
    assert.notInclude(recipes.filteredList, 'Recipe Not Found')
  });
});