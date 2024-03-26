//Here is an example demonstrating logic separated that can be imported into the scripts and test files. Feel free to update this later! 
import recipeData from './data/recipes';
import ingredientsData from './data/ingredients';


export const findRecipeTags = (recipeData, tag) => {
  let recipeNamesTags = recipeData.filter(recipe => recipe.tags.includes(tag))
  .map(recipe => recipe.name)
  return recipeNamesTags
}

export const findRecipeIngredients = (recipeData, ingredient) => {
  let recipeNames = recipeData.filter(recipe => recipe.name.includes(ingredient))
    .map(recipe => recipe.name)
    return recipeNames
}

export const createRecipesNeeded = (recipeID, recipeData, ingredientsData) => {
  let recipeChoice = recipeData.find(recipe => recipe.id === recipeID)
  console.log("recipeChoice variable: ", recipeChoice)
  let ingredientsIdArray = recipeChoice.ingredients.map(ingredient => ingredient.id)
  let ingredientsNameArray = []
  console.log("ingredientsIdArray variable: ", ingredientsIdArray)
  ingredientsIdArray.forEach(id => {if (id === ingredientsData.id)

//for each ingredientsData object, if id (1002030) === ingredientData[i].id, PUSH ingredientData[i].name
    //

  {ingredientsNameArray.push("TEST PUSH")}
  })
  console.log(ingredientsNameArray)
}

// ingredientIdArray = [
//   1002030,   19334,    1001,
//      4582,    2031,    5100,
//      2009, 1022020,    6168,
//      9176,    2026, 1042047,
//   1042047
// ]