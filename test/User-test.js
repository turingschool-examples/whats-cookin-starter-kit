import { expect } from "chai";
import Recipe from "../src/classes/Recipe";
import User from "../src/classes/User";

describe("User", () => {
  it("Should be a function", () => {
    expect(User).to.be.a("function");
  });

  let user1;
  let user2;
  let user3;
  let recipe1;
  let recipe2;
  let recipe3;

  beforeEach(() => {
    user1 = new User({
      name: "Josh",
      id: 28,
      pantry: [
        {
          ingredient: 11297,
          amount: 4,
        },
        {
          ingredient: 1082047,
          amount: 10,
        },
      ],
    });

    user2 = new User({
      name: "Shane",
      id: 111,
      pantry: [
        {
          ingredient: 6150,
          amount: 3,
        },
        {
          ingredient: 1032009,
          amount: 7,
        },
      ],
    });

    user3 = new User({
      name: "David",
      id: 4444,
      pantry: [
        {
          ingredient: 18372,
          amount: 8,
        },
        {
          ingredient: 1102047,
          amount: 1,
        },
      ],
    });

    recipe1 = new Recipe({
      id: 1,
      name: "Chocolate Chip Cookie",
      imageURL: "https://recipe-image-1.jpg",
      portions: [
        { ingredientId: 1, name: "Flour", amount: 2, cost: 101, unit: "C" },
      ],
      instructions: ["Bake it"],
      tags: ["snack", "dessert"],
    });
    recipe2 = new Recipe({
      id: 2,
      name: "Ham Sandwich",
      imageURL: "https://recipe-image-2.jpg",
      portions: [
        { ingredientId: 2, name: "Bread", amount: 5, cost: 200, unit: "loaf" },
      ],
      instructions: ["Make Sandwich"],
      tags: ["snack", "lunch"],
    });
    recipe3 = new Recipe({
      id: 3,
      name: "Glazed Chops",
      imageURL: "https://recipe-image-3.jpg",
      portions: [
        {
          ingredientId: 3,
          name: "Pork Chop",
          amount: 1,
          cost: 300,
          unit: "serving",
        },
      ],
      instructions: ["Grill it up"],
      tags: ["pork", "dinner"],
    });
  });

  it("should contain a unique id per user", () => {
    expect(user1.id).to.equal(28);
    expect(user3.id).to.equal(4444);
  });

  it("should contain a different name per user", () => {
    expect(user2.name).to.equal("Shane");
    expect(user3.name).to.equal("David");
  });

  it("should contain an array of ingredient objects", () => {
    expect(user1.pantry.length).to.equal(2);
    expect(user1.pantry[0].ingredient).to.equal(11297);
  });

  it("should have no recipes to cook by default", () => {
    expect(user2.recipesToCook.length).to.equal(0);
  });

  it("should be able to add recipes to cook", () => {
    user3.addRecipesToCook(recipe1);
    console.log(user3.recipesToCook);
    expect(user3.recipesToCook).to.deep.equal([recipe1]);
  });

  it("should be able to remove recipes from the recipesToCook", () => {
    user2.addRecipesToCook(recipe1);
    user2.addRecipesToCook(recipe2);
    user2.addRecipesToCook(recipe3);
    expect(user2.recipesToCook.length).to.equal(3);
    user2.removeRecipesToCook(recipe2);
    console.log(user2.recipesToCook);
    expect(user2.recipesToCook).to.deep.equal([recipe1, recipe3]);
  });
});
