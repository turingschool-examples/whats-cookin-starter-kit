// helper functions

const getAllTags = (recipeList) => {
  const tagList = recipeList.reduce((acc, curr) => {
    curr.tags.forEach(tag => {
      if (!acc.includes(tag)) {
        acc.push(tag);
      }
    });
    return acc;
  }, []);
  return tagList;
};

const getRecipeById = (recipeList, id) => {
  const recipe = recipeList.find(recipe => recipe.id === id);
  return recipe;
};

// main functions

const filterByTag = (list, tags) => {
  const filteredList = list.filter(recipe => tags.some(tag => recipe.tags.includes(tag)));
  return filteredList;
};

const searchRecipes = (list, searchTerm, ingredientsList) => {
  const lowercasedSearchTerm = searchTerm.toLowerCase();
  let searchResults = list.filter(recipe => {
    let lowercasedName = recipe.name.toLowerCase();
    return lowercasedName.includes(lowercasedSearchTerm);
  });
  list.forEach(recipe => {
    const ingredients = findRecipeIngredients(list, recipe.id, ingredientsList);
    ingredients.forEach(ingredient => {
      if (ingredient.includes(lowercasedSearchTerm) && !searchResults.includes(recipe)) {
        searchResults.push(recipe);
      }
    });
  });
  return searchResults;
};

const findRecipeIngredients = (recipeList, recipeId, ingredientsList) => {
  const recipe = getRecipeById(recipeList, recipeId);
  const ingredientIds = recipe.ingredients.map(ingredient => ingredient.id);
  const ingredientNames = ingredientIds.map(ingredientId => {
    ingredientsList.forEach(ingredient => {
      if (ingredient.id === ingredientId) {
        ingredientId = ingredient.name;
      }
    });
    return ingredientId;
  });
  return ingredientNames;
};

const calculateCost = (recipeList, recipeId, ingredientsList) => {
  const recipe = getRecipeById(recipeList, recipeId);
  const ingredientIds = recipe.ingredients.map(ingredient => ingredient.id);
  const ingredientAmmounts = recipe.ingredients.map(ingredient => ingredient.quantity.amount);
  const ingredientPrices = ingredientIds.map(ingredientId => {
    ingredientsList.forEach(ingredient => {
      if (ingredient.id === ingredientId) {
        ingredientId = ingredient.estimatedCostInCents;
      }
    });
    return ingredientId;
  });
  const totalPrice = ingredientAmmounts.reduce((acc, curr) => {
    acc += (curr * ingredientPrices[ingredientAmmounts.indexOf(curr)]) / 100;
    return acc;
  }, 0);
  return totalPrice;
};

const getInstructions = (recipeList, recipeId) => {
  const recipe = getRecipeById(recipeList, recipeId);
  const instructions = recipe.instructions.map(prop => prop.instruction);
  return instructions;
};

export {
  filterByTag,
  searchRecipes,
  findRecipeIngredients,
  calculateCost,
  getInstructions,
  getAllTags
};

