import { expect } from 'chai';
import { returnInstructions } from '../src/return-directions'
import { sampleIngredientsData, sampleRecipeData } from './sampleIngredients';

describe('getIngredientsNames', () => {
  it('should be a fuction', () => {
    expect(returnInstructions).to.be.a('function');
  });
})