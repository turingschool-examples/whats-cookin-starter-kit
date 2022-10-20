import { expect } from "chai";
import Ingredient from "../src/classes/Ingredient";
import Recipe from "../src/classes/Recipe";
import recipeData from "../src/data/recipes";
import ingredientsData from "../src/data/ingredients";

describe("Recipe", function () {
  let recipe, rawRecipe;
  beforeEach(() => {
    rawRecipe = recipeData[0];
    recipe = new Recipe(rawRecipe);
  });

  it("should have an id", () => {
    expect(recipe.id).to.equal(595736);
  });

  it("should have a name", () => {
    expect(recipe.name).to.equal("Loaded Chocolate Chip Pudding Cookie Cups");
  });

  it("should have an image", () => {
    expect(recipe.image).to.equal(
      "https://spoonacular.com/recipeImages/595736-556x370.jpg"
    );
  });

  it("should have ingredients", () => {
    expect(recipe.ingredients).to.deep.equal(rawRecipe.ingredients);
  });

  it("should have instructions", () => {
    expect(recipe.instructions).to.deep.equal(rawRecipe.instructions);
  });

  it("should have tags", () => {
    expect(recipe.tags).to.deep.equal([
      "antipasti",
      "starter",
      "snack",
      "appetizer",
      "antipasto",
      "hor d'oeuvre",
    ]);
  });

  it("should retrieve ingredient", () => {
    recipe.retrieveIngredients(ingredientsData);
    expect(recipe.ingredients[0]).instanceOf(Ingredient);
    expect(recipe.ingredients[0].name).to.equal("wheat flour");
  });

  it("should determine ingredient names", () => {
    recipe.retrieveIngredients(ingredientsData);
    const ingredientNames = recipe.determineNames();
    expect(ingredientNames).to.deep.equal([
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

  it("should get cost of its ingredients", () => {
    recipe.retrieveIngredients(ingredientsData);
    const cost = recipe.getCost();
    expect(cost).to.equal(17776);
  });

  it("should return its instructions", () => {
    expect(recipe.getInstructions()).to.deep.equal(recipe.instructions);
  });
});
