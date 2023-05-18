import { expect } from 'chai';
import { ingredientTestData, recipeTestData, userTestData } from '../src/data/testData.js';
import { filterByTag, filterByName, determineIngredientNames, calculateCost, returnInstructions } from '../src/recipe.js';

describe('', () => {
  let recipe;
  let ingredientData;
  let instructions;

  beforeEach(() => {
    ingredientData = ['Wheat flour', 'Bicarbonate of soda', 'Eggs', 'Sucrose', 'Instant vanilla pudding', 'Brown sugar', 'Salt', 'Fine sea salt', 'Semi sweet chips', 'Unsalted butter', 'Vanilla'];
  });
  
  describe('filterByTag', () => {
    it('Should return recipe filtered by given tag', () => {
      const result = filterByTag(recipeTestData, "antipasti");
      expect(result).to.deep.equal([recipeTestData[0]]);
    });
  });

  describe('filterByName', () => {
    it('Should return recipe according to name passed in', () => {
      const result = filterByName(recipeTestData, "Loaded Chocolate Chip Pudding Cookie Cups");
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
      const totalCost = calculateCost(recipe);
      expect(totalCost).to.equal(177.76);
    });
  });

  describe('returnInstructions', () => {
    it('Should be a function', () => {
      expect(returnInstructions).to.be.a('function');
    });
    it('Should return the instructions of searched recipe', () => {
      const instructionsTest = returnInstructions(recipeTestData[0]);
      expect(instructionsTest).to.deep.equal(instructions);
    });
  });
  });
