import { ingredientsData } from '../data/ingredients';
import Recipe from './Recipe';

class RecipeRepository {
  constructor(rawRecipes) {
    this.rawRecipes = rawRecipes
    this.allRecipes;
    this.filteredTags = [];
    this.filteredNames = [];
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