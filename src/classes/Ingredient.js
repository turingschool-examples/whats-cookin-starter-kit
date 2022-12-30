class Ingredient {
    constructor(id, ingredientsData) {
        this.id = id;
        this.object = this.findIngredientObject(ingredientsData);
        this.name = this.object.name;
        this.cost = this.object.estimatedCostInCents;
    }
    
    findIngredientObject(ingredientsData) {
        let ingredientObject = ingredientsData.find(element => {
            return element.id === this.id;
        });
        return ingredientObject;
    }

    getIngredientCost() {
        return this.cost;
    }

    getIngredientName() {
        return this.name;
    }
}
export default Ingredient;