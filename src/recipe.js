import {ingredientTestData, recipeTestData, userTestData} from '../src/data/testData.js';

const filterByTag = (recipes,tag) => {
    const findRecipe = recipes.filter(recipe => {

       return recipe.tags.includes(tag)
   })
   
   return findRecipe
}

const filterByName = (recipes,name) => {
    const findName = recipes.filter(recipe => {

       return recipe.name === name
   })
   
   return findName
}

const returnInstructions = recipe => {

    return recipe.instructions

}

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

export {returnInstructions,
    filterByTag,
    filterByName,
    determineIngredientNames,
}
    

