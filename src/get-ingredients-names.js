const getIngredientsNames = (recipe, ingredientsData) => {
  const ingredientsIDs = recipe.ingredients.map((ele) => {
    return ele.id
  });
  const ingredientsNames = ingredientsIDs.map((id) => {
    const ingredient = ingredientsData.find(ingredient => { 
      return ingredient.id === id;
    });
    return ingredient.name;
  });
  return ingredientsNames;
};

export { getIngredientsNames };