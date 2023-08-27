//NOTE: Data model and non-dom manipulating logic will live in this file.

// import "./styles.css";
// import apiCalls from "./apiCalls";
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import "./images/turing-logo.png";
// import ingredientsData from "./data/ingredients.js";

//Example of one way to import functions from the domUpdates file. You will delete these examples.
// import { exampleFunction1, exampleFunction2 } from "./domUpdates.js";

// exampleFunction1("heather");
// exampleFunction2("heather");

// console.log(ingredientsData);

function createFunction(array) {
  return array;
}

function returnFilteredTag(array, tag) {
  const filteredRecipe = array.filter((recipeEl) => {
    return recipeEl.tags.includes(tag);
  });
  if (filteredRecipe) {
    return filteredRecipe.map((recipeEl) => {
      return recipeEl.id;
    });
  } else {
    return [];
  }
}

function returnRecipeCost(arrayRecipe, arrayIngredients, recipeID) {
  const filteredRecipe = arrayRecipe.find((recipeEl) => {
    return recipeEl.id === recipeID;
  });
  if (filteredRecipe) {
    const ingredientsArr = filteredRecipe.ingredients;
    let totalCost = 0;

    ingredientsArr.forEach((ingredientEl) => {
      const matchingIngredient = arrayIngredients.find((ingredientsObjEl) => {
        return ingredientEl.id === ingredientsObjEl.id;
      });
      if (matchingIngredient) {
        totalCost +=
          (ingredientEl.quantity.amount *
            matchingIngredient.estimatedCostInCents) /
          100;
      }
    });
    return totalCost;
  }
}

function returnIngredientNames(arrayRecipe, arrayIngredients, recipeID) {
  const filteredRecipe = arrayRecipe.find((recipeEl) => {
    return recipeEl.id === recipeID;
  });
  if (filteredRecipe) {
    const ingredientsArr = filteredRecipe.ingredients;
    return ingredientsArr.map((ingredientEl) => {
      const matchingIngredient = arrayIngredients.find((ingredientsObjEl) => {
        return ingredientEl.id === ingredientsObjEl.id;
      });
      if (matchingIngredient) {
        return matchingIngredient.name;
      }
    });
  }
  return [];
}
function returnRecipeDirections(array, recipeID) {
  const filteredRecipe = array.find((recipeEl) => {
    return recipeEl.id === recipeID;
  });

  if (filteredRecipe) {
    return filteredRecipe.instructions.map((instructionsObj) => {
      return instructionsObj.instruction;
    });
  } else {
    return [];
  }
}

function returnFilteredListName(array, name) {
  return array
    .filter((recipeEl) => {
      return recipeEl.name === name;
    })
    .map((filteredRecipeEl) => {
      return filteredRecipeEl.id;
    });
}
module.exports = {
  createFunction,
  returnFilteredListName,
  returnIngredientNames,
  returnFilteredTag,
  returnRecipeCost,
  returnRecipeDirections,
};
