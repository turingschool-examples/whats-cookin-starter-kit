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

describe("Filtered List Based on Name", () => {
  it("should return a filtered list based on a name", () => {
    const result = returnFilteredListName(
      recipeData,
      "Loaded Chocolate Chip Pudding Cookie Cups"
    );
    expect(result.length).to.equal(1);
  });
});

describe("Filtered List Based on Tag", () => {
  it.skip("should return a filtered list based on a tag", () => {
    const result = returnFilteredTag(
      recipeData,
      "Loaded Chocolate Chip Pudding Cookie Cups"
    );
    expect(result.length).to.be.an("array");
  });
});

describe("Names of Ingredients", () => {
  it.skip("should determine the names of ingredients based on a recipe name", () => {
    const result = returnIngredientNames(
      recipeData,
      "Loaded Chocolate Chip Pudding Cookie Cups"
    );
    expect(result.length).to.equal(1);
  });
});

describe("Cost of Recipe", () => {
  it.skip("should calculate the cost of a given recipe's ingredients", () => {
    const result = returnRecipeCost(
      recipeData,
      "Loaded Chocolate Chip Pudding Cookie Cups"
    );
    expect(result.length).to.equal(1);
  });
});

describe("Directions for Recipe", () => {
  it.skip("should return the directions for a given recipe", () => {
    const result = returnRecipeDirections(
      recipeData,
      "Loaded Chocolate Chip Pudding Cookie Cups"
    );
    expect(result.length).to.equal(1);
  });
});
