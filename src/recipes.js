export const filterRecipesByTag = (recipes, tag) => {
  if (!tag || tag === '') return;
  const filteredRecipes = recipes.filter(recipes => recipes.tags.includes(tag) || recipes.name.includes(tag));
  if (filteredRecipes.length === 0) {
    return 'Sorry, we are unable to find any recipes to match!';
  }
  return filteredRecipes;
};

export const findRecipeIngredients = (recipes, ingredients, recipeId) => {
  const foundRecipe = recipes.find(recipe => {
    return recipe.id === recipeId;
  });
  return foundRecipe.ingredients.reduce((acc, current) => {
    const ingredient = ingredients.find(ingredient => {
      return ingredient.id === current.id;
    });
    acc.push(ingredient.name);
    return acc;
  }, []);
};

export const calcRecipeCost = (recipe, ingredients) => {
  const totalCost = recipe.ingredients.reduce((acc, { id, quantity }) => {
    const ingredient = ingredients.find(ingredient => {
      return ingredient.id === id;
    });
    return acc + ingredient.estimatedCostInCents * quantity.amount;
  }, 0);
  return (totalCost / 100).toFixed(2);
};

export const returnRecipeInstructions = (recipes, recipeId) => {
  const foundRecipe = recipes.find(recipe => recipe.id === recipeId);
  return foundRecipe.instructions;
};
