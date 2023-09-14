const filterByTag = (tags, arrayToFilter) => {
  if (tags.length > 0) {
    let filteredArray = arrayToFilter.reduce((acc, cv) => {
      tags.forEach(tag => {
        if (!acc.includes(cv) && cv.tags.includes(tag)) {
          acc.push(cv);
        }
      });
      return acc;
    }, []);
    return filteredArray;
  } else {
    return arrayToFilter;
  }
};

const searchRecipes = (searchTerm, recipes) => {
  let searchedRecipe = recipes.filter(recipe => {
    return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return searchedRecipe;
};

const getIngredientNames = (recipe, ingredients) => {
  let ingredientIds = recipe.ingredients.map(ingr => {
    return ingr.id;
  });
  let ingredientNames = ingredients.reduce((acc, cv) => {
    if (ingredientIds.includes(cv.id)) {
      acc.push(cv.name);
    }
    return acc;
  }, []);
  return ingredientNames;
};

const calculateCost = (recipe, ingredients) => {
  let totalCost = 0;

  recipe.ingredients.forEach(recipeIngredient => {
    const matchingIngredient = ingredients.find(
      ingredient => ingredient.id === recipeIngredient.id,
    );

    if (matchingIngredient) {
      totalCost +=
        matchingIngredient.estimatedCostInCents *
        recipeIngredient.quantity.amount;
    } else {
      throw new Error('Ingredient not found');
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
