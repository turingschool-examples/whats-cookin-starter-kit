import { ingredientsData } from '../data/ingredients';
export default class Recipe {
    constructor(data) {
        this.requiredIngredients = [];
        this.id = data.id;
        this.image = data.image;
        this.ingredients = data.ingredients;
        this.instructions = data.instructions;
        this.name = data.name;
        this.tags = data.tags;
    };
    getIngredientDetail() {
        return this.ingredients.forEach(ingredient => {
            const currentIngredient = ingredientsData.find(ing => ing.id === ingredient.id);
            this.requiredIngredients.push(currentIngredient);
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
};