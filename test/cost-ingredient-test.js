import { expect } from 'chai';
import { calculatRecipeCost } from '../src/recipes.js'
import { sampleIngredientsData } from '../src/data/sample-ingredients.js';
import { sampleRecipeData } from '../src/data/sample-recipes.js';

describe('calculate cost of ingredients', function() {
  it('should be a function', function() {
    expect(calculatRecipeCost).to.be.a('function');
  });

  // it('should calculate the cost of a given recipe', function() {
    // const costOfCookieCup = calculatRecipeCost(595736)
  // })
})