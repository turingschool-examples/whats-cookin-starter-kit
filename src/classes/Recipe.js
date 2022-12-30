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
        return ingredientIds;
    }

    findIngredientObjects(ingredientObjects) {
        let ingredientIds1 = this.findIngredientIds();
        let ingredientsShortList = ingredientObjects.reduce((acc, curr) => {
            ingredientIds1.forEach(element => {
                if (element === curr.id) {
                    acc.push(curr);
                }
            });
            return acc;
        }, []);
        return ingredientsShortList;
    }
//names:
    getIngredientNames(ingredientObjects) {
        let currentIngredients = this.findIngredientObjects(ingredientObjects);
        let names = currentIngredients.map(element => {
            return element.name
        });
        return names;
    }
//cost:
    getIngredientsTotalCost(ingredientObjects) {
        let currentIngredients = this.findIngredientObjects(ingredientObjects);
        console.log("currentIngredients: ", currentIngredients);
        let totalCost = currentIngredients.reduce((acc, curr) => {
            console.log(curr.estimatedCostInCents);
            acc += curr.estimatedCostInCents;
            return acc;
        }, 0);
        return totalCost;
    }

    getRecipeInstructions() {
        return this.instructions;
    }
}

export default Recipe;