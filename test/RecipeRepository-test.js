import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
const data = require('../src/data/recipes.js');
const testRecipeData = data.testRecipeData;

describe('Recipe Repository', () => {

  let repository;

  beforeEach(() => {
    repository = new RecipeRepository(testRecipeData);
  });

  it('should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('should be an instance of RecipeRepository', () => {
    expect(repository).to.be.an.instanceOf(RecipeRepository);
  });

  it('should be able to take in recipe data as an argument', () => {
    expect(repository.recipeData[0].id).to.equal(595736);
    expect(repository.recipeData[1].id).to.equal(678353);
  });

  it('should be able to filter recipes based on a tag', () => {
    expect(repository.filterByTag('sauce')[0].name).to.equal('Dirty Steve\'s Original Wing Sauce');
    expect(repository.filterByTag('snack')[0].name).to.equal('Loaded Chocolate Chip Pudding Cookie Cups');
    expect(repository.filterByTag('test')[1].name).to.equal('Dirty Steve\'s Original Wing Sauce');
    expect(repository.filterByTag('snack')).to.deep.equal([repository.recipeData[0]])
    expect(repository.filterByTag('test')).to.deep.equal([repository.recipeData[1], repository.recipeData[2]])
  });

  it('filter should not return a recipe if there are no recipes that match the tag given', () => {
    expect(repository.filterByTag('brunch')).to.deep.equal([])
  }); 

  it('should be able to filter recipes based on name', () => {
    expect(repository.filterByName('Dirty Steve\'s Original Wing Sauce')[0].id).to.equal(412309);
    expect(repository.filterByName('Loaded Chocolate Chip Pudding Cookie Cups')[0].id).to.equal(595736);
    expect(repository.filterByName('Cookie')).to.deep.equal([repository.recipeData[0]])
  });

  it('filter should not return a recipe if there are no recipes that match the name given', () => {
    expect(repository.filterByName('Lasagna')).to.deep.equal([])
  });

});
