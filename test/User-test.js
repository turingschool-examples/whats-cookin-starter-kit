import { expect } from "chai";
import Recipe from "../src/classes/Recipe";
import User from "../src/classes/User";
import RecipeRepository from "../src/classes/RecipeRepository";

describe("User", () => {
  it("Should be a function", () => {
    expect(User).to.be.a("function");
  });

  let user1;
  let user2;
  let user3;
  let completeUser1;
  let completeUser2;
  let completeUser3;
  let completeRecipe;
  let recipe1;
  let recipe2;
  let recipe3;
  let allIngredients;

  beforeEach(() => {
    allIngredients = new RecipeRepository();

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

    ////////// Pantry testing with complete User data //////////
    completeUser1 = new User({
      filteredResults: [],
      id: 35,
      name: "Gladis",
      pantry: [
        { ingredient: 18371, amount: 2, name: "baking powder" },
        { ingredient: 11124, amount: 5, name: "carrots" },
        { ingredient: 1123, amount: 3, name: "eggs" },
        { ingredient: 1082047, amount: 2, name: "kosher salt" },
        { ingredient: 4025, amount: 2, name: "mayonnaise" },
        { ingredient: 2027, amount: 3, name: "oregano" },
        { ingredient: 2021, amount: 2, name: "powdered ginger" },
        { ingredient: 1102047, amount: 3, name: "s&p" },
        { ingredient: 16124, amount: 2, name: "soy sauce" },
        { ingredient: 19335, amount: 4, name: "sucrose" },
        { ingredient: 9019, amount: 3, name: "unsweetened apple sauce" },
        { ingredient: 20081, amount: 3, name: "wheat flour" },
        { ingredient: 1054, amount: 2, name: "whipped cream" },
        { ingredient: 14106, amount: 2, name: "white wine" },
        { ingredient: 11215, amount: 2, name: "whole garlic clove" },
      ],
      recipesToCook: [],
      selectedInput: [],
    });

    completeUser2 = new User({
      filteredResults: [],
      id: 35,
      name: "Chadis",
      pantry: [
        { ingredient: 18371, amount: 2, name: "baking powder" },
        { ingredient: 1001, amount: 1, name: "butter" },
        { ingredient: 11124, amount: 5, name: "carrots" },
        { ingredient: 1123, amount: 3, name: "eggs" },
        { ingredient: 1082047, amount: 2, name: "kosher salt" },
        { ingredient: 4025, amount: 2, name: "mayonnaise" },
        { ingredient: 2027, amount: 3, name: "oregano" },
        { ingredient: 2021, amount: 2, name: "powdered ginger" },
        { ingredient: 1102047, amount: 3, name: "s&p" },
        { ingredient: 16124, amount: 2, name: "soy sauce" },
        { ingredient: 19335, amount: 4, name: "sucrose" },
        { ingredient: 9019, amount: 3, name: "unsweetened apple sauce" },
        { ingredient: 2050, amount: 2, name: "vanilla" },
        { ingredient: 20081, amount: 3, name: "wheat flour" },
        { ingredient: 1054, amount: 2, name: "whipped cream" },
        { ingredient: 1077, amount: 2, name: "full-fat milk" },
        { ingredient: 20027, amount: 0.25, name: "corn starch" },
        { ingredient: 1125, amount: 3, name: "egg yolks" },
      ],
      recipesToCook: [],
      selectedInput: [],
    });

    completeRecipe = new Recipe({
      id: 605132,
      imageURL: "www.pastrycream.com",
      instructions: [],
      name: "Pastry Cream",
      portions: [
        {
          ingredientId: 1001,
          name: "butter",
          cost: 618,
          amount: 12,
          unit: "tablespoons",
        },
        {
          ingredientId: 20027,
          name: "corn starch",
          cost: 236,
          amount: 0.25,
          unit: "cup",
        },
        { ingredientId: 1123, name: "eggs", cost: 472, amount: 1, unit: "" },
        {
          ingredientId: 1125,
          name: "egg yolks",
          cost: 889,
          amount: 20,
          unit: "",
        },
        {
          ingredientId: 1077,
          name: "full-fat milk",
          cost: 276,
          amount: 2,
          unit: "cups",
        },
        {
          ingredientId: 2050,
          name: "vanilla",
          cost: 926,
          amount: 1,
          unit: "teaspoon",
        },
        {
          ingredientId: 19335,
          name: "sucrose",
          cost: 902,
          amount: 0.3333333333333333,
          unit: "cup",
        },
      ],
      tags: ["side dish"],
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

  it("should be able to search for multiple recipes by name", () => {
    user3.addRecipeToCook(recipe1);
    user3.addRecipeToCook(recipe2);
    user3.addRecipeToCook(recipe3);
    user3.addInputToSearch("Chip");
    user3.addInputToSearch("glazed");
    user3.filterByMultipleRecipeNames();
    expect(user3.filteredResults).to.deep.equal([recipe1, recipe3]);
  });

  it("should be able to search for multiple ingredients by name", () => {
    user3.addRecipeToCook(recipe1);
    user3.addRecipeToCook(recipe2);
    user3.addRecipeToCook(recipe3);
    user3.lowerCaseIngredients();
    user3.addInputToSearch("Flour");
    user3.addInputToSearch("bread");
    user3.filterByMultipleIngredients();
    expect(user3.filteredResults).to.deep.equal([recipe1, recipe2]);
  });

  it("should clear the selected input & filtered results array after filteration is complete", () => {
    user3.addRecipeToCook(recipe1);
    user3.addRecipeToCook(recipe2);
    user3.addRecipeToCook(recipe3);
    user3.addInputToSearch("dessert");
    user3.addInputToSearch("pork");
    user3.filterByMultipleTags();

    expect(user3.filteredResults).to.deep.equal([recipe1, recipe3]);
    user3.clearData();
    expect(user3.selectedInput).to.deep.equal([]);
    expect(user3.filteredResults).to.deep.equal([]);
  });

  it("should not be able to cook a recipe if the users pantry is missing the required ingredients", () => {
    completeUser1.addRecipeToCook(completeRecipe);
    completeUser1.compareIngredientsNeeded(completeUser1.recipesToCook[0]);
    expect(completeUser1.notMatchingIngredients.length).to.be.greaterThan(0);
  });

  it("should check that the users pantry includes all of the matching ingredients required in the recipe", () => {
    completeUser2.addRecipeToCook(completeRecipe);
    completeUser2.compareIngredientsNeeded(completeUser2.recipesToCook[0]);
    expect(completeUser2.matchingIngredients.length).to.equal(
      completeRecipe.portions.length
    );
  });

  it("should not be able to cook a recipe if the users pantry is missing the required amount of ingredients", () => {
    completeUser2.addRecipeToCook(completeRecipe);
    completeUser2.compareIngredientsNeeded(completeUser2.recipesToCook[0]);
    expect(completeUser2.notMatchingIngredients).to.deep.equal([]);
    expect(completeUser2.matchingIngredients.length).to.equal(
      completeRecipe.portions.length
    );
    completeUser2.compareIngredientAmounts(completeUser2.recipesToCook[0]);
    expect(completeUser2.notMatchingIngredients).to.deep.equal([
      { ingredient: 1001, amount: 1, name: "butter" },
      { ingredient: 1125, amount: 3, name: "egg yolks" },
    ]);
  });

  it("should return the ingredients with the amounts required to finish a recipe", () => {
    completeUser2.addRecipeToCook(completeRecipe);
    completeUser2.compareIngredientsNeeded(completeUser2.recipesToCook[0]);
    completeUser2.compareIngredientAmounts(completeUser2.recipesToCook[0]);
    completeUser2.returnDifferences(completeUser2.recipesToCook[0]);
    expect(completeUser2.notMatchingIngredients).to.deep.equal([
      { ingredient: 1001, amount: 1, name: "butter" },
      { ingredient: 1125, amount: 3, name: "egg yolks" },
    ]);
  });

  it("should be able to add ingredients to their pantry", () => {
    allIngredients.addRecipe(completeRecipe);
    completeUser1.gatherAllIngredients(allIngredients);
    expect(completeUser1.pantry.length).to.equal(15);
    completeUser1.evaluatePantry("butter", 11, allIngredients);
    expect(completeUser1.pantry.length).to.equal(16);
    expect(completeUser1.pantry).to.deep.include({
      ingredientId: 1001,
      amount: 11,
      name: "butter",
      ingredient: 1001,
    });
  });

  it("should be able to delete existing pantry items", () => {
    expect(completeUser1.pantry).to.deep.include({
      ingredient: 2027,
      amount: 3,
      name: "oregano",
    });
    completeUser1.deleteFromPantry(2027);
    expect(completeUser1.pantry).to.not.deep.include({
      ingredient: 2027,
      amount: 3,
      name: "oregano",
    });
  });

  it("should deduct the quantity of ingredients from the pantry if the quantity is greater than the needed amount neeed to cook the recipe", () => {
    allIngredients.addRecipe(completeRecipe);
    completeUser2.gatherAllIngredients(allIngredients);
    completeUser2.addRecipeToCook(completeRecipe);
    completeUser2.evaluatePantry("butter", 49, allIngredients);
    completeUser2.evaluatePantry("egg yolks", 47, allIngredients);
    completeUser2.compareIngredientsNeeded(completeUser2.recipesToCook[0]);
    completeUser2.compareIngredientAmounts(completeUser2.recipesToCook[0]);
    completeUser2.cookRecipe(completeUser2.recipesToCook[0]);

    expect(completeUser2.pantry).to.deep.include({
      ingredient: 1001,
      amount: 38,
      name: "butter",
    });
    expect(completeUser2.pantry).to.deep.include({
      ingredient: 1125,
      amount: 30,
      name: "egg yolks",
    });
  });

  it("should remove the entire ingredient from the pantry if the quantity is equal to the needed amount neeed to cook the recipe", () => {
    allIngredients.addRecipe(completeRecipe);
    completeUser2.gatherAllIngredients(allIngredients);
    completeUser2.addRecipeToCook(completeRecipe);
    completeUser2.evaluatePantry("butter", 49, allIngredients);
    completeUser2.evaluatePantry("egg yolks", 47, allIngredients);
    completeUser2.compareIngredientsNeeded(completeUser2.recipesToCook[0]);
    completeUser2.compareIngredientAmounts(completeUser2.recipesToCook[0]);
    expect(completeUser2.pantry).to.deep.equal([
      { ingredient: 18371, amount: 2, name: "baking powder" },
      { ingredient: 1001, amount: 50, name: "butter" },
      { ingredient: 11124, amount: 5, name: "carrots" },
      { ingredient: 1123, amount: 3, name: "eggs" },
      { ingredient: 1082047, amount: 2, name: "kosher salt" },
      { ingredient: 4025, amount: 2, name: "mayonnaise" },
      { ingredient: 2027, amount: 3, name: "oregano" },
      { ingredient: 2021, amount: 2, name: "powdered ginger" },
      { ingredient: 1102047, amount: 3, name: "s&p" },
      { ingredient: 16124, amount: 2, name: "soy sauce" },
      { ingredient: 19335, amount: 4, name: "sucrose" },
      { ingredient: 9019, amount: 3, name: "unsweetened apple sauce" },
      { ingredient: 2050, amount: 2, name: "vanilla" },
      { ingredient: 20081, amount: 3, name: "wheat flour" },
      { ingredient: 1054, amount: 2, name: "whipped cream" },
      { ingredient: 1077, amount: 2, name: "full-fat milk" },
      { ingredient: 20027, amount: 0.25, name: "corn starch" },
      { ingredient: 1125, amount: 50, name: "egg yolks" },
    ]);
    completeUser2.cookRecipe(completeUser2.recipesToCook[0]);
    expect(completeUser2.pantry).to.deep.equal([
      { ingredient: 18371, amount: 2, name: "baking powder" },
      { ingredient: 1001, amount: 38, name: "butter" },
      { ingredient: 11124, amount: 5, name: "carrots" },
      { ingredient: 1123, amount: 2, name: "eggs" },
      { ingredient: 1082047, amount: 2, name: "kosher salt" },
      { ingredient: 4025, amount: 2, name: "mayonnaise" },
      { ingredient: 2027, amount: 3, name: "oregano" },
      { ingredient: 2021, amount: 2, name: "powdered ginger" },
      { ingredient: 1102047, amount: 3, name: "s&p" },
      { ingredient: 16124, amount: 2, name: "soy sauce" },
      { ingredient: 19335, amount: 3.6666666666666665, name: "sucrose" },
      { ingredient: 9019, amount: 3, name: "unsweetened apple sauce" },
      { ingredient: 2050, amount: 1, name: "vanilla" },
      { ingredient: 20081, amount: 3, name: "wheat flour" },
      { ingredient: 1054, amount: 2, name: "whipped cream" },
      { ingredient: 1125, amount: 30, name: "egg yolks" },
      { ingredient: 1001, amount: 38, name: "butter" },
      { ingredient: 20027, amount: 0, name: "corn starch" },
      { ingredient: 1123, amount: 2, name: "eggs" },
      { ingredient: 1125, amount: 30, name: "egg yolks" },
      { ingredient: 1077, amount: 0, name: "full-fat milk" },
      { ingredient: 2050, amount: 1, name: "vanilla" },
      { ingredient: 19335, amount: 3.6666666666666665, name: "sucrose" },
    ]);
  });
});
