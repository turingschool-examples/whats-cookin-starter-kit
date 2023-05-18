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

const compileIngredientsInfos = (recipe, ingredientNames) => {
  const ingredientsQuantities = recipe.ingredients.map((ele) => {
    return `${ele.quantity.amount} ${ele.quantity.unit}`;
  });
  const ingredientsInfos = ingredientsQuantities.map((ele, i) => {
    return `${ingredientNames[i]} × ${ele}`;
  });

  return ingredientsInfos;
}

const getIngredientsInfos = (recipe, ingredientsData) => {
  const ingredientNames = getIngredientsNames(recipe, ingredientsData);
  const ingredientsInfos = compileIngredientsInfos(recipe, ingredientNames);
  return ingredientsInfos;
}

export { getIngredientsInfos };