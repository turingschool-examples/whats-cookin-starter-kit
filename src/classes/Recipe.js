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

    findIngredientAmounts() {
        let idAmounts = this.ingredients.reduce((acc, curr) => {
            let obj = {};
            obj["id"] = curr.id;
            obj["amount"] = curr.quantity.amount;
            acc.push(obj);
            return acc;
        }, []);
        return idAmounts;
    }

    instantiateIngredientObjects(ingredientsData) {
        let ingredientIds1 = this.findIngredientIds();
        let instances = ingredientIds1.map(element => new Ingredient(element, ingredientsData));
        return instances;
    }

    getIngredientsTotalCost(ingredientsData) {
        let ingredientInstances = this.instantiateIngredientObjects(ingredientsData);
        let ingredientAmounts = this.findIngredientAmounts();
        let totalCost = ingredientInstances.reduce((acc, curr) => {
            let amount;
            ingredientAmounts.forEach(element => {
                if (element.id === curr.id) {
                    amount = element.amount;
                }
            })
            acc += ((curr.cost) * (amount));
            return acc;
        }, 0);
        return totalCost;
    }

    getIngredientNames(ingredientsData) {
        let ingredientInstances = this.instantiateIngredientObjects(ingredientsData);
        let names = ingredientInstances.map(element => {
            return element.name
        });
        return names;
    }


    getRecipeInstructions() {
        return this.instructions;
    }

    checkRecipeTags(tag) {
        let findTags = this.tags.find(element => element === tag);
        return findTags;
    }
}

export default Recipe;