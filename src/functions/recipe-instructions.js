// recipe instructions function here

const recipeInstructions = (recipe) => {
  if (!recipe) {
    return 'No recipe located';
  }
  return recipe.instructions;
};

export { recipeInstructions };