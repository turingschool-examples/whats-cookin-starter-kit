const Recipe = require('../src/recipe');
const recipeData = require('../data/recipes');


class Pantry {
  constructor(userPantry) {
    this.pantry = userPantry;
  };

  getIngredientDetails(ingredientsData) {
    this.pantry = this.pantry.map(ingredient => {
      let ingredientData = ingredientsData.find(data => data.id === ingredient.ingredient)
      return {...ingredient, ...ingredientData}
    })
  };

  requiredForMeal(recipe) {
    const missingItems = [];

    recipe.ingredients.forEach((ingredientI) => this.pantry.forEach((ingredientP) =>
      {if (ingredientI.id === ingredientP.id && ingredientI.quantity.amount > ingredientP.amount) {
        missingItems.push(ingredientI)
      }
    }
  ));
  return missingItems;
  };

  cookMeal() {
    /// set mealToCook to empty []
    //run remove item(s) from pantry
  };

  removeUsedIngredient() {
    //after user clicks cook mean removes items and quantities from pantry.
  };


}

module.exports = Pantry;
