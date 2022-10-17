import { expect } from "chai";
import RecipeRepository from "../src/classes/Recipe";

describe("Recipe", () => {
  it("Should be a function", () => {
    expect(recipe).to.be.a("function");
    expect([recipe]).to.be.an.instanceof(Recipe);
  });
  it.skip("Should have a name, id, and pantry", () => {
    expect(recipe.name).to.equal("name");
    expect(recipe.id).to.equal("id");
    expect(recipe.pantry).to.deep.equal([1, 2, 3, 4]);
  });
  it.skip("Should give the names of the ingredients needed", () => {
    expect(recipe.getIngredientNames()).to.deep.equal([
      "name1",
      "name2",
      "name3",
    ]);
  });
  it.skip("Should give the directions/instructions needed", () => {
    expect(recipe.getDirections()).to.equal("instructions");
  });
  it.skip("Should get the cost of the ingredients", () => {
    expect(recipe.getCosts()).to.deep.equal(['costs'])
});
// name

// id

// pantry array with ingredients inside of it (“ingredient : 1009159, “amount: 3)

//  Create a sample data set of ingredients ( ingredients 5x) ( recipes samples x3)

//  Create happy/sad paths

//  Test all properties and outcomes

//  It should represent one recipe object.

//  It should hold on to all its information (provided in the data file).

// Data file recipe objects have an id, image, ingredients array, name,
// tags…ingredients have (“id”, “quantity”, “amount”, “unit : c, tsp, Tb” )

// It should have methods to determine :

//  Determine the names of ingredients needed
//  Return its directions / instructions
//  Get the cost of its ingredients
