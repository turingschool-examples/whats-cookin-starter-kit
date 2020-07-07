class User {
  constructor(id, name, pantry) {
    this.id = id;
    this.name = name;
    this.pantry = pantry;
    this.favRecipes = [];
    this.recipesToCook = [];
  }

  updateFavorites(recipe) {
    if (!this.favRecipes.includes(recipe)) {
      this.favRecipes.push(recipe)
    } else {
      let recipeIndex = this.favRecipes.indexOf(recipe);
      this.favRecipes.splice(recipeIndex);
    }
  }

  updateRecipesToCook(recipe) {
    if (!this.recipesToCook.includes(recipe)) {
      this.recipesToCook.push(recipe)
    } else {
      let recipeIndex = this.recipesToCook.indexOf(recipe);
      this.recipesToCook.splice(recipeIndex);
    }
  }

  filterFavRecipes(tag) {
    return this.favRecipes.filter(recipe => {
      return recipe.tags.includes(tag);
    })
  }

  filterRecipesToCook(tag) {
    return this.recipesToCook.filter(recipe => {
      return recipe.tags.includes(tag);
    })
  }

  searchSaved() {

  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}