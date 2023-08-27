const chai = require("chai");
const expect = chai.expect;

// const { createFunction } = require("../src/scripts.js");
import {
  createFunction,
  returnFilteredListName,
  returnIngredientNames,
  returnFilteredTag,
  returnRecipeCost,
  returnRecipeDirections,
} from "../src/scripts.js";

// const ingredientsData = require("../src/data/ingredients.js");
import ingredientsData from "../src/data/ingredients.js";

import recipeData from "../src/data/recipes.js";

import usersData from "../src/data/users.js";

describe("Testing", () => {
  it("Should be a function", () => {
    expect(createFunction).to.be.a("function");
  });

  it("should return an array", () => {
    const result = createFunction(recipeData);
    expect(result).to.be.an("array");
  });
});

describe("Filtered List Based on Tag", () => {
  it("should return a filtered list based on a tag", () => {
    const result = returnFilteredTag(recipeData, "starter");
    console.log(result);
    expect(result.length).to.equal(9);
  });
});