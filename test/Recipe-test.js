import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
import {sampleIngredientsData, sampleUsersData, sampleRecipeData} from '../src/data/sample-data';

describe('Recipe', () => {
     sampleIngredientsData
     sampleUsersData
     sampleRecipeData
     let recipe


    beforeEach(() => {
        recipe = new Recipe(sampleRecipeData[0]);
        sampleIngredientsData; 
        sampleUsersData;
        sampleRecipeData;
    });

    it('Should be a function', () => {
      expect(Recipe).to.be.a('function');
    });

    it('should hold properties of id', () => {
        expect(recipe.id).to.equal(sampleRecipeData[0].id)
    });
  });

  //information (provided in the data file). -- id, image, ingredients array, instructions array, name, tags array
// It should have methods to:
// Determine the names of ingredients needed
// Get the cost of its ingredients
// Return its directions / instructions 

