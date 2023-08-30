import { expect } from "chai";

const { recipeTestData, ingredientsTestData } = require("../src/data/testData");

const { recipeData } = require("../src/recipes");

const {
  filterByTag,
  searchRecipes,
  calculateCost,
  getIngredientNames,
} = require("../src/recipes");

describe("calculateCost", () => {
  it("should calculate the cost of a recipe with one ingredient", () => {
    const recipe = {
      id: 1,
      ingredients: [{ id: 1, quantity: { amount: 1 } }],
    };

    const ingredients = [{ id: 1, estimatedCostInCents: 100 }];

    const totalCost = calculateCost(recipe, ingredients);
    expect(totalCost).to.equal(100);
  });

  it("should return error message if ingredient id does not exist", () => {
    const totalCost = calculateCost(recipeTestData[0], []);
    expect(totalCost).to.equal("Ingredient not found");
  });
  //test to see if the error message works 👆
});

describe("Filter", () => {
  it("Should filter recipes when given one tag", () => {
    const taggedRecipes = filterByTag(["side dish"], recipeTestData);
    expect(taggedRecipes).to.deep.equal([recipeTestData[2], recipeTestData[3]]);
  });

  it("Should filter recipes when given multiple tags", () => {
    const taggedRecipes = filterByTag(["snack", "lunch"], recipeTestData);
    expect(taggedRecipes).to.deep.equal([
      recipeTestData[0],
      recipeTestData[1],
      recipeTestData[4],
    ]);
  });

  it("Should not add duplicates when a snack is in more than one category", () => {
    const taggedRecipes = filterByTag(
      ["hor d'oeuvre", "snack"],
      recipeTestData
    );
    expect(taggedRecipes).to.deep.equal([recipeTestData[0], recipeTestData[4]]);
  });
});

describe("Search", () => {
  it("Should search recipes when given any part of a recipes name e.g. Chocolate is in 'Chocolate Chip Cookies' and 'Chocolate Cake'", () => {
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
