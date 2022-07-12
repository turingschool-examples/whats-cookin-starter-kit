import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';

// const RecipeRepository = require('../src/RecipeRepository');

describe('Recipe Repository', () => {

// let recipeRepository

//   beforeEach(() => {
//     recipeRepository = new RecipeRepository(tag)
//   })

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('should filter recipes using a tag', function(tag){
    let recipeRepository = new RecipeRepository(tag)
    expect(recipeRepository.filterByTag(tag)).to.equal(tag)
  })
})