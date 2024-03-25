import { expect } from 'chai';
import { findRecipeIngredients } from '../src/recipes';
import  recipeData from '../src/data/recipes';
////^^^line 3 does NOT need curly braces because we are importing a "default"

describe('Recipe', () => {
  it('Should be a function', () => {
    expect(findRecipeIngredients).to.be.a('function');
  });
})

  it('Should return a filtered list of recipes based on a tag', () => {
    const recipe = findRecipeIngredients(recipeData, 'sauce')
    expect(recipe).to.deep.equal(["Dirty Steve's Original Wing Sauce"])
  })


//You should have functions that:

// Return a filtered list of recipes based on a tag. (Extension option: filtering by multiple tags)
// Return a filtered list of recipes based on a recipe name. (Extension option: filtering by name or ingredients)
// Determine the names of ingredients needed for a given recipe.
// Calculate the cost of a given recipe’s ingredients
// Return the directions / instructions for a given recipe