import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';

describe('Recipe', () => {
  let recipeRepository;
  beforeEach(function() {
    recipeRepository = new RecipeRepository();
  })
  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });
  it('Should instantiate an instance of RecipeRepository', () => {
    
    expect(recipeRepository).to.be.an.instanceof(RecipeRepository);
  })


})