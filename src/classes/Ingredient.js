class Ingredient {
    constructor(ingredientObject) {
        this.id = ingredientObject.id;
        this.name = ingredientObject.name;
        this.cost = ingredientObject.estimatedCostInCents;
    }
    
    getIngredientName() {
        return this.name;
    }

    getIngredientCost() {
        return this.cost;
    }
}
export default Ingredient;