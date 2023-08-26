import { expect } from "chai";

const { recipeTestData } = require("../src/data/testData");

const { filterByTag, searchRecipes } = require("../src/recipes");
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
