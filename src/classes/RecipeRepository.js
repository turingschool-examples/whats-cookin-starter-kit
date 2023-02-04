const recipeData = require('../data/recipes');

class RecipeRepository {
  constructor(recipeData) {
    this.recipeData = recipeData;
    this.filteredRecipes;
  }
  filterByTag(tag) {
    this.filteredRecipes = this.recipeData.filter(recipe => recipe.tags.includes(tag));
  }
  filterByName(name) {
    this.filteredRecipes = this.recipeData.filter(recipe => (recipe.name.toUpperCase().includes(name.toUpperCase())));
  }
}
// export default RecipeRepository;