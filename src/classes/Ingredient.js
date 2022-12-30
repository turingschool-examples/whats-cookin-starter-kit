class Ingredient {
    constructor(id, ingredientsData) {
        this.id = id;
        this.object = this.findIngredientObject(ingredientsData);
        console.log("this.object: ", this.object)
        this.name = this.object.name;
        this.cost = this.object.estimatedCostInCents;
    }
    
    findIngredientObject(ingredientsData) {
        let ingredientObject = ingredientsData.find(element => {
            return element.id === this.id;
        });
        return ingredientObject;
    }
    
    getIngredientName() {
        return this.name;
    }

    getIngredientCost() {
        return this.cost;
    }
}
export default Ingredient;