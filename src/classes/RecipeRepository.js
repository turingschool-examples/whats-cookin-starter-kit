import Recipe from "./Recipe";

class RecipeRepository {
  constructor(recipeData) {
    this.recipes = recipeData.map(recipe => new Recipe(recipe))

  }
  filterByTag(tag) {
    let filteredRecipes = this.recipes.filter(recipe => {
      return recipe.tags.includes(tag)
    })
     return filteredRecipes
  }
}

export default RecipeRepository;
