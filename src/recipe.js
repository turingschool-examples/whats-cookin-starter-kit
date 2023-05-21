let recipesToCook = [];

const filterByTag = (tag, recipes) => {
  if (!recipes.filter(recipe => recipe.tags.includes(tag)).length) {
    return "No recipes found";
  } else {
    return recipes.filter(recipe => recipe.tags.includes(tag));
  }
};

const filterByName = (name, recipes) => {
  if (!recipes.filter(recipe => recipe.name === name).length) {
    return "No recipes found";
  } else {
    return recipes.filter(recipe => recipe.name === name);
  }
};

const determineIngredientNames = (recipes, ingredients, name) => {
  if (!recipes.filter(recipe => recipe.name === name).length) {
    return "No recipes found";
  } else {
    return recipes.filter(recipe => recipe.name === name)[0].ingredients.map(ingr => ingr.id).map(ID => ingredients[ingredients.findIndex(ing => ing.id === ID)].name);
  }
}

const calculateCost = (recipe, ingredients) => {
  let iDs = ingredients.reduce((array, ingredient) => [...array, ingredient.id], []);
  if (!recipe.ingredients.every(ingredient => iDs.includes(ingredient.id))) {
    return "Ingredient not found";
  } else {
  recipe.ingredients.forEach(ingredient => ingredient.cost = ingredients[iDs.indexOf(ingredient.id)].estimatedCostInCents);
  return recipe.ingredients.reduce((sum, ingredient) => sum + (ingredient.quantity.amount * ingredient.cost), 0) / 100;
    }
};

const returnInstructions = recipe => !recipe ? "Recipe not found" : recipe.instructions;

const toggleRecipesToCook = (id, recipes) => {
  recipes.forEach(recipe => {
    if (Number(id) === recipe.id && !recipesToCook.some(recipe => Number(id) === recipe.id)) {
      recipesToCook.push(recipe);
    } else if (Number(id) === recipe.id && recipesToCook.some(recipe => Number(id) === recipe.id)) {
      recipesToCook = recipesToCook.filter(recipe => recipe.id !== Number(id));
    } 
  });
  if (!recipes.some(recipe => recipe.id === id)) {
    return 'Recipe not found';
  }
}

export {
  recipesToCook,
  filterByTag,
  filterByName,
  determineIngredientNames,
  calculateCost,
  returnInstructions,
  toggleRecipesToCook
}

// const determineIngredientNames = (recipesData, ingredientsData, recipeName) => {
//   let ingredientNames = [];
//   const recipeIds = recipesData.find(find => find.name === recipeName).ingredients
//   .map(ingr => ingr.id);  
//   ingredientsData.forEach((ingredient)=> {
//     if(recipeIds.includes(ingredient.id)) {
//       ingredientNames.push(`${ingredient.name.charAt(0).toUpperCase()}${ingredient.name.slice(1)}`)
//     }
//   });
//   return ingredientNames
// }
