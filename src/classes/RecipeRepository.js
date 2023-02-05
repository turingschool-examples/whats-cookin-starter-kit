class RecipeRepository {
  constructor(recipeData) {
    this.recipeData = recipeData;
    this.filteredRecipes;
  }
  filterByTag(tag) {
    if (!tag) {
      return
    }
    this.filteredRecipes = this.recipeData.filter(recipe => recipe.tags.includes(tag));

    if (this.filteredRecipes.length === 0) {
      this.filteredRecipes = null;
      return `Sorry, there are no recipes with ${tag}!`;
    }
  }
  filterByName(name) {
    if (!name) {
      return
    }
    this.filteredRecipes = this.recipeData.filter(recipe => (recipe.name.toUpperCase().includes(name.toUpperCase())));

    if (this.filteredRecipes.length === 0) {
      this.filteredRecipes = null;
      return `Sorry, there are no recipes matching ${name}!`;
    }
  }
}
export default RecipeRepository;