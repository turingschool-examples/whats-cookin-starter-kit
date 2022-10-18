import { expect } from 'chai';
import recipeRepositorySampleData from '../sampleSets/recipeRepositorySample';
import RecipeRepository from '../src/classes/RecipeRepository';

describe('Recipe', () => {
  let allRecipes;

  beforeEach(function() {
    allRecipes = new RecipeRepository(recipeRepositorySampleData);
  })

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('Should have a parameter to take in recipe data', () => {

    expect(allRecipes.listOfRecipes).to.equal(recipeRepositorySampleData);
  });

  it('Should have a method that creates a filtered list of recipes based on a tag', () => {

    expect(allRecipes.filterByTag('hello')).to.deep.equal([]);
    expect(allRecipes.filterByTag('snack')).to.deep.equal([recipeRepositorySampleData[0]]);
    expect(allRecipes.filterByTag('lunch')).to.deep.equal(recipeRepositorySampleData);

  });

  it('Should have a method that creates a filtered list of recipes based on its name', () => {
    
    expect(allRecipes.filterByName('Hello')).to.deep.equal([]);
    expect(allRecipes.filterByName('Maple Dijon Apple Cider Grilled Pork Chops')).to.deep.equal([recipeRepositorySampleData[1]]);
  });

});