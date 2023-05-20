import { expect } from 'chai';
import { ingredientTestData, recipeTestData, userTestData } from '../src/data/testData.js';
import { filterByTag, filterByName, determineIngredientNames, calculateCost, returnInstructions } from '../src/recipe.js';

describe('', () => {
  let recipe;
  let ingredientData;
  let instructions;

  beforeEach(() => {
    ingredientData = ['wheat flour', 'bicarbonate of soda', 'eggs', 'sucrose', 'instant vanilla pudding', 'brown sugar', 'salt', 'fine sea salt', 'semi sweet chips', 'unsalted butter', 'vanilla'];
  });
  
  describe('filterByTag', () => {
    it('Should return recipe filtered by given tag', () => {
      const result = filterByTag("antipasti", recipeTestData);
      expect(result).to.deep.equal([recipeTestData[0]]);
    });
  });

  describe('filterByName', () => {
    it('Should return recipe according to name passed in', () => {
      const result = filterByName("Loaded Chocolate Chip Pudding Cookie Cups", recipeTestData);
      expect(result).to.deep.equal([recipeTestData[0]]);
    });
  });
    
  describe('determineIngredientNames', () => {
    it('Should be a function', () => {
      expect(determineIngredientNames).to.be.a('function');
    });
    it('Should return an array of ingredient names', () => {
      const findIngredients = determineIngredientNames(recipeTestData, ingredientTestData, "Loaded Chocolate Chip Pudding Cookie Cups");
      expect(findIngredients).to.deep.equal(ingredientData);
    });
  });
    
  describe('calculateCost', () => {
    it('should be a function', () => {
      expect(calculateCost).to.be.a('function');
    });
    it(`should calculate the cost of a given recipe's ingredients`, () => {
      const totalCost = calculateCost(recipeTestData[0], ingredientTestData);
      expect(totalCost).to.equal(177.76);
    });
  });

  describe('returnInstructions', () => {
    it('Should be a function', () => {
      expect(returnInstructions).to.be.a('function');
    });
    it('Should return the instructions of searched recipe', () => {
      const instructionsTest = returnInstructions(recipeTestData[0]);
      expect(instructionsTest).to.deep.equal(recipeTestData[0].instructions);
    });
  });
});
