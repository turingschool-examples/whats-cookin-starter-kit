class Ingredient {
    constructor(ingredient) {
        this.name = ingredient.name;
        this.id = ingredient.id;
        this.quantityAmount = ingredient.quantity.amount;
        this.quantityUnit = ingredient.quantity.unit;
        this.costPerUnitInCents = ingredient.estimatedCostInCents;
    }
    calculateCost() {
        const recipeIngredientCost = ((this.quantityAmount * this.costPerUnitInCents) / 100)
        return recipeIngredientCost
    }

};


export default Ingredient;