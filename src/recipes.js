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

const calculateCost = (recipe, ingredients) => {
  let totalCost = 0;

  recipe.ingredients.forEach((recipeIngredient) => {
    const matchingIngredient = ingredients.find(
      (ingredient) => ingredient.id === recipeIngredient.id
    );

    if (matchingIngredient) {
      totalCost +=
        matchingIngredient.estimatedCostInCents * recipeIngredient.quantity.amount;
    } else {
      throw new Error("Ingredient not found");
    }
  });

  return Math.ceil(totalCost / 100);
};


module.exports = {
  filterByTag,
  searchRecipes,
  getIngredientNames,
  calculateCost,
};
