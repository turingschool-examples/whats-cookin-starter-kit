const Recipe = require('../src/recipe');

class RecipeRepo {
  constructor(recipeData = []) {
    this.recipes = recipeData.map(recipe => new Recipe(
      recipe.id,
      recipe.image,
      recipe.ingredients,
      recipe.instructions,
      recipe.name,//all lower case?
      recipe.tags
    ))
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
    const ingName = this.recipes.forEach(recipe => {
      const name = recipe.returnIngredientNames(ingredientData)
      return name;
    })
    console.log(ingName);

    // const searchByIngredient = this.recipes.filter(recipe => {
    //   return recipe.ingredients.includes(ingredient);
    // })
    // return searchByIngredient;
  }



}


if (typeof module !== "undefined") {
  module.exports = RecipeRepo;
}