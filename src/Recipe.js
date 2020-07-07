/* eslint-disable */

class Recipe {
        constructor(recipeData) {
            this.id = recipeData.id;
            this.image = recipeData.image;
    }
}

if (typeof module !== 'undefined') {
    module.exports = Recipe;
}