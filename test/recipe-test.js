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
    expect(result.length).to.equal(9);
  });
});

describe("Cost of Recipe", () => {
  it("should calculate the cost of a given recipe's ingredients", () => {
    const result = returnRecipeCost(recipeData, ingredientsData, 595736);
    expect(result).to.equal(177.76000000000002);
  });
});

describe("Filtered List Based on Name", () => {
  it("should return a filtered list based on a name", () => {
    const result = returnFilteredListName(
      recipeData,
      "Loaded Chocolate Chip Pudding Cookie Cups"
    );
    expect(result.length).to.equal(1);
  });
});

describe("Directions for Recipe", () => {
  it("should return the directions for a given recipe", () => {
    const result = returnRecipeDirections(recipeData, 595736);
    expect(result.length).to.equal(6);
  });
});

describe("Filtered List Based on Name", () => {
  it("should return a filtered list based on a name", () => {
    const result = returnFilteredListName(
      recipeData,
      "Loaded Chocolate Chip Pudding Cookie Cups"
    );
    expect(result.length).to.equal(1);
  });
});

describe("Names of Ingredients", () => {
  it("should determine the names of ingredients based on a recipe name", () => {
    const result = returnIngredientNames(recipeData, ingredientsData, 595736);
    expect(result.length).to.equal(11);
  });
});
