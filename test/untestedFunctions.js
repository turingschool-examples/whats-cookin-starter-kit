

const findRecipe = (type, recipeList, tag) => {
  let recipeFound = recipeList.filter(recipe => {
    if(type === "name"){
    let recipeInfo = recipe[type];
    let recipeUndercase = recipeInfo.toLowerCase();
    return recipeUndercase.includes(tag.toLowerCase())
    }
    return recipe[type].includes(tag)
  })
  return recipeFound
}

// Determine the names of ingredients needed for a given recipe.

const findRecipeIngredients = (recipeData, ingredientsData, id) => {
  if (!recipeData || !ingredientsData || !Array.isArray(recipeData) || !Array.isArray(ingredientsData)) {
    return "Invalid recipe or ingredients data";
  }

  let givenRecipe = recipeData.find(recipe => {
    return recipe["id"] == id
  })

  if (!givenRecipe) {
    return "Recipe not found";
  }

  let ingredientIds = givenRecipe["ingredients"].map(ingredient => {
    return ingredient["id"]
  })

  let recipeIngredients = ingredientsData.filter(ingredient => {
    return ingredientIds.includes(ingredient["id"])
  })

  if (recipeIngredients.length === 0) {
    return "No ingredients found for the recipe";
  }

  return recipeIngredients.map(ingredient => {
    let ingredientNames = ingredient["name"]
    return ingredientNames
  });
}

// Return a specific recipe based on the id number

const specificRecipe = () => {
  return recipeData.find(recipe => recipe.id === clickedId)
}

const calculateCost = (recipeData, ingredientsData, clickedId) => {
  const clickedRecipe = recipeData.find(recipe => recipe.id == clickedId);
  let reducedIngredients = clickedRecipe.ingredients.reduce((accumulator, currentValue) => {
    let ingredientPrice = ingredientsData.find(ingredientDetail => ingredientDetail.id === currentValue.id);
    accumulator += ingredientPrice.estimatedCostInCents * currentValue.quantity.amount;
    return accumulator;
  }, 0);
  const costInDollars = (reducedIngredients / 100).toFixed(2); // Convert to dollars with 2 decimal places
  return `$${costInDollars}`;
};

const findDirections = (recipeData, recipeName) => {
  let chosenRecipe = recipeData.find(recipe => {
    return recipeName === recipe.name
  })
    return chosenRecipe.instructions
}

export {
  findRecipe,
  findRecipeIngredients,
  specificRecipe,
  calculateCost,
  findDirections
}