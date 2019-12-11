class User {
  constructor() {
    this.pantry = [];
    this.favoriteRecipes = [];
    this.recipesToCook = [];
    this.stock = 0;
  }
  
  displayFavorites() {
    return this.favoriteRecipes;
  }

  displaySavedRecipes() {
    return this.recipesToCook;
  }

  addToFavorites(target, recipes) {
    if (this.favoriteRecipes.length !== 0) {
      this.favoriteRecipes.filter(recipe => {
        if (recipe.name === target) {
        let indexFound = this.favoriteRecipes.map(function(x) {return x.name; }).indexOf(target)
        this.favoriteRecipes.splice(indexFound, 1)
        } else {
          recipes.recipes.filter(recipe => {
        if (recipe.name === target) {
        this.favoriteRecipes.push(recipe)
       }
     })
        }
      }) 
    } else {
      recipes.recipes.filter(recipe => {
        if (recipe.name === target) {
        this.favoriteRecipes.push(recipe)
       }
     })
   }

  }

  addToSaved(target) {
    this.recipesToCook.includes(target) ? this.recipesToCook.splice(this.recipesToCook.indexOf(target), 1) : this.recipesToCook.push(target);
  }

  addToCook() {

  }

  filterRecipesBy() {

  }

};

if (typeof module !== 'undefined') {
  module.exports = User;
}

