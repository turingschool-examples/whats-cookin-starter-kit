const chai = require("chai");
const Ingredient = require("../src/classes/Ingredient");
const expect = chai.expect;

describe("Ingredient", () => {
  let ingredient, ingredientRow;
  beforeEach(() => {
    ingredientRow = {
      id: 20081,
      name: "wheat flour",
      estimatedCostInCents: 142,
    };
    ingredient = new Ingredient(ingredientRow, {
      amount: 1.5,
      unit: "c",
    });
  });
  it("should be a function", () => {
    expect(Ingredient).to.be.a("function");
  });

  it("should have an id", () => {
    expect(ingredient.id).to.equal(20081);
  });

  it("should have a name", () => {
    expect(ingredient.name).to.equal("wheat flour");
  });

  it("should have a cost", () => {
    expect(ingredient.estCost).to.equal(142);
  });

  it("should have quantity", () => {
    expect(ingredient.quantity).to.deep.equal({
      amount: 1.5,
      unit: "c",
    });
  });

  it("should count an estimated cost", () => {
    expect(ingredient.countEstCost()).to.equal(213);
  });
});
