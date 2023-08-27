import { expect } from 'chai';

const { recipeTestData, ingredientsTestData } = require('../src/data/testData');



const { recipeData } = require('../src/recipes');

const {
  filterByTag,
  searchRecipes,
  getIngredientNames,
} = require('../src/recipes');

describe('Recipe', () => {
  it('Should be a function', () => {
    expect(filterByTag).to.be.a('function');
  });
});

describe('Filter', () => {
  it('Should filter recipes by tag', () => {
    const taggedRecipes = filterByTag('side dish', recipeTestData);
    expect(taggedRecipes).to.deep.equal([recipeTestData[2], recipeTestData[3]]);
  });

  it('Should filter a list of recipes when given the name/partial name of a recipe', () => {
    const searchedRecipe = searchRecipes('chocolate', recipeTestData);
    expect(searchedRecipe).to.deep.equal([
      recipeTestData[0],
      recipeTestData[3],
    ]);
  });
});

describe('get ingredients', () => {
  it('Should determine the list of ingredients for a recipe', () => {
    const ingredientList = getIngredientNames(
      recipeTestData[0],
      ingredientsTestData,
    );
    expect(ingredientList).to.deep.equal([
      'wheat flour',
      'bicarbonate of soda',
      'eggs',
      'sucrose',
      'instant vanilla pudding',
      'brown sugar',
      'salt',
      'fine sea salt',
      'semi sweet chips',
      'unsalted butter',
      'vanilla',
    ]);
  });
});
