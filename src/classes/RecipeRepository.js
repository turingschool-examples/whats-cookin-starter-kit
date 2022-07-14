import Recipe from './Recipe';

class RecipeRepository {
  constructor(rawRecipes) {
    this.rawRecipes = rawRecipes
    this.allRecipes;
  }
  createAllRecipes() {
    const grabRecipe = this.allRecipes = this.rawRecipes.map(recipe => new Recipe(recipe))
    return grabRecipe
  
  }
  filterByTag(tag) {
    const filterRecipes = this.allRecipes.filter(recipe => recipe.tags.includes(tag))
    return filterRecipes;
  }
  filterByName(name) {
    const filterNames = this.allRecipes.filter(recipe => recipe.name.includes(name))
    return filterNames
  }
}

export default RecipeRepository;