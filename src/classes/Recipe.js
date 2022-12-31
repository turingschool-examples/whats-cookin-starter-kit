import Ingredient from "./Ingredient";

class Recipe {
    constructor(recipe1Object) {
        this.id = recipe1Object.id;
        this.image = recipe1Object.image;
        this.ingredients = recipe1Object.ingredients;
        this.instructions = recipe1Object.instructions;
        this.name = recipe1Object.name;
        this.tags = recipe1Object.tags;
    }

    findIngredientIds() {
        let ingredientIds = this.ingredients.map(element => element.id).sort((a, b) => a - b);
        return ingredientIds;
    }

    instantiateIngredientObjects(ingredientsData) {
        let ingredientIds1 = this.findIngredientIds();
        let instances = ingredientIds1.map(element => new Ingredient(element, ingredientsData));
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
            acc += curr.cost;
            return acc;
        }, 0);
        return totalCost;
    }

    getRecipeInstructions() {
        return this.instructions;
    }
}

export default Recipe;