class Ingredient {
    constructor(ingredient,recipe) {
        this.name = ingredient.name;
        this.id = ingredient.id;
        this.quantityAmount = recipe.quantity.amount;
        this.quantityUnit = recipe.quantity.unit;
        this.costPerUnitInCents = ingredient.estimatedCostInCents;
    }
    calculateCost() {
        return ((this.quantityAmount * this.costPerUnitInCents) / 100)
    }

};


export default Ingredient;