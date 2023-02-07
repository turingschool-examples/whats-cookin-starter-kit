import Recipe from "./Recipe";

class RecipeRepository {
  constructor(recipeData) {
    this.recipes = recipeData.map(recipe => new Recipe(recipe))

  }
}

export default RecipeRepository;
