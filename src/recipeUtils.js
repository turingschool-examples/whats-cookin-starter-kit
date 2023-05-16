import recipeData from '../src/data/recipes-sample.js';
import ingredientsData from '../src/data/ingredients-sample.js';


function recipesFromTag(recipes, tag) {
  return recipes.filter((recipe) => {
    return recipe.tags.includes(tag)
  });
}

function recipesfromName(recipes, name) {
  return recipes.filter((recipe) => {
    return recipe.name.includes(name)
  })
}

const findRecipe = (recipeData, recipeName) => {
  const recipe = recipeData.find(({ name }) => name === recipeName);
  return recipe
};  

const findIngredientNames = (recipeData, ingredientsData, recipeName) => {
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

const recipeInstructions = (recipeData, recipeName) => {
  const recipe = findRecipe(recipeData, recipeName);
   if (!recipe) {
     return "Sorry, that recipe cannot be found.";
   }
   const instructions = recipe.instructions.map(({ number, instruction }) => `${number}. ${instruction}`);
   return instructions.join('\n');
 };



export {
  recipesFromTag,
  recipesfromName,
  findRecipe,
  findIngredientNames,
  calculateRecipeCost,
  recipeInstructions
}