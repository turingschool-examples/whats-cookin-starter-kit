// const Ingredient = require('../src/Ingredient.js');

class User {
  constructor(userData, ingredientsArray) {
    this.name = userData.name
    this.id = userData.id
    this.pantry = userData.pantry.map(pantryItem => new Ingredient(pantryItem.ingredient, pantryItem.amount, ingredientsArray))
    this.favoriteRecipes = localStorage.getItem(`${this.id}-favorites`) ? JSON.parse(localStorage.getItem(`${this.id}-favorites`)).map(storedID => recipeRepository.recipes.find(recipe => recipe.id === storedID.id)) : [];
    this.recipesToCook = localStorage.getItem(`${this.id}-recipes-to-cook`) ? JSON.parse(localStorage.getItem(`${this.id}-recipes-to-cook`)).map(storedID => recipeRepository.recipes.find(recipe => recipe.id === storedID.id)) : [];
  }
  
  addRecipeToFavs(recipe) {
    if (!this.favoriteRecipes.map(recipe => recipe.id).includes(recipe.id)) {
      this.favoriteRecipes.push(recipe)
      localStorage.setItem(`${this.id}-favorites`, JSON.stringify(this.favoriteRecipes))
    }
  }

  removeRecipeFromFavs(recipe) {
    this.favoriteRecipes.splice(this.favoriteRecipes.indexOf(this.favoriteRecipes.find(savedRecipe => savedRecipe.id === recipe.id)), 1)
    localStorage.setItem(`${this.id}-favorites`, JSON.stringify(this.favoriteRecipes))
  }

  addRecipeToCook(recipe) {
    if (!this.recipesToCook.map(recipe => recipe.id).includes(recipe.id)) {
      this.recipesToCook.push(recipe)
      localStorage.setItem(`${this.id}-recipes-to-cook`, JSON.stringify(this.recipesToCook))
    }
  }

  favoritesMasterSearch(search) {
    let results = [];
    results.push(this.favoritesFilterByName(search));
    results.push(this.favoritesFilterByTag(search));
    results.push(this.favoritesFilterByIngredients(search));
    return Array.from(new Set(results.flat()));
  }

  favoritesFilterByName(search) {
   search = this.validateSearch(search);
   return Array.from(new Set(search.map(word => this.favoriteRecipes.filter(recipe => recipe.name.toLowerCase().split(' ').includes(word))).flat()));
  }

  favoritesFilterByTag(search) {
   search = this.validateSearch(search);
   return Array.from(new Set(search.map(word => this.favoriteRecipes.filter(recipe => recipe.tags.map(tag => tag.split(' ')).flat().includes(word))).flat()));
  }

  favoritesFilterByIngredients(search) {
   search = this.validateSearch(search);
   return Array.from(new Set(search.map(word => this.favoriteRecipes.filter(recipe => recipe.getIngredients().map(ingredient => ingredient.split(' ')).flat().includes(word))).flat()));
  }

  validateSearch(search) {
    return search.toLowerCase()
    .split(' ')
    .map(word => word.replace(/[^a-zA-Z ]/g, ""))
    .filter(element => element);
  }

}

if (typeof module !== 'undefined') {
  module.exports = User;
}