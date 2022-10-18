import recipeData from '../data/recipes';

class Recipe {
    constructor(data) {
        this.id = data.id;
        this.image = data.image;
        this.ingredients = data.ingredients;
        this.instructions = data.instructions;
        this.name = data.name;
        this.tags = data.tags
    }
}

export default Recipe;