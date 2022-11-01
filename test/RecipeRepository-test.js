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

  it("Should return an empty array if nothing found by tag", function () {
    const breakfast = recipeRepository.filterByTag("breakfast");
    expect(breakfast).to.deep.equal([]);

    const sauce = recipeRepository.filterByTag("sauce");
    expect(sauce).to.deep.equal([]);
  });

  it("Should filter recipes by full name", function () {
    expect(
      recipeRepository.filterByName("Loaded Chocolate Chip Pudding Cookie Cups")
    ).to.deep.equal([rawCookieRecipe]);
  });

  it("Should filter recipes by short name", function () {
    expect(recipeRepository.filterByName("Cookie Cups")).to.deep.equal([
      rawCookieRecipe,
    ]);
  });

  it("Should filter recipes by name in different case", function () {
    expect(recipeRepository.filterByName("CoOkIe cuPs")).to.deep.equal([
      rawCookieRecipe,
    ]);
  });

  it("Should return an empty array if nothing found by name", function () {
    expect(recipeRepository.filterByName("Lasagne")).to.deep.equal([]);

    expect(recipeRepository.filterByName("french fries")).to.deep.equal([]);
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
