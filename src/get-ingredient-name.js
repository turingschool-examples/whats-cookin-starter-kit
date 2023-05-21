const matchIngredient = (id, ingredientsData) => {
  if (typeof id !== 'number' || (typeof ingredientsData !== 'object' && !Array.isArray(ingredientsData))) {
    return 'Error: wrong input type';
  }

  const ingredient = ingredientsData.find(ingredient => { 
    return ingredient.id === id;
  });

  if (!ingredient) {
    return 'Error: no matching ingredient';
  }

  return ingredient;
};

const getIngredientName = (id, ingredientsData) => {
  const matchingResult = matchIngredient(id, ingredientsData);
  if (typeof matchingResult !== 'object') {
    return matchingResult;
  }
  return matchingResult.name;
};

export { 
  matchIngredient,
  getIngredientName 
};