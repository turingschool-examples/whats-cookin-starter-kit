class User {
  constructor(name, id, pantry) {
    this.name = name;
    this.id = id;
    this.pantry = pantry;/*[array of objects, from user pantry];*/
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  checkPantry(recipe) {
    // let x = this.functionName()
    //return array of recipe ids
    //return array of pantry ids
    //return array of matching ids
    //return array of missing ids

    //match recipe.ingredients.ingredient.id to user.pantry.ingredient
    //When a user decides to cook a recipe, they should be able
    //to determine whether they have sufficient ingredients in their
    //pantry (see Pantry user stories).
    //If they do not, they should be
    //able to see a list of what ingredients they need to buy, and how
    //much it will cost
  }
  
  getRecipeIds(recipe) {
    return recipe.ingredients.map(ingredient => ingredient.id)
  }

  getPantryIds() {
    return this.pantry.map(pantryItem => pantryItem.ingredient)
  }
  
  compareIngredients(recipe) {
    let recipeIds = this.getRecipeIds(recipe);
    let pantryIds = this.getPantryIds();
    
    return pantryIds.reduce((acc, pantryItem) => {
      recipeIds.includes(pantryItem) ? acc.push(pantryItem) : null;
      return acc
    }, [])
  }

  getNeededIngredients(recipe) {
    let recipeIds = this.getRecipeIds(recipe)
    let ingredientsOnHand = this.compareIngredients(recipe);
    
    return recipeIds.reduce((acc, recId) => {
      !ingredientsOnHand.includes(recId) ? acc.push(recId) : null;
      return acc
    }, [])
  }

  addFavoriteRecipe(recipe) {
    recipe.toggleFavorite();
    this.favoriteRecipes.push(recipe)
  }

  removeFavoriteRecipe(recipe) {
    recipe.toggleFavorite();
    let index = this.favoriteRecipes.indexOf(recipe)
    this.favoriteRecipes.splice(index, 1)
  }

  addRecipeToCook(recipe) {
    recipe.toggleCookNext();
    this.recipesToCook.push(recipe)
  }

  removeRecipeToCook(recipe) {
    recipe.toggleCookNext();
    let index = this.recipesToCook.indexOf(recipe)
    this.recipesToCook.splice(index, 1)
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}

/*
Users
A User holds on to all of a user’s data. As a user, I should be able to:

. User should be able to do this for at least
one recipe.
*/
