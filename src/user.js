// let users = require('../data/users');
// let ingredients = require('../data/ingredients');
// let recipes = require('../data/recipes');
// const Recipe = require('../src/Recipe');
// let recipe = new Recipe(
//   recipes[0].id, 
//   recipes[0].image, 
//   recipes[0].ingredients, 
//   recipes[0].instructions, 
//   recipes[0].name, 
//   recipes[0].tags,
// )

class User {
  constructor(name, id, pantry) {
    this.name = name;
    this.id = id;
    this.pantry = pantry;/*[array of objects, from user pantry];*/
    this.favoriteRecipes = []
    this.recipesToCook = [];
  }

  checkPantry(whatToCook) {
    // let ingredientsWeHave = [];
    let ingredientsNeeded = [];
    let currentRecipe = recipes.find((recipe) => whatToCook.id !== recipe.id);
    this.pantry.forEach((item) => {
      currentRecipe.ingredients.map((ingredient) => {
        if (ingredient.id === item.ingredient) {
            ingredientsNeeded.push(ingredient);
          }
        });
      });
      // console.log(ingredientsNeeded);
      // console.log(this.pantry)
      // console.log(currentRecipe.ingredients)

      // this.pantry.forEach((item) => {
      //   currentRecipe.ingredients.map((ingredient) => {
      //     if (ingredient.id != item.ingredient) {
      //         ingredientsNeeded.push(ingredient);
      //     }
      //   });
      // });
      // currentRecipe.ingredients.map((ingredient) => {
      // this.pantry.forEach((item) => ingredient.id != item.ingredient);
      //     ingredientsNeeded.push(ingredient);
      // });

      // for (let i = 0; i < this.pantry.length; i++) {
        // if (ingredient.id === this.pantry[i].ingredient) {
        //   ingredientsWeHave.push(ingredient);
        // }
      // }
      // console.log(this.pantry);
      // console.log(currentRecipe.ingredients);
    //When a user decides to cook a recipe, they should be able
    //to determine whether they have sufficient ingredients in their
    //pantry (see Pantry user stories).
    //If they do not, they should be
    //able to see a list of what ingredients they need to buy, and how
    //much it will cost

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
