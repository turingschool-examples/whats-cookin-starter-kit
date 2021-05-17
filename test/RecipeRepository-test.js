import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from "../src/Recipe";

describe('RecipeRepository', () => {
  let recipeRepo
  beforeEach(() => {
    const recipeRepo = new RecipeRepository(// how to pass an array from other module??)
  });
  it('should be a function', () => {

    expect(RecipeRepository).to.be.a('function');
  });
  it('should be an instances of RecipeRepository' () => {

    expect(recipeRepo).to.be.an.instanceof(RecipeRepository);
  });
  it('should store multiple recipes' () => {

    expect(recipeRepo.recipes).to.be.array();
  });
});
