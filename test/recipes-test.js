import { expect } from 'chai';
import { filterRecipesByTag, findRecipeByName, findRecipeIngredients, calcRecipeCost, returnRecipeInstructions } from '../src/recipes';

import recipeData from "../src/data/mockRecipes"
import ingredientsData from "../src/data/mockIngredients"

// beforeEach(() => {
//   const recipeData = recipeData.map(data => data);
//   const ingredientsData = ingredientsData.map(data => data);
// });

describe('Search by Tag', () => {
  it('Should be a function', () => {
    expect(filterRecipesByTag).to.be.a('function');
  });

  
  // Test with valid tag and one matching recipe.
  // Test with valid tag and multiple matching recipes
  // Test with invalid tag.
  // Test with empty string.
  it('Should filter for multiple recipes with the same tag', () => {
    const filteredRecipes = filterRecipesByTag('breakfast');
    const result =  filteredRecipes.map(recipe => recipe.name);
    
    expect(result).to.deep.equal(['Waffles', 'Bacon and Eggs']); 
  })
  
  it('Should...', () => {

  })
})

describe('Search by Name', () => {
  it('Should be a function', () => {
    expect(findRecipeByName).to.be.a('function');
  });
  // Test with valid name and one matching recipe.
  // Test with valid name and multiple matching recipes
  // Test with invalid name.
  // Test with empty string.
  
  it('Should...', () => {

  })
  
  it('Should...', () => {

  })
})

describe('Search by Ingredients', () => {
  it('Should be a function', () => {
    expect(findRecipeIngredients).to.be.a('function');
  });
  // Test with valid ingredient passed and one matching recipe
  // Test with valid ingredient passed and multiple matching recipes
  // Test with partially valid ingerdient passed
  // Test with invalid ingredient passed
  // Test with an empty string passed
  
  it('Should...', () => {

  })
  
  it('Should...', () => {

  })
})

describe('Calculate Cost', () => {
  it('Should be a function', () => {
    expect(calcRecipeCost).to.be.a('function');
  });
  // Test that it returns the total cost
  //
  
  it('Should...', () => {

  })
  
  it('Should...', () => {

  })
})

describe('Return Cooking Instructions', () => {
  it('Should be a function', () => {
    expect(returnRecipeInstructions).to.be.a('function');
  });
  
  it('Should...', () => {

  })
  
  it('Should...', () => {

  })
})