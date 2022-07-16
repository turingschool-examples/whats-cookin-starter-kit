import Recipe from './Recipe';

class RecipeRepository {
  constructor(recipeData) {
    this.recipes = recipeData;
    
  }
  
  filterByTag(tagType) {
    const recipes = this.recipes;
    const filteredRecipes = recipes
      .filter(recipe => recipe.tags.includes(tagType))
      .map(recipe => recipe)
      return filteredRecipes;
  }

  filterByRecipeName(recipeName) {
    const recipes = this.recipes;
    const filteredRecipes = recipes
      .filter(recipe => recipe.name.includes(recipeName))
      .map(recipe => recipe)
      return filteredRecipes;
  }
      
}

export default RecipeRepository;
