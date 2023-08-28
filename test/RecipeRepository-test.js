import { expect } from "chai";

const { recipeTestData, ingredientsTestData } = require("../src/data/testData");

// const { recipeData } = require("../src/recipes");

const {
  filterByTag,
  searchRecipes,
  getIngredientNames,
  getRecipeInstructions,
} = require("../src/recipes");

//for each //=> if we are using the same data set for all tests, we can use before each to set up the data
describe("getRecipeInstructions", () => {
  it("should return instructions for a given recipe", () => {
    const recipeName = "Loaded Chocolate Chip Pudding Cookie Cups";
    const instructions = getRecipeInstructions(recipeName, recipeTestData);
    expect(instructions).to.deep.equal(recipeTestData[0].instructions);
  });

  it("should return instructions for a different recipe", () => {
    const recipeName = "Maple Dijon Apple Cider Grilled Pork Chops";
    const instructions = getRecipeInstructions(recipeName, recipeTestData);
    expect(instructions).to.deep.equal(recipeTestData[1].instructions);
  });

  it("should return an empty array if no recipe is found", () => {
    const recipeName = "Not a recipe";
    const instructions = getRecipeInstructions(recipeName, recipeTestData);
    expect(instructions).to.deep.equal([]);
  });

  it("should return an empty array when recipe list is empty", () => {
    const recipeName = "Some Recipe";
    const instructions = getRecipeInstructions(recipeName, []);
    expect(instructions).to.deep.equal([]);
  });

  it("should handle null input", () => {
    const instructions = getRecipeInstructions(null, recipeTestData);
    expect(instructions).to.deep.equal([]);
  });

  it("should handle undefined input", () => {
    const instructions = getRecipeInstructions(undefined, recipeTestData);
    expect(instructions).to.deep.equal([]);
  });
});
//added some extra tests to make sure it handles null and undefined inputs but we can
//figure out what we want to do with those later

////initially removed the tests you had written so I could write my own, but I'm going to add them back in so we can tweak them later

// describe("Recipe", () => {
//   it("Should be a function", () => {
//     expect(filterByTag).to.be.a("function");
//   });
// });

describe("Filter", () => {
  it("Should filter recipes by tag", () => {
    const taggedRecipes = filterByTag("side dish", recipeTestData);
    expect(taggedRecipes).to.deep.equal([recipeTestData[2], recipeTestData[3]]);
  });

  it("Should filter a list of recipes when given the name/partial name of a recipe", () => {
    const searchedRecipe = searchRecipes("chocolate", recipeTestData);
    expect(searchedRecipe).to.deep.equal([
      recipeTestData[0],
      recipeTestData[3],
    ]);
  });
});

describe("get ingredients", () => {
  it("Should determine the list of ingredients for a recipe", () => {
    const ingredientList = getIngredientNames(
      recipeTestData[0],
      ingredientsTestData
    );
    expect(ingredientList).to.deep.equal([
      "wheat flour",
      "bicarbonate of soda",
      "eggs",
      "sucrose",
      "instant vanilla pudding",
      "brown sugar",
      "salt",
      "fine sea salt",
      "semi sweet chips",
      "unsalted butter",
      "vanilla",
    ]);
  });
});
