class Recipe {
    constructor(recipe1Data, ingredientData) {
        this.id = recipe1Data.id;
        this.image = recipe1Data.image;
        this.ingredients = recipe1Data.ingredients;
        this.instructions = recipe1Data.instructions;
        this.name = recipe1Data.name;
        this.tags = recipe1Data.tags;
    }

    findIngredientObjects(ingredientData) {
        let ingredientIds = this.ingredients.map(element => element.id);
        console.log("Ingredient Ids: ", ingredientIds);

    }

    getIngredientNames() {
        //this.ingredients is an array of objects, we need the ids to find the ingredients in the ingredients array and instantiate a new instance of ingredient to use those methods
    }

    getRecipeInstructions() {
        return this.instructions;
    }
}

export default Recipe;