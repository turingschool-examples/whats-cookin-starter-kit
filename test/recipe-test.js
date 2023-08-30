const chai = require("chai");
const expect = chai.expect;

// const { createFunction } = require("../src/scripts.js");
import {
  returnFilteredListName,
  returnIngredientNames,
  returnFilteredTag,
  returnRecipeCost,
  returnRecipeDirections,
} from "../src/functions.js"
//from functions
// const ingredientsData = require("../src/data/ingredients.js");
import ingredientsTestData from "../src/data/ingredients-test-data.js";

import recipeTestData from "../src/data/recipes-test-data.js";

import usersTestData from "../src/data/users-test-data.js";

describe("Filtered List Based on Tag", () => {
  it("should return a filtered list based on a tag", () => {
    const result = returnFilteredTag(recipeTestData, "starter");
    expect(result[0].id).to.equal(595736);
    expect(result.length).to.equal(1);
  });

  it("should return a filtered list based on a tag", () => {
    const result = returnFilteredTag(recipeTestData, "lunch");
    expect(result[0].id).to.equal(678353);
    expect(result.length).to.equal(1);
  });

  it("should return an empty array if no matches", () => {
    const result = returnFilteredTag(recipeTestData, "second breakfeast");
    expect(result.length).to.equal(0);
  });
});

// describe("Cost of Recipe", () => {
//   it("should calculate the cost of a given recipe's ingredients", () => {
//     const result = returnRecipeCost(recipeData, ingredientsData, 595736);
//     expect(result).to.equal(177.76000000000002);
//   });
// });

// describe("Filtered List Based on Name", () => {
//   it("should return a filtered list based on a name", () => {
//     const result = returnFilteredListName(
//       recipeData,
//       "Loaded Chocolate Chip Pudding Cookie Cups"
//     );
//     expect(result.length).to.equal(1);
//   });
// });

// describe("Directions for Recipe", () => {
//   it("should return the directions for a given recipe", () => {
//     const result = returnRecipeDirections(recipeData, 595736);
//     expect(result.length).to.equal(6);
//   });
// });

// describe("Filtered List Based on Name", () => {
//   it("should return a filtered list based on a name", () => {
//     const result = returnFilteredListName(
//       recipeData,
//       "Loaded Chocolate Chip Pudding Cookie Cups"
//     );
//     expect(result.length).to.equal(1);
//   });
// });

// describe("Names of Ingredients", () => {
//   it("should determine the names of ingredients based on a recipe name", () => {
//     const result = returnIngredientNames(recipeData, ingredientsData, 595736);
//     expect(result.length).to.equal(11);
//   });
// });
