
export default class Recipe {
    constructor(data, ingredientsData) {
        this.requiredIngredients = [];
        this.id = data.id;
        this.image = data.image;
        this.ingredients = data.ingredients;
        this.instructions = data.instructions;
        this.name = data.name;
        this.tags = data.tags;
        this.ingredientsData = ingredientsData;
        this.toBeCooked = false;       
    };
    makeIngredientData() {
        return this.ingredients.forEach(ingredient => {
            const currentIngredient = this.ingredientsData.find(ing => ing.id === ingredient.id);
            this.requiredIngredients.push({
                id: currentIngredient.id,
                name: currentIngredient.name,
                estimatedCostInCents: currentIngredient.estimatedCostInCents,
                amount: ingredient.quantity.amount,
                unit: ingredient.quantity.unit,
                toBeCooked: ingredient.toBeCooked
            });
        });
    }
    returnNeeded() {
        return this.requiredIngredients.map(ing => ing.name)
    }
    getCostToDollar() {
        let totalCostInCents = this.requiredIngredients.reduce((total, ingredientDetail) => {
            return total += ingredientDetail.estimatedCostInCents
        }, 0);
        let totalCostInDollars = parseFloat((totalCostInCents / 100).toFixed(2));
        return totalCostInDollars;
    }
    //need to refactor (* 3 or however many ingredients to get actual total cost)

    getInstructions() {
        return this.instructions
    }
};