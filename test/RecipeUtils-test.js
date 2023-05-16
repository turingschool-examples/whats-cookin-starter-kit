import { expect } from 'chai';
import { recipesFromTag, recipesfromName, findRecipe, findIngredientNames, getRecipeCost } from '../src/recipeUtils';
import recipeData from '../src/data/recipes-sample.js';
import ingredientsData from '../src/data/ingredients-sample.js';


describe('RecipeUtils', () => {
  it('Should be a function', () => {
    expect(recipesFromTag).to.be.a('function');
  });
  it ('Should filter recipes based on tag', () => {
    const expected = 'Loaded Chocolate Chip Pudding Cookie Cups'
    const filtered = recipesFromTag(recipeData, 'starter')
    expect(filtered.length).to.equal(1)
    expect(filtered[0].name).to.equal(expected)
  });
  it ('Should filter recipes if tag applies to multiple recipes', () => {
    const expected = ['Thai Chicken Tenders with Broiled Pineapple Slaw', 'Maple Dijon Apple Cider Grilled Pork Chops']
    const filtered = recipesFromTag(recipeData, 'lunch')
    expect(filtered.length).to.equal(2)
    const names = filtered.map(f => f.name)
    expect(names).to.have.members(expected)
  });
  it ('Should filter recipes based on name', () => {
    const filtered = recipesfromName(recipeData, 'Thai Chicken Tenders with Broiled Pineapple Slaw')
    expect(filtered.length).to.equal(1)
  })
  it ('Should filter recipes based on a similar name', () => {
    const expected = 'Thai Chicken Tenders with Broiled Pineapple Slaw'
    const filtered = recipesfromName(recipeData, 'Thai Chicken')
    expect(filtered.length).to.equal(1)
    expect(filtered[0].name).to.equal(expected)
  })
  it ('Should return nothing if no recipes match the user input name', () => {
    const filtered = recipesfromName(recipeData, 'Spicy Potatoes')
    expect(filtered.length).to.equal(0)
  })
})

describe('findRecipe', () => {
  it('should be a function', () => {
    expect(findRecipe).to.be.a('function');
  });

  it('should return the correct recipe based on the recipe name', () => {
    const recipeName = 'Loaded Chocolate Chip Pudding Cookie Cups';
    const recipe = findRecipe(recipeData, recipeName);
    expect(recipe).to.deep.equal(recipeData[0]);
  });

  it('should return undefined if the recipe is not found', () => {
    const recipeName = 'Spaghetti and Meatballs';
    const recipe = findRecipe(recipeData, recipeName);
    expect(recipe).to.be.undefined;
  });
});

describe('findIngredientNames', () => {
  it('should be a function', () => {
    expect(findRecipe).to.be.a('function');
  });

  it('should return an array of ingredient names for specific recipe', () => {
    const recipeName = 'Loaded Chocolate Chip Pudding Cookie Cups';
    const ingredients = findIngredientNames(recipeData, ingredientsData, recipeName);
    expect(ingredients).to.deep.equal([ 'wheat flour',
      'bicarbonate of soda',
      'eggs',
      'sucrose',
      'instant vanilla pudding',
      'brown sugar',
      'salt',
      'fine sea salt',
      'semi sweet chips',
      'unsalted butter',
      'vanilla' ]);
  });

  it('should return message if no recipe is found', () => {
    const recipeName = 'Not a recipe';
    const ingredients = findIngredientNames(recipeData, ingredientsData, recipeName);
    expect(ingredients).to.equal("Sorry, we don't have that recipe.")
  });
});

describe('getRecipeCost', () => {
  it('should be a function', () => {
    expect(getRecipeCost).to.be.a('function');
  });

  it('should return the total cost of a recipe', () => {
    const recipe = recipeData[0];
    const expectedCost = '177.76'
    const actualCost = getRecipeCost(recipe)
    expect(actualCost).to.equal(expectedCost);
  })
});


