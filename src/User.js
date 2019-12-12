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

  addToFavorites(target, cookbook) {
    // checks if length is more than 0, run logic
    if (this.favoriteRecipes.length !== 0) {
      // if favoriteRecipes doesn't contain target, run logic
        if(!this.favoriteRecipes.find(r => r.name === target)) {
          let tempRecipe = cookbook.recipes.find(recipe => {
              return recipe.name === target;
          })
          this.favoriteRecipes.push(tempRecipe);
          // if favoriteRecipes does contain target, remove target from favoriteRecipes
        } else {
          this.favoriteRecipes = this.favoriteRecipes.filter((r) => {
            return r.name !== target;
          })
        }
        // if favoriteRecipes is empty, push recipe into array
    } else {
        cookbook.recipes.filter(recipe => {
          if (recipe.name === target) {
            this.favoriteRecipes.push(recipe)
          }
        })
    }
}

  addToSaved(target, recipes) {
    if (this.recipesToCook.length !== 0) {
      // if recipesToCook doesn't contain target, run logic
        if(!this.recipesToCook.find(r => r.name === target)) {
          let tempRecipe = cookbook.recipes.find(recipe => {
              return recipe.name === target;
          })
          this.recipesToCook.push(tempRecipe);
          // if recipesToCook does contain target, remove target from recipesToCook
        } else {
          this.recipesToCook = this.recipesToCook.filter((r) => {
            return r.name !== target;
          })
        }
        // if recipesToCook is empty, push recipe into arr
    } else {
        cookbook.recipes.filter(recipe => {
          if (recipe.name === target) {
            this.recipesToCook.push(recipe)
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
