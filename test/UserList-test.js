import { expect } from "chai";
import UserList from "../src/classes/UserList";
import { rawCookieRecipe, rawPorkChopsRecipe } from "./mock-data";

describe("User-List", () => {
  let list;
  beforeEach(() => {
    list = new UserList();
  });

  it("should have a recipesToCookList empty by default", () => {
    expect(list.recipesToCook).to.deep.equal([]);
  });

  it("should be able to add recipe to the list", () => {
    list.addRecipeToList(rawCookieRecipe);
    expect(list.recipesToCook).to.deep.equal([rawCookieRecipe]);
  });

  it("should be able to remove recipe from the list", () => {
    list.addRecipeToList(rawCookieRecipe);
    list.removeRecipeFromList(rawCookieRecipe.id);
    expect(list.recipesToCook).to.deep.equal([]);
  });

  it("should be able to filteer by tag", () => {
    list.addRecipeToList(rawCookieRecipe);
    list.addRecipeToList(rawPorkChopsRecipe);
    expect(list.filterByTag("antipasti")).to.deep.equal([rawCookieRecipe]);
  });

  it("should return an empty array if nothing found by tag", () => {
    list.addRecipeToList(rawCookieRecipe);
    list.addRecipeToList(rawPorkChopsRecipe);
    expect(list.filterByTag("breakfast")).to.deep.equal([]);
    expect(list.filterByTag("sauce")).to.deep.equal([]);
  });

  it("should be able to filter by full name", () => {
    list.addRecipeToList(rawCookieRecipe);
    list.addRecipeToList(rawPorkChopsRecipe);

    const filteredByName = list.filterByName(
      "Maple Dijon Apple Cider Grilled Pork Chops"
    );
    expect(filteredByName).to.deep.equal([rawPorkChopsRecipe]);
  });

  it("should be able to filter by short name", () => {
    list.addRecipeToList(rawCookieRecipe);
    list.addRecipeToList(rawPorkChopsRecipe);

    const short = list.filterByName("Pork Chops");
    expect(short).to.deep.equal([rawPorkChopsRecipe]);
  });

  it("should be able to filter by name in different cases", () => {
    list.addRecipeToList(rawCookieRecipe);
    list.addRecipeToList(rawPorkChopsRecipe);

    const lowerCase = list.filterByName("poRk cHops");
    expect(lowerCase).to.deep.equal([rawPorkChopsRecipe]);
  });

  it("Should return an empty array if nothing found by name", function () {
    expect(list.filterByName("Lasagne")).to.deep.equal([]);

    expect(list.filterByName("french fries")).to.deep.equal([]);
  });
});
