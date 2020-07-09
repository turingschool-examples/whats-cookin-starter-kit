/* eslint-disable */
const ingredientsData = require('../data/ingredients');

class Recipe {
        constructor(recipeData) {
            this.id = recipeData.id;
            this.image = recipeData.image;
            this.ingredients = recipeData.ingredients;
            this.instructions= recipeData.instructions;
            this.name = recipeData.name;
            this.tags = recipeData.tags;
    }

    getInstructions() {
        console.log(this.instructions)
        return this.instructions
    }

    getIngredientCost() {
        return this.ingredients.reduce((sum, recipeIngredient) => {
            // console.log(recipeIngredient);
                                        console.log(ingredientsData);

            let targetIngredient = ingredientsData.find(ingredient => {
                            console.log(ingredient);
                            console.log(ingredientsData);

                return ingredient.id === recipeIngredient.id;
            });
            // let ingredientAmount;
            sum += (recipeIngredient.quantity.amount * targetIngredient.estimatedCostInCents);
            console.log(sum)
            return sum;
        }, 0);
    };
};

if (typeof module !== 'undefined') {
    module.exports = Recipe;
};