import recipeData from '../src/data/recipes-sample.js';
import ingredientsData from '../src/data/ingredients-sample.js';
import recipesToCook from './data/recipesToCook-sample.js';

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
  const ingredientIds = recipe.ingredients.map(({ id }) => id);
  const ingredients = ingredientsData.filter(({ id }) => ingredientIds.includes(id));
  const ingredientNames = ingredients.map(({ name }) => name);
  return ingredientNames.join(', ');
};

const calculateRecipeCost = (recipe, ingredients) => {
  if (recipe === undefined) {
    return 'Sorry, that recipe cannot be found.'
  }
  const totalCost = recipe.ingredients.reduce((acc, {id, quantity: {amount}}) => 
    acc + (amount / 100) * (ingredients.find(ingredient => ingredient.id === id).estimatedCostInCents), 0)
  return totalCost.toFixed(2);
}

  const recipeInstructions = recipe => {
   if (recipe === undefined) {
     return "Sorry, that recipe cannot be found.";
   }
   const instructions = recipe.instructions.map(({ number, instruction }) => `${number}. ${instruction}`);
   return instructions.join(' ')
 };

const saveRecipe = (recipe) => {
  recipesToCook.push(recipe)
  return recipesToCook
}

const deleteRecipe = (recipe) => {

}
export {
  recipesFromTag,
  recipesfromName,
  findRecipe,
  findIngredientNames,
  calculateRecipeCost,
  recipeInstructions,
  saveRecipe,
  deleteRecipe
}