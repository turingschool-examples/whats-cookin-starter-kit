class RecipeRepository {
  constructor(recipeArray) {
    this.recipes = recipeArray;
  }

  filterRecipeByTag(tag1, tag2, tag3) {
    return this.recipes.filter(recipe => recipe.tags.includes(tag1) || recipe.tags.includes(tag2) || recipe.tags.includes(tag3));
  }

  filterRecipeByName(name) {
    return this.recipes.filter(recipe => recipe.name.includes(name));
  }

  filterRecipeByIngredients(ingredientName) {
    const id = []
    let ingredientId = ingredientsData.filter(ingredient => {
      if (ingredient.name === ingredientName) {
        id.push(ingredient.id);
      };
    });

    const tempRecipe = [];
    let recipeByIngredient = this.recipes.filter(recipes => {
      recipes.ingredients.filter(ingredientsByRecipe => {
        if (ingredientsByRecipe.id === id[0]) {
          tempRecipe.push(recipes);
        }
      })
    })

    let finalRecipe = [...new Set(tempRecipe)];
    return finalRecipe;
  }

}

if (typeof module !== 'undefined') {
  module.exports = RecipeRepository;
}