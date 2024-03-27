import { expect } from "chai";
import {
  findRecipeTags,
  findRecipeIngredients,
  createRecipesNeeded,
  calculateRecipeCost,
  getRecipeInstructions,
} from "../src/recipes";
import recipeData from "../src/data/recipes";
import ingredientsData from "../src/data/ingredients";
import constants from "./test-prompts";


describe("Recipe Tag", () => {
  it("Should be a function", () => {
    expect(findRecipeTags).to.be.a("function");
  });

  it("Should return a filtered list of recipes based on a tag", () => {
    const recipe = findRecipeTags(recipeData, "sauce");
    expect(recipe).to.deep.equal(["Dirty Steve's Original Wing Sauce"]);
  });

  describe("Recipe Ingredient", () => {
    it("Should be a function", () => {
      expect(findRecipeIngredients).to.be.a("function");
    });
  });

  it("Should return a filtered list of recipes based on a tag", () => {
    const recipe = findRecipeIngredients(recipeData, "Vegan");
    expect(recipe).to.deep.equal(["Vegan Lentil Loaf"]);
  });

  it("Should account for case sensitivity and spacing", () => {
    const recipe = findRecipeIngredients(recipeData, "vegan len ");
    expect(recipe).to.deep.equal(["Vegan Lentil Loaf"]);
  });
});



describe("Recipe Ingredient List", () => {
  it("Should be a function", () => {
    expect(createRecipesNeeded).to.be.a("function");
  });

  it("Should create a list of ingredients for a given recipe ID", () => {
    const ingredients = createRecipesNeeded(
      595736,
      recipeData,
      ingredientsData
    );
    expect(ingredients).to.deep.equal(constants.expectedIngredients);
  });

  it("Should calculate the cost of a given recipe’s ingredients", () => {
    const cost = calculateRecipeCost(595736, recipeData, ingredientsData);
    expect(cost).to.equal(177.76);
  });

  it("Should return the directions / instructions for a given recipe", () => {
    const instructions = getRecipeInstructions(595736, recipeData);
    expect(instructions).to.deep.equal(constants.recipeTemplate);
  });
});

//<><><><><>TO DO: Create Filter for two tags<><><><><>
//<><><><><>TO DO: Condense filter by case sensitivity and spaces<><><><><>
