const getInstructions = recipe => {
  return recipe.instructions.map(item => item.instruction)
}

const filterRecipes = (allRecipes, ...tags) => {
  let filteredRecipes = [];
  tags.forEach((tag) => {
    filteredRecipes.push(allRecipes.filter(recipe => {
      return recipe.tags.includes(tag);
    }));
  })
  
  console.log(filteredRecipes.flat());
  return filteredRecipes.flat();
}

export {
  getInstructions,
  filterRecipes
}
