import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
import sampleIngredientsData from '../src/data/sample-data';
import sampleUsersData from '../src/data/sample-data';
import samplesRecipeData from '../src/data/sample-data';

describe('Recipe', () => {
    let sampleIngredientsData, sampleUsersData, sampleRecipeData, recipe;

    beforeEach(() => {
        recipe = new Recipe();
        sampleIngredientsData; 
        sampleUsersData;
        sampleRecipeData;
    });

    it('Should be a function', () => {
      expect(Recipe).to.be.a('function');
    });

    it('should hold properties of id', () => {
        expect(recipe.id).to.be(sampleRecipeData.id)
    });
  });

  //information (provided in the data file). -- id, image, ingredients array, instructions array, name, tags array
// It should have methods to:
// Determine the names of ingredients needed
// Get the cost of its ingredients
// Return its directions / instructions 

