import { expect } from 'chai';
import { calculateRecipePrice  } from '../src/calculate-recipe-price'
import { sampleIngredientsData, sampleRecipeData } from './sampleIngredients';

describe('calculateRecipePrice', () => {
  it('should be a fuction', () => {
    expect(calculateRecipePrice).to.be.a('function');
  });

  it('should determine the total price of a given recipe', () => {
    expect(calculateRecipePrice(sampleRecipeData[1], sampleIngredientsData)).to.equal('$78.75');
    expect(calculateRecipePrice(sampleRecipeData[2], sampleIngredientsData)).to.equal('$510.92');
  });

  it('should return a message if no recipe is chosen', () => {
    expect(calculateRecipePrice(sampleRecipeData[10], sampleIngredientsData)).to.equal('Sorry this is not a recipe!');
  })
})