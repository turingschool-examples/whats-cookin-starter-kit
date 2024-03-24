import { expect } from "chai";
import { search } from "../src/search";

describe("Search", () => {
  it("Will return an array", () => {
    const searchResult = search("Pasta");
    expect(Array.isArray(searchResult)).to.equal(true);
  });

  it("Will return some recipes that have matching ingredients or name 'bread' (known to exist in database)", () => {
    const searchQuery = "bread";
    const searchResult = search(searchQuery);
    const sanitizedQuery = searchQuery.toLowerCase();

    let searchPassCount = 0;
    for (const result of searchResult) {
      if (
        result.name.toLowerCase().includes(sanitizedQuery) ||
        result.ingredients.find((ingredient) =>
          ingredient.toLowerCase().includes(sanitizedQuery)
        )
      ) {
        searchPassCount++;
      }
    }

    expect(searchResult.length).to.not.equal(0);
    expect(searchPassCount).to.equal(searchResult.length);
  });

  it("Will return some recipes that have matching ingredients or name 'cookie' (known to exist in database)", () => {
    const searchQuery = "cookie";
    const searchResult = search(searchQuery);
    const sanitizedQuery = searchQuery.toLowerCase();

    let searchPassCount = 0;
    for (const result of searchResult) {
      if (
        result.name.toLowerCase().includes(sanitizedQuery) ||
        result.ingredients.find((ingredient) =>
          ingredient.toLowerCase().includes(sanitizedQuery)
        )
      ) {
        searchPassCount++;
      }
    }

    expect(searchResult.length).to.not.equal(0);
    expect(searchPassCount).to.equal(searchResult.length);
  });

  it("Will return an empty array 'space monkeys' (does not exist)", () => {
    const searchQuery = "space monkeys";
    const searchResult = search(searchQuery);
    expect(searchResult.length).to.equal(0);
  });
});
