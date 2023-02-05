import { expect } from 'chai';
import Recipe from '../src/classes/Recipe'
import sampleIngredientsData from "../src/data/sample-ingredient-data";
import sampleRecipeData from "../src/data/sample-recipe-data";

describe("Recipe", () => {
    let recipe
      
    beforeEach(() => {
        recipe = new Recipe(sampleRecipeData[0]);
    })

    it("should be a function", () => {
        expect(Recipe).to.be.a('function')
    })

    it("should be an instance of Recipe", () => {
        expect(recipe).to.be.an.instanceOf(Recipe)
    })

    it("should have an ID property", () => {
        expect(recipe.id).to.deep.equal(sampleRecipeData[0].id);
    })

    it("should have an image property", () => {
        expect(recipe.image).to.deep.equal(sampleRecipeData[0].image)
    })

    it.only("should have an ingredients property", () => {
        // console.log(sampleRecipeData[0].ingredients);
        expect(recipe.ingredients).to.deep.equal(sampleRecipeData[0].ingredients)
    })
    it("should have an instructions property", () => {
        // console.log(sampleRecipeData[0].instructions);
        expect(recipe.instructions).to.deep.equal(sampleRecipeData[0].instructions)
    })
    it("should have a name property", () => {
        // console.log(sampleRecipeData[0].name);
        expect(recipe.name).to.deep.equal(sampleRecipeData[0].name);
    });
    it("should have a tags property", () => {
        // console.log(sampleRecipeData[0])
        expect(recipe.tags).to.deep.equal(sampleRecipeData[0].tags);
    });
    it.only("should return an array of ingredient ids", () => {
        let ingredientIds = recipe.getIngredientIds()
        console.log(ingredientIds)
        expect(ingredientIds).to.deep.equal([20081, 18372, 1123, 19335, 19206, 19334, 2047, 1012047, 10019903, 1145, 2050])
    })
})

// Don't want to use recipee data but make a sample data file
// 
