import { expect } from 'chai';

const { recipeTestData, ingredientsTestData } = require('../src/data/testData');


const { recipeData } = require('../src/recipes');


const { filterByTag, searchRecipes, getRecipeInstructions, calculateCost, getIngredientNames } = require("../src/recipes");


//for each //=> if we are using the same data set for all tests, we can use before each to set up the data
describe("getRecipeInstructions", () => {
  it("should return instructions for a given recipe", () => {
    const recipeName = 'Loaded Chocolate Chip Pudding Cookie Cups';
    const instructions = getRecipeInstructions(recipeName, recipeTestData);
    expect(instructions).to.deep.equal(recipeTestData[0].instructions);
  });

  it("should return instructions for a different recipe", () => {
    const recipeName = 'Maple Dijon Apple Cider Grilled Pork Chops';
    const instructions = getRecipeInstructions(recipeName, recipeTestData);
    expect(instructions).to.deep.equal(recipeTestData[1].instructions);
});

  it("should return an empty array if no recipe is found", () => {
    const recipeName = 'Not a recipe';
    const instructions = getRecipeInstructions(recipeName, recipeTestData);
    expect(instructions).to.deep.equal([]);
  });

  it("should handle null input", () => {
    const instructions = getRecipeInstructions(null, recipeTestData);
    expect(instructions).to.deep.equal([]);
  });
  
  it("should handle undefined input", () => {
    const instructions = getRecipeInstructions(undefined, recipeTestData);
    expect(instructions).to.deep.equal([]);
  });
});

describe('calculateCost', () => {
  it("should calculate the cost of a recipe with one ingredient", () => {
    const recipe = {
      id: 1,
      ingredients: [
        { id: 1, quantity: { amount: 1 }, },
      ],
    };
    
    const ingredients = [
      { id: 1, estimatedCostInCents: 100 },
    ];
    
    const totalCost = calculateCost(recipe, ingredients);
    expect(totalCost).to.equal(100);
  });
//👆generic test to see if the function works 👆
  it("should return error message if ingredient id does not exist", () => {
    const totalCost = calculateCost(recipeTestData[0], []);
    expect(totalCost).to.equal("Ingredient not found");
  });
//test to see if the error message works 👆

});



// describe("Recipe", () => {
//   it("Should be a function", () => {
//     expect(filterByTag).to.be.a("function");
//   });
// });

describe('Filter', () => {
  it('Should filter recipes by tag', () => {
    const taggedRecipes = filterByTag(['side dish'], recipeTestData);
    expect(taggedRecipes).to.deep.equal([recipeTestData[2], recipeTestData[3]]);
  });

  it('Should filter a list of recipes when given the name/partial name of a recipe', () => {
    const searchedRecipe = searchRecipes('chocolate', recipeTestData);
    expect(searchedRecipe).to.deep.equal([
      recipeTestData[0],
      recipeTestData[3],
    ]);
  });
});

describe('get ingredients', () => {
  it('Should determine the list of ingredients for a recipe', () => {
    const ingredientList = getIngredientNames(
      recipeTestData[0],
      ingredientsTestData,
    );
    expect(ingredientList).to.deep.equal([
      'wheat flour',
      'bicarbonate of soda',
      'eggs',
      'sucrose',
      'instant vanilla pudding',
      'brown sugar',
      'salt',
      'fine sea salt',
      'semi sweet chips',
      'unsalted butter',
      'vanilla',
    ]);
  });
});
