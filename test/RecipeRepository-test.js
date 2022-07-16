import { expect } from "chai";
import RecipeRepository from "../src/classes/RecipeRepository";
import Recipe from "../src/classes/Recipe";

describe("RecipeRepository", () => {
  it("Should be a function", () => {
    expect(RecipeRepository).to.be.a("function");
  });

  let recipeRepository;
  let recipe1;
  let recipe2;
  let recipe3;

  beforeEach(() => {
    recipeRepository = new RecipeRepository();
    recipe1 = new Recipe({
      id: 1,
      name: "Chocolate Chip Cookie",
      imageURL: "https://recipe-image-1.jpg",
      portions: [
        {
          ingredientId: 1,
          name: "Flour",
          amount: 2,
          cost: 101,
          unit: "C",
        },
      ],
      instructions: ["Bake it"],
      tags: ["snack", "dessert"],
    });

    recipe2 = new Recipe({
      id: 2,
      name: "Glazed Ham Sandwich",
      imageURL: "https://recipe-image-2.jpg",
      portions: [
        {
          ingredientId: 2,
          name: "Bread",
          amount: 5,
          cost: 200,
          unit: "loaf",
        },
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

  it("Should have an array of recipes", () => {
    expect(recipeRepository.recipes).to.be.an("Array");
  });

  it("Should be able to add a recipe to the array of recipes", () => {
    recipeRepository.addRecipe(recipe1);
    expect(recipeRepository.recipes.length).to.equal(1);
    recipeRepository.addRecipe(recipe2);
    expect(recipeRepository.recipes.length).to.equal(2);
  });

  it("Should be able to filter recipes by multiple tags", () => {
    recipeRepository.addRecipe(recipe1);
    recipeRepository.addRecipe(recipe2);
    recipeRepository.addRecipe(recipe3);
    recipeRepository.addInputToSearch("dinner");
    recipeRepository.addInputToSearch("dessert");
    recipeRepository.filterByMultipleTags();
    expect(recipeRepository.filteredAllRecipes).to.deep.equal([
      recipe1,
      recipe3,
    ]);
  });

  it("Should be able to filter multiple recipes by a portion of their name", () => {
    recipeRepository.addRecipe(recipe1);
    recipeRepository.addRecipe(recipe2);
    recipeRepository.addRecipe(recipe3);
    recipeRepository.addInputToSearch("Glaze");
    recipeRepository.filterByMultipleRecipeNames();
    expect(recipeRepository.filteredAllResults).to.deep.equal([
      recipe2,
      recipe3,
    ]);
  });

  it("Should have an array of tags that is empty by default", () => {
    expect(recipeRepository.allTags).to.deep.equal([]);
  });

  it("Should update its array of tags whenever new recipes are added", () => {
    recipeRepository.addRecipe(recipe1);
    recipeRepository.addRecipe(recipe2);
    expect(recipeRepository.allTags).to.deep.equal([
      "snack",
      "dessert",
      "lunch",
    ]);
  });

  it("should be able to import data and create a new instance of Recipe", () => {
    const testRecipeData = [
      {
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
        ],
        name: "Loaded Chocolate Chip Pudding Cookie Cups",
        tags: ["starter", "snack", "appetizer"],
      },
    ];

    const testIngredientData = [
      {
        id: 20081,
        name: "wheat flour",
        estimatedCostInCents: 142,
      },
      {
        id: 18372,
        name: "bicarbonate of soda",
        estimatedCostInCents: 582,
      },
    ];

    const testRecipe = new Recipe({
      id: 595736,
      name: "Loaded Chocolate Chip Pudding Cookie Cups",
      imageURL: "https://spoonacular.com/recipeImages/595736-556x370.jpg",
      portions: [
        {
          ingredientId: 20081,
          name: "wheat flour",
          cost: 142,
          amount: 1.5,
          unit: "c",
        },
        {
          ingredientId: 18372,
          name: "bicarbonate of soda",
          cost: 582,
          amount: 0.5,
          unit: "tsp",
        },
      ],
      instructions: [
        "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
        "Add egg and vanilla and mix until combined.",
      ],
      tags: ["starter", "snack", "appetizer"],
    });

    recipeRepository.importRecipesFromFile(testRecipeData, testIngredientData);
    expect(recipeRepository.recipes[0]).to.deep.equal(testRecipe);
  });

  it("should be able to search by multiple ingredients", () => {
    recipeRepository.addRecipe(recipe1);
    recipeRepository.addRecipe(recipe2);
    recipeRepository.addRecipe(recipe3);
    recipeRepository.lowerCaseIngredients();
    recipeRepository.addInputToSearch("Flour");
    recipeRepository.addInputToSearch("BREAD");
    recipeRepository.filterByMultipleIngredients();
    expect(recipeRepository.filteredAllRecipes).to.deep.equal([
      recipe1,
      recipe2,
    ]);
  });

  it("should clear the selected input & filtered results array after filteration is complete", () => {
    recipeRepository.addRecipe(recipe1);
    recipeRepository.addRecipe(recipe2);
    recipeRepository.addRecipe(recipe3);
    recipeRepository.addInputToSearch("dessert");
    recipeRepository.addInputToSearch("pork");
    recipeRepository.filterByMultipleTags();
    expect(recipeRepository.filteredAllRecipes).to.deep.equal([
      recipe1,
      recipe3,
    ]);
    recipeRepository.clearData();
    expect(recipeRepository.selectedInput).to.deep.equal([]);
    expect(recipeRepository.filteredAllRecipes).to.deep.equal([]);
  });
});