import { expect } from "chai";
import RecipeRepository from "../src/classes/RecipeRepository";
import { rawCookieRecipe, rawPorkChopsRecipe } from "./mock-data";

describe("RecipeRepository", function () {
  let recipeRepository;
  beforeEach(() => {
    recipeRepository = new RecipeRepository([
      rawCookieRecipe,
      rawPorkChopsRecipe,
    ]);
  });
  it("Should be a function", () => {
    expect(RecipeRepository).to.be.a("function");
  });

  it("Should hold recipe objects", () => {
    expect(recipeRepository.newRecipes).to.deep.equal([
      rawCookieRecipe,
      rawPorkChopsRecipe,
    ]);
  });

  it("Should filter recipes by tag", function () {
    const tagFilter = recipeRepository.filterByTag("lunch");
    expect(tagFilter).to.deep.equal([rawPorkChopsRecipe]);
  });

  it("Should filter recipes by name", function () {
    expect(
      recipeRepository.filterByName("Loaded Chocolate Chip Pudding Cookie Cups")
    ).to.deep.equal([rawCookieRecipe]);

    expect(recipeRepository.filterByName("Cookie Cups")).to.deep.equal([
      rawCookieRecipe,
    ]);

    expect(recipeRepository.filterByName("CoOkIe cuPs")).to.deep.equal([
      rawCookieRecipe,
    ]);
  });

  it("should get all tags", () => {
    expect(recipeRepository.getAllTags()).to.deep.equal([
      "antipasti",
      "starter",
      "snack",
      "appetizer",
      "antipasto",
      "hor d'oeuvre",
      "lunch",
      "main course",
      "main dish",
      "dinner",
    ]);
  });
});
