import { ingredientTestData, recipeTestData, userTestData } from '../src/data/testData.js';

let recipesToCook = [];

const filterByTag = (recipes, tag) => recipes.filter(recipe => recipe.tags.includes(tag));

const filterByName = (recipes, name) => recipes.filter(recipe => recipe.name === name);

const determineIngredientNames = (recipes, ingredients, name) => recipes.filter(recipe => recipe.name === name)[0].ingredients.map(ingr => ingr.id).map(ID => ingredients[ingredients.findIndex(ing => ing.id === ID)].name);

const calculateCost = recipe => {
  let iDs = ingredientTestData.reduce((array, ingredient) => [...array, ingredient.id], []);
  recipe.ingredients.forEach(ingredient => ingredient.cost = ingredientTestData[iDs.indexOf(ingredient.id)].estimatedCostInCents);
  return recipe.ingredients.reduce((sum, ingredient) => sum + (ingredient.quantity.amount * ingredient.cost), 0) / 100;
};

const returnInstructions = recipe => recipe.instructions.reduce((string, instruction) => `${string}` + `${instruction.number}) ${instruction.instruction}`, '');

const toggleRecipesToCook = e => {
  recipeTestData.forEach(recipe => {
    if (Number(e.target.id) === recipe.id && !recipesToCook.some(recipe => Number(e.target.id) === recipe.id)) {
      recipesToCook.push(recipe);
    } else if (Number(e.target.id) === recipe.id && recipesToCook.some(recipe => Number(e.target.id) === recipe.id)) {
      recipesToCook = recipesToCook.filter(recipe => recipe.id !== Number(e.target.id));
    }
  });
}

export {
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
