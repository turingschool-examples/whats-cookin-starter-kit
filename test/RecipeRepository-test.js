import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import sampleIngredientsData from '../src/data/sample-data';
import sampleUsersData from '../src/data/sample-data';
import samplesRecipeData from '../src/data/sample-data';



describe('Recipe', () => {
  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });
})
