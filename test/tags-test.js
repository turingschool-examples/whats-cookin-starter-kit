import { expect } from "chai";
import { filterRecipeByTag, getTagRecipeCount } from "../src/tags";
import { mockRecipeDataset } from "./data/mockData";

describe("filterRecipeByTag", function () {
  it("should find recipes by id tag", function () {
    const recipesTag = filterRecipeByTag(["appetizer"], mockRecipeDataset);

    expect(recipesTag).to.be.an("array");
    expect(recipesTag).to.have.lengthOf(2);
  });

  it("should be able to find recipes with more than one id tag", function () {
    const recipesWithMultipleTags = filterRecipeByTag(
      ["snack", "starter"],
      mockRecipeDataset
    );

    expect(recipesWithMultipleTags).to.be.an("array");
    expect(recipesWithMultipleTags).to.have.lengthOf(2);
  });

  it("should return all recipes if using no tags", function () {
    const recipesTag = filterRecipeByTag([], mockRecipeDataset);

    expect(recipesTag).to.be.an("array");
    expect(recipesTag).to.have.lengthOf(mockRecipeDataset.length);
  });
});

describe("Get available tags", () => {
  it("Should return all tags in empty array", () => {
    expect(getTagRecipeCount([], mockRecipeDataset)).to.deep.equal({
      antipasti: 2,
      antipasto: 2,
      appetizer: 2,
      "hor d'oeuvre": 2,
      sauce: 1,
      "side dish": 1,
      snack: 2,
      starter: 2,
    });
  });

  it("Should return the tags plus numbers given a set of tags #1", () => {
    expect(getTagRecipeCount(["appetizer"], mockRecipeDataset)).to.deep.equal({
      antipasti: 2,
      antipasto: 2,
      appetizer: 2,
      "hor d'oeuvre": 2,
      snack: 2,
      starter: 2,
    });
  });

  it("Should return the tags plus numbers given a set of tags #2", () => {
    expect(
      getTagRecipeCount(["snack", "starter"], mockRecipeDataset)
    ).to.deep.equal({
      antipasti: 2,
      antipasto: 2,
      appetizer: 2,
      "hor d'oeuvre": 2,
      snack: 2,
      starter: 2,
    });
  });
});
