class RecipeRepository {
  constructor(recipeData) {
    this.recipes = [recipeData];
    this.recipesByTag = [];
    this.recipesByName = [];
  }

  filterByTag(tag) {
    const filteredList = this.recipes.filter((recipe) => {
      return recipe.tags.includes(tag);
    })
    this.recipesByTag = filteredList;
  }

  filterByName(name) {
    const filteredList = this.recipes.filter((recipe) => {
      return recipe.name.includes(name);
    })
    this.recipesByName = filteredList;
  }
}

export default RecipeRepository;
