export const searchRecipes = (recipes, input) => {
  if (!input || input === '') return;
  const filteredRecipes = recipes.filter(recipes => {
    return recipes.tags.includes(input) || recipes.name.includes(input);
  });
  if (filteredRecipes.length === 0) {
    return `Sorry, we are unable to find any recipes to match ${input}!`;
  }
  return filteredRecipes;
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

export function formatRecipeIngredients(recipe, allIngredients) {
  return recipe.ingredients.reduce((formatted, current) => {
    const { id, quantity: { amount, unit } } = current;
    const match = allIngredients.find(item => item.id === id);
    if (match) {
      formatted.push({
        name: match.name,
        amount,
        unit
      });
    }
    return formatted;
  }, []);
}