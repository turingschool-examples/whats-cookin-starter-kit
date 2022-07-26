import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import {recipeData} from '../src/data/recipes-test-data';
const recipeInfo = {recipeData};


describe('RecipeRepository', () => {
  const recipeData = recipeInfo.recipeData;
  let recipeRepository;

  beforeEach(() => {
    recipeRepository = new RecipeRepository(recipeData);
  });

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('Should be an instance of RecipeRepository', () => {
    expect(recipeRepository).to.be.an.instanceof(RecipeRepository);
  });

  it('Should have one parameter taking in data', () => {
    expect(recipeRepository.recipeData).to.deep.equal(recipeData);
  });

  it('Should be an array of Recipes', () => {
    recipeRepository.listRecipes();
    expect(recipeRepository.recipeList).to.deep.equal(recipeData);
  });

  it('Should filter recipes based on tag', () => {
    recipeRepository.listRecipes();
    const recipeByTag = recipeRepository.findRecipeByTag("lunch");
    expect(recipeByTag).to.deep.equal([recipeData[1]]);
  });

  it('Should give response if recipe is not found', () => {
    recipeRepository.listRecipes();
    const recipeByTag = recipeRepository.findRecipeByTag("figs");
    expect(recipeByTag).to.equal("Sorry, no recipe with figs.");
  });

  it('Should filter recipes by name', () => {
    recipeRepository.listRecipes();
    const recipeByName = recipeRepository.findRecipeByName("Loaded Chocolate Chip Pudding Cookie Cups");
    expect(recipeByName).to.deep.equal([recipeData[0]]);
  });

  it('Should give response if recipe name is not found', () => {
    recipeRepository.listRecipes();
    const recipeByName = recipeRepository.findRecipeByName("Broccoli and Cheese Casserole");
    expect(recipeByName).to.equal("Sorry, no recipe named Broccoli and Cheese Casserole.");
  });

});
