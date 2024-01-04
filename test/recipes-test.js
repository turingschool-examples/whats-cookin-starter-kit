import { expect } from 'chai';
import recipeData from '../src/data/mockRecipes';
import ingredientsData from '../src/data/mockIngredients';
import {
  searchRecipes,
  calcRecipeCost,
  formatRecipeIngredients
} from '../src/recipes';

describe('Search Recipes', () => {
  it('Should find multiple recipes with the same tag', () => {
    const filteredRecipes = searchRecipes(recipeData, 'breakfast');
    const result = filteredRecipes;

    expect(result).to.deep.equal([
      {
        id: 2,
        image: 'url',
        ingredients: [
          { id: 103, quantity: { amount: 1, unit: 'one egg' } },
          { id: 105, quantity: { amount: 1, unit: 'cup' } },
          { id: 106, quantity: { amount: 2, unit: 'cup' } },
          { id: 110, quantity: { amount: 2, unit: 'tbsp' } },
          { id: 111, quantity: { amount: 1, unit: '1/8 cup' } }
        ],
        instructions: [
          { instruction: 'This is instruction number 1', number: 1 },
          { instruction: 'This is instruction number 2', number: 2 },
          { instruction: 'This is instruction number 3', number: 3 }
        ],
        name: 'Waffles',
        tags: ['breakfast', 'desert', 'snack']
      },
      {
        id: 3,
        image: 'url',
        ingredients: [
          { id: 103, quantity: { amount: 1, unit: 'one egg' } },
          { id: 110, quantity: { amount: 1, unit: 'tbsp' } },
          { id: 118, quantity: { amount: 2, unit: 'slice' } }
        ],
        instructions: [
          { instruction: 'This is instruction number 1', number: 1 },
          { instruction: 'This is instruction number 2', number: 2 },
          { instruction: 'This is instruction number 3', number: 3 }
        ],
        name: 'Bacon and Eggs',
        tags: ['breakfast']
      }
    ]);
  });

  it('Should find a single recipe with a unique tag', () => {
    const filteredRecipes = searchRecipes(recipeData, 'dinner');
    const result = filteredRecipes.map(recipe => recipe.name);

    expect(result).to.deep.equal(['Veggie Stir Fry']);
  });

  it('Should find a recipe with a name that directly matches the search', () => {
    const filteredRecipes = searchRecipes(recipeData, 'Waffles');
    const result = filteredRecipes[0].name;

    expect(result).to.equal('Waffles');
  });

  it('Should find recipes whose names include the search keyword', () => {
    const filteredRecipes = searchRecipes(recipeData, 'and');
    const result = filteredRecipes;

    expect(result).to.deep.equal([
      {
        id: 1,
        image: 'url',
        ingredients: [
          { id: 101, quantity: { amount: 2, unit: 'c' } },
          { id: 102, quantity: { amount: 1.5, unit: 'tbsp' } },
          { id: 104, quantity: { amount: 2, unit: 'slice' } }
        ],
        instructions: [
          { instruction: 'This is instruction number 1', number: 1 },
          { instruction: 'This is instruction number 2', number: 2 },
          { instruction: 'This is instruction number 3', number: 3 }
        ],
        name: 'Peanut Butter and Jelly',
        tags: ['lunch', 'snack']
      },
      {
        id: 3,
        image: 'url',
        ingredients: [
          { id: 103, quantity: { amount: 1, unit: 'one egg' } },
          { id: 110, quantity: { amount: 1, unit: 'tbsp' } },
          { id: 118, quantity: { amount: 2, unit: 'slice' } }
        ],
        instructions: [
          { instruction: 'This is instruction number 1', number: 1 },
          { instruction: 'This is instruction number 2', number: 2 },
          { instruction: 'This is instruction number 3', number: 3 }
        ],
        name: 'Bacon and Eggs',
        tags: ['breakfast']
      },
      {
        id: 4,
        image: 'url',
        ingredients: [
          { id: 104, quantity: { amount: 2, unit: 'slice' } },
          { id: 107, quantity: { amount: 3, unit: 'slice' } },
          { id: 108, quantity: { amount: 1, unit: 'slice' } },
          { id: 115, quantity: { amount: 1, unit: 'tbsp' } }
        ],
        instructions: [
          { instruction: 'This is instruction number 1', number: 1 },
          { instruction: 'This is instruction number 2', number: 2 },
          { instruction: 'This is instruction number 3', number: 3 }
        ],
        name: 'Turkey and Swiss Sandwich',
        tags: ['lunch']
      }
    ]);
  });

  it('Should handle search for an invalid tag', () => {
    const filteredRecipes = searchRecipes(recipeData, 'seafood');

    expect(filteredRecipes).to.equal('Sorry, we are unable to find any recipes to match seafood!');
  });

  it('Should handle search for a empty string', () => {
    const filteredRecipes = searchRecipes(recipeData, '');

    expect(filteredRecipes).to.equal(undefined);
  });
});

describe('Calculate Cost', () => {
  it("Should return the total cost of a meal's ingredients", () => {
    const recipeOne = recipeData[2];

    expect(calcRecipeCost(recipeOne, ingredientsData)).to.equal('5.33');
  });

  it("Should return the total cost of a different meal's ingredients", () => {
    const recipeTwo = recipeData[4];

    expect(calcRecipeCost(recipeTwo, ingredientsData)).to.equal('8.27');
  });
});

describe('Format ingredients', () => {
  it('Should return a formatted list of ingredients', () => {
    const recipe = recipeData[2];
    const formatted = formatRecipeIngredients(recipe, ingredientsData);

    expect(formatted).to.deep.equal([
      { name: 'eggs', amount: 1, unit: 'one egg' },
      { name: 'unsalted butter',  amount: 1, unit: 'tbsp' },
      { name: 'bacon', amount: 2, unit: 'slice' } 
    ]);
  });

  it('Should return a formatted list of ingredients from a different recipe', () => {
    const recipe = recipeData[4];
    const formatted = formatRecipeIngredients(recipe, ingredientsData);

    expect(formatted).to.deep.equal([
      { name: 'jasmine rice', amount: 1, unit: 'cup' },
      { name: 'chopped vegitables', amount: 2, unit: 'cup' },
      { name: 'tofu', amount: 1, unit: 'block' },
      { name: 'oil', amount: 2, unit: 'tbsp' },
      { name: 'garlic', amount: 3, unit: 'clove' }, 
      { name: 'soy sauce', amount: 2, unit: 'tbsp' }
    ]);
  });
});