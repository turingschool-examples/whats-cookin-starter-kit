class Recipe {
    constructor(recipe1Data) {
        this.id = recipe1Data.id;
        this.image = recipe1Data.image;
        this.ingredients = recipe1Data.ingredients;
        this.instructions = recipe1Data.instructions;
        this.name = recipe1Data.name;
        this.tags = recipe1Data.tags;
    }

    findIngredientIds() {
        let ingredientIds = this.ingredients.map(element => element.id).sort((a, b) => a - b);
        // console.log("Ingredient Ids: ", ingredientIds);
        return ingredientIds;
    }

    findIngredientObjects(ingredientObjects) {
        let ingredientIds1 = this.findIngredientIds();
        let ingredientsShortList = ingredientObjects.reduce((acc, curr) => {
            ingredientIds1.forEach(element => {
                console.log("element: ", element);
                console.log("curr.id: ", curr.id);
                if (element === curr.id) {
                    acc.push(curr);
                }
            });
            return acc;
        }, []);
        // console.log("ingredient short list : ", ingredientsShortList);
        // console.log("ingredient objects data being passed in, ", ingredientObjects);
        return ingredientsShortList;

    }

    getIngredientNames(ingredientObjects) {
        let currentIngredients = this.findIngredientObjects(ingredientObjects);
        // console.log("currentIngredients: ", currentIngredients)
        let names = currentIngredients.map(element => {
            return element.name
        });
        return names;
        //this.ingredients is an array of objects, we need the ids to find the ingredients in the ingredients array and instantiate a new instance of ingredient to use those methods
    }

    getRecipeInstructions() {
        return this.instructions;
    }
}

export default Recipe;