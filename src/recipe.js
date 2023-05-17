import {ingredientTestData, recipeTestData, userTestData} from '../src/data/testData.js';

const createRecipe = recipe => ({
  id: recipe.id,
  image: recipe.image,
  ingredients: recipe.ingredients,
  instructions: recipe.instructions,
  name: recipe.name,
  tags: recipe.tags
});

const filterByTag = (recipes, tag) => {
    const findRecipe = recipes.filter(recipe => {
      return recipe.tags.includes(tag);
    })
    return findRecipe;
}

const filterByName = (recipes, name) => {
  const findName = recipes.filter(recipe => {
    return recipe.name === name;
  });
  return findName;
}

const determineIngredientNames = (recipesData, ingredientsData, recipeName) => {
  let ingredientNames = [];
  const recipeIds = recipesData.find(find => find.name === recipeName).ingredients
  .map(ingr => ingr.id);  
  ingredientsData.forEach((ingredient)=> {
    if(recipeIds.includes(ingredient.id)) {
      ingredientNames.push(ingredient.name)
    }
  });
  return ingredientNames
}

const calculateCost = recipe => {
  let iDs = ingredientTestData.reduce((array, ingredient) => [...array, ingredient.id], []);
  recipe.ingredients.forEach(ingredient => ingredient.cost = ingredientTestData[iDs.indexOf(ingredient.id)].estimatedCostInCents);
  return recipe.ingredients.reduce((sum, ingredient) => sum + (ingredient.quantity.amount * ingredient.cost), 0) / 100;
};

const returnInstructions = recipe => {
 return recipe.instructions.reduce((string, instruction) => `${string}` + `${instruction.number}) ${instruction.instruction} `, '')
}

export {createRecipe,
    filterByTag,
    filterByName,
    calculateCost,
    determineIngredientNames,
    returnInstructions
}

