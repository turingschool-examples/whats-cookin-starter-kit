import { expect } from 'chai';
import { RecipeRepository } from '../src/scripts';

describe('Recipe', () => {
  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });
})