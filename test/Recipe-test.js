import { expect } from 'chai';
import Recipe from '../src/classes/Recipe'
import sampleIngredientsData from "../src/data/sample-ingredient-data";
import sampleRecipeData from "../src/data/sample-recipe-data";

describe("Recipe", () => {
    let recipe
      
    beforeEach(() => {
        recipe = new Recipe(sampleIngredientsData[0])
        console.log(recipe)
    })

    it("should be a function", () => {
        expect(Recipe).to.be.a('function')
    })

    it.only("should be an instance of")
})

// Don't want to use recipee data but make a sample data file
// 
