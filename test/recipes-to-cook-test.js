import { expect } from 'chai';
import { recipesToCook } from '../src/recipes-to-cook'
import { sampleIngredientsData, sampleRecipeData } from './sampleIngredients';


describe('recipesToCook', () => {
  it('should be a fuction', () => {
    expect(recipesToCook).to.be.a('function');
  });

});