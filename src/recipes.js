//Here is an example demonstrating logic separated that can be imported into the scripts and test files. Feel free to update this later! 
import { ingredientsPromise, ingredientList, handleIngredients, handleRecipes, recipeData, recipesPromise } from './apiCalls.js';
Promise.all([ingredientsPromise]).then((values) => {handleIngredients(values)});
Promise.all([recipesPromise]).then((values) => {handleRecipes(values)});
let recipe = [];


export const findRecipeIngredients = (recipeName) => {
  
  Promise.all([ingredientsPromise]).then((values) => {handleIngredients(values)});
  Promise.all([recipesPromise]).then((values) => {handleRecipes(values)});

   recipe = recipeData.find((matchingName) => recipeName === matchingName.name);
  var listOfFoods = [];
  for (var i = 0; i < recipe.ingredients.length; i++) {
    var currentIngredient = ingredientList.find((ingredient) => ingredient.id === recipe.ingredients[i].id);
    listOfFoods.push(" " +currentIngredient.name);
  }
  return listOfFoods;
}


export const findRecipeTag = (recipeList, tag) => {
  Promise.all([ingredientsPromise]).then((values) => {handleIngredients(values)});
  Promise.all([recipesPromise]).then((values) => {handleRecipes(values)});
  

  let thatRecipe = recipeList.filter((recipes) => {
    return recipes.tags.includes(tag)
  });
  let mapRecipe = thatRecipe.map((food) => {
    return food.name
  });
  return mapRecipe
};


export const findRecipeName = (recipe, name) => {
  Promise.all([ingredientsPromise]).then((values) => {handleIngredients(values)});
  Promise.all([recipesPromise]).then((values) => {handleRecipes(values)});
  
  let thisRecipe = recipe.filter((recipes) => {
    if (recipes.name.includes(name)) {
      return recipe
    }
  });
  return thisRecipe
};


export const findRecipePrice = (recipe) => {
  Promise.all([ingredientsPromise]).then((values) => {handleIngredients(values)});
  Promise.all([recipesPromise]).then((values) => {handleRecipes(values)});
  

  var pricePerIngredient = [];
  for (var i = 0; i < recipe.ingredients.length; i++) {
    var currentIngredient = ingredientList.find((ingredient) => ingredient.id === recipe.ingredients[i].id);
    var priceForThisIngredient = (currentIngredient.estimatedCostInCents * recipe.ingredients[i].quantity.amount)
    pricePerIngredient.push(priceForThisIngredient);
  }
  var initVal = 0;
  var totalValue = pricePerIngredient.reduce((accumulatorVal, currentVal) => accumulatorVal + currentVal, initVal,);
  return totalValue;

}

export const findRecipeInstructions = (recipe, recipeName) => {
  Promise.all([ingredientsPromise]).then((values) => {handleIngredients(values)});
  Promise.all([recipesPromise]).then((values) => {handleRecipes(values)});
  
  let userRecipe = recipe.find((recipes) => {
    return recipes.name === recipeName
  })
  return userRecipe.instructions
};

export{
  recipeData,
  ingredientList
}