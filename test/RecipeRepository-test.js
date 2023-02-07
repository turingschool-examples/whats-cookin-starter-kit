import { assert, expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import recipeTestData from '../src/data/recipeTestData';

describe('Recipe', () => {
  let recipes
  beforeEach(() => {
    recipes = new RecipeRepository(recipeTestData)
  });

  it('Should be a function', () => {
    assert.isFunction(RecipeRepository);
  });

  it('Should contain recipe data', () => {
    assert.equal(recipes.recipeList, recipeTestData);
  });

  it('Should get recipes based on a tags', () => {
    const findTag = recipes.filterByTag('snack')
    assert.deepEqual(findTag, [recipes.recipeList[0]]);
  });

  it.skip('Should get recipes based of ingredient', () => {
    assert.equal(recipes.filterByName(), 'someName');
  });

  it.skip('Should contain a filtered list of returned results', () => {
    assert.equal(recipes.filteredList, [{}]);
  });
})