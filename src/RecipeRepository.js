// const Recipe = require("./Recipe")

class RecipeRepository {
  constructor(recipeArray, ingredientsArray) {
    this.recipes = recipeArray.map(recipe => new Recipe(recipe, ingredientsArray));
  }

  masterSearch(search) {
      let results = [];
      results.push(this.filterByName(search));
      results.push(this.filterByTag(search));
      results.push(this.filterByIngredients(search));
      return Array.from(new Set(results.flat()));
  }

  filterByName(search) {
    search = this.validateSearch(search);
    return Array.from(new Set(search.map(word => this.recipes.filter(recipe => recipe.name.toLowerCase().split(' ').includes(word))).flat()));
  }

  filterByTag(search) {
    search = this.validateSearch(search);
    return Array.from(new Set(search.map(word => this.recipes.filter(recipe => recipe.tags.map(tag => tag.split(' ')).flat().includes(word))).flat()));
  }

  filterByIngredients(search) {
    search = this.validateSearch(search);
    return Array.from(new Set(search.map(word => this.recipes.filter(recipe => recipe.getIngredients().map(ingredient => ingredient.split(' ')).flat().includes(word))).flat()));
  }

  validateSearch(search) {
    return search.toLowerCase()
    .split(' ')
    .map(word => word.replace(/[^a-zA-Z ]/g, ""))
    .filter(element => element);
  }
}

if (typeof module !== 'undefined') {
  module.exports = RecipeRepository;
}