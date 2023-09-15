const chai = require('chai');
const expect = chai.expect;
import {
  findRecipeIngredients,
  calculateCost,
  findDirections
} from '../src/ingredient-functions';


import ingredientsData from '../src/data/ingredients-test-data.js';
import recipeData from '../src/data/recipe-test-data.js';



describe('findRecipeIngredients', () => {
  let recipeId;
  let expectedIngredients;

  beforeEach(() => {
    recipeId = 595736;
    expectedIngredients = ['wheat flour', 'bicarbonate of soda'];
  });

  it('Should return an array of ingredient names for a specific recipe id passed as a number', () => {
    const ingredientList = findRecipeIngredients(recipeData, ingredientsData, recipeId);
    expect(ingredientList).to.deep.equal(expectedIngredients);
  });

  it('Should return an array of ingredient names for a specific recipe id passed as a string', () => {
    const ingredientList = findRecipeIngredients(recipeData, ingredientsData, recipeId.toString());
    expect(ingredientList).to.deep.equal(expectedIngredients);
  });

  it('Should return an empty array if the recipe id is not a valid number or string', () => {
    const ingredientList = findRecipeIngredients(recipeData, ingredientsData, {});
    expect(ingredientList).to.deep.equal([]);
  });

  it('Should return an empty array if the recipe id is not found in recipeData', () => {
    const ingredientList = findRecipeIngredients(recipeData, ingredientsData, 123456);
    expect(ingredientList).to.deep.equal([]);
  });
});

describe('calculateCost', () => {
  let clickedId;
  let expectedCost;

  beforeEach(() => {
    clickedId = 595736;
    expectedCost = '$5.04';
  });

  it('should calculate the cost of a given recipe\'s ingredients', () => {
    const recipeCost = calculateCost(recipeData, ingredientsData, clickedId);
    expect(recipeCost).to.deep.equal(expectedCost);
  });

  it('should calculate the cost of a different given recipe\'s ingredients', () => {
    clickedId = 678353;
    expectedCost = '$31.58';

    const recipeCost = calculateCost(recipeData, ingredientsData, clickedId);
    expect(recipeCost).to.deep.equal(expectedCost);
  });

  it('should return "$0.00" when the recipe has no ingredients', () => {
    clickedId = 123456; // Recipe ID that does not exist in the data
    expectedCost = '$0.00';

    const recipeCost = calculateCost(recipeData, ingredientsData, clickedId);
    expect(recipeCost).to.deep.equal(expectedCost);
  });

  it('should return "$0.00" when the recipeData or ingredientsData is empty', () => {
    clickedId = 595736; // Valid recipe ID
    expectedCost = '$0.00';

    // Pass empty data for testing
    const recipeCost1 = calculateCost([], ingredientsData, clickedId);
    expect(recipeCost1).to.deep.equal(expectedCost);

    const recipeCost2 = calculateCost(recipeData, [], clickedId);
    expect(recipeCost2).to.deep.equal(expectedCost);
  });

  it('should return "$0.00" when the clickedId is not found in recipeData', () => {
    clickedId = 123456; // Recipe ID that does not exist in the data
    expectedCost = '$0.00';

    const recipeCost = calculateCost(recipeData, ingredientsData, clickedId);
    expect(recipeCost).to.deep.equal(expectedCost);
  });
});


describe('findDirections', () => {
  let recipeName;
  let expectedInstructions;

  beforeEach(() => {
    recipeName = 'Loaded Chocolate Chip Pudding Cookie Cups';
    expectedInstructions = [
      {
        "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
        "number": 3
      },
      {
        "instruction": "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
        "number": 4
      },
      {
        "instruction": "Bake for 9 to 10 minutes, or until you see the edges start to brown.",
        "number": 5
      },
      {
        "instruction": "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.",
        "number": 6
      }
    ];
  });

  it('should be a function', () => {
    expect(findDirections).to.be.a('function');
  });

  it('should return recipe directions for a recipe', function() {
    const cookieDirections = findDirections(recipeData, recipeName);
    expect(cookieDirections).to.deep.equal(expectedInstructions);
  });

  it('should return recipe directions for another recipe', function() {
    recipeName = 'Maple Dijon Apple Cider Grilled Pork Chops';
    expectedInstructions = [
      {
        "instruction": "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!",
        "number": 1
      }
    ];

    const porkDirections = findDirections(recipeData, recipeName);
    expect(porkDirections).to.deep.equal(expectedInstructions);
  });

  it('should return an empty array if the recipe name is not found', function() {
    recipeName = 'Nonexistent Recipe';
    const nonexistentDirections = findDirections(recipeData, recipeName);
    expect(nonexistentDirections).to.deep.equal([]);
  });

  it('should return an empty array if the recipe name is not provided', function() {
    recipeName = undefined;
    const undefinedDirections = findDirections(recipeData, recipeName);
    expect(undefinedDirections).to.deep.equal([]);
  });
});
