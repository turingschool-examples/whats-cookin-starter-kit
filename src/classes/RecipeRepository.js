class RecipeRepository {
  constructor(recipeData) {
    this.recipes = recipeData ? recipeData : [];
    this.recipesByTag = [];
    this.recipesByName = [];
  }

  filterRecipesByTag(tag) {
    const filteredList = this.recipes.filter((recipe) => {
      return recipe.tags.includes(tag);
    })
    this.recipesByTag = filteredList;
  }

  filterRecipesByName(name) {
    const filteredList = this.recipes.filter((recipe) => {
      return recipe.name.includes(name);
    })
    this.recipesByName = filteredList;
  }

  
}

export default RecipeRepository;
