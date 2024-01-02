import { expect } from 'chai';
import recipeData from '../src/data/mockRecipes';
import { removeRecipe, saveRecipe } from '../src/users';

describe('Save recipe', () => {
  it('Should be a function', () => {
    expect(saveRecipe).to.be.a('function');
  });

  it('Should save a recipe', () => {
    let recipesToCook = [];
    let currentRecipe = recipeData[1];
    saveRecipe(recipesToCook, currentRecipe);

    expect(recipesToCook).to.deep.equal([
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
      }
    ]);
  });

  it('Should save another recipe', () => {
    let recipesToCook = [recipeData[0]];
    let currentRecipe = recipeData[1];
    saveRecipe(recipesToCook, currentRecipe);

    expect(recipesToCook).to.deep.equal([
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
      }
    ]);
  });
});

describe('Remove Saved Recipe', () => {
  it('Should be a function', () => {
    expect(removeRecipe).to.be.a('function');
  });

  it('Should remove a recipe', () => {
    let recipesToCook = [recipeData[0], recipeData[1]];
    let currentRecipe = recipeData[1];
    removeRecipe(recipesToCook, currentRecipe);

    expect(recipesToCook).to.deep.equal([
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
      }
    ]);
  });
});
