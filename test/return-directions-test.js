import { expect } from 'chai';
import { returnDirections } from '../src/return-directions'
import { sampleIngredientsData, sampleRecipeData } from './sampleIngredients';

describe('returnInstructions', () => {
  it('should be a fuction', () => {
    expect(returnDirections).to.be.a('function');
  });
})

  it('should return directions needed for a given recipe', () => {
    const directions = returnDirections(sampleRecipeData[0], sampleIngredientsData)
    expect(directions).to.deep.equal(sampleRecipeData[0].instructions);
  });

