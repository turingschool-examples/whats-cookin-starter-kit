import { expect } from 'chai';
import Recipe from '../src/classes/Recipe'
import ingredientsData from "../src/data/ingredients";
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

    it("should have an ingredients property", () => {
        expect(recipe.ingredients).to.deep.equal(sampleRecipeData[0].ingredients)
    })

    it("should have an instructions property", () => {
        expect(recipe.instructions).to.deep.equal(sampleRecipeData[0].instructions)
    })

    it("should have a name property", () => {
        expect(recipe.name).to.deep.equal(sampleRecipeData[0].name);
    })

    it("should have a tags property", () => {
        expect(recipe.tags).to.deep.equal(sampleRecipeData[0].tags);
    })

    it("should return an array of ingredient ids", () => {
        let ingredientIds = recipe.getIngredientIds()
        expect(ingredientIds).to.deep.equal([20081, 18372, 1123, 19335, 19206, 19334, 2047, 1012047, 10019903, 1145, 2050])
    })

    it("should be able to converts id numbers to ingredient", () => {
        let ingredientNames = recipe.determineRecipeIngredients(
          ingredientsData);
        expect(ingredientNames).to.have.length(11)
    })

    it("should be able to to calculate total ingredient cost", () => {
        let ingredientCost = recipe.calculateRecipeCost(ingredientsData)
        expect(ingredientCost).to.equal(27.58)
    })

    it("should have a function recipe to return recipe instructions", () => {
        let recipeInstructions = recipe.returnInstructions(sampleRecipeData[0]);
        expect(recipeInstructions).to.deeply.equal(sampleRecipeData[0].instructions)
    })
})

// Don't want to use recipee data but make a sample data file
// 
