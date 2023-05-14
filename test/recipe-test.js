import { expect } from 'chai';
import {ingredientTestData, recipeTestData, userTestData} from '../src/data/testData.js';
import {returnInstructions} from '../src/recipe.js';

describe('returnInstructions', () => {
  it('Should be a function', () => {
    expect(returnInstructions).to.be.a('function');
  });
})