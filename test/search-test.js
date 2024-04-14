import { expect } from "chai";
import { findRecipeIngredients } from "../src/recipes";
import { search } from "../src/search";
import {
  mockIngredients,
  mockRecipeDataset,
  recipe1,
  recipe2,
  recipe3,
  recipe4,
} from "./data/mockData";

describe("Search", () => {
  it("Will return an array", () => {
    const searchResult = search("Pasta", mockRecipeDataset, mockIngredients);
    expect(Array.isArray(searchResult)).to.equal(true);
  });

  it("Will return some recipes that have matching ingredients or name 'su' (known to exist in database)", () => {
    const searchQuery = "sug";
    const searchResult = search(
      searchQuery,
      mockRecipeDataset,
      mockIngredients
    );
    expect(searchResult).to.deep.equal([recipe1, recipe3]);
  });

  it("Will return some recipes that have matching ingredients or name 'cookie' (known to exist in database)", () => {
    const searchQuery = "cookie";
    const searchResult = search(
      searchQuery,
      mockRecipeDataset,
      mockIngredients
    );
    expect(searchResult).to.deep.equal([recipe1, recipe2]);
  });

  it("Will return an empty array 'space monkeys' (does not exist)", () => {
    const searchQuery = "space monkeys";
    const searchResult = search(
      searchQuery,
      mockRecipeDataset,
      mockIngredients
    );
    expect(searchResult).to.deep.equal([]);
  });
});
