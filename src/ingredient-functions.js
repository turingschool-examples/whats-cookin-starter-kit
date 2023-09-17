const findRecipeIngredients = (recipeData, ingredientsData, id) => {
  let givenRecipe = recipeData.find(recipe => {
    return recipe['id'] == id
  })

  if (!givenRecipe) {
    return [];
  }

  let ingredientIds = givenRecipe['ingredients'].map(ingredient => {
    return ingredient['id']
  })

  let recipeIngredients = ingredientsData.filter(ingredient => {
    return ingredientIds.includes(ingredient['id'])
  })

  return recipeIngredients.map(ingredient => {
    let ingredientNames = ingredient['name']
    return ingredientNames
  } )
};

const calculateCost = (recipeData, ingredientsData, clickedId) => {
  const clickedRecipe = recipeData.find(recipe => recipe.id == clickedId);

  if (!clickedRecipe || !clickedRecipe.ingredients || clickedRecipe.ingredients.length === 0) {
    return '$0.00';
  };

  const reducedIngredients = clickedRecipe.ingredients.reduce((accumulator, currentValue) => {
    const ingredientPrice = ingredientsData.find(ingredientDetail => ingredientDetail.id === currentValue.id);
    if (ingredientPrice) {
      accumulator += ingredientPrice.estimatedCostInCents * currentValue.quantity.amount;
    }
    return accumulator;
  }, 0);

  const costInDollars = (reducedIngredients / 100).toFixed(2);
  return `$${costInDollars}`;
};


const findDirections = (recipeData, recipeName) => {
  const chosenRecipe = recipeData.find(recipe => {
    return recipeName === recipe.name;
  });

  if (!chosenRecipe) {
    return []; 
  }

  return chosenRecipe.instructions;
};

export {
  findRecipeIngredients,
  calculateCost,
  findDirections
};