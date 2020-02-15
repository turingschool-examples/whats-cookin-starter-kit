const oldRecipes = require('./data/recipes.js');
const fs = require('fs');

// Map over recipes to return everything, except for the ingredients' name property

function removeIngredientNames(recipes) {
  let newRecipes = Object.assign([], recipes);
  newRecipes = newRecipes.map(recipe => {
    let newRecipe = Object.assign({}, recipe);
    newRecipe.ingredients = newRecipe.ingredients.map(ingredient => {
      return {
        id: ingredient.id,
	quantity: ingredient.quantity
      };
    }); 
    console.log(newRecipe);
    return newRecipe;
  });
  return newRecipes;
}

let recipesSansIngredientNames = removeIngredientNames(oldRecipes);

//console.log(JSON.stringify(recipesSansIngredientNames));
console.log(recipesSansIngredientNames);

// write new recipes to file

fs.writeFile('./data/recipes.js', JSON.stringify(recipesSansIngredientNames), (error) => {
  if (error) {
    throw error;
  } else {
    console.log('file written');
  };
});
