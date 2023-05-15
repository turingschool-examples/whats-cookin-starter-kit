import { expect } from 'chai';
import {ingredientTestData, recipeTestData, userTestData} from '../src/data/testData.js';
import {returnInstructions, filterByTag, filterByName, determineIngredientNames} from '../src/recipe.js';


describe('filterByTag', () => {
  it('Should return recipie filtered by given tag', () => {
    const result = filterByTag(recipeTestData,"antipasti")
    expect(result).to.deep.equal([recipeTestData[0]])
  })
})

describe('filterByName', () => {
  it('Should return recipe according to name passed in', () => {
    const result = filterByName(recipeTestData,"Loaded Chocolate Chip Pudding Cookie Cups")
    expect(result).to.deep.equal([recipeTestData[0]])
  })
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

describe('returnInstructions', () => {
  it('Should be a function', () => {
    expect(returnInstructions).to.be.a('function');
  });
  
  it('Should return the instructions of searched recipe', () => {
  
    const instructions = returnInstructions(recipeTestData[0])
    expect(instructions).to.deep.equal(recipeTestData[0].instructions)
  })
})



