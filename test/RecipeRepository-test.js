import { expect } from "chai";

const { recipeTestData, ingredientsTestData } = require("../src/data/testData");

const {
  filterByTag,
  searchRecipes,
  calculateCost,
  getIngredientNames,
} = require("../src/recipes");

// locate recipe
// save recipe - the user is not able to save a duplicate
// delete recipe - the user is not able to over a duplicate
// search - nothing found

describe("calculateCost", () => {
  it("should calculate the cost of a recipe with one ingredient", () => {
    const recipe = {
      id: 1,
      ingredients: [{ id: 1, quantity: { amount: 1 } }],
    };
    const ingredients = [{ id: 1, estimatedCostInCents: 100 }];
    const totalCost = calculateCost(recipe, ingredients);

    expect(totalCost).to.equal(1);
  });
  //happy path

  it("should throw an error if ingredient id does not exist", () => {
    const recipe = {
      id: 2,
      ingredients: [{ id: 2, quantity: { amount: 1 } }],
    };
    const ingredients = [{ id: 1, estimatedCostInCents: 100 }];
    try {
      calculateCost(recipe, ingredients);
      expect.fail("Expected an error to be thrown");
    } catch (error) {
      expect(error.message).to.equal("Ingredient not found");
    }
  });
  //sad path

  it("should calculate the cost of a different recipe's ingredients", () => {
    const recipe = {
      id: 4,
      ingredients: [
        { id: 4, quantity: { amount: 2 } },
        { id: 5, quantity: { amount: 3 } },
      ],
    };
    const ingredients = [
      { id: 4, estimatedCostInCents: 150 },
      { id: 5, estimatedCostInCents: 200 },
    ];
    const totalCost = calculateCost(recipe, ingredients);
    const expectedTotalCost = (2 * 150 + 3 * 200) / 100;
    expect(totalCost).to.equal(expectedTotalCost);
  });
  //happy path
  
  it("should calculate the cost of a simple recipe", () => {
    const recipe = {
      id: 6,
      ingredients: [
        { id: 6, quantity: { amount: 2 } },
        { id: 7, quantity: { amount: 3 } },
      ],
    };
    const ingredients = [
      { id: 6, estimatedCostInCents: 150 },
      { id: 7, estimatedCostInCents: 200 },
    ];

    const totalCost = calculateCost(recipe, ingredients);
    const expectedTotalCost = (2 * 150 + 3 * 200) / 100;

    expect(totalCost).to.equal(expectedTotalCost);
  });
  //happy path
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

describe("Get Ingredients", () => {
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
