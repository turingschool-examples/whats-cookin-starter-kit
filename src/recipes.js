//Here is an example demonstrating logic separated that can be imported into the scripts and test files. Feel free to update this later! 
import recipeData from './data/recipes';

export const findRecipeIngredients = (recipeData, tag) => {
  let recipeNames = recipeData.filter(recipe => recipe.tags.includes(tag)).map(recipe => recipe.name)
  console.log(recipeNames)
  return recipeNames
}
