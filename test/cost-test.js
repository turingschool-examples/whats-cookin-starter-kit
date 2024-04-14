import { expect } from "chai";
import { calculateRecipeCost } from "../src/cost.js";
import { mockIngredients, recipe1, recipe2 } from "./data/mockData.js";

describe("calculateRecipeCost", function () {
  it("should default to zero dollars", function () {
    const totalCost = calculateRecipeCost({}, mockIngredients);
    expect(totalCost).to.be.equal(0);
  });

  it("should be able to calculate the total cost of recipe1", function () {
    const totalCost = calculateRecipeCost(recipe1, mockIngredients);
    expect(totalCost).to.be.equal(177.76);
  });

  it("should be able to calculate the total cost of recipe2", function () {
    const totalCost = calculateRecipeCost(recipe2, mockIngredients);
    expect(totalCost).to.be.equal(1715.46);
  });
});
