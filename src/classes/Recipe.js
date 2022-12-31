import Ingredient from "./Ingredient";

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
        // console.log(ingredientIds);
        return ingredientIds;
    }

    instantiateIngredientObjects(ingredientsData) {
        let ingredientIds1 = this.findIngredientIds();
        let instances = ingredientIds1.reduce((acc, curr) => {
            // console.log("curr: ", curr);
            // let anIngredient = new Ingredient(curr, ingredientsData);
            acc.push(new Ingredient(curr, ingredientsData));
            return acc;
        }, []);
        // console.log(instances);
        return instances;
    }

    getIngredientNames(ingredientsData) {
        let ingredientInstances = this.instantiateIngredientObjects(ingredientsData);
        let names = ingredientInstances.map(element => {
            return element.name
        });
        return names;
    }

    getIngredientsTotalCost(ingredientsData) {
        let ingredientInstances = this.instantiateIngredientObjects(ingredientsData);
        let totalCost = ingredientInstances.reduce((acc, curr) => {
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