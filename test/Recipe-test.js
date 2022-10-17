import { expect } from "chai";
import ingredientsData from "../src/data/ingredients";
import recipeSampleData from "../src/sampleSets/recipeSample";
import Recipe from "../src/classes/Recipe";

describe("Recipe", function () {
  const recipe1 = new Recipe(recipeSampleData[0]);
  const recipe2 = new Recipe(recipeSampleData[1]);
  const recipe3 = new Recipe(recipeSampleData[2]);
  const recipesList = [recipe1, recipe2, recipe3];

  it("Should be a function", function () {
    expect(Recipe).to.be.a("function");
  });
  it("Should have an id", function () {
    expect(recipesList[0].id).to.equal(12345);
    expect(recipesList[1].id).to.equal(23456);
  });
  it("Should have an image", function () {
    expect(recipesList[0].image).to.not.equal(null);
    expect(recipesList[2].image).to.not.equal(null);
  });
  it("Should have an array for ingredients that holds objects", function () {
    expect(recipesList[0].ingredients).to.be.an.instanceOf(Array);
    expect(recipesList[0].ingredients[0]).to.deep.equal({
      id: 20081,
      quantity: {
        amount: 1.5,
        unit: "c",
      },
    });
    expect(recipesList[1].ingredients[1]).to.deep.equal({
      id: 1123,
      quantity: {
        amount: 1,
        unit: "large",
      },
    });
  });
  it("Should have an instructions array that holds objects", function () {
    expect(recipesList[0].instructions).to.be.an.instanceOf(Array);
    expect(recipesList[0].instructions[2]).to.deep.equal({
      instruction: "Step 3",
      number: 3,
    });
    expect(recipesList[1].instructions[0]).to.deep.equal({
      instruction: "Step 1",
      number: 1,
    });
  });
  it("Should have a name", function () {
    expect(recipesList[0].name).to.equal("Chocolate Chip Cookies");
    expect(recipesList[2].name).to.equal("Chocolate Cake");
  });
  it("Should have an array of tags", function () {
    expect(recipesList[0].tags).to.be.an.instanceOf(Array);
    expect(recipesList[0].tags).to.deep.equal([
      "antipasti",
      "starter",
      "snack",
      "appetizer",
    ]);
    expect(recipesList[2].tags).to.deep.equal(["antipasti", "appetizer"]);
  });
  it("Should give the names of the ingredients needed", function () {
    expect(recipesList[0].getIngredientNames(ingredientsData)).to.deep.equal([
      "wheat flour",
      "bicarbonate of soda",
      "eggs",
      "salt",
      "fine sea salt",
    ]);
    expect(recipesList[1].getIngredientNames(ingredientsData)).to.deep.equal([
      "wheat flour",
      "eggs",
      "instant vanilla pudding",
    ]);
  });
  it("Should give the directions/instructions needed", function () {
    expect(recipe1.getDirections()).to.deep.equal([
      "Step 1",
      "Step 2",
      "Step 3",
      "Step 4",
    ]);
  });
  it("Should get the cost of the ingredients", function () {
    expect(recipe1.getCosts(ingredientsData)).to.deep.equal([
      213, 291, 472, 140, 12672,
    ]);
  });
});
