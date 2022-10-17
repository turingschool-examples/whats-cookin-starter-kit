import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import  from '../src/data/recipes';

describe('Recipe', () => {
  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('Should have a parameter to take in recipe data', () => {
    expect(RecipeRepository.allRecipes).to.equal(recipies);
  });

  it('Should have a method that creates a filtered list of recipies based on a tag', () => {
    expect().to.equal();
  });

  it('Should have a method that creates a filtered list of recipies based on its name', () => {
    expect().to.equal();
  });

});