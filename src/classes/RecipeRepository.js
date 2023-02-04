const recipeData = require('../data/recipes');

class RecipeRepository {
  constructor(recipeData) {
    this.recipeData = recipeData;
    this.filteredRecipes;
  }
  filterByTag(tag) {
    this.filteredRecipes = this.recipeData.filter(recipe => recipe.tags.includes(tag));
  }
  filterByName() {

  }
}

// export default RecipeRepository;