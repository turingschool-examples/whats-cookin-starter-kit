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
    it('should hold property of id', () => {
      expect(recipe.id).to.equal(sampleRecipeData[0].id)
    });
    it("should hold property of image", () => {
      expect(recipe.image).to.equal(sampleRecipeData[0].image)
    })
    it("should hold property of ingredients", () => {
      expect(recipe.ingredients).to.deep.equal(sampleRecipeData[0].ingredients)
    })
    it("should hold property of instructions", () => {
      expect(recipe.instructions).to.deep.equal(sampleRecipeData[0].instructions)
    })
    it("should hold property of name", () => {
      expect(recipe.name).to.equal(sampleRecipeData[0].name)
    })
    it("should hold property of tags", () => {
      expect(recipe.tags).to.deep.equal(sampleRecipeData[0].tags)
    })
    it("determine the names of ingredients needed", () => {
      expect(recipe.determineIngredients()).to.deep.equal(sampleRecipeData[0].ingredientsList)
    })
  });

  //information (provided in the data file). -- id, image, ingredients array, instructions array, name, tags array
// It should have methods to:
// Determine the names of ingredients needed
// Get the cost of its ingredients
// Return its directions / instructions 

