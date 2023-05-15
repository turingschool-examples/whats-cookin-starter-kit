import { expect } from 'chai';
import { filterByTag, filterByName } from '../src/functions/filter-recipes';
import { recipeData } from '../src/data/recipes'
import { sampleRecipeData } from '../src/data/sample-recipes';

describe('filter recipes', () => {
  it.skip('Should filter recipes by tag', () => {
    const filteredRecipes = filterByTag(sampleRecipeData, 'lunch');
    const filteredRecipeIds = filteredRecipes.map(recipe => recipe.id)
    expect(filteredRecipeIds).to.deep.equal([678353, 779583, 550940]);
  });

  it.skip('Should return an error message if the tag doesn\'t exist', () => {
    const filteredRecipes = filterByTag(sampleRecipeData, 'bacon'); 
    expect(filteredRecipes).to.equal('Error: try a new tag')
  });

  it.skip('Should filter recipes by name', () => {
    const filteredRecipes = filterByName(sampleRecipeData, 'Chocolate');
    expect(filteredRecipes).to.deep.equal(['Loaded Chocolate Chip Pudding Cookie Cups', 'Creamy Coconut Yogurt Bowl with Chocolate Granola (Video)'])
  });

  it.skip('Should work with upper and lower case', () => {
    let filteredRecipes = filterByName(sampleRecipeData, 'chocolate');
    let filteredRecipeNames = filteredRecipes.map(recipe => recipe.name);
    expect(filteredRecipeNames).to.deep.equal(['Loaded Chocolate Chip Pudding Cookie Cups', 'Creamy Coconut Yogurt Bowl with Chocolate Granola (Video)'])
    
    filteredRecipes = filterByName(sampleRecipeData, 'CHOCOLATE');
    filteredRecipeNames = filteredRecipes.map(recipe => recipe.name);
    expect(filteredRecipes).to.deep.equal(['Loaded Chocolate Chip Pudding Cookie Cups', 'Creamy Coconut Yogurt Bowl with Chocolate Granola (Video)'])
  });

  it.skip('should return an error message if name does not match', () => {
    let filteredRecipes = filterByName(sampleRecipeData, 'platypus');
    expect(filteredRecipes).to.equal('No results');
  })
});
