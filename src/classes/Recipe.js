class Recipe {
    constructor(id, image, ingredients, instructions, name, tags) {
        this.id = id;
        this.image = image;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.name = name;
        this.tags = tags;
    };

    returnIngredientNames(ingredientData) {
        const currentId = this.ingredients.map(ingredient => {
            return ingredient.id
        });
        //iterate over ingredientData... filter maybe? 
    };

    returnIngredientCost() {
        this.ingredients[i].estimatedCostInCents
        //probably use reduce? Also yes everyone laugh at my for-loop syntax
    };

    returnInstructions() {
        //forEach return the instructions array? 
        //(`step ${this.instructions.number}: ${this.instructions.instruction}`)
    };
};


module.exports = Recipe;