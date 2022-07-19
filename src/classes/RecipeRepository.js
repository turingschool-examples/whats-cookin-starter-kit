import Recipe from './Recipe';

class RecipeRepository {
  constructor(rawRecipes, ingredientsData = []) {
    this.rawRecipes = rawRecipes;
    this.allRecipes = this.createAllRecipes(ingredientsData);
    this.filteredTags = [];
    this.filteredNames = [];
    this.ingredientsData = ingredientsData;
  }
  createAllRecipes(ingredientsData) {
    const grabRecipe = this.allRecipes = this.rawRecipes.map(recipe => new Recipe(recipe, ingredientsData))
    return grabRecipe
  }
  filterByTag(tag) {
    const filterRecipes = this.allRecipes.filter(recipe => recipe.tags.includes(tag))
    this.filteredTags.push(tag)
    return filterRecipes;
  }
  filterByName(name) {
    const filterNames = this.allRecipes.filter(recipe => recipe.name.includes(name))
    this.filteredNames.push(name)
    return filterNames
  }
}

export default RecipeRepository;