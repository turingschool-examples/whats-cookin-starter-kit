const chai = require("chai");
const expect = chai.expect;

import {
  returnFilteredListName,
  returnIngredientNames,
  returnFilteredTag,
  returnRecipeCost,
  returnRecipeDirections,
  returnRecipeTitle,
  findRecipeByName,
  saveRecipe,
  returnRecipeImgUrl,
  deleteRecipe
} from "../src/functions.js";

import ingredientsTestData from "../src/data/ingredients-test-data.js";

import recipeTestData from "../src/data/recipes-test-data.js";

import usersTestData from "../src/data/users-test-data.js";

describe("filter list based on tag", () => {
  it("should return a filtered list based on a tag", () => {
    const result = returnFilteredTag(recipeTestData, "starter");
    expect(result[0].id).to.equal(595736);
    expect(result.length).to.equal(1);
  });

  it("should work with different tags", () => {
    const result = returnFilteredTag(recipeTestData, "lunch");
    expect(result[0].id).to.equal(678353);
    expect(result.length).to.equal(1);
  });

  it("should return an empty array if no matches", () => {
    const result = returnFilteredTag(recipeTestData, "second breakfeast");
    expect(result.length).to.equal(0);
  });
});

describe("filter list based on name", () => {
  it("should return a filtered list based on a name", () => {
    const result = returnFilteredListName(
      recipeTestData,
      "Loaded Chocolate Chip Pudding Cookie Cups"
    );
    expect(result[0].id).to.equal(595736);
    expect(result.length).to.equal(1);
  });

  it("should work with a different name", () => {
    const result = returnFilteredListName(
      recipeTestData,
      "Maple Dijon Apple Cider Grilled Pork Chops"
    );
    expect(result[0].id).to.equal(678353);
    expect(result.length).to.equal(1);
  });
});

describe("return ingredients of a recipe", () => {
  it("should determine the names of ingredients based on a recipe name", () => {
    const result = returnIngredientNames(
      recipeTestData,
      ingredientsTestData,
      595736
    );
    expect(result[0]).to.equal("wheat flour");
    expect(result.length).to.equal(11);
  });

  it("should work with a different recipe", () => {
    const result = returnIngredientNames(
      recipeTestData,
      ingredientsTestData,
      678353
    );
    expect(result.length).to.equal(12);
  });

  it("should return an empty array if no recipe found", () => {
    const result = returnIngredientNames(
      recipeTestData,
      ingredientsTestData,
      "noRecipe"
    );
    expect(result.length).to.equal(0);
  });
});

describe("calculate cost of ingredients", () => {
  it("should calculate the cost of a given recipe's ingredients", () => {
    const result = returnRecipeCost(
      recipeTestData,
      ingredientsTestData,
      595736
    );
    expect(result).to.equal(34);
  });

  it("should calculate the cost of a different recipe's ingredients", () => {
    const result = returnRecipeCost(
      recipeTestData,
      ingredientsTestData,
      678353
    );
    expect(result).to.equal(0);
  });
});

describe("find directions of a recipe", () => {
  it("should return the directions for a given recipe", () => {
    const result = returnRecipeDirections(recipeTestData, 595736);
    expect(result[0]).to.equal(
      "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy."
    );
    expect(result.length).to.equal(6);
  });

  it("should return the directions for another recipe", () => {
    const result = returnRecipeDirections(recipeTestData, 678353);
    expect(result[0]).to.equal(
      "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!"
    );
    expect(result.length).to.equal(1);
  });

  it("should return an empty array if no matches", () => {
    const result = returnRecipeDirections(recipeTestData, "noMatch");
    expect(result.length).to.equal(0);
  });
});

describe("Recipe Title/Name", () => {
  it("should return recipe title/name based on the id of a recipe clicked", () => {
    const result = returnRecipeTitle(recipeTestData, 595736);
    expect(result[0]).to.equal("Loaded Chocolate Chip Pudding Cookie Cups");
    expect(result.length).to.equal(1);
  });

  it("should return the title for another recipe clicked", () => {
    const result = returnRecipeTitle(recipeTestData, 678353);
    expect(result[0]).to.equal("Maple Dijon Apple Cider Grilled Pork Chops");
    expect(result.length).to.equal(1);
  });
  it("should return an empty array if no matches", () => {
    const result = returnRecipeDirections(recipeTestData, "noMatch");
    expect(result.length).to.equal(0);
  });
});

describe("Finding a recipe by name in the search field for 'name", () => {
  it("should return an object that contains the title for the recipes that include the words typed in by the user", () => {
    const result = findRecipeByName("apple", recipeTestData);
    expect(result[0].name).to.equal(
      "Maple Dijon Apple Cider Grilled Pork Chops"
    );
    expect(result.length).to.equal(1);
  });

  it("should return an object that contains the id of the recipes that include th words typed in by the user", () => {
    const result = findRecipeByName("chocolate", recipeTestData);
    expect(result[0].id).to.equal(595736);
    expect(result.length).to.equal(1);
  });
  it("should return an empty array if no matches", () => {
    const result = findRecipeByName("egg", recipeTestData);
    expect(result.length).to.equal(0);
  });
});

describe("Save a Recipe", () => {
  it("should add an element to a savedArray everytime a recipe is saved", () => {
    let savedArray = [];
    const result = saveRecipe(recipeTestData, savedArray, 595736);
    expect(result.length).to.equal(1);
  });

  it("should return information about the recipe including the id and name", () => {
    let savedArray = [];
    const result = saveRecipe(recipeTestData, savedArray, 595736);
    expect(result[0].id).to.equal(595736);
    expect(result[0].name).to.equal(
      "Loaded Chocolate Chip Pudding Cookie Cups"
    );
  });
  it("should return undefined if no matches", () => {
    let savedArray = [];
    const result = saveRecipe(recipeTestData, savedArray, 123456);
    expect(result[0]).to.equal(undefined);
  });
});


describe("Recipe Title/Name", () => {
  it("should return recipe title/name based on the id of a recipe clicked", () => {
    const result = returnRecipeTitle(recipeTestData, 595736);
    expect(result[0]).to.equal("Loaded Chocolate Chip Pudding Cookie Cups");
    expect(result.length).to.equal(1);
  });

  it("should return the title for another recipe clicked", () => {
    const result = returnRecipeTitle(recipeTestData, 678353);
    expect(result[0]).to.equal("Maple Dijon Apple Cider Grilled Pork Chops");
    expect(result.length).to.equal(1);
  });
  it("should return an empty array if no matches", () => {
    const result = returnRecipeDirections(recipeTestData, "noMatch");
    expect(result.length).to.equal(0);
  });
});

describe("Finding a recipe by name in the search field for 'name", () => {
  it("should return an object that contains the title for the recipes that include the words typed in by the user", () => {
    const result = findRecipeByName("apple", recipeTestData);
    expect(result[0].name).to.equal(
      "Maple Dijon Apple Cider Grilled Pork Chops"
    );
    expect(result.length).to.equal(1);
  });

  it("should return an object that contains the id of the recipes that include th words typed in by the user", () => {
    const result = findRecipeByName("chocolate", recipeTestData);
    expect(result[0].id).to.equal(595736);
    expect(result.length).to.equal(1);
  });
  it("should return an empty array if no matches", () => {
    const result = findRecipeByName("egg", recipeTestData);
    expect(result.length).to.equal(0);
  });
});

describe("Save a Recipe", () => {
  it("should add an element to a savedArray everytime a recipe is saved", () => {
    let savedArray = [];
    const result = saveRecipe(recipeTestData, savedArray, 595736);
    expect(result.length).to.equal(1);
  });

  it("should return information about the recipe including the id and name", () => {
    let savedArray = [];
    const result = saveRecipe(recipeTestData, savedArray, 595736);
    expect(result[0].id).to.equal(595736);
    expect(result[0].name).to.equal(
      "Loaded Chocolate Chip Pudding Cookie Cups"
    );
  });
  it("should return undefined if no matches", () => {
    let savedArray = [];
    const result = saveRecipe(recipeTestData, savedArray, 123456);
    expect(result[0]).to.equal(undefined);
  });
});

describe("return tags of a recipe", () => {
  it("should return the tags of a given recipe", () => {
    const result = returnRecipeTags(recipeTestData, 595736);
    expect(result[0]).to.equal("antipasti");
    expect(result.length).to.equal(6);
  });

  it("should return the tags of another recipe", () => {
    const result = returnRecipeTags(recipeTestData, 678353);
    expect(result[0]).to.equal("lunch");
    expect(result.length).to.equal(4);
  });

  it("should return an empty array if recipe id given doesn't exist", () => {
    const result = returnRecipeTags(recipeTestData, 23412312);
    expect(result.length).to.equal(0);
  });
});

describe("find a recipe given an ingredient name string", () => {
  it("should return a recipe object", () => {
    const result = findRecipeByIngredient('wheat flour', ingredientsTestData, recipeTestData);
    expect(result[0].name).to.equal("Loaded Chocolate Chip Pudding Cookie Cups");
    expect(result.length).to.equal(1);
  });

  it("should work with other ingredient strings", () => {
    const result = findRecipeByIngredient('bicarbonate of soda', ingredientsTestData, recipeTestData);
    expect(result[0].name).to.equal("Loaded Chocolate Chip Pudding Cookie Cups");
    expect(result.length).to.equal(1);
  });

  it("should work with even MORE ingredient strings!", () => {
    const result = findRecipeByIngredient('eggs', ingredientsTestData, recipeTestData);
    expect(result[0].name).to.equal("Loaded Chocolate Chip Pudding Cookie Cups");
    expect(result.length).to.equal(1);
  });
});

describe("return tags of a recipe", () => {
  it("should return the tags of a given recipe", () => {
    const result = returnRecipeTags(recipeTestData, 595736);
    expect(result[0]).to.equal("antipasti");
    expect(result.length).to.equal(6);
  });

  it("should return the tags of another recipe", () => {
    const result = returnRecipeTags(recipeTestData, 678353);
    expect(result[0]).to.equal("lunch");
    expect(result.length).to.equal(4);
  });

  it("should return an empty array if recipe id given doesn't exist", () => {
    const result = returnRecipeTags(recipeTestData, 23412312);
    expect(result.length).to.equal(0);
  });
});

describe("find a recipe given an ingredient name string", () => {
  it("should return a recipe object", () => {
    const result = findRecipeByIngredient('wheat flour', ingredientsTestData, recipeTestData);
    expect(result[0].name).to.equal("Loaded Chocolate Chip Pudding Cookie Cups");
    expect(result.length).to.equal(1);
  });

  it("should work with other ingredient strings", () => {
    const result = findRecipeByIngredient('bicarbonate of soda', ingredientsTestData, recipeTestData);
    expect(result[0].name).to.equal("Loaded Chocolate Chip Pudding Cookie Cups");
    expect(result.length).to.equal(1);
  });

  it("should work with even MORE ingredient strings!", () => {
    const result = findRecipeByIngredient('eggs', ingredientsTestData, recipeTestData);
    expect(result[0].name).to.equal("Loaded Chocolate Chip Pudding Cookie Cups");
    expect(result.length).to.equal(1);
  });
});

describe("get recipe image url", () => {
  it("should return the recipe image url", () => {
    const result = returnRecipeImgUrl(recipeTestData, 595736);
    expect(result).to.deep.equal(["https://spoonacular.com/recipeImages/595736-556x370.jpg"])
  });
  it("should return another recipe image url", () => {
    const result = returnRecipeImgUrl(recipeTestData, 678353);
    expect(result).to.deep.equal(["https://spoonacular.com/recipeImages/678353-556x370.jpg"])
  });
  it("should return an empty array if there is no recipe", () => {
    const result = returnRecipeImgUrl(recipeTestData, 999999);
    expect(result).to.deep.equal([])
  });
});

describe("be able to delete a recipe", () => {
  it("should delete a recipe from the saved recipes", () => {
    const savedArray = []
    saveRecipe(recipeTestData, savedArray, 595736)
    // console.log(savedArray)
    const result = deleteRecipe(savedArray, 595736);
    // console.log(savedArray)
    expect(result).to.deep.equal([])
  });
  it("should delete a recipe from multiple saved recipes", () => {
    const savedArray = []
    saveRecipe(recipeTestData, savedArray, 595736)
    saveRecipe(recipeTestData, savedArray, 678353)
    // console.log(savedArray)
    const result = deleteRecipe(savedArray, 678353);
    // console.log(savedArray)
    expect(result[0].id).to.equal(595736)
  });
  it("should be an empty array if there is nothing in the saved recipes", () => {
    const savedArray = []
    const result = deleteRecipe(savedArray, 678353);
    // console.log(savedArray)
    expect(result.length).to.equal(0)
  });
});