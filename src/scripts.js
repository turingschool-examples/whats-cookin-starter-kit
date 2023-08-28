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
import "./styles.css";
import "./domUpdates.js";

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
    return recipeEl.id === parseInt(recipeID);
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
    return Math.round(totalCost);
  }
}

function returnIngredientNames(arrayRecipe, arrayIngredients, recipeID) {
  const filteredRecipe = arrayRecipe.find((recipeEl) => {
    return recipeEl.id === parseInt(recipeID);
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
    return recipeEl.id === parseInt(recipeID);
    //recipeEl.id was a number
    //recipeId was a string
    // write a test case for different data types.
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

function returnRecipeTitle(array, recipeID) {
  return array
    .filter((recipeEl) => {
      return recipeEl.id === parseInt(recipeID);
    })
    .map((oneRecipeEl) => {
      return oneRecipeEl.name;
    });
}

function returnRecipeTags(array, recipeID) {
  return array
    .filter((recipeEl) => {
      return recipeEl.id === parseInt(recipeID);
    })
    .flatMap((recipeEl) => {
      return recipeEl.tags;
    });
}

function returnRecipeImgUrl(array, recipeID) {
  return array
    .filter((recipeEl) => {
      return recipeEl.id === parseInt(recipeID);
    })
    .map((filteredRecipeEl) => {
      return filteredRecipeEl.image;
    });
}

function returnListOfUniqueTags(array) {
  return array.reduce((acc, curr) => {
    curr.tags.forEach((tagEl) => {
      if (!acc.includes(tagEl)) {
        acc.push(tagEl);
      }
    });
    return acc;
  }, []);
}

function returnFilteredRecipeArrayByTagID(arrayTagsID, arrayRecipe) {
  return arrayRecipe.filter((arrayRecipeEl) => {
    return arrayTagsID.some((idEl) => {
      return idEl === arrayRecipeEl.id;
    });
  });
}
export {
  createFunction,
  returnFilteredListName,
  returnIngredientNames,
  returnFilteredTag,
  returnRecipeCost,
  returnRecipeDirections,
  returnRecipeTitle,
  returnRecipeTags,
  returnRecipeImgUrl,
  returnListOfUniqueTags,
  returnFilteredRecipeArrayByTagID,
};
