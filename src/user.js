let users = require('../data/users');
let ingredients = require('../data/ingredients');
let recipes = require('../data/recipes');

class User {
  constructor(name, id, pantry) {
    this.name = name;
    this.id = id;
    this.pantry = pantry;/*[array of objects, from user pantry];*/
    //this.recipesToCook = [array of recipes that will be cooked];
    //this.favoriteRecipes = [array of recipes, after a recipe is cooked];
  }

  checkPantry(whatToCook) {
    let ingredientsNeeded = [];
    let ingredientsWeHave = [];

    const pantryIngredients = this.pantry.map((item) => item.ingredient);

    const recipeIngredients = whatToCook.ingredients.map((ingredient) => ingredient.id);

    // const pantryChecker = ((acc, currentIngredient) => currentIngredient === pantryIngredients ? acc.push(currentIngredient) :
    //   ingredientsNeeded.push(currentIngredient);

    recipeIngredients.forEach((ingredient) => {
      pantryIngredients.fil((item) => item === ingredient ? console.log(ingredient);
      // ingredientsNeeded.push(ingredient))
    })

      // console.log(recipeIngredients.reduce(pantryChecker));

      // console.log(ingredientsNeeded);
      // console.log(ingredientsWeHave);


    };
//     function humansAndDogs() {
//   return humans.reduce((acc, human) => {
//     if (dogs.includes(human)) {
//       acc.push(human)
//     }
//     return acc
//   }, [])
// }
// humansAndDogs()
//
//
//     return arr.reduce(reducer);
    // let ingredientsNeeded = [];
    //
    // whatToCook.ingredients.find((ingredient) => {
    //   this.pantry.forEach((item) => {
    //     if (ingredient.id != item.ingredient) {
    //       ingredientsNeeded.push(ingredient)
    //     }
    //   });
    // });
    // console.log(ingredientsNeeded);
    // return ingredientsNeeded


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
      // console.log(ingredientsWeHave);
      // console.log(currentRecipe.ingredients);
    //When a user decides to cook a recipe, they should be able
    //to determine whether they have sufficient ingredients in their
    //pantry (see Pantry user stories).
    //If they do not, they should be
    //able to see a list of what ingredients they need to buy, and how
    //much it will cost



  addFavoriteRecipe(/*recipe.name*/) {
    //Favorites are meant to be recipes
    //that one can easily find again.
  }

  removeFavoriteRecipe(/*recipe.name*/) {
    //should be able to remove a recipe from
    //favorites
  }

/*
  addRecipeToCook() {
    //Decide to cook a recipe that week
    //(add to my recipesToCook)
    //Making a list of recipesToCook can be implemented at
    //a later time.
  }
*/

  cookRecipe(/*pass the recipe in*/) {
    //should subtract amount of each ingredient used for recipes
    //from the pantry
  }

  filterRecipes(/*type or input.value*/) {
    //should be able to filter recipes by type
    //we should have buttons that correspond to
    //the types of recipes
  }

  searchAllSavedRecipes(/*input.value*/) {
    //wherever we put the search input the input
    //value will become an argument, that will make this
    //method, search for the name in the saved recipe array
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
