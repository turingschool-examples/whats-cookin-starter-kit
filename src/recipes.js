//Here is an example demonstrating logic separated that can be imported into the scripts and test files. Feel free to update this later! 

// import recipeData from "./data/recipes"
// import ingredientsData from "./data/ingredients"
import recipeData from "./data/mockRecipes"
import ingredientsData from "./data/mockIngredients"


export function filterRecipesByTag(tag) {
  return recipeData.filter(recipes => recipes.tags.includes(tag));
}
// const result = filterRecipesByTag('breakfast');
// console.log(result.map(result => result.name))

export const findRecipeByName = name => {
  return recipeData.find(recipe => recipe.name === name);
}
// console.log(findRecipeByName('Waffles'));


export const findRecipeIngredients = recipeId => {
  const foundRecipe = recipeData.find(recipe => recipe.id === recipeId);
  return foundRecipe.ingredients;
}
// console.log(findRecipeIngredients(1))


export const calcRecipeCost = recipeId => {
  const recipeToCalc = recipeData.find(recipe => {
    return recipe.id === recipeId
  });
  const totalCost = recipeToCalc.ingredients.reduce((acc, { id, quantity }) => {
    const ingredient = ingredientsData.find(ingredient => {
      return ingredient.id === id;
    });
      return acc + (ingredient.estimatedCostInCents * quantity.amount);
  }, 0);
  return (totalCost / 100).toFixed(2);
}
// console.log(calcRecipeCost(5));


export const returnRecipeInstructions = recipeId => {
  const foundRecipe = recipeData.find(recipe => recipe.id === recipeId);
  return foundRecipe.instructions;
}
// console.log(returnRecipeInstructions(1));