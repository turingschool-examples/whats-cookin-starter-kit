import { expect } from 'chai';
import recipeRepositorySampleData from '../sampleSets/recipeRepositorySample';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from "../src/classes/Recipe";

describe('Recipe Repository', () => {
  let allRecipes;

  beforeEach(function() {
    allRecipes = new RecipeRepository();
  });

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('Should have a method that adds recipes to the list of recipes', () => {
    expect(allRecipes.listOfAllRecipes).to.deep.equal([]);
    allRecipes.addRecipes(recipeRepositorySampleData);
    expect(allRecipes.listOfAllRecipes).to.deep.equal(recipeRepositorySampleData);
    expect(allRecipes.listOfAllRecipes[0]).to.be.an.instanceOf(Recipe);
  });

  it('Should have a method that creates a filtered list of recipes based on a tag', () => {
    allRecipes.addRecipes(recipeRepositorySampleData);

    expect(allRecipes.filterByTag('hello')).to.deep.equal([]);
    expect(allRecipes.filterByTag('snack')).to.deep.equal([recipeRepositorySampleData[0]]);
    expect(allRecipes.filterByTag('lunch')).to.deep.equal(recipeRepositorySampleData);

  });

  it('Should have a method that creates a filtered list of recipes based on its name', () => {
    allRecipes.addRecipes(recipeRepositorySampleData);

    expect(allRecipes.filterByName('Hello')).to.deep.equal([]);
    expect(allRecipes.filterByName('Maple Dijon Apple Cider Grilled Pork Chops')).to.deep.equal([recipeRepositorySampleData[1]]);
  });
});

