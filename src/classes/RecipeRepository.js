class RecipeRepository {
  constructor(recipeData) {
    this.recipes = [recipeData];
    this.recipesByTag = [];
  }

  filterByTag(tag) {
    const filteredList = this.recipes.filter((recipe) => {
      return recipe.tags.includes(tag);
    })
    this.recipesByTag = filteredList;
  }
}

export default RecipeRepository;
