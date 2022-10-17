import { expect } from 'chai';
import recipeRepositorySampleData from '../sampleSets/recipeRepositorySample';
import RecipeRepository from '../src/classes/RecipeRepository';

describe('Recipe', () => {

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  beforeEach(function() {
    const allRecipes = new RecipeRepository(recipeRepositorySampleData);
  });

  it('Should have a parameter to take in recipe data', () => {
    const allRecipes = new RecipeRepository(recipeRepositorySampleData);

    expect(allRecipes.listOfRecipes).to.equal(recipeRepositorySampleData);
  });

  it('Should have a method that creates a filtered list of recipies based on a tag', () => {

    expect(filterByTag('snack')).to.equal(recipeRepositorySampleData[0]);
  });

  it('Should have a method that creates a filtered list of recipies based on its name', () => {

    expect(filterByName('Maple Dijon Apple Cider Grilled Pork Chops')).to.equal(recipeRepositorySampleData[1]);
  });

});