import { expect } from "chai";
import { recipe1, recipe2 } from "../src/data/mockRecipe";
import { findRecipeIngredients } from "../src/recipes";

describe("Recipe", () => {
  it("Should be a function", () => {
    expect(findRecipeIngredients).to.be.a("function");
  });

  it("Should return an array of ingredients given a recipe", () => {
    const ingredients = findRecipeIngredients(recipe1);
    expect(ingredients).to.deep.equal([
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

  it("Should return an array of ingredients given a recipe", () => {
    const ingredients = findRecipeIngredients(recipe2);
    expect(ingredients).to.deep.equal([
      "wheat flour",
      "blanched almond flour",
      "egg yolks",
      "salt",
      "sesame seeds",
      "sucrose",
      "unsalted butter",
    ]);
  });
});
