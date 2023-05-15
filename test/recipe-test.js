import { expect } from 'chai';
import {ingredientTestData, recipeTestData, userTestData} from '../src/data/testData.js';
import {returnInstructions, determineIngredientNames} from '../src/recipe.js';

describe('returnInstructions', () => {
  it('Should be a function', () => {
    expect(returnInstructions).to.be.a('function');
  });
})

describe('ingredients', () => {
  it('Should be a function', () => {
    expect(determineIngredientNames).to.be.a('function');
  });
    it('Should be a function', () => {
      const ingredientsPuddin = ['wheat flour', 'bicarbonate of soda', 'eggs', 'sucrose', 'instant vanilla pudding', 'brown sugar', 'salt', 'fine sea salt', 'semi sweet chips', 'unsalted butter', 'vanilla'];
      const findIngredients = determineIngredientNames(recipeTestData, ingredientTestData, "Loaded Chocolate Chip Pudding Cookie Cups");
      expect(findIngredients).to.deep.equal(ingredientsPuddin);
  
  });
})
