import { expect } from 'chai';
import { getRecipeInstructions, getRecipeById } from '../src/recipes.js'
import { sampleRecipeData } from '../src/data/sample-recipes.js';

describe ('recipe info', () => {
  let findRecipe, findAnotherRecipe;

  beforeEach(() => {
    findRecipe = getRecipeById(sampleRecipeData, 678353);
    findAnotherRecipe = getRecipeById(sampleRecipeData, 595736);
  });

  it('should find a recipe by ID', () => {
    expect(findRecipe.id).to.equal(678353);
  });

  it('should find a different recipe by ID', () => {
    expect(findAnotherRecipe.id).to.equal(595736);
  });

  it('should return the recipe found by ID', () => {
    console.log('test', findRecipe)
    expect(findRecipe).to.deep.equal(sampleRecipeData[1]);
  });

  it('should return the recipe instruction list', () => {
    const recipe = getRecipeInstructions(findRecipe);
    expect(recipe).to.equal('1. Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!')
  });
});