import { expect } from "chai";
import { recipe1, recipe2 } from "../src/data/mockRecipe";
import { isFavorited } from "../src/recipes";

describe("isFavorited", () => {
  const recipe_dataset = [recipe1, recipe2];

  it("returns favorited recipes that exist in the dataset #1", () => {
    const favoriteRecipes = [recipe1, recipe2];
    const isFavored = isFavorited(favoriteRecipes, recipe_dataset);
    expect(isFavored).to.deep.equal([recipe1, recipe2]);
  });

  it("returns favorited recipes that exist in the dataset #2", () => {
    const favoriteRecipes = [recipe1];
    const isFavored = isFavorited(favoriteRecipes, recipe_dataset);
    expect(isFavored).to.deep.equal([recipe1]);
  });

  it("returns an empty array if no favorited recipes are found in the dataset", () => {
    const favoriteRecipes = [];
    const isFavored = isFavorited(favoriteRecipes, recipe_dataset);
    expect(isFavored).to.deep.equal([]);
  });
});
