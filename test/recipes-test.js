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
////^^^line 3 does NOT need curly braces because we are importing a "default"

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
    const expectedIngredients = [
      "wheat flour",
      "bicarbonate of soda",
      "eggs",
      "sucrose",
      "instant vanilla pudding",
      "brown sugar",
      "salt",
      "fine sea salt",
      "semi sweet chips",
      "unsalted butter",
      "vanilla",
    ];
    expect(ingredients).to.deep.equal(expectedIngredients);
  });

  it("Should calculate the cost of a given recipe’s ingredients", () => {
    const cost = calculateRecipeCost(595736, recipeData, ingredientsData);
    expect(cost).to.equal(177.76);
  });

  it("Should return the directions / instructions for a given recipe", () => {
    const instructions = getRecipeInstructions(595736, recipeData);
    expect(instructions).to.deep.equal([
      "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.Add egg and vanilla and mix until combined.Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degreesPlace the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
      "number",
    ]);
  });
});

//<><><><><>TO DO: Create Filter for two tags<><><><><>
//<><><><><>TO DO: Condense filter by case sensitivity and spaces<><><><><>
