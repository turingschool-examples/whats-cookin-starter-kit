import { expect } from 'chai';
import { findRecipeTags, findRecipeIngredients, createRecipesNeeded } from '../src/recipes';
import recipeData from '../src/data/recipes';
import ingredientsData from '../src/data/ingredients';
////^^^line 3 does NOT need curly braces because we are importing a "default"

describe('Recipe Tag', () => {
  it('Should be a function', () => {
    expect(findRecipeTags).to.be.a('function');
  });
})

  it('Should return a filtered list of recipes based on a tag', () => {
    const recipe = findRecipeTags(recipeData, 'sauce')
    expect(recipe).to.deep.equal(["Dirty Steve's Original Wing Sauce"])
  })

  describe('Recipe Ingredient', () => {
    it('Should be a function', () => {
      expect(findRecipeIngredients).to.be.a('function');
    });
  })
  
    it('Should return a filtered list of recipes based on a tag', () => {
      const recipe = findRecipeIngredients(recipeData, 'Vegan')
      expect(recipe).to.deep.equal(['Vegan Lentil Loaf'])
    })

    describe('Recipe Ingredient List', () => {
      it('Should be a function', () => {
        expect(createRecipesNeeded).to.be.a('function');
      });
    })

    it('Should create a list of ingredients', () => {
      const ingredients = createRecipesNeeded(412309, recipeData, ingredientsData)
      expect(ingredients).to.deep.equal([])
    })
//<><><><><>TO DO: Create Filter for two tags<><><><><>
//<><><><><>TO DO: Condense filter by case sensitivity and spaces<><><><><>


//You should have functions that:

// Determine the names of ingredients needed for a given recipe.
// Calculate the cost of a given recipe’s ingredients
// Return the directions / instructions for a given recipe