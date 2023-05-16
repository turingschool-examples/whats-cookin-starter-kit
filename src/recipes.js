const getRecipeById = (recipes, id) => {
  const recipe = recipes.find(recipe => recipe.id === id);
  console.log('recipe file:', recipe)
  return recipe;
};

const getRecipeInstructions = (recipe) => {
  return recipe.instructions.reduce((instructions, instruction) => {
    instructions += `${instruction.number}. ${instruction.instruction}`;
    return instructions;
  }, []);
};

export { getRecipeInstructions, getRecipeById };