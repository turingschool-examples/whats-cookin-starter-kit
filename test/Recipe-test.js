import { expect } from "chai";
import Ingredient from "../src/classes/Ingredient";
import Recipe from "../src/classes/Recipe";
import {
  rawCookieRecipe,
  rawPorkChopsRecipe,
  mockIngredientsData,
} from "./mock-data";

describe("Recipe", function () {
  let cookieRecipe, porkChopsRecipe;
  beforeEach(() => {
    cookieRecipe = new Recipe(rawCookieRecipe);
    porkChopsRecipe = new Recipe(rawPorkChopsRecipe);
  });

  it("should have an id", () => {
    expect(cookieRecipe.id).to.equal(595736);
    expect(rawPorkChopsRecipe.id).to.equal(678353);
  });

  it("should have a name", () => {
    expect(rawCookieRecipe.name).to.equal(
      "Loaded Chocolate Chip Pudding Cookie Cups"
    );
    expect(porkChopsRecipe.name).to.equal(
      "Maple Dijon Apple Cider Grilled Pork Chops"
    );
  });

  it("should have an image", () => {
    expect(cookieRecipe.image).to.equal(
      "https://spoonacular.com/recipeImages/595736-556x370.jpg"
    );
    expect(rawPorkChopsRecipe.image).to.equal(
      "https://spoonacular.com/recipeImages/678353-556x370.jpg"
    );
  });

  it("should have ingredients", () => {
    expect(cookieRecipe.ingredients).to.deep.equal([
      { id: 20081, quantity: { amount: 1.5, unit: "c" } },
      { id: 18372, quantity: { amount: 0.5, unit: "tsp" } },
    ]);
    expect(porkChopsRecipe.ingredients).to.deep.equal([
      { id: 1009016, quantity: { amount: 1.5, unit: "cups" } },
      { id: 9003, quantity: { amount: 2, unit: "" } },
    ]);
  });

  it("should have instructions", () => {
    expect(cookieRecipe.instructions).to.deep.equal([
      { instruction: "Instruction for step 1 for Cookie Cups", number: 1 },
      { instruction: "Instruction for step 2 for Cookie Cups", number: 2 },
    ]);
  });

  it("should have tags", () => {
    expect(cookieRecipe.tags).to.deep.equal([
      "antipasti",
      "starter",
      "snack",
      "appetizer",
      "antipasto",
      "hor d'oeuvre",
    ]);
    expect(porkChopsRecipe.tags).to.deep.equal([
      "lunch",
      "main course",
      "main dish",
      "dinner",
    ]);
  });

  it("should retrieve ingredient", () => {
    cookieRecipe.retrieveIngredients(mockIngredientsData);
    expect(cookieRecipe.ingredients[0]).instanceOf(Ingredient);
    expect(cookieRecipe.ingredients[0].name).to.equal("wheat flour");

    porkChopsRecipe.retrieveIngredients(mockIngredientsData);
    expect(porkChopsRecipe.ingredients[0]).instanceOf(Ingredient);
    expect(porkChopsRecipe.ingredients[0].name).to.equal("apple cider");
  });

  it("should determine ingredient names", () => {
    cookieRecipe.retrieveIngredients(mockIngredientsData);
    const cookieRecipeIngredients = cookieRecipe.determineNames();
    expect(cookieRecipeIngredients).to.deep.equal([
      "wheat flour",
      "bicarbonate of soda",
    ]);

    porkChopsRecipe.retrieveIngredients(mockIngredientsData);
    const porkChopsRecipeIngredients = porkChopsRecipe.determineNames();
    expect(porkChopsRecipeIngredients).to.deep.equal(["apple cider", "apple"]);
  });

  it("should get cost of its ingredients", () => {
    cookieRecipe.retrieveIngredients(mockIngredientsData);
    const cookieRecipeCost = cookieRecipe.getCost();
    expect(cookieRecipeCost).to.equal(504);

    porkChopsRecipe.retrieveIngredients(mockIngredientsData);
    const porkChopsRecipeCost = porkChopsRecipe.getCost();
    expect(porkChopsRecipeCost).to.equal(1116);
  });

  it("should return its instructions", () => {
    expect(cookieRecipe.getInstructions()).to.deep.equal(
      cookieRecipe.instructions
    );

    expect(porkChopsRecipe.getInstructions()).to.deep.equal(
      porkChopsRecipe.instructions
    );
  });
});
