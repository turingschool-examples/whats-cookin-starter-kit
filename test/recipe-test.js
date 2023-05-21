import { expect } from 'chai';
import { ingredientTestData, recipeTestData, userTestData } from '../src/data/testData.js';
import { filterByTag, filterByName, determineIngredientNames, calculateCost, returnInstructions, toggleRecipesToCook, recipesToCook } from '../src/recipe.js';

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
    it('Should return error message if no results are found', () => {
      const result = filterByTag("late night snack", recipeTestData);
      expect(result).to.equal("No recipes found");
    })
  });

  describe('filterByName', () => {
    it('Should return recipe according to name passed in', () => {
      const result = filterByName("Loaded Chocolate Chip Pudding Cookie Cups", recipeTestData);
      expect(result).to.deep.equal([recipeTestData[0]]);
    });
    it('Should return error message if no recipe is found', () => {
      const result = filterByName("Loaded Nacho Pizza Pudding Pops", recipeTestData);
      expect(result).to.equal("No recipes found");
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
    it('Should return error message if recipe does not exist', () => {
      const findIngredients = determineIngredientNames(recipeTestData, ingredientTestData, "Loaded Nacho Pizza Pudding Pops");
      expect(findIngredients).to.equal("No recipes found");
    })
  });
    
  describe('calculateCost', () => {
    it('should be a function', () => {
      expect(calculateCost).to.be.a('function');
    });
    it(`should calculate the cost of a given recipe's ingredients`, () => {
      const totalCost = calculateCost(recipeTestData[0], ingredientTestData);
      expect(totalCost).to.equal(177.76);
    });
    it(`should return error message if ingredient id does not exist`, () => {
      const totalCost = calculateCost({ingredients: [{id: -3}] }, ingredientTestData);
      expect(totalCost).to.equal("Ingredient not found");
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
    it('Should return error message if recipe does not exist', () => {
      const instructionsTest = returnInstructions(null);
      expect(instructionsTest).to.equal("Recipe not found");
    });
  });

  describe('toggleRecipesToCook', () => {
    it('Should be a function', () => {
      expect(toggleRecipesToCook).to.be.a('function')
    })
    it('Should add favorite recipes', () => {
      expect(recipesToCook).to.deep.equal([])
      toggleRecipesToCook(595736, recipeTestData)
      expect(recipesToCook).to.deep.equal([(recipeTestData[0])])
    })
    it('Should remove favorite recipes', () => {
      expect(recipesToCook).to.deep.equal([(recipeTestData[0])])
      toggleRecipesToCook(595736, recipeTestData)
      expect(recipesToCook).to.deep.equal([])
    });
    it('Should return an error if the ID doesn\'t exist in the data set', () => {
      var toggle = toggleRecipesToCook(66666, recipeTestData)
      expect(toggle).to.equal('Recipe not found')
    })
  });
});

