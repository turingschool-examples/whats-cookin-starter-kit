import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import testRecipeData from '../src/data/testRecipes';

describe('Recipe', () => {
  let recipeRepo
  let recipeData
  beforeEach(() => {
    recipeData = testRecipeData
    recipeRepo = new RecipeRepository(recipeData)
    
  })


  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  
  });

  it('Should accept a parameter of recipes', () => {
    expect(recipeRepo.recipes).to.deep.equal(recipeData)
    console.log(recipeRepo)
  });
})