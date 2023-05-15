import { expect } from 'chai';
import {ingredientTestData, recipeTestData, userTestData} from '../src/data/testData.js';
import {returnInstructions, filterByTag} from '../src/recipe.js';

describe('returnInstructions', () => {
  it('Should be a function', () => {
    expect(returnInstructions).to.be.a('function');
  });
})

describe('filterByTag', () => {
  it('Should return recipie filtered by given tag', () => {
    const result = filterByTag(recipeTestData,"antipasti")
    expect(result).to.deep.equal([recipeTestData[0]])
  })
})