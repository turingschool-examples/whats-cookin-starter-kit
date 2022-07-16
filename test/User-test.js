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
          ingredientId: 11297,
          amount: 4,
        },
        {
          ingredientId: 1082047,
          amount: 10,
        },
      ],
    });

    user2 = new User({
      name: "Shane",
      id: 111,
      pantry: [
        {
          ingredientId: 6150,
          amount: 3,
        },
        {
          ingredientId: 1032009,
          amount: 7,
        },
      ],
    });

    user3 = new User({
      name: "David",
      id: 4444,
      pantry: [
        {
          ingredientId: 18372,
          amount: 8,
        },
        {
          ingredientId: 1102047,
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

  it("should contain an array of ingredients", () => {
    expect(user1.pantry.length).to.equal(2);
    expect(user1.pantry[0].ingredientId).to.equal(11297);
  });

  it("should have no ingredients in the pantry by default", () => {
    let user4 = new User();
    expect(user4.pantry).to.deep.equal([]);
  });

  it("should have no recipes to cook by default", () => {
    expect(user2.recipesToCook.length).to.equal(0);
  });

  it("should be able to add recipes to cook if they are not already included", () => {
    user3.addRecipeToCook(recipe1);
    expect(user3.recipesToCook).to.deep.equal([recipe1]);
    user3.addRecipeToCook(recipe1);
    expect(user3.recipesToCook.length).to.deep.equal(1);
  });

  it("should be able to remove recipes from the recipesToCook array only if there have been recipes added", () => {
    expect(user2.removeRecipeToCook(recipe2)).to.equal(
      `There are no recipes to remove!`
    );
    user2.addRecipeToCook(recipe1);
    user2.addRecipeToCook(recipe2);
    user2.addRecipeToCook(recipe3);
    expect(user2.recipesToCook.length).to.equal(3);
    user2.removeRecipeToCook(recipe2);
    expect(user2.recipesToCook).to.deep.equal([recipe1, recipe3]);
  });

  // it("should be able to filter a recipe by its tag", () => {
  //   user2.addRecipeToCook(recipe1);
  //   user2.addRecipeToCook(recipe2);
  //   user2.addRecipeToCook(recipe3);

  //   expect(user2.filterRecipesByTag("snack")).to.deep.equal([recipe1, recipe2]);
  // });
  // it("should be able to filter a recipe by name", () => {
  //   let recipe5 = new Recipe({
  //     id: 1,
  //     name: "Oatmeal Cookie",
  //     imageURL: "https://recipe-image-1.jpg",
  //     portions: [
  //       { ingredientId: 1, name: "Flour", amount: 2, cost: 101, unit: "C" },
  //     ],
  //     instructions: ["Bake it"],
  //     tags: ["snack", "dessert"],
  //   });
  //   user3.addRecipeToCook(recipe1);
  //   user3.addRecipeToCook(recipe2);
  //   user3.addRecipeToCook(recipe3);
  //   user3.addRecipeToCook(recipe5);

  //   expect(user3.filterRecipesByName("Cookie")).to.deep.equal([
  //     recipe1,
  //     recipe5,
  //   ]);
  // });

  it("should start off with an empty array of input to be searched", () => {
    expect(user1.selectedInput).to.deep.equal([]);
  });

  it("should start off with an empty array of filtered results", () => {
    expect(user1.filteredResults).to.deep.equal([]);
  });

  it("should allow the user to search by multiple tags", () => {
    user3.addRecipeToCook(recipe1);
    user3.addRecipeToCook(recipe2);
    user3.addRecipeToCook(recipe3);
    user3.addInputToSearch("dessert");
    user3.addInputToSearch("pork");
    user3.filterByMultipleTags();
    expect(user3.filteredResults).to.deep.equal([recipe1, recipe3]);
  });

  it('should be able to search for multiple recipes by name', () => {
    user3.addRecipeToCook(recipe1);
    user3.addRecipeToCook(recipe2);
    user3.addRecipeToCook(recipe3);
    user3.addInputToSearch("Chip");
    user3.addInputToSearch("glazed");
    user3.filterByMultipleRecipeNames();
    expect(user3.filteredResults).to.deep.equal([recipe1, recipe3]);
  });

  it('should be able to search for multiple ingredients by name', () => {
    user3.addRecipeToCook(recipe1);
    user3.addRecipeToCook(recipe2);
    user3.addRecipeToCook(recipe3);
    user3.addInputToSearch("Flour");
    user3.addInputToSearch("bread");
    user3.filterByMultipleIngredients();
    expect(user3.filteredResults).to.deep.equal([recipe1, recipe2]);
  });

  it('should clear the selected input & filtered results array after filteration is complete', () => {
    user3.addRecipeToCook(recipe1);
    user3.addRecipeToCook(recipe2);
    user3.addRecipeToCook(recipe3);
    user3.addInputToSearch("dessert");
    user3.addInputToSearch("pork");
    user3.filterByMultipleTags();
    expect(user3.filteredResults).to.deep.equal([recipe1, recipe3]);
    user3.clearImmediate()
    expect(user3.selectedInput).to.deep.equal([]);
    expect(user3.filteredResults).to.deep.equal([]);
  })

});
