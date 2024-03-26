import { expect } from "chai";
import { recipe1, recipe2 } from "../src/data/mockRecipe";
import recipeData from "../src/data/recipes";
import { filterRecipeByTag, getAvailableTags } from "../src/tags";

describe("filterRecipeByTag", function () {
  it("should find recipes by id tag", function () {
    const recipesTag = filterRecipeByTag(["lunch"]);

    expect(recipesTag).to.be.an("array");
    expect(recipesTag).to.have.lengthOf(12);
  });

  it("should be able to find recipes with more than one id tag", function () {
    const recipesWithMultipleTags = filterRecipeByTag(["snack", "starter"]); // Pass only the tag(s) as an array

    expect(recipesWithMultipleTags).to.be.an("array");
    expect(recipesWithMultipleTags).to.have.lengthOf(9);
  });

  it("should return all recipes if using no tags", function () {
    const recipesTag = filterRecipeByTag([]);

    expect(recipesTag).to.be.an("array");
    expect(recipesTag).to.have.lengthOf(recipeData.length);
  });
});

describe("Get available tags", () => {
  it("Should return all tags in empty array", () => {
    expect(getAvailableTags([])).to.deep.equal({
      antipasti: 9,
      starter: 9,
      snack: 9,
      appetizer: 9,
      antipasto: 9,
      "hor d'oeuvre": 9,
      lunch: 12,
      "main course": 12,
      "main dish": 12,
      dinner: 12,
      sauce: 1,
      "side dish": 22,
      "morning meal": 1,
      brunch: 1,
      breakfast: 1,
      salad: 4,
      condiment: 1,
      dip: 1,
      spread: 1,
    });
  });

  it("Should return the tags plus numbers given a set of tags #1", () => {
    expect(getAvailableTags(["brunch"])).to.deep.equal({
      breakfast: 1,
      brunch: 1,
      "morning meal": 1,
    });
  });

  it("Should return the tags plus numbers given a set of tags #2", () => {
    expect(getAvailableTags(["snack", "side dish"])).to.deep.equal({
      antipasti: 1,
      antipasto: 1,
      appetizer: 1,
      "hor d'oeuvre": 1,
      "side dish": 1,
      snack: 1,
      starter: 1,
    });
  });
});
