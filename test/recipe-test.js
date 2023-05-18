
import { assert, expect } from 'chai'

import {
  sampleIngredientsData,
  sampleRecipeData,
  simpleIngredients,
  simpleRecipe,
} from '../src/data/sampleData';

import {
  getInstructions,
  getIngredients,
  calculateRecipeCost,
  getIngredientAmounts,
  filterRecipes,
  filterRecipesByIngredient,
  filterRecipesByName
} from '../src/recipes';

describe('recipe', () => {
  const cookies = sampleRecipeData[0];
  const porkChops = sampleRecipeData[1];
  const allIngredients = sampleIngredientsData;

  it('should be a funciton', () => {
    assert.isFunction(getInstructions);
    assert.isFunction(getIngredients);
    assert.isFunction(getIngredientAmounts);
    assert.isFunction(calculateRecipeCost);
    assert.isFunction(filterRecipes);
    assert.isFunction(filterRecipesByIngredient);
    assert.isFunction(filterRecipesByName);
  });

  it('should determine the names of ingredients needed for a recipe', () => {
    const cookieIngredients = getIngredients(cookies, allIngredients);
    const cookieIngredientList = [
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
    ];
    assert.deepEqual(cookieIngredients, cookieIngredientList);
  });

  it('should determine the names of ingredients for a different recipe', () => {
    const porkChopIngredients = getIngredients(porkChops, allIngredients);
    const porkChopIngredientList = [
      'apple cider',
      'apple',
      'corn starch',
      'dijon style mustard',
      'whole garlic clove',
      'whole grain dijon mustard',
      'maple',
      'miso',
      'pork chop',
      's&p',
      'soy sauce',
      'sriracha sauce',
    ];
    assert.deepEqual(porkChopIngredients, porkChopIngredientList);
  });

  it('should get the amounts, units, and names of ingredients from simple recipe data', () => {
    const ingredientInfo = getIngredientAmounts(simpleRecipe, simpleIngredients);
    const expectedInfo = [
      {
        amount: 1, 
        unit: 'c', 
        name: 'sugar'
      },
      {
        amount: 2, 
        unit: 'tsp',
        name: 'salt'
      }
    ]
    assert.deepEqual(ingredientInfo, expectedInfo)
  });

  it('should get the amounts, units, and names of ingredients from sampleRecipeData', () => {
    const ingredientInfo = getIngredientAmounts(cookies, allIngredients);
    const expectedInfo = [
      {
        amount: 1.5,
        unit: 'c',
        name: 'wheat flour',
      },
      {
        amount: 0.5,
        unit: 'tsp',
        name: 'bicarbonate of soda',
      },
      {
        amount: 1,
        unit: 'large',
        name: 'eggs',
      },
      {
        amount: 0.5,
        unit: 'c',
        name: 'sucrose',
      },
      {
        amount: 3,
        unit: 'Tbsp',
        name: 'instant vanilla pudding',
      },
      {
        amount: 0.5,
        unit: 'c',
        name: 'brown sugar',
      },
      {
        amount: 0.5,
        unit: 'tsp',
        name: 'salt',
      },
      {
        amount: 24,
        unit: 'servings',
        name: 'fine sea salt',
      },
      {
        amount: 2,
        unit: 'c',
        name: 'semi sweet chips',
      },
      {
        amount: 0.5,
        unit: 'c',
        name: 'unsalted butter',
      },
      {
        amount: 0.5,
        unit: 'tsp',
        name: 'vanilla',
      },
    ];

    assert.deepEqual(ingredientInfo, expectedInfo);
  });

  it("should calculate the cost of a given recipe's ingredients", () => {
    const cost = calculateRecipeCost(cookies, allIngredients);
    assert.equal(cost, '$177.76');
  });

  it("should calulcaulte the cost of a different receipe's ingredients", () => {
    const cost = calculateRecipeCost(porkChops, allIngredients);
    assert.equal(cost, '$272.97');
  });

  it('should calculate the cost of a simple recipe', () => {
    const cost = calculateRecipeCost(simpleRecipe, simpleIngredients);
    assert.equal(cost, '$9.00');
  });

  it('should calculate the cost of a free recipe', () => {
    const freeIngredients = [
      {
        id: 1,
        estimatedCostInCents: 0,
      },
      {
        id: 2,
        estimatedCostInCents: 0,
      },
    ];
    const cost = calculateRecipeCost(simpleRecipe, freeIngredients);
    assert.equal(cost, '$0.00');
  });

  it('should return the intsructions for a given recipe', () => {
    const cookieInstructions = getInstructions(cookies);
    const cookieDirections = [
      'In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.',
      'Add egg and vanilla and mix until combined.',
      'Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.',
      'Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.',
      'Bake for 9 to 10 minutes, or until you see the edges start to brown.',
      'Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.',
    ];

    assert.deepEqual(cookieInstructions, cookieDirections);
  });

  it('should return instructions for a different recipe', () => {
    const porkChopInstructions = getInstructions(porkChops);
    const porkChopDirections = [
      'Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!',
    ];

    assert.deepEqual(porkChopInstructions, porkChopDirections);
  });
  it('should return an empty array for recipes with no instructions', () => {
    const noInstructions = getInstructions(simpleRecipe);
    assert.deepEqual(noInstructions, []);
  });
});

describe('filterRecipes', () => {
  let expectedRecipes;
  let filteredRecipes;
  let nameSearched;
  let ingredientSearched;

  it('should filter list of recipes based on single tag', () => {
    expectedRecipes = [sampleRecipeData[0]];
    filteredRecipes = filterRecipes(sampleRecipeData, 'antipasto')
    expect(filteredRecipes).to.deep.equal(expectedRecipes);
  });

  it('should filter list of recipes based on multiple tags', () => {
    expectedRecipes = [sampleRecipeData[0], sampleRecipeData[2]];
    filteredRecipes = filterRecipes(sampleRecipeData, 'antipasto', 'sauce');
    expect(filteredRecipes).to.deep.equal(expectedRecipes);
  });

  it('filtered recipe list should contain only unique entries if it contains multiple tags being filtered', () => {
    expectedRecipes = [sampleRecipeData[0]];
    filteredRecipes = filterRecipes(sampleRecipeData, 'antipasto', 'antipasti');
    expect(filteredRecipes).to.deep.equal(expectedRecipes);
  });

  it('should filter recipe list based on name', () => {
    expectedRecipes = [sampleRecipeData[1]];
    const nameSearched = "Maple Dijon Apple Cider Grilled Pork Chops";
    filteredRecipes = filterRecipesByName(sampleRecipeData, nameSearched); 
    expect(filteredRecipes).to.deep.equal(expectedRecipes);
  });

  it('should filter recipe list even with sub-strings', () => {
    expectedRecipes = [sampleRecipeData[1]];
    nameSearched = "Maple Di";
    filteredRecipes = filterRecipesByName(sampleRecipeData, nameSearched);
    expect(filteredRecipes).to.deep.equal(expectedRecipes);
  });

  it('should filter multiple recipes if they share the same substring', () => {
    expectedRecipes = [sampleRecipeData[3], sampleRecipeData[4]];
    nameSearched = "cake";
    filteredRecipes = filterRecipesByName(sampleRecipeData, nameSearched);
    expect(filteredRecipes).to.deep.equal(expectedRecipes);
  });

  it('should return no recipe if no name matches', () => {
    expectedRecipes = [];
    nameSearched = "Test Text";
    filteredRecipes = filterRecipesByName(sampleRecipeData, nameSearched);
    expect(filteredRecipes).to.deep.equal(expectedRecipes);
  });

  it('should return the only recipe with the searched ingredient', () => {
    expectedRecipes = [sampleRecipeData[0]];
    ingredientSearched = "unsalted butter";
    filteredRecipes = filterRecipesByIngredient(sampleRecipeData, nameSearched);
    expect(filteredRecipes).to.deep.equal(expectedRecipes);
  });

  it('should return all recipes that contain the ingredient', () => {
    expectedRecipes = [sampleRecipeData[0], sampleRecipeData[5]];
    ingredientSearched = "fine sea salt";
    filteredRecipes = filterRecipesByIngredient(sampleRecipeData, nameSearched);
    expect(filteredRecipes).to.deep.equal(expectedRecipes);
  })

  it('should not return no recipes if no ingredient match is found', () => {
    expectedRecipes = [];
    ingredientSearched = "no match string";
    filteredRecipes = filterRecipesByIngredient(sampleRecipeData, firstIngredientSearched);
    expect(filteredRecipes).to.deep.equal(expectedRecipes);
  })
});
