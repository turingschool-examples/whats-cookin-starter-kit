import { expect } from "chai";
import { isFavorited } from "../src/recipes";
import {
  mockRecipeDataset,
  recipe1,
  recipe2,
  recipe3,
  recipe4,
} from "./data/mockData";

describe("isFavorited", () => {
  it("returns favorited recipes that exist in the dataset #1", () => {
    const favoriteRecipes = [recipe1, recipe2, { id: 32345 }, { id: 23194985 }];
    const isFavored = isFavorited(favoriteRecipes, mockRecipeDataset);
    expect(isFavored).to.deep.equal([recipe1, recipe2]);
  });

  it("returns favorited recipes that exist in the dataset #2", () => {
    const favoriteRecipes = [recipe3, { id: 1245 }];
    const isFavored = isFavorited(favoriteRecipes, mockRecipeDataset);
    expect(isFavored).to.deep.equal([recipe3]);
  });

  it("returns an empty array if no favorited recipes are found in the dataset", () => {
    const favoriteRecipes = [{ id: 218412 }, { id: 12381495 }];
    const isFavored = isFavorited(favoriteRecipes, mockRecipeDataset);
    expect(isFavored).to.deep.equal([]);
  });
});
