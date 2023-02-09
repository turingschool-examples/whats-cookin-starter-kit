class Ingredient {
    constructor(ingredientObj){
        this.id = ingredientObj.id;
        this.name = ingredientObj.name;
        this.estimatedCostInCents = ingredientObj.cost
    }
};

export default Ingredient