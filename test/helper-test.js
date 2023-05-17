import { assert } from 'chai';
import { getIngredientProperty } from '../src/helper-functions';
import {
  simpleIngredients,
  simpleRecipe,
  sampleRecipeData,
  sampleIngredientsData
} from '../src/data/sampleData';

describe('helpers', () => {
  const cookies = sampleRecipeData[0];
  const allIngredients = sampleIngredientsData;
  it('should be a function', () => {
    assert.isFunction(getIngredientProperty);
  });

  it('should be able to find the name of a specific ingredient', () => {
    const flour = getIngredientProperty(
      cookies.ingredients[0],
      allIngredients,
      'name'
    );
    assert.equal(flour, 'wheat flour');
  });

  it('should be able to find the price of a specific ingredient', () => {
    const costInCents = getIngredientProperty(
      cookies.ingredients[0],
      allIngredients,
      'estimatedCostInCents'
    );
    assert.equal(costInCents, 142);
  });

  it('should be able to find the name and price of simple ingredients', () => {
    const sugar = {
      name: getIngredientProperty(
        simpleRecipe.ingredients[0],
        simpleIngredients,
        'name'
      ),
      price: getIngredientProperty(
        simpleRecipe.ingredients[0],
        simpleIngredients,
        'estimatedCostInCents'
      ),
    };

    const salt = {
      name: getIngredientProperty(
        simpleRecipe.ingredients[1],
        simpleIngredients,
        'name'
      ),
      price: getIngredientProperty(
        simpleRecipe.ingredients[1],
        simpleIngredients,
        'estimatedCostInCents'
      ),
    };

    assert.equal(sugar.name, 'sugar');
    assert.equal(sugar.price, 500);
    assert.equal(salt.name, 'salt');
    assert.equal(salt.price, 200);
  });
});
