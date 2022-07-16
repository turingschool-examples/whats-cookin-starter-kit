import Recipe from './Recipe';

class RecipeRepository {
  constructor(recipeData) {
    this.recipes = recipeData;
  }
  
  filterByTag(tagType) {
    const recipes = this.recipes;
    const filteredRecipesByTags = recipes
      .filter(recipe => recipe.tags.includes(tagType))
      .map(recipe => recipe);
      return filteredRecipesByTags;
  }

  filterByRecipeName(recipeName) {
    const recipes = this.recipes;
    const filteredRecipesByName = recipes
      .filter(recipe => recipe.name.includes(recipeName))
      .map(recipe => recipe);
      return filteredRecipesByName;
  }
    
};

export default RecipeRepository;