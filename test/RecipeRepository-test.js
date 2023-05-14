import { expect } from 'chai';
import { RecipeRepository } from '../src/scripts';
import { sampleIngredientsData, sampleRecipeData } from './sampleIngredients';


describe('Recipe', () => {
  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });
})