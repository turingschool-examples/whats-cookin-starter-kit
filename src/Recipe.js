/* eslint-disable */

class Recipe {
        constructor(recipeData) {
            this.id = recipeData.id;
            this.image = recipeData.image;
            this.ingredients = recipeData.ingredients;

    }
}

if (typeof module !== 'undefined') {
    module.exports = Recipe;
}