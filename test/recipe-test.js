
import { assert, expect } from 'chai'

import {
  sampleIngredientsData,
  sampleRecipeData,
  simpleIngredients,
  simpleRecipe,
  simpleRecipes,
  tagData
} from '../src/data/sampleData';

import {
  getInstructions,
  getIngredients,
  calculateRecipeCost,
  getIngredientAmounts,
  fixIngredientAmount,
  filterRecipesByTag,
  filterTagsByTagName,
  filterRecipesByIngredient,
  filterRecipesByName,
  searchRecipes,
  splitTagsInRows,
  getUniqueTagsFromRecipes,
  addInfoToTags
} from '../src/recipes';

describe('recipe', () => {
  const cookies = sampleRecipeData[0];
  const porkChops = sampleRecipeData[1];
  const doubleRaspberrySouffle = sampleRecipeData[6];
  const allIngredients = sampleIngredientsData;

  it('should be a funciton', () => {
    assert.isFunction(getInstructions);
    assert.isFunction(getIngredients);
    assert.isFunction(getIngredientAmounts);
    assert.isFunction(fixIngredientAmount);
    assert.isFunction(calculateRecipeCost);
    assert.isFunction(filterRecipesByTag);
    assert.isFunction(filterTagsByTagName);
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

  it('should lop off any numbers after the first two decimal places', () => {
    const ingredientInfo = getIngredientAmounts(doubleRaspberrySouffle, allIngredients);
    let expectedAmount = 0.33;
    const fixedAmount = fixIngredientAmount(ingredientInfo[0].amount);
    
    expect(fixedAmount).to.equal(expectedAmount);
  })

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

describe('filterRecipesByTag', () => {
  let expectedRecipes;
  let filteredRecipes;
  let nameSearched;
  let ingredientSearched;

  it ('should split tags in rows', () => {
    const tag1 = {row: 1};
    const tag2 = {row: 0};
    const tag3 = {row: 1};
    const topRow = [tag1, tag3];
    const bottomRow = [tag2];
    const rows = splitTagsInRows([tag1, tag2, tag3]);
    expect(rows).to.deep.equal([topRow, bottomRow]);
  });

  it('should filter list of recipes based on single tag', () => {
    expectedRecipes = [sampleRecipeData[0]];
    filteredRecipes = filterRecipesByTag(sampleRecipeData, ['antipasto'])
    expect(filteredRecipes).to.deep.equal(expectedRecipes);
  });

  it('should filter list of recipes based on multiple tags', () => {
    expectedRecipes = [sampleRecipeData[0], sampleRecipeData[2]];
    filteredRecipes = filterRecipesByTag(sampleRecipeData, ['antipasto', 'sauce']);
    expect(filteredRecipes).to.deep.equal(expectedRecipes);
  });

  it('filtered recipe list should contain only unique entries if it contains multiple tags being filtered', () => {
    expectedRecipes = [sampleRecipeData[0]];
    filteredRecipes = filterRecipesByTag(sampleRecipeData, ['antipasto', 'antipasti']);
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
    filteredRecipes = filterRecipesByIngredient(sampleRecipeData, ingredientSearched, sampleIngredientsData);
    expect(filteredRecipes).to.deep.equal(expectedRecipes);
  });

  it('should return all recipes that contain the ingredient', () => {
    expectedRecipes = [sampleRecipeData[0], sampleRecipeData[5]];
    ingredientSearched = "fine sea salt";
    filteredRecipes = filterRecipesByIngredient(sampleRecipeData, ingredientSearched, sampleIngredientsData);
    expect(filteredRecipes).to.deep.equal(expectedRecipes);
  })

  it('should look for recipies even with a matching substring of ingredients', () => {
    expectedRecipes = [simpleRecipes[0], simpleRecipes[2]];
    ingredientSearched = "sugar";
    filteredRecipes = filterRecipesByIngredient(simpleRecipes, ingredientSearched, simpleIngredients);
    expect(filteredRecipes).to.deep.equal(expectedRecipes);
  })

  it('should not return any recipes if no ingredient match is found', () => {
    expectedRecipes = [];
    ingredientSearched = "no match string";
    filteredRecipes = filterRecipesByIngredient(sampleRecipeData, ingredientSearched, sampleIngredientsData);
    expect(filteredRecipes).to.deep.equal(expectedRecipes);
  })
});

describe('search recipes', () => {

  it('should be a function', () => {
    assert.isFunction(searchRecipes)
  });

  it('should handle single word searches for both names and ingredients', () => {
    let filteredRecipesByName = searchRecipes(sampleRecipeData, sampleIngredientsData, 'cake')
    let expectedRecipesByName = [sampleRecipeData[3], sampleRecipeData[4]];
    let filteredRecipesByIngredient = searchRecipes(sampleRecipeData, sampleIngredientsData, 'wheat')
    let expectedRecipesByIngredient = [sampleRecipeData[0],sampleRecipeData[3],sampleRecipeData[4]];
    
    assert.deepEqual(filteredRecipesByName, expectedRecipesByName);
    assert.deepEqual(filteredRecipesByIngredient, expectedRecipesByIngredient);
  })

  it('should not be case sensitive', () => {
    let filteredRecipes = searchRecipes(sampleRecipeData, sampleIngredientsData, 'cAkE')
    let expectedRecipes = [sampleRecipeData[3], sampleRecipeData[4]];

    assert.deepEqual(filteredRecipes, expectedRecipes)
  })

  it('should handle multi word searches with both names and ingredients, without returning duplicates', () => {
    let filteredRecipes = searchRecipes(sampleRecipeData, sampleIngredientsData, 'wheat cake');
    let expectedRecipes = [sampleRecipeData[3],sampleRecipeData[4], sampleRecipeData[0]];

    assert.deepEqual(filteredRecipes, expectedRecipes);
  });

  it('should return an empty array for non matches', () => {
    let filteredRecipes = searchRecipes(sampleRecipeData, sampleIngredientsData, 'no match string');
    assert.deepEqual(filteredRecipes, []);
  });

  it('should do nothing if only an empty string is entered', () => {
    let allRecipes = searchRecipes(sampleRecipeData, sampleIngredientsData, ' ');
    assert.deepEqual(allRecipes, undefined)

    let otherFilteredRecipes = searchRecipes(sampleRecipeData, sampleIngredientsData, '')
    assert.deepEqual(otherFilteredRecipes, undefined)
  })

  it('should ignore spaces', () => {
    let filteredRecipes = searchRecipes(sampleRecipeData, sampleIngredientsData, '   cake   ')
    let expectedRecipes = [sampleRecipeData[3], sampleRecipeData[4]];

    assert.deepEqual(filteredRecipes, expectedRecipes)
  })
})

describe('populating tags', () => {
  it('should get unique tags from overlapping tags in recipes', () => {
    const uniqueTags = getUniqueTagsFromRecipes(simpleRecipes.slice(0,2));
    expect(uniqueTags).to.deep.equal(['a', 'b', 'c', 'd'])
  });

  it('should get unique tags from unique tags in recipes', () => {
    const uniqueTags = getUniqueTagsFromRecipes(simpleRecipes);
    expect(uniqueTags).to.deep.equal(['a', 'b', 'c', 'd', 'e', 'f', 'g'])
  });

  it('should add more info to a tag', () => {
    const basicTags = getUniqueTagsFromRecipes(simpleRecipes);
    const firstElement = {
      name: 'a',
      isActive: false,
      path: `./images/${basicTags[0]}.png`,
      row: 1
    };
    const expectedOutput = [firstElement];
    const refinedTags = addInfoToTags([basicTags[0]]);
    expect(refinedTags).to.deep.equal(expectedOutput);
  });

  it('should add more info to multiple tags', () => {
    const basicTags = getUniqueTagsFromRecipes(simpleRecipes);
    const firstElement = {
      name: 'a',
      isActive: false,
      path: `./images/${basicTags[0]}.png`,
      row: 1
    };

    const secondElement = {
      name: 'b',
      isActive: false,
      path: `./images/${basicTags[1]}.png`,
      row: 0
    };

    const expectedOutput = [firstElement, secondElement];
    const refinedTags = addInfoToTags([basicTags[0], basicTags[1]]);
    expect(refinedTags).to.deep.equal(expectedOutput);
  })
});

describe('filterTagsByTagName', () => {
  it('should correctly filter tag data given an array of tag names', () => {
    let filteredTagData = filterTagsByTagName(tagData, [
      'antipasti',
      'starter',
      'snack',
      'appetizer',
      'antipasto',
      "hor d'oeuvre"
    ]);

    let expectedTagData = [
      {
        name: 'antipasti',
        isActive: false,
        path: './images/antipasti.png',
        row: 1
      },
      {
        name: 'starter',
        isActive: false,
        path: './images/starter.png',
        row: 0
      },
      {
        name: 'snack',
        isActive: false,
        path: './images/snack.png',
        row: 1
      },
      {
        name: 'appetizer',
        isActive: false,
        path: './images/appetizer.png',
        row: 0
      },
      {
        name: 'antipasto',
        isActive: false,
        path: './images/antipasto.png',
        row: 1
      },
      {
        name: "hor d'oeuvre",
        isActive: false,
        path: "./images/hor d'oeuvre.png",
        row: 0
      }
    ]
    
    expect(filteredTagData).to.deep.equal(expectedTagData);
  });
});