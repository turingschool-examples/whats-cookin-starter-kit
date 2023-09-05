import { expect } from "chai";

const { recipeTestData, ingredientsTestData } = require("../src/data/testData");

const {
  filterByTag,
  searchRecipes,
  calculateCost,
  getIngredientNames,
} = require("../src/recipes");

describe("calculateCost", () => {
  //happy path
  it("should calculate the cost of a recipe with one ingredient", () => {
    const recipe = {
      id: 1,
      ingredients: [{ id: 1, quantity: { amount: 1 } }],
    };
    const ingredients = [{ id: 1, estimatedCostInCents: 100 }];
    const totalCost = calculateCost(recipe, ingredients);
    expect(totalCost).to.equal(1);
  });
  //sad path
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
  //happy path
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
});

describe("Filter", () => {
  //happy path
  it("Should filter recipes when given one tag", () => {
    const taggedRecipes = filterByTag(["side dish"], recipeTestData);
    expect(taggedRecipes).to.deep.equal([recipeTestData[2], recipeTestData[3]]);
  });
  //happy path
  it("Should filter recipes when given multiple tags", () => {
    const taggedRecipes = filterByTag(["snack", "lunch"], recipeTestData);
    expect(taggedRecipes).to.deep.equal([
      recipeTestData[0],
      recipeTestData[1],
      recipeTestData[4],
    ]);
  });
  //happy path
  it("Should not add duplicates when a snack is in more than one category", () => {
    const taggedRecipes = filterByTag(
      ["hor d'oeuvre", "snack"],
      recipeTestData
    );
    expect(taggedRecipes).to.deep.equal([recipeTestData[0], recipeTestData[4]]);
  });
  //sad path
  it("Should return an empty array when no recipes match the tag", () => {
    const taggedRecipes = filterByTag(["nonexistent"], recipeTestData);
    expect(taggedRecipes).to.deep.equal([]);
  });
  //sad path
  it("Should not return any recipes if no ingredient match is found", () => {
    const taggedRecipes = filterByTag(["nonexistent"], recipeTestData);
    expect(taggedRecipes).to.deep.equal([]);
  });
  //happy path
  it("Should return the recipe with searched ingredient", () => { 
    const taggedRecipes = filterByTag(["snack"], recipeTestData);
    expect(taggedRecipes).to.deep.equal([recipeTestData[0], recipeTestData[4]]);
  });
});

describe("Search", () => {
  //happy path
  it("Should search recipes when given any part of a recipes name e.g. Chocolate is in 'Chocolate Chip Cookies' and 'Chocolate Cake'", () => {
    const searchedRecipe = searchRecipes("chocolate", recipeTestData);
    expect(searchedRecipe).to.deep.equal([
      recipeTestData[0],
      recipeTestData[3],
    ]);
  });
  // sad path
  it("Should return an empty array when no recipes match the search term", () => {
    const searchedRecipe = searchRecipes("nonexistent", recipeTestData);
    expect(searchedRecipe).to.deep.equal([]);
  });
  //happy path
  it("Should handle case insensitivity", () => {
    const searchedRecipe = searchRecipes("CHOCOLATE", recipeTestData);
    expect(searchedRecipe).to.deep.equal([
      recipeTestData[0],
      recipeTestData[3],
    ]);
  });
  //sad path
  it("Should do nothing if the search term is an empty string", () => {
    const searchedRecipe = searchRecipes("", recipeTestData);
    expect(searchedRecipe).to.deep.equal(recipeTestData);
  });
});

describe("Get Ingredients", () => {
  //happy path
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
//sad path
it("Should return an empty array when recipe has no ingredients", () => {
  const recipe = {
    ingredients: [],
  };
  const ingredients = [
    { id: 1, name: "Flour" },
    { id: 2, name: "Sugar" },
  ];
  const ingredientNames = getIngredientNames(recipe, ingredients);
  expect(ingredientNames).to.deep.equal([]);
});
//sad path
it("Should return an empty array when recipe has no ingredients", () => {
  const recipe = {
    ingredients: [],
  };
  const ingredients = [
    { id: 1, name: "Flour" },
    { id: 2, name: "Sugar" },
  ];
  const ingredientNames = getIngredientNames(recipe, ingredients);
  expect(ingredientNames).to.deep.equal([]);
});
//sad path
it("Should handle recipe ingredients not present in the provided ingredients list", () => {
  const recipe = {
    ingredients: [
      { id: 10, name: "Unknown Ingredient" },
      { id: 20, name: "Another Unknown Ingredient" },
    ],
  };
  const ingredients = [
    { id: 1, name: "Flour" },
    { id: 2, name: "Sugar" },
  ];
  const ingredientNames = getIngredientNames(recipe, ingredients);
  expect(ingredientNames).to.deep.equal([]);
});
//happy path
it("Should handle recipe with multiple identical ingredients", () => {
  const recipe = {
    ingredients: [
      { id: 1, name: "Flour" },
      { id: 1, name: "Flour" },
      { id: 2, name: "Sugar" },
    ],
  };
  const ingredients = [
    { id: 1, name: "Flour" },
    { id: 2, name: "Sugar" },
  ];
  const ingredientNames = getIngredientNames(recipe, ingredients);
  expect(ingredientNames).to.deep.equal(["Flour", "Sugar"]);
});
});
