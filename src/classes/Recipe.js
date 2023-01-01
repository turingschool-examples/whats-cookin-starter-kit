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
        console.log(this.ingredients);
        let idAmounts = this.ingredients.reduce((acc, curr) => {
            let obj = {};
            obj[curr.id] = curr.quantity.amount;
            acc.push(obj);
            return acc;
        }, []);
        console.log(idAmounts);
        return idAmounts;
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
//--> each ingredient instance has cost of 1 unit, curr.cost            
            acc += curr.cost;
            return acc;
        }, 0);
        console.log(this.ingredients);

        return totalCost;
        //this method needs fix because it doesn't account for measurements.
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