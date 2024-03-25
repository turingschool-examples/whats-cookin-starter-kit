import { expect } from 'chai';
import { findRecipeIngredients , getRecipeData, getIngredientsData, getRecipeInstructions, filterRecipeTag, filterRecipeName, caluculateCost } from '../src/recipes';
import {} from './mock-data'

describe('getRecipeData', () => {
  it('Should be a function', () => {
    expect(getRecipeData).to.be.a('function');
  });
  it('Should return a array of objects identicle to the referenced data',()=>{
    const recipeData = getRecipeData()
    expect(recipeData).to.deep.equal(recipes)
  });
})
describe('getIngredientsData', () => {
  it('Should be a function', () => {
    expect(getIngredientsData).to.be.a('function');
  });
  it('Should return a array of objects identicle to the referenced data',()=>{
    const ingredientsData = getIngredientsData()
    expect(ingredientsData).to.deep.equal(ingredients)
  });
})
describe('filterRecipeTag', () => {
  it('Should be a function', () => {
    expect(filterRecipeTag).to.be.a('function');
  });
  it('Should return an array of recipes that match a given tag',()=>{
    const recipeData = getRecipeData();
    const tag = 'lunch'
    const recipes = filterRecipeTag(tag,recipeData);
    const toCompare = []
    expect(recipes).to.deep.equal() 
  });
})
describe('filterRecipeName', () => {
  it('Should be a function', () => {
    expect(filterRecipeName).to.be.a('function');
  });
  it('Should return a recipe when given a name',()=>{
    const recipeData = getRecipeData();
    const name = 'Pancakes';
    const searchResult = filterRecipeName(name);
    const pancakes = recipeData[];
    expect(searchResult).to.deep.equal(pancakes);
  });
})
describe('getRecipeInstructions', () => {
  it('Should be a function', () => {
    expect(getRecipeInstructions).to.be.a('function');
  });
  it('Should return a array of instructions objects from selected recipe',()=>{
    const recipeData = getRecipeData();
    const recipe = recipeData[0];
    const recipeInstructions = getRecipeInstructions(recipe);
    expect(recipeInstructions).to.deep.equal(recipe["instruction"]);
  });
})
describe('calculateCost', () => {
  it('Should be a function', () => {
    expect(caluculateCost ).to.be.a('function');
  });
})
describe('Recipe', () => {
  it('Should be a function', () => {
    expect(findRecipeIngredients).to.be.a('function');
  });
  it('Should take in a recipe object and an ingredients object array, and return an array of matches', ()=>{
    const recipeData = getRecipeData();
    const recipe = recipeData[0];
    const ingredientsByName = findRecipeIngredients(recipe);
    const sampleIngredients = [];
    expect(ingredientsByName).to.deep.equal(sampleIngredients);
  });
})