const Recipe = require('../src/recipe');

class RecipeRepo {
  constructor(recipeData = [], ingredientData) {
    this.recipes = recipeData.map(recipe => new Recipe(
      recipe.id,
      recipe.image,
      recipe.ingredients,
      recipe.instructions,
      recipe.name,//all lower case?
      recipe.tags
    ))
    this.ingredientData = ingredientData;
  }

  filterRecipesByTag(tag) {
    const searchByTag = this.recipes.filter(recipe => {
      return recipe.tags.includes(tag);
    })
    return searchByTag;
  }

  filterRecipesByName(recipeName) {
    //make name lowercase?
    return this.recipes.find(recipe => recipe.name === recipeName);
  }

  filterRecipesByIngredients(ingredientName) {
    // const recipeId = this.recipes.returnIngredientId(ingredientData, recipeName);
    // const searchByIngredient = this.recipes.filter(recipe => {
    //   return recipe.ingredients.find(ingredient => ids.includes(ingredient.id));
    // })
    // return searchByIngredient;

    const search = [];
    this.ingredientData.forEach(ingredient => {
      search.push(
        this.recipes.find(recipe => ingredient.id === recipe.ingredients.id));
    });
    console.log(search);
    return search;
  }



}


if (typeof module !== "undefined") {
  module.exports = RecipeRepo;
}