import { expect } from 'chai';
import Recipe from '../src/classes/Recipe'
import sampleIngredientsData from "../src/data/sample-ingredient-data";
import sampleRecipeData from "../src/data/sample-recipe-data";

describe("Recipe", () => {
    let recipe
      
    beforeEach(() => {
        recipe = new Recipe(sampleIngredientsData[0])
    })

    it("should be a function", () => {
        expect(Recipe).to.be.a('function')
    })

    it("should be an instance of Recipe", () => {
        expect(recipe).to.be.an.instanceOf(Recipe)
    })

    it("should have an ID property", () => {
        expect(recipe.id).to.deep.equal(sampleIngredientsData[0].id)
    })

    it("should have an image property", () => {
        expect(recipe.image).to.deep.equal(sampleIngredientsData[0].image)
    })

    it("should have an ingredients property", () => {
        expect(recipe.ingredients).to.deep.equal(sampleIngredientsData[0].ingredients)
    })
    it("should have an instructions property", () => {
        expect(recipe.instructions).to.deep.equal(sampleIngredientsData[0].instructions)
    })
    it("should have a name property", () => {
        expect(recipe.name).to.deep.equal(sampleIngredientsData[0].name);
    });
    it.only("should have a tags property", () => {
        expect(recipe.tags).to.deep.equal(sampleIngredientsData[0].tags);
    });
})

// Don't want to use recipee data but make a sample data file
// 
