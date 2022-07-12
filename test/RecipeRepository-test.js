import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
const data = require('../src/data/recipes.js')
const testData = data.allRecipeData.testData

describe('Recipe', () => {

  let repository;

  beforeEach(() => {
    repository = new RecipeRepository(testData);
  });
  
  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('should be able to take in recipe data as an argument', () => {

    expect(repository.recipeData[0].id).to.equal(595736);
    expect(repository.recipeData[1].id).to.equal(678353);
  });

  it('should be able to filter recipes based on a tag', () => {

    expect(repository.filterByTag('sauce')).to.be.an('array');
    expect(repository.filterByTag('sauce')[0].name).to.equal('Dirty Steve\'s Original Wing Sauce');
    expect(repository.filterByTag('snack').length).to.equal(1)
    expect(repository.filterByTag('snack')[0].name).to.equal('Loaded Chocolate Chip Pudding Cookie Cups')
  });

  it('should be able to filter recipes based on name', () => {

    expect(repository.filterByName('Dirty Steve\'s Original Wing Sauce')[0].id).to.equal(412309);
    expect(repository.filterByName('Loaded Chocolate Chip Pudding Cookie Cups')[0].id).to.equal(595736);
  });

});