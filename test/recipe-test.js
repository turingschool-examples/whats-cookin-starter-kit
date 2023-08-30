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

describe("filter list based on tag", () => {
  
  it("should return a filtered list based on a tag", () => {
    const result = returnFilteredTag(recipeTestData, "starter");
    expect(result[0].id).to.equal(595736);
    expect(result.length).to.equal(1);
  });

  it("should work with different tags", () => {
    const result = returnFilteredTag(recipeTestData, "lunch");
    expect(result[0].id).to.equal(678353);
    expect(result.length).to.equal(1);
  });

  it("should return an empty array if no matches are found", () => {
    const result = returnFilteredTag(recipeTestData, "second breakfeast");
    expect(result.length).to.equal(0);
  });
});

describe("filter list based on name", () => {
  
  it("should return a filtered list based on a name", () => {
    const result = returnFilteredListName(recipeTestData, "Loaded Chocolate Chip Pudding Cookie Cups");
    expect(result[0].id).to.equal(595736);
    expect(result.length).to.equal(1);
  });
  
  it("should work with a different name", () => {
    const result = returnFilteredListName(recipeTestData, "Maple Dijon Apple Cider Grilled Pork Chops");
    expect(result[0].id).to.equal(678353);
    expect(result.length).to.equal(1);
  })
});

describe("return ingredients of a recipe", () => {
  
  it("should determine the names of ingredients based on a recipe name", () => {
    const result = returnIngredientNames(recipeTestData, ingredientsTestData, 595736);
    expect(result[0]).to.equal("wheat flour")
    expect(result.length).to.equal(11);
  });

  it("should work with a different recipe", () => {
    const result = returnIngredientNames(recipeTestData, ingredientsTestData, 678353);
    expect(result.length).to.equal(12);
  })

  it("should return an empty array if no recipe found", () => {
    const result = returnIngredientNames(recipeTestData, ingredientsTestData, "noRecipe");
    expect(result.length).to.equal(0);
  })
});

describe("calculate cost of ingredients", () => {
 
  it("should calculate the cost of a given recipe's ingredients", () => {
    const result = returnRecipeCost(recipeTestData, ingredientsTestData, 595736);
    expect(result).to.equal(34);
  });

  it("should calculate the cost of a different recipe's ingredients", () => {
    const result = returnRecipeCost(recipeTestData, ingredientsTestData, 678353);
    expect(result).to.equal(0);
  });
});

describe("find directions of a recipe", () => {
  
  it("should return the directions for a given recipe", () => {
    const result = returnRecipeDirections(recipeTestData, 595736);
    expect (result[0]).to.equal("In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.");
    expect(result.length).to.equal(6);
  });
  
  it ("should return the directions for another recipe", () => {
    const result = returnRecipeDirections(recipeTestData, 678353);
    expect (result[0]).to.equal("Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!");
    expect(result.length).to.equal(1);
  });

  it ("should return an empty array if no matches are found", () => {
    const result = returnRecipeDirections(recipeTestData, "noMatch");
    expect(result.length).to.equal(0);
  });
});