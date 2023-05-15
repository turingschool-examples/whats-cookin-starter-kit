import { expect } from 'chai';
import { returnDirections } from '../src/return-directions'
import { sampleIngredientsData, sampleRecipeData } from './sampleIngredients';

describe('returnInstructions', () => {
  it('should be a fuction', () => {
    expect(returnDirections).to.be.a('function');
  });

  it('should return directions needed for a given recipe', () => {
    expect(returnDirections(sampleRecipeData[0],sampleIngredientsData)).to.deep.equal(sampleRecipeData[0].instructions);
    expect(returnDirections(sampleRecipeData[1],sampleIngredientsData)).to.deep.equal(sampleRecipeData[1].instructions);
    expect(returnDirections(sampleRecipeData[2],sampleIngredientsData)).to.deep.equal(sampleRecipeData[2].instructions);
  });

  it('should return a message if no directions were found', () => {
    expect(returnDirections(undefined)).to.equal('Sorry no directions were found.');
  });
});
