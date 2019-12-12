class User {
  constructor(obj) {
    this.name = obj.name;
    this.pantry = obj.pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
    this.testArr = [];
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

  addToSaved(target, recipes) {
    if (this.recipesToCook.length !== 0) {
      this.recipesToCook.filter(recipe => {
        if (recipe.name === target) {
        let indexFound = this.recipesToCook.map(function(x) {return x.name; }).indexOf(target)
        this.recipesToCook.splice(indexFound, 1)
        } else {
          recipes.recipes.filter(recipe => {
        if (recipe.name === target) {
        this.recipesToCook.push(recipe)
       }
     })
        }
      }) 
    } else {
      recipes.recipes.filter(cookRecipe => {
        if (cookRecipe.name === target) {
        this.recipesToCook.push(cookRecipe)
       }
     })
   }
  }

  filterFavoriteTag(type) {
    return this.favoriteRecipes.filter(recipe => {
      const foundTag = recipe.tags.find(tag => {
    return tag.includes(type.target.value)
  })
    if(foundTag) {
    this.testArr.push(recipe)
    return this.testArr
    }

    })
  }

};

if (typeof module !== 'undefined') {
  module.exports = User;
}
