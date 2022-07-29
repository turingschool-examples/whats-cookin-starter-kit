class Pantry {
    constructor(ingredients) {
        this.ingredients = ingredients
    }

    checkIfCanMakeRecipe(recipe) {
      const hasIngredients = recipe.ingredients.reduce((ingredients, recipeIngredient) => {
        this.ingredients.forEach(ingredient => {
          if (ingredient.ingredient === recipeIngredient.id && ingredient.amount >= recipeIngredient.quantity.amount) {
            ingredients.push(ingredient)
          }
        });
        return ingredients
      }, []);
      return hasIngredients.length === recipe.ingredients.length
    };

    getNeededIngredients(recipe) {
      let ingredientNeeded = [];
      recipe.ingredients.forEach(recipeIngredient => {
        this.ingredients.forEach(ingredient => {
          if (ingredient.ingredient === recipeIngredient.id) {
            recipeIngredient.quantity.amount = recipeIngredient.quantity.amount - ingredient.amount;
          }
        })
        if (recipeIngredient.quantity.amount > 0) {
          ingredientNeeded.push(recipeIngredient);
        }
      })
      return ingredientNeeded;
    };
  }

  export default Pantry;
