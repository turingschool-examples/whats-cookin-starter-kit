const Ingredient = require('./Ingredient');
const Recipe = require('./Recipe');

class User {
  constructor(userData) {
    this.name = userData.name;
    this.id = userData.id;
    this.pantry = userData.pantry;
    this.canBeCooked = null;
    this.recipesToCook = [];
    this.favoriteRecipes = [];
  }

  //might need a method in other class that tells if a recipe has been favorited

  checkIngredientAmts(recipe) {
    let amtNeeded = [];
    let pantryIds = this.pantry.map(element => element.ingredient)
    let matchedIngredients = recipe.ingredients.filter(item => pantryIds.includes(item.id))

    recipe.ingredients.forEach((recIng)=>this.pantry.forEach((panIng) => {
      if(recIng.id === panIng.ingredient){
        amtNeeded.push(recIng.quantity.amount - panIng.amount)
      }}))
      matchedIngredients.forEach((el, i) => el.difference = amtNeeded[i])
    if (amtNeeded.length === 0) {
      this.determineMissingIngredients(recipe, matchedIngredients);
      return false;
    } else {
      this.determineMissingIngredients(recipe, matchedIngredients);
      return amtNeeded.every(amt => amt < 0);
    }
  }

  determineMissingIngredients(recipe, matchedIngredients) {
    if (matchedIngredients.length === 0) {
      this.canBeCooked = false
    } else {
      matchedIngredients.every(ingredient => ingredient.difference > 0 ? this.canBeCooked = false : this.canBeCooked = true)
    }
  }

  removeIngredients(recipe) {
    let amtNeeded = [];
    let pantryIds = this.pantry.map(element => element.ingredient)
    let matchedIngredients = recipe.ingredients.filter(item => pantryIds.includes(item.id))
    recipe.ingredients.forEach((recIng)=>this.pantry.forEach((panIng) => {
    if(recIng.id === panIng.ingredient){
        amtNeeded.push(recIng.quantity.amount - panIng.amount)
      }}))
    if (this.canBeCooked === false) {
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
