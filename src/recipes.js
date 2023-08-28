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
    console.log("getting here");
    return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
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

// const calculateCost = (recipe, ingredients) => {
//   let totalCost = 0;

//   recipe.ingredients.forEach((recipeIngredient) => {
//     const matchingIngredient = ingredients.find((ingredient) => ingredient.id === recipeIngredient.id);

//     if (matchingIngredient) {
//       totalCost += matchingIngredient.estimatedCostInCents * recipeIngredient.quantity.amount;
//     }
//   });

//   return totalCost;
// };

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
        total += ingredient.estimatedCostInCents * recipeIngredient.quantity.amount;
      }
    });
    return total;
  }, 0);
  
  return totalCost;
};

module.exports = {
  filterByTag,
  searchRecipes,
  getRecipeInstructions,
  calculateCost
};
