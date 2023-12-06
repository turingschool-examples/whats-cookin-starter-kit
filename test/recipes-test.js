import { expect } from 'chai';
import recipeData from '../src/data/mockRecipes';
import ingredientsData from '../src/data/mockIngredients';
import {
  filterRecipesByTag,
  findRecipeByName,
  findRecipeIngredients,
  calcRecipeCost,
  returnRecipeInstructions
} from '../src/recipes';


describe('Search by Tag', () => {
  it('Should be a function', () => {
    expect(filterRecipesByTag).to.be.a('function');
  });

  it('Should find multiple recipes with the same tag', () => {
    const filteredRecipes = filterRecipesByTag(recipeData, 'breakfast');
    const result = filteredRecipes.map(recipe => recipe.name);

    expect(result).to.deep.equal(['Waffles', 'Bacon and Eggs']);
  });

  it('Should find a single recipe with a unique tag', () => {
    const filteredRecipes = filterRecipesByTag(recipeData, 'dinner');
    const result = filteredRecipes.map(recipe => recipe.name);

    expect(result).to.deep.equal(['Veggie Stir Fry']);
  });

  it('Should handle search for an invalid tag', () => {
    const filteredRecipes = filterRecipesByTag(recipeData, 'seafood');

    expect(filteredRecipes).to.equal(
      'Sorry, we are unable to find any recipes to match seafood!'
    );
  });

  it('Should handle search for a empty string', () => {
    const filteredRecipes = filterRecipesByTag(recipeData, '');

    expect(filteredRecipes).to.equal(undefined);
  });
});


describe('Search by Name', () => {
  it('Should be a function', () => {
    expect(findRecipeByName).to.be.a('function');
  });

  it('Should find a recipe with a name that directly matches the search', () => {
    const foundRecipe = findRecipeByName(recipeData, 'Waffles');
    const result = foundRecipe.name;

    expect(result).to.equal('Waffles');
  });

  it('Should handle search for an invalid name', () => {
    const foundRecipe = findRecipeByName(recipeData, 'Doggy Feast');

    expect(foundRecipe).to.equal('Sorry, we are unable to find any recipes to match Doggy Feast!');
  });

  it('Should handle search for a empty string', () => {
    const foundRecipe = findRecipeByName(recipeData, '');

    expect(foundRecipe).to.equal(undefined);
  });
});


describe('Determine Recipe Ingredients', () => {
  it('Should be a function', () => {
    expect(findRecipeIngredients).to.be.a('function');
  });

  it('Should return a list of ingredient names for a given recipe', () => {
    const recipeIngredients = findRecipeIngredients(recipeData, ingredientsData, 5);

    expect(recipeIngredients).to.deep.equal([
      'jasmine rice',
      'chopped vegitables',
      'tofu',
      'oil',
      'garlic',
      'soy sauce'
    ]);
  });
});


describe('Calculate Cost', () => {
  it('Should be a function', () => {
    expect(calcRecipeCost).to.be.a('function');
  });

  it("Should return the total cost of a meal's ingredients", () => {
    expect(calcRecipeCost(recipeData, ingredientsData, 5)).to.equal('8.27');
    expect(calcRecipeCost(recipeData, ingredientsData, 2)).to.equal('2.52');
  });
});


describe('Return Cooking Instructions', () => {
  it('Should be a function', () => {
    expect(returnRecipeInstructions).to.be.a('function');
  });

  it('Should return an array of instruction objects from a single recipe', () => {
    const instructions = returnRecipeInstructions(recipeData, 3);

    expect(instructions).to.deep.equal([
      { instruction: 'This is instruction number 1', number: 1 },
      { instruction: 'This is instruction number 2', number: 2 },
      { instruction: 'This is instruction number 3', number: 3 }
    ]);
  });
});
