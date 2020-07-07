class User {
  constructor(id, name, pantry) {
    this.id = id;
    this.name = name;
    this.pantry = pantry;
    this.favRecipes = [];
    this.recipesToCook = [];
  }

  // updateFavorites(recipe) {
  //   if (!this.favRecipes.includes(recipe)) {
  //     this.favRecipes.push(recipe)
  //   } else {
  //     let recipeIndex = this.favRecipes.indexOf(recipe);
  //     this.favRecipes.splice(recipeIndex);
  //   }
  // }

  // updateRecipesToCook(recipe) {
  //   if (!this.recipesToCook.includes(recipe)) {
  //     this.recipesToCook.push(recipe)
  //   } else {
  //     let recipeIndex = this.recipesToCook.indexOf(recipe);
  //     this.recipesToCook.splice(recipeIndex);
  //   }
  // }

  updateSavedRecipes(savedList, recipe) {
    if (!savedList.includes(recipe)) {
      savedList.push(recipe)
    } else {
      let recipeIndex = savedList.indexOf(recipe);
      savedList.splice(recipeIndex);
    }
  }

  // "Filter my favoriteRecipes or recipesToCook by type"
  //***** should be okay if they're in different sections**** */
  filterSavedRecipes(savedList, tag) {
    return savedList.filter(recipe => {
      return recipe.tags.includes(tag);
    }) 
  }

  // filterFavRecipes(tag) {
  //   return this.favRecipes.filter(recipe => {
  //     return recipe.tags.includes(tag);
  //   })
  // }

  // filterRecipesToCook(tag) {
  //   return this.recipesToCook.filter(recipe => {
  //     return recipe.tags.includes(tag);
  //   })
  // }

  searchSaved(searchItem) {
   return this.favRecipes.filter(recipe => {
      return recipe.name.includes(searchItem)    

      || recipe.ingredients.find(ingredient => {
        return ingredient.name.includes(searchItem)
      })
      // if (recipe.name === searchItem || recipe.tags === searchItem) {
      //   return recipe
      //   }
    });
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}