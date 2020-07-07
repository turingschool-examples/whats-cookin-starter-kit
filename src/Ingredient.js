/* eslint-disable */
class Ingredient {
    constructor(ingredient) {
        this.id = ingredient.id;
        this.name = ingredient.name;
        this.estimatedCostInCents = ingredient.estimatedCostInCents;
    }
}

if (typeof module !== 'undefined') {
    module.exports = Ingredient;
}