import { assert, expect } from 'chai'
import { sampleRecipeData } from '../src/data/sampleData';
import { getInstructions, filterRecipes }  from '../src/recipes';

describe('recipe', () => {
  it('should be a funciton', () => {
    assert.isFunction(getInstructions)
  })
  it('should return the intructions for a given recipe', () => {
    const cookieInstructions = getInstructions(sampleRecipeData[0]);
    const cookieDirections = [
      'In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.',
      'Add egg and vanilla and mix until combined.',
      'Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.',
      'Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.',
      'Bake for 9 to 10 minutes, or until you see the edges start to brown.',
      'Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.',
    ];
    const porkChopInstructions = getInstructions(sampleRecipeData[1]);
    const porkChopDirections = [
      'Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!',
    ];

    assert.deepEqual(cookieInstructions, cookieDirections);
    assert.deepEqual(porkChopInstructions, porkChopDirections);
  });
});

describe('filterRecipes', () => {
  it('should filter list of recipes based on single tag', () => {
    let stringifiedExpectedRecipes = JSON.stringify([sampleRecipeData[0]]);
    let filteredRecipes = filterRecipes(sampleRecipeData, 'antipasto')
    expect(JSON.stringify(filteredRecipes)).to.equal(stringifiedExpectedRecipes);
  });

  it('should filter list of recipes based on multiple tags', () => {
    let stringifiedExpectedRecipes = JSON.stringify([sampleRecipeData[0], sampleRecipeData[2]]);
    let filteredRecipes = filterRecipes(sampleRecipeData, 'antipasto', 'sauce');
    expect(JSON.stringify(filteredRecipes)).to.eql(stringifiedExpectedRecipes);
  });

  it.skip('filtered recipe list should contain only unique entries', () => {
    // let stringifiedExpectedRecipes = JSON.stringify([sampleRecipeData[0], sampleRecipeData[2]]);
    // let filteredRecipes = filterRecipes(sampleRecipeData, 'antipasto', 'sauce');
    // expect(JSON.stringify(filteredRecipes)).to.eql(stringifiedExpectedRecipes);
  });
});
