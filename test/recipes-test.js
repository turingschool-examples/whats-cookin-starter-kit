import { expect } from 'chai';
import { findRecipeIngredients, filterRecipesByTag, filterRecipesByName } from '../src/recipes';
import { sampleRecipes } from '../src/data/sample-recipes';

// describe('Recipe', () => {
//   it('Should be a function', () => {
//     expect(findRecipeIngredients).to.be.a('function');
//   });
// })

describe('filterRecipesByTag', () => {
  it('should filter recipes by tag', () => {
    const filteredRecipes = filterRecipesByTag(sampleRecipes, ['side dish']);
    const filteredRecipesIds = filteredRecipes.map(sampleRecipe => sampleRecipe.id);
    expect(filteredRecipesIds).to.deep.equal([601216, 226562, 605132, 618332]);
  });
  it('should filter recipes by multiple tags', () => {
    const filteredRecipes = filterRecipesByTag(sampleRecipes, ['main course', 'dinner']);
    const filteredRecipesIds = filteredRecipes.map(sampleRecipe => sampleRecipe.id);
    expect(filteredRecipesIds).to.deep.equal([991136]);
  });
});

describe('filterRecipesByName', () => {
  it('should filter recipes by name', () => {
    const filteredRecipes = filterRecipesByName(sampleRecipes, 'Cookies');
    const filteredRecipesIds = filteredRecipes.map(sampleRecipe => sampleRecipe.id);
    expect(filteredRecipesIds).to.deep.equal([583738, 618332]);
  });
  it('should still filter correctly even if name is not correct case', () => {
    const filteredRecipes = filterRecipesByName(sampleRecipes, 'cookies');
    const filteredRecipesIds = filteredRecipes.map(sampleRecipe => sampleRecipe.id);
    expect(filteredRecipesIds).to.deep.equal([583738, 618332]);
  });
});