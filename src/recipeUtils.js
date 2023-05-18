import recipeData from '../src/data/recipes-sample.js';
import ingredientsData from '../src/data/ingredients-sample.js';


function recipesFromTag(recipes, tags) {
  const filtered = recipes.filter((recipe) => {
    return tags.every((tag => {
      return recipe.tags.includes(tag)
    }))
  })
  return filtered
}

function recipesfromName(recipes, name) {
  return recipes.filter((recipe) => {
    if (recipe.name.toLowerCase().includes(name.toLowerCase())) {
    return recipe.name
  }
})
}

const findRecipe = (recipeData, recipeName) => {
  const recipe = recipeData.find(({ name }) => name === recipeName);
  return recipe
};  

const findIngredientNames = (recipeData, recipeName) => {
  const recipe = findRecipe(recipeData, recipeName);
    if (recipe === undefined) {
      return "Sorry, we don't have that recipe."
    }
  const ingredientIds = recipe.ingredients.map(({ id }) => id);
  const ingredients = ingredientsData.filter(({ id }) => ingredientIds.includes(id));
  return ingredients.map(({ name }) => name);
};

const calculateRecipeCost = recipe => {
  if (recipe === undefined) {
    return 'Sorry, that recipe cannot be found.'
  }
  const totalCost = recipe.ingredients.reduce((acc, {id, quantity: {amount}}) => 
    acc + (amount / 100) * (ingredientsData.find(data => data.id === id).estimatedCostInCents), 0)
  return totalCost.toFixed(2);
}

  const recipeInstructions = recipe => {
   if (recipe === undefined) {
     return "Sorry, that recipe cannot be found.";
   }
   const instructions = recipe.instructions.map(({ number, instruction }) => `${number}. ${instruction}`);
   return instructions.join(' ')
 };



export {
  recipesFromTag,
  recipesfromName,
  findRecipe,
  findIngredientNames,
  calculateRecipeCost,
  recipeInstructions
}