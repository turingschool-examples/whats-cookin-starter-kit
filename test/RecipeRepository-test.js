import { assert, expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';

describe('Recipe', () => {
  beforeEach(() => {
    let recipes = new RecipeRepository(recipeData)
  });

  it.skip('Should be a function', () => {
    assert.isFunction(RecipeRepository);
  });

  it.skip('Should contain recipe data', () => {
    assert.equal(recipes.recipeList, recipeData);
  });

  it.skip('Should get recipes based on a tag', () => {
    assert.equal(recipes.filterByTag(), 'eggs');
  });

  it.skip('Should get recipes based of ingredient', () => {
    assert.equal(recipes.filterByName(), 'someName');
  });

  it.skip('Should contain a filtered list of returned results', () => {
    assert.equal(recipes.filteredList, [{}]);
  });
})