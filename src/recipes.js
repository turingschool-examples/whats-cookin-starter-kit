const filterByTag = (tags, recipes) => {
  let filteredRecipes = [];
  tags.forEach((tag) => {
    let filterRecipe = recipes.filter((recipe) => {
      return recipe.tags.includes(tag);
    });
    filteredRecipes.push(...filterRecipe);
  });
  return filteredRecipes;
};

const searchRecipes = (searchTerm, recipes) => {
  return recipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
};

const getIngredientNames = (recipe, ingredients) => {
  let ingredientIds = recipe.ingredients.map((ingr) => {
    return ingr.id;
  });
  let ingredientNames = ingredients.reduce((acc, cv) => {
    if (ingredientIds.includes(cv.id)) {
      console.log("match");
      acc.push(cv.name);
    }
    return acc;
  }, []);
  return ingredientNames;
};

const getRecipeInstructions = (recipeName, recipes) => {
  let recipe = recipes.find((recipe) => {
    return recipe.name === recipeName;
  });
  if (recipe) {
    return recipe.instructions;
  } else {
    return [];
  }
};

const calculateCost = (recipe, ingredients) => {
  let ids = recipe.ingredients.map((ingredient) => {
    return ingredient.id;
  });

  let recipeIngredients = ingredients.filter((ingredient) => {
    return ids.includes(ingredient.id);
  });

  if (recipeIngredients.length !== recipe.ingredients.length) {
    return "Ingredient not found";
  }

  let totalCost = recipeIngredients.reduce((total, ingredient) => {
    recipe.ingredients.forEach((recipeIngredient) => {
      if (recipeIngredient.id === ingredient.id) {
        total +=
          ingredient.estimatedCostInCents * recipeIngredient.quantity.amount;
      }
    });
    return total;
  }, 0);

  totalCost = Math.ceil(totalCost / 100);

  return totalCost;
};

module.exports = {
  filterByTag,
  searchRecipes,
  getIngredientNames,
  getRecipeInstructions,
  calculateCost,
};
