const testIngredients = require('../tests/test-ingredients')

class Recipe {
    constructor(recipe) {
        this.id = recipe.id,
        this.name = recipe.name,
        this.ingredients = recipe.ingredients,
        this.instructions = recipe.instructions,
        this.tags = recipe.tags,
        this.image = recipe.image
    }
    
    returnIngredientNames(ourIngredients)  {
      const names = ourIngredients.reduce((ingredientNames, item) => {
          this.ingredients.forEach(function(ingredient) {
            if(ingredient.id === item.id) {
                ingredientNames.push(item.name);
              }
            })
            console.log(ingredientNames)
          return ingredientNames;
        }, [])
      return names
    }

    returnTotalCost() {
        let totalCost = testIngredients.reduce((ingredientNames, item) => {
          this.ingredients.forEach(function(ingredient) {
              if(ingredient.id === item.id) {
                  ingredientNames += (item.estimatedCostInCents * ingredient.quantity.amount);
                  }
              })
            return ingredientNames;
        }, 0)
        totalCost /= 100;
        return totalCost;
    }

    returnInstructions() {
        return this.instructions;
    }
}



module.exports = Recipe;
