/* eslint-disable indent */
class Recipe {
  constructor(recipe) {
        this.id = recipe.id;
        this.image = recipe.image;
        this.ingredients = recipe.ingredients
        this.instructions = recipe.instructions;
        this.name = recipe.name;
        this.tags = recipe.tags;

    }

    generateIngredientNames(recipe) {
        recipe.ingredients.forEach(ingredient => {
            const id = ingredient.id;
            ingredientsData.forEach(ingredientData => {
             if (ingredientData.id === id) {
               ingredient.name = ingredientData.name;
               ingredient.cost = ingredientData.estimatedCostInCents / 100;
             }
            })
        })

    }
}


module.exports = Recipe;

// if (typeof module !== 'undefined') {
//     module.exports = Recipe;
// }
