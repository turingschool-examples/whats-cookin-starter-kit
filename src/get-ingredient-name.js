const matchIngredient = (id, ingredientsData) => {
  const ingredient = ingredientsData.find(ingredient => { 
    return ingredient.id === id;
  });
  return ingredient;
}

const getIngredientName = (id, ingredientsData) => {
  const matchedIngredient = matchIngredient(id, ingredientsData);
  return matchedIngredient.name;
};

export { 
  matchIngredient,
  getIngredientName 
};