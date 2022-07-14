import { expect } from "chai";
import RecipeRepository from "../src/classes/RecipeRepository";
import Recipe from "../src/classes/Recipe";

describe("RecipeRepository", () => {
  it("Should be a function", () => {
    expect(RecipeRepository).to.be.a("function");
  });

  let recipeRepository;

  beforeEach(() => {
    recipeRepository = new RecipeRepository();
  });

  it("Should have an array of recipes", () => {
    expect(recipeRepository.recipes).to.be.an("Array");
  });

  it("Should be able to add a recipe to the array of recipes", () => {
    let recipe = new Recipe();
    recipeRepository.addRecipe(recipe);

    expect(recipeRepository.recipes.length).to.equal(1);
    expect(recipeRepository.recipes[0]).to.deep.equal(recipe);

    let anotherRecipe = new Recipe();
    recipeRepository.addRecipe(anotherRecipe);

    expect(recipeRepository.recipes.length).to.equal(2);
    expect(recipeRepository.recipes[0]).to.deep.equal(recipe);
    expect(recipeRepository.recipes[1]).to.deep.equal(anotherRecipe);
  });

  it("Should be able to filter recipes by tag", () => {
    let dinnerRecipeData = {
      tags: ["dinner", "main dish"],
    };
    let breakfastRecipeData = {
      tags: ["breakfast", "side"],
    };
    let dinnerRecipe = new Recipe(dinnerRecipeData);
    let breakfastRecipe = new Recipe(breakfastRecipeData);
    recipeRepository.addRecipe(dinnerRecipe);
    recipeRepository.addRecipe(breakfastRecipe);

    expect(recipeRepository.filterRecipesByTag("dinner")).to.include(
      dinnerRecipe
    );
    expect(recipeRepository.filterRecipesByTag("breakfast")).to.include(
      breakfastRecipe
    );

    expect(recipeRepository.filterRecipesByTag("dinner")).to.not.include(
      breakfastRecipe
    );
    expect(recipeRepository.filterRecipesByTag("breakfast")).to.not.include(
      dinnerRecipe
    );
  });

  it("Should be able to filter recipes by a portion of their name", () => {
    let chickenAlfredoData = {
      name: "Chicken Alfredo",
      tags: ["main", "pasta"],
    };

    let bakedChickenAlfredoData = {
      name: "Baked Chicken Alfredo",
      tags: ["main", "pasta"],
    };

    let chickenAlfredo = new Recipe(chickenAlfredoData);
    let bakedChickenAlfredo = new Recipe(bakedChickenAlfredoData);
    recipeRepository.addRecipe(chickenAlfredo);
    recipeRepository.addRecipe(bakedChickenAlfredo);

    expect(recipeRepository.filterRecipesByName("Chick")).to.include(
      chickenAlfredo,
      bakedChickenAlfredo
    );

    expect(recipeRepository.filterRecipesByName("baked")).to.include(
      bakedChickenAlfredo
    );
  });

  it("Should have an array of tags that is empty by default", () => {
    expect(recipeRepository.allTags).to.deep.equal([]);
  });

  it("Should update its array of tags whenever new recipes are added", () => {
    let chickenAlfredoData = {
      name: "Chicken Alfredo",
      tags: ["main", "pasta"],
    };

    let bakedChickenAlfredoData = {
      name: "Baked Chicken Alfredo",
      tags: ["main", "pasta", "baked"],
    };
    let chickenAlfredo = new Recipe(chickenAlfredoData);
    let bakedChickenAlfredo = new Recipe(bakedChickenAlfredoData);
    recipeRepository.addRecipe(chickenAlfredo);
    recipeRepository.addRecipe(bakedChickenAlfredo);

    expect(recipeRepository.allTags).to.deep.equal(["main", "pasta", "baked"]);
  });

  it("should be able to import data and create a new instance of Recipe", () => {});
});
