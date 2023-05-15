import {ingredientTestData, recipeTestData, userTestData} from '../src/data/testData.js';

const returnInstructions = recipeName => recipeName 

const determineIngredientNames = (recipesData, ingredientsData, recipeName) => {
  let ingredientNames = [];
  const recipeIds = recipesData.find(find => find.name === recipeName).ingredients
  .map(ingr => ingr.id);  
  ingredientsData.forEach((ingredient)=> {
    if(recipeIds.includes(ingredient.id)) {
      ingredientNames.push(ingredient.name)
    }
  })
return ingredientNames
}

export {returnInstructions, determineIngredientNames}