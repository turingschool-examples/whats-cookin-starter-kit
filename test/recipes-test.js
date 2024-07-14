import { expect } from 'chai';
// const chai = require('chai');
// const expect = chai.expect;
import { findRecipeIngredients, findRecipeTag, findRecipeName, findRecipePrice, findRecipeInstructions } from '../src/recipes.js';
// import { ingredientsPromise, ingredientList, handleIngredients, handleRecipes,  recipesPromise } from '../src/apiCalls.js';
// import recipeData from '../src/data/recipes.js';
import ingredientsData from '../src/data/ingredients.js';
import newRecipeData from '../src/data/recipesSample.js';

describe('findRecipeIngredients', () => {
  it('Should be a function', () => {
    expect(findRecipeIngredients).to.be.a('function');
  });
  it('should get list of names', () => {
    const myRecipeIngredient = findRecipeIngredients(newRecipeData[1].name);
    // console.log(newRecipeData[1].ingredients)
    expect(myRecipeIngredient).to.deep.equal([
      'apple cider',
      'apple',
      'corn starch',
      'dijon style mustard',
      'whole garlic clove',
      'whole grain dijon mustard',
      'maple',
      'miso',
      'pork chop',
      's&p',
      'soy sauce',
      'sriracha sauce'])
  });
})

describe('findRecipeTag', () => {
  it('Should be a function', () => {
    expect(findRecipeTag).to.be.a('function');
  });

  it('Should return a filtered list of recipes based on a tag', () => {
    const recipeTag = findRecipeTag(newRecipeData, 'sauce')
    expect(recipeTag).to.deep.equal(['Dirty Steve\'s Original Wing Sauce'])
  });
});


describe('findRecipeName', () => {
  it('Should be a function', () => {
    expect(findRecipeName).to.be.a('function');
  });
  it('should get a matching name', () => {
    const recipeName = findRecipeName(newRecipeData, 'Chocolate');
    expect(recipeName[0].name).to.equal('Loaded Chocolate Chip Pudding Cookie Cups')
  });
});

describe('findRecipePrice', () => {
  it('Should be a function', () => {
    expect(findRecipePrice).to.be.a('function');
  });

  it('should have the right price total', () => {
    const recipePrice = findRecipePrice(newRecipeData[5])
    expect(recipePrice).to.equal(18880.25);
  });
});

describe('findRecipeInstructions', function() {
  it('should be a function', function() {
    expect(findRecipeInstructions).to.be.a('function');
  });

  it('should return the instructions for a given recipe', function() {
    const userRecipe = findRecipeInstructions(newRecipeData, 'Elvis Pancakes')
    expect(userRecipe).to.deep.equal([
      {
        "instruction": "Watch how to make this recipe.",
        "number": 1
    },
    {
        "instruction": "In a large bowl, whisk together buttermilk, eggs, baking powder, sugar, salt and butter.",
        "number": 2
    },
    {
        "instruction": "In another large bowl mix together all-purpose flour and buckwheat flour.",
        "number": 3
    },
    {
        "instruction": "Slowly add flour into the wet ingredients mixing with a whisk.",
        "number": 4
    },
    {
        "instruction": "Mix until there are no lumps and the batter is smooth and velvety.",
        "number": 5
    },
    {
        "instruction": "In a large cast iron skillet or flat grill pan over medium-high heat, melt a tablespoon of butter. Ladle pancake batter onto skillet to desired size. Using the ladle, form pancake into circular shape. Cook on each side for 2 to 3 minutes or until golden brown. Set pancakes aside and keep warm. Repeat with remaining ingredients.",
        "number": 6
    },
    {
        "instruction": "Once completed, spread peanut butter on a pancake, layer it with sliced bananas and drizzle it with honey. Top the pancake with another pancake to form a sandwich. Repeat with remaining pancakes and serve with extra honey.",
        "number": 7
    }
    ])
  });
});