import { expect } from 'chai';
import { findRecipeIngredients } from '../src/recipes';

describe('Recipe', () => {
  it('Should be a function', () => {
    expect(findRecipeIngredients).to.be.a('function');
  });
})