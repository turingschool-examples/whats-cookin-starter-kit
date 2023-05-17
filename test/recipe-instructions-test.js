import { expect } from 'chai';
import { recipeInstructions } from '../src/functions/recipe-instructions'
import sampleRecipeData from '../src/data/sample-recipes'

describe('recipeInstructions', () => {
  it('should return recipe instructions', () => {
    const recipe = sampleRecipeData[0];
    const instructions = recipeInstructions(recipe);
    expect(instructions.length).to.equal(6);
    expect(instructions[0].instruction).to.equal("In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.");
  });

  it('should return a message if no recipe', () => {
    const instructions = recipeInstructions();
    expect(instructions).to.equal('No recipe located');
  });
});