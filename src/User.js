class User {
  constructor(userData) {
    this.name = userData.name;
    this.id = userData.id;
    this.pantry = userData.pantry;
    this.recipesToCook = [];
    this.favoriteRecipes = [];
  }

  //might need a method in other class that tells if a recipe has been favorited

  checkIngredientAmts(recipe) {
    let amtNeeded = [];
    let pantryIds = this.pantry.map(element => element.ingredient)
    let matchedIngredients = recipe.ingredients.filter(item => pantryIds.includes(item.id))
    let missingIngredients = recipe.ingredients.filter(item => !pantryIds.includes(item.id))
    recipe.ingredients.forEach((recIng)=>this.pantry.forEach((panIng) => {
      if(recIng.id === panIng.ingredient){
        amtNeeded.push(recIng.quantity.amount - panIng.amount)
      }}))
      matchedIngredients.forEach((el, i) => el.difference = amtNeeded[i])
    if (matchedIngredients.length === 0) {
      this.checkIfRecipeCanBeCooked(recipe, matchedIngredients, missingIngredients);
      return false;
    } else {
      this.checkIfRecipeCanBeCooked(recipe, matchedIngredients, missingIngredients);
      return amtNeeded.every(amt => amt < 0);
      // returns true if there is enough of each ingredient
    }
  }

  checkIfRecipeCanBeCooked(recipe, matchedIngredients, missingIngredients) {
    if (matchedIngredients.length === 0) {
      this.logMissingIngredientAmounts(recipe, matchedIngredients, missingIngredients);
      recipe.canBeCooked = false
    } else {
      this.logMissingIngredientAmounts(recipe, matchedIngredients, missingIngredients);
      matchedIngredients.every(ingredient => ingredient.difference > 0 ? recipe.canBeCooked = false : recipe.canBeCooked = true)
    }
  }

  logMissingIngredientAmounts(recipe, matchedIngredients, missingIngredients) {
    if (matchedIngredients.length === 0) {
      missingIngredients.forEach(ing => {
      recipe.ingredientsNeeded.push({'id': ing.id, 'difference': ing.quantity.amount.toFixed(2) + " " + ing.quantity.unit})
      })
    } else if (matchedIngredients.length && missingIngredients.length) {
      // some of both
      missingIngredients.forEach(ing => {
      recipe.ingredientsNeeded.push({'id': ing.id, 'difference': ing.quantity.amount.toFixed(2) + " " + ing.quantity.unit})
      })
      let insufficientIngs = matchedIngredients.filter(ing => ing.difference >= 0)
      insufficientIngs.forEach(ing => {
      recipe.ingredientsNeeded.push({'id': ing.id, 'difference': ing.difference.toFixed(2) + " " + ing.quantity.unit})
      })
      return recipe.ingredientsNeeded
    }
    // else {
    //   matchedIngredients.forEach(ing => {
    //   recipe.ingredientsNeeded.push({'id': ing.id, 'difference': 0 + " " + ing.quantity.unit})
    //   })
    // }
  }

  removeIngredients(recipe) {
    let amtNeeded = [];
    let pantryIds = this.pantry.map(element => element.ingredient)
    let matchedIngredients = recipe.ingredients.filter(item => pantryIds.includes(item.id))
    recipe.ingredients.forEach((recIng)=>this.pantry.forEach((panIng) => {
    if(recIng.id === panIng.ingredient){
        amtNeeded.push(recIng.quantity.amount - panIng.amount)
      }}))
    if (recipe.canBeCooked === false) {
        return false
      }
    matchedIngredients.forEach((el, i) => el.difference = amtNeeded[i])
    if (recipe.hasBeenCooked) {
      this.pantry.forEach((ing, i) => {
        ing.amount = matchedIngredients[i].difference * -1
      })
    }
  }

  unfavoriteMeal(recipe) {
    let recipeIndex = this.favoriteRecipes.findIndex(element => element === recipe);
    if (recipeIndex > -1) {
      this.favoriteRecipes.splice(recipeIndex, 1);
    }
  }

  favoriteMeal(recipe) {
    this.favoriteRecipes.push(recipe);
  }

}

if (typeof module !== 'undefined') {
  module.exports = User;
}
