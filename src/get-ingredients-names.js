const getIngredientsNames = (recipe, ingredients) => {
  const ingredientsIDs = recipe.ingredients.map((ele) => {
    return ele.id
  });
  const ingredientsNames = ingredientsIDs.map((id) => {
    const ingredient = ingredients.find(ingredient => { 
      return ingredient.id === id;
    });
    return ingredient.name;
  });
  return ingredientsNames;
};

export { getIngredientsNames };