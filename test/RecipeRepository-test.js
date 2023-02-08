import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from '../src/classes/recipe';

describe('Recipe', () => {
  
  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('should create a new class instance of Recipe', () => {
   const recipe = new Recipe();
   expect(recipe).to.be.an.instanceOf(Recipe)
  });
})