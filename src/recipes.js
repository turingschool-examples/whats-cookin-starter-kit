//Here is an example demonstrating logic separated that can be imported into the scripts and test files. Feel free to update this later! 

// export const findRecipeIngredients = recipe => {
//   console.log(recipe)
// }

export function filterRecipesByTag(recipes, tag) {
const filteredRecipesByTag = recipes.filter(recipe => {
  return recipe.tags.includes(tag);
});
return filteredRecipesByTag;
}