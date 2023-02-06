import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
import RecipeRepository from '../src/classes/RecipeRepository';
import sampleRecipeData from '../src/data/sample-recipe-data';


describe('RecipeRepository', () => {
  let recipe;

  beforeEach(() => {
    recipe = new RecipeRepository(sampleRecipeData);
  });

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('Should be an instance of RecipeRepository', () => {
    expect(recipe).to.be.an.instanceOf(RecipeRepository);
  });

  it('should have a recipes data property', () => {
    expect(recipe.recipes).to.have.lengthOf(3);
    expect(recipe.recipes[0]).to.be.an.instanceOf(Recipe);
  });

  it('should start with no filtered recipes', () => {
    expect(recipe.filteredRecipes).to.equal(undefined);
  });

  it('should be able to filter recipes by tag', () => {
    recipe.filterByTag('starter')
    expect(recipe.filteredRecipes).to.have.lengthOf(1);
  });

  it('should not be able to filter recipes without a tag', () => {
    recipe.filterByTag()
    expect(recipe.filteredRecipes).to.equal(undefined);
  });

  it('should not be able to filter by nonexistant tag', () => {
    recipe.filterByTag('hello')
    expect(recipe.filteredRecipes).to.equal(null);
  });

  it('should let user know if no recipes include that tag', () => {
    expect(recipe.filterByTag('hello')).to.equal('Sorry, there are no recipes with hello!');
  });

  it('should be able to filter recipes by name', () => {
    recipe.filterByName('cookie')
    expect(recipe.filteredRecipes).to.have.lengthOf(1);
  });

  it('should not be able to filter recipes without a name', () => {
    recipe.filterByName()
    expect(recipe.filteredRecipes).to.equal(undefined);
  });

  it('should let user know there are no recipes with nonexistant name', () => {
    recipe.filterByName('fake')
    expect(recipe.filteredRecipes).to.equal(null);
  });

  it('should let user know if no recipes have that name', () => {
    expect(recipe.filterByName('hello')).to.equal('Sorry, there are no recipes matching hello!');
  });

})