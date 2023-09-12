function returnFilteredTag(recipes, tag) {
  const filteredRecipe = recipes.filter((recipeEl) => {
    return recipeEl.tags.includes(tag);
  });
  if (filteredRecipe) {
    return filteredRecipe.map((recipeEl) => {
      return recipeEl;
    });
  } else {
    return [];
  }
}

function returnRecipeCost(recipes, ingredients, id) {
  const filteredRecipe = recipes.find((recipeEl) => {
    return recipeEl.id === parseInt(id);
  });
  if (filteredRecipe) {
    const ingredientsArr = filteredRecipe.ingredients;
    const totalCost = ingredientsArr.reduce((acc, ingredientEl) => {
      const matchingIngredient = ingredients.find((ingredientsObjEl) => {
        return ingredientEl.id === ingredientsObjEl.id;
      });
      if (matchingIngredient) {
        acc +=
          (ingredientEl.quantity.amount *
            matchingIngredient.estimatedCostInCents) /
          100;
      }
      return acc;
    }, 0);
    return Math.round(totalCost);
  }
}

function returnIngredientNames(recipes, ingredients, id) {
  const filteredRecipe = recipes.find((recipeEl) => {
    return recipeEl.id === parseInt(id);
  });
  if (filteredRecipe) {
    const ingredientsArr = filteredRecipe.ingredients;
    return ingredientsArr.map((ingredientEl) => {
      const matchingIngredient = ingredients.find((ingredientsObjEl) => {
        return ingredientEl.id === ingredientsObjEl.id;
      });
      if (matchingIngredient) {
        return matchingIngredient.name;
      }
    });
  }
  return [];
}
function returnRecipeDirections(recipes, id) {
  const filteredRecipe = recipes.find((recipeEl) => {
    return recipeEl.id === parseInt(id);
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

function returnFilteredListName(recipes, name) {
  return recipes
    .filter((recipeEl) => {
      return (
        recipeEl.name.includes(name) ||
        recipeEl.name.toLowerCase().includes(name.toLowerCase())
      );
    })
    .map((filteredRecipeEl) => {
      return filteredRecipeEl;
    });
}

function returnRecipeTitle(recipes, id) {
  return recipes
    .filter((recipeEl) => {
      return recipeEl.id === parseInt(id);
    })
    .map((oneRecipeEl) => {
      return oneRecipeEl.name;
    });
}

function returnRecipeTags(recipes, id) {
  return recipes
    .filter((recipeEl) => {
      return recipeEl.id === parseInt(id);
    })
    .flatMap((recipeEl) => {
      return recipeEl.tags;
    });
}

function returnRecipeImgUrl(recipes, id) {
  return recipes
    .filter((recipeEl) => {
      return recipeEl.id === parseInt(id);
    })
    .map((filteredRecipeEl) => {
      return filteredRecipeEl.image;
    });
}

function returnListOfUniqueTags(recipes) {
  return recipes.reduce((acc, currentRecipe) => {
    currentRecipe.tags.forEach((tagEl) => {
      if (!acc.includes(tagEl)) {
        acc.push(tagEl);
      }
    });
    return acc;
  }, []);
}

function returnFilteredRecipeArrayByTagID(arrayTagsID, recipes) {
  return recipes.filter((recipesEl) => {
    return arrayTagsID.some((idEl) => {
      return idEl === recipesEl.id;
    });
  });
}

function findRecipeByName(userInput, recipeData) {
  const storedRecipeIds = recipeData
    .filter((recipe) => {
      const recipeName = recipe.name.toLowerCase();
      return recipeName.includes(userInput);
    })
    .map((recipe) => recipe);
  return storedRecipeIds;
}

function findRecipeByIngredient(userInput, ingredientsData, recipeData) {
  const storedIngredientIds = ingredientsData
    .filter(
      (ingredient) => ingredient.name && ingredient.name.includes(userInput)
    )
    .map((ingredient) => ingredient.id);

  const recipesWithMatch = recipeData.filter((recipe) => {
    return recipe.ingredients.some((ingredient) =>
      storedIngredientIds.includes(ingredient.id)
    );
  });
  const recipeIdsWithMatch = recipesWithMatch.map((recipe) => recipe);
  return recipeIdsWithMatch;
}

function getUserInput(inputType) {
  const userInput = document.querySelector(inputType).value;
  return userInput.toLowerCase();
}

function saveRecipe(dataArray, savedArray, clickedId) {
  const savedRecipe = dataArray.find((recipeEl) => {
    return recipeEl.id === parseInt(clickedId);
  });
  if (!savedArray.includes(savedRecipe)) {
    savedArray.push(savedRecipe);
    return savedArray;
  }
}

function deleteRecipe(savedArray, clickedId) {
  const recipeIndex = savedArray.findIndex((savedRecipeEl) => {
    return savedRecipeEl.id === parseInt(clickedId);
  });
  if (recipeIndex !== -1) {
    savedArray.splice(recipeIndex, 1);
  }
  return savedArray;
}

export {
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
  findRecipeByIngredient,
  findRecipeByName,
  getUserInput,
  saveRecipe,
  deleteRecipe,
};
