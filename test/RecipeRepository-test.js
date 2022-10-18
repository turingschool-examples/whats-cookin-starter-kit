import { expect } from 'chai';
import recipeRepositorySampleData from '../sampleSets/recipeRepositorySample';
import RecipeRepository from '../src/classes/RecipeRepository';

describe('Recipe', () => {

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('Should have a parameter to take in recipe data', () => {
    const allRecipes = new RecipeRepository(recipeRepositorySampleData);

    expect(allRecipes.listOfRecipes).to.equal(recipeRepositorySampleData);
  });

  it('Should have a method that creates a filtered list of recipies based on a tag', () => {
    const allRecipes = new RecipeRepository(recipeRepositorySampleData);

    expect(allRecipes.filterByTag('hello')).to.deep.equal([]);
    expect(allRecipes.filterByTag('snack')).to.deep.equal([recipeRepositorySampleData[0]]);
    expect(allRecipes.filterByTag('lunch')).to.deep.equal(recipeRepositorySampleData);

  });

  it('Should have a method that creates a filtered list of recipies based on its name', () => {
    const allRecipes = new RecipeRepository(recipeRepositorySampleData);
    
    expect(allRecipes.filterByName('Hello')).to.deep.equal([]);
    expect(allRecipes.filterByName('Maple Dijon Apple Cider Grilled Pork Chops')).to.deep.equal([recipeRepositorySampleData[1]]);
  });

});