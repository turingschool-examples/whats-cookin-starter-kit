import { expect } from 'chai';
import recipeRepositorySampleData from '../sampleSets/recipeRepositorySample';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from "../src/classes/Recipe";

describe('Recipe Repository', () => {
  let allRecipes;

  beforeEach(function() {
    allRecipes = new RecipeRepository(recipeRepositorySampleData);
  });

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('Should create an instance of RecipeRepository', () => {
    expect(allRecipes).to.be.an.instanceOf(RecipeRepository);
  });

  it('Should take in and store a parameter of recipe objects', () => {
    expect(allRecipes.listOfAllRecipes).to.deep.equal(recipeRepositorySampleData)
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

