import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import recipeData from '../src/test-data/Recipe-repo-test-data';

describe('RecipeRepository', () => {
  let recipeRepo;
  beforeEach(() => {
    recipeRepo = new RecipeRepository(recipeData);
  });

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('should return an array', () => {
    expect(recipeRepo.recipeData).to.deep.equal(recipeData);
  });

  it('should have a method that searches recipes by name', () => {
    expect(recipeRepo.filteredByName('Elvis Pancakes')[0]).to.deep.equal(recipeData[3])
  });

  it('should return an empty array when name search results in no match', () => {
    expect(recipeRepo.filteredByName('Ryan\'s famouse chili')).to.deep.equal([])
  });

  it('should have a method that searches recipes by tag ', () => {
    expect(recipeRepo.filteredByTag('side dish')).to.deep.equal([recipeData[3]])
  });

  it('should return an empty array when tag search results in no match', () => {
    expect(recipeRepo.filteredByTag('Midnight Snack')).to.deep.equal([])
  });
})