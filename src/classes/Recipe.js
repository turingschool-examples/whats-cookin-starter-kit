import Ingredient from './Ingredient';

class Recipe {
    constructor(recipe) {
        this.id = recipe.id;
        this.image = recipe.image;
        this.recipeIngredients = recipe.ingredients;
        this.instructions = recipe.instructions;
        this.name = recipe.name;
        this.tags = recipe.tags;
    }
}

export default Recipe;