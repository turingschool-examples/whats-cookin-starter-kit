import { expect } from 'chai';
// const chai = require('chai');
// const expect = chai.expect;
import { findRecipeIngredients, findRecipeTag, findRecipeName, findRecipePrice, findRecipeInstructions } from '../src/recipes.js';
import recipeData from '../src/data/recipes.js';
import ingredientsData from '../src/data/ingredients.js';

describe('findRecipeIngredients', () => {
  it('Should be a function', () => {
    expect(findRecipeIngredients).to.be.a('function');
  });
  it('should get list of names', () => {
    const response = findRecipeIngredients(recipeData[13].name);
    expect(response).to.deep.equal([
      'black pepper',
      'butter',
      'flat leaf parsley leaves',
      'whole garlic clove',
      'dried red chili',
      'salt',
      'jumbo shrimp',
      'vidalia onion'])
  });
})

describe('findRecipeTag', () => {
  it('Should be a function', () => {
    expect(findRecipeTag).to.be.a('function');
  });

  it('Should return a filtered list of recipes based on a tag', () => {
    const recipeTag = findRecipeTag(recipeData, 'sauce')
    console.log(recipeTag)
    expect(recipeTag).to.deep.equal(['Dirty Steve\'s Original Wing Sauce'])
  });
});


describe('findRecipeName', () => {
  it('Should be a function', () => {
    expect(findRecipeName).to.be.a('function');
  });
  it('should get a matching name', () => {
    const response = findRecipeName(recipeData, 'Chocolate');
    expect(response[0].name).to.equal('Loaded Chocolate Chip Pudding Cookie Cups')
  });
});

describe('findRecipePrice', () => {
  it('Should be a function', () => {
    expect(findRecipePrice).to.be.a('function');
  });

  it('should have the right price total', () => {
    const price = findRecipePrice(recipeData[5])
    expect(price).to.equal(18880.25);
  });
});

describe('findRecipeInstructions', function() {
  it('should be a function', function() {
    expect(findRecipeInstructions).to.be.a('function');
  });

  it('should return the instructions for a given recipe', function() {
    const userRecipe = findRecipeInstructions(recipeData, 'Pastry Cream')
    expect(userRecipe).to.deep.equal([
      {
        instruction: 'In a heavy saucepan, stir together the milk and 1/4 cup of sugar. Bring to a boil over medium heat.',
        number: 1
      },
      {
        instruction: "In a medium bowl, whisk together the egg yolks and egg. Stir together the remaining sugar and cornstarch; then stir them into the egg until smooth. When the milk comes to a boil, drizzle it into the bowl in a thin stream while mixing so that you do not cook the eggs. Return the mixture to the saucepan, and slowly bring to a boil, stirring constantly so the eggs don' t curdle or scorch on the bottom.",
        number: 2
      },
      {
        instruction: 'When the mixture comes to a boil and thickens, remove from the heat. Stir in the butter and vanilla, mixing until the butter is completely blended in.',
        number: 3
      },
      {
        instruction: 'Pour into a heat-proof container and place a piece of plastic wrap directly on the surface to prevent a skin from forming. Refrigerate until chilled before using.',
        number: 4
      }
    ])
  });
});