class User {
  constructor(name, id, pantry) {
    this.name = name;
    this.id = id;
    this.pantry = pantry;/*[array of objects, from user pantry];*/
    this.favoriteRecipes = []
    this.recipesToCook = [];
  }

  checkPantry(whatToCook) {
    let ingredientsNeeded = [];
    let ingredientsWeHave = [];

console.log(whatToCook.ingredients);

    for (let i = 0; i < whatToCook.ingredients.length; i++) {
      for (let i = 0; i < this.pantry.length; i++) {
        if (whatToCook.ingredients[i] === this.pantry[i].ingredient) {
          ingredientsWeHave.push(whatToCook.ingredients[i]);
        }
      }
    }


    // const pantryIngredients = this.pantry.map((item) => item.ingredient);
    //
    // const recipeIngredients = whatToCook.ingredients.map((ingredient) => ingredient);

// console.log(pantryIngredients);
// console.log(recipeIngredients);
    // const pantryChecker = ((acc, currentIngredient) => currentIngredient === pantryIngredients ? acc.push(currentIngredient) :
    //   ingredientsNeeded.push(currentIngredient);

    // ingredientsNeeded.push(ingredient))
  // whatToCook.ingredients.forEach((ingredient) => {
  //   this.pantry.find((item) => ingredient.id === item.ingredient ?
  //   ingredientsWeHave.push(ingredient) : ingredientsNeeded.push(ingredient));
  //
  // })


      // console.log(recipeIngredients.reduce(pantryChecker));

      // console.log(ingredientsNeeded);
      // console.log(ingredientsWeHav
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
