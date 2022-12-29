class Ingredient {
    constructor(ingredient1Data) {
        this.id = ingredient1Data.id;
        this.name = ingredient1Data.name;
        this.cost = ingredient1Data.estimatedCostInCents;
    }
    getIngredientName() {
        return this.name;
    }
    getIngredientCost() {
        return this.cost;
    }
}
export default Ingredient;