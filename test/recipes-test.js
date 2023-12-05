import { expect } from 'chai';
import { findRecipeIngredients, filterRecipesByTag } from '../src/recipes';
import { sampleRecipes } from '../src/data/sample-recipes';

// describe('Recipe', () => {
//   it('Should be a function', () => {
//     expect(findRecipeIngredients).to.be.a('function');
//   });
// })

describe('filterRecipesByTag', () => {
  it('should filter recipes by tag', () => {
    const filteredRecipes = filterRecipesByTag(sampleRecipes, 'side dish');
    const filteredRecipesIds = filteredRecipes.map(sampleRecipe => sampleRecipe.id);
    expect(filteredRecipesIds).to.deep.equal([601216, 226562, 605132]);
  });
});