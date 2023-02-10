class Ingredient {
    constructor(ingredient) {
        this.id = ingredient.id;
        this.name = ingredient.name;
        this.estimatedCostInCents = ingredient.estimatedCostInCents; 
        this.quantity = ingredient.quantity;       
    };
};

export default Ingredient;