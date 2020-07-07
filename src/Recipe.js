/* eslint-disable */

class Recipe {
        constructor(recipeData) {
            this.id = recipeData.id;
            this.image = recipeData.image;
            this.ingredients = recipeData.ingredients;
            this.instructions= recipeData.instructions;
            this.name = recipeData.name;
            this.tags = recipeData.tags;

    }
}

if (typeof module !== 'undefined') {
    module.exports = Recipe;
}