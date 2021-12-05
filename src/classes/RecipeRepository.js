class RecipeRepository {
  constructor(recipe) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = [];
  }
}

export default RecipeRepository;
