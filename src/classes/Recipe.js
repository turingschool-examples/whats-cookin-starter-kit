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
            });
        });
    }
    returnNeeded() {
        return this.requiredIngredients.map(ing => ing.name)
    }
    getCostToDollar() {
        return this.requiredIngredients.reduce((cost, ingredient) => {
            let numOfUnits;
            this.requiredIngredients.forEach((data) => {
                if (data.id === ingredient.id) {
                    numOfUnits = data.amount;
                };
            });

            return cost += (ingredient.estimatedCostInCents * numOfUnits);
        }, 0) / 100;
    };

    getInstructions() {
        return this.instructions
    }
};