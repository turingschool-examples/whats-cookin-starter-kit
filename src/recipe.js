let recipesToCook = [];

const filterByTag = (tag, recipes) => !recipes.filter(recipe => recipe.tags.includes(tag)).length ? [] : recipes.filter(recipe => recipe.tags.includes(tag));

const filterByName = (name, recipes) => !recipes.filter(recipe => recipe.name.toLowerCase().includes(name)).length ? [] : recipes.filter(recipe => recipe.name.toLowerCase().includes(name));

const determineIngredientNames = (recipes, ingredients, name) => !recipes.filter(recipe => recipe.name === name).length ? "No recipes found" : recipes.filter(recipe => recipe.name === name)[0].ingredients.map(ingr => ingr.id).map(ID => ingredients[ingredients.findIndex(ing => ing.id === ID)].name);

const calculateCost = (recipe, ingredients) => {
  let iDs = ingredients.reduce((array, ingredient) => [...array, ingredient.id], []);
  if (!recipe.ingredients.every(ingredient => iDs.includes(ingredient.id))) {
    return "Ingredient not found";
  } else {
  recipe.ingredients.forEach(ingredient => ingredient.cost = ingredients[iDs.indexOf(ingredient.id)].estimatedCostInCents);
  return Number((recipe.ingredients.reduce((sum, ingredient) => sum + (ingredient.quantity.amount * ingredient.cost), 0) / 100).toFixed(2));
    };
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
  };
};

export {
  recipesToCook,
  filterByTag,
  filterByName,
  determineIngredientNames,
  calculateCost,
  returnInstructions,
  toggleRecipesToCook
};