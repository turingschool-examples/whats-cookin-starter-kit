import Recipe from "./Recipe";

class RecipeRepository {
  constructor(recipeData) {
    this.recipes = recipeData.map(recipe => new Recipe(recipe));
    this.filteredRecipes;
  }
  filterByTag(tag) {
    if (!tag) {
      return;
    }
    this.filteredRecipes = this.recipes.filter(recipe => recipe.tags.includes(tag));

    if (this.filteredRecipes.length === 0) {
      this.filteredRecipes = null;
      return
    } else {
      console.log(this.filteredRecipes)
      return this.filteredRecipes
    }
  }
  filterByName(name) {
    if (!name) {
      return;
    } 
    this.filteredRecipes = this.recipes.filter(recipe => (recipe.name.toUpperCase().includes(name.toUpperCase())));
    if (this.filteredRecipes.length === 0) {
      this.filteredRecipes = null;
      return
    }
    return this.filteredRecipes
  }
}
export default RecipeRepository;