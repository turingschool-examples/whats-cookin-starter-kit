class RecipeRepository {
  constructor(recipeData) {
    this.recipes = recipeData;
  }

  filterTag(tag) {
    const filteredRecipe = this.recipes.filter((recipe) => {
      return recipe.tags.includes(tag);
    });
    return filteredRecipe;
  }

  filterName(name) {
    const filteredName = this.recipes.filter((recipe) => {
      return recipe.name.toLowerCase().includes(name);
    });
    return filteredName;
  }
}

export default RecipeRepository;
