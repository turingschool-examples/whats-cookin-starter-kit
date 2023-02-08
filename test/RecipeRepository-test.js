import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from '../src/classes/recipe';
import sampleData from '../src/sampleData';

describe('Recipe', () => {
  let recipe

  beforeEach(() => {
    recipe = new RecipeRepository(sampleData)
  });

  
  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('should create a new class instance of Recipe', () => {
   expect(recipe).to.be.an.instanceOf(RecipeRepository)
  });

  it('should get recipe by tag', () => {
    const result = recipe.getRecipeByTag('dinner');
    expect(result).to.deep.equal([{ id: 1929, name: 'Pasta Alfredo', tags: 'dinner' }]);
    

  })
})