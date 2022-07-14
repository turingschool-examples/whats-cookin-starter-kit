import { expect } from "chai";
import Recipe from "../src/classes/Recipe";

describe("Recipe", () => {
  let newRecipe, recipe1
  let newIngredients = []

  beforeEach(() => {
    newRecipe = {
      id: 595736,
      image: "https://spoonacular.com/recipeImages/595736-556x370.jpg",
      ingredients: [
        {
          id: 20081,
          quantity: {
            amount: 1.5,
            unit: "c",
          },
        },
        {
          id: 18372,
          quantity: {
            amount: 0.5,
            unit: "tsp",
          },
        },
        {
          id: 1123,
          quantity: {
            amount: 1,
            unit: "large",
          },
        },
      ],
      instructions: [
        {
          instruction:
          "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
          number: 1,
        },
        {
          instruction: "Add egg and vanilla and mix until combined.",
          number: 2,
        },
        {
          instruction:
          "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
          number: 3,
        },
      ],
      name: "Loaded Chocolate Chip Pudding Cookie Cups",
      tags: ["antipasti", "starter", "snack"],
    };
    newIngredients = [
      {
        "id": 20081,
        "name": "wheat flour",
        "estimatedCostInCents": 142
      },
      {
        "id": 18372,
        "name": "bicarbonate of soda",
        "estimatedCostInCents": 582
      },
      {
        "id": 1123,
        "name": "eggs",
        "estimatedCostInCents": 472
      },
      {
        "id": 9003,
        "name": "apple",
        "estimatedCostInCents": 207
      }]
    recipe1 = new Recipe(newRecipe);
  });

  it("Should be a function", () => {
    expect(Recipe).to.be.a("function");
  });
  
  it("Should be an instance of Recipe", () => {
    expect(recipe1).to.be.an.instanceOf(Recipe);
  });

  it("Should have an id", () => {
    expect(recipe1.id).to.equal(595736);
  });

  it("Should have an img", () => {
    expect(recipe1.image).to.equal(
      "https://spoonacular.com/recipeImages/595736-556x370.jpg"
    );
  });

  it("Should have an ingredients", () => {
    expect(recipe1.ingredients).to.deep.equal(newRecipe.ingredients);
  });

  it("Should have an instructions", () => {
    expect(recipe1.instructions).to.deep.equal(newRecipe.instructions);
  });

  it("Should have an name", () => {
    expect(recipe1.name).to.equal("Loaded Chocolate Chip Pudding Cookie Cups");
  });

  it("Should have tags", () => {
    expect(recipe1.tags).to.deep.equal(newRecipe.tags);
  });

  it("Should determine the name of ingredients", () => {
    expect(recipe1.getIngredients(newIngredients)).to.deep.equal([
      "wheat flour",
      "bicarbonate of soda",
      "eggs",
    ]);
  });

  it("Should determine the instructions", () => {
    expect(recipe1.getInstructions()).to.deep.equal([
      {
        instruction:
          "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
        number: 1,
      },
      {
        instruction: "Add egg and vanilla and mix until combined.",
        number: 2,
      },
      {
        instruction:
          "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
        number: 3,
      },
    ]);
  });

  it("Should determine the cost of ingredients", () => {
    recipe1.getIngredients(newIngredients)

    expect(recipe1.getCost()).to.equal(11.96);
  });
});
