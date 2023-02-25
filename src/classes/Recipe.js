import Ingredient from './Ingredient.js';

class Recipe {
    constructor(recipe, ingredientsData) {
        this.id = recipe.id;
        this.image = recipe.image;
        this.ingredients = this.createIngredientArray(recipe.ingredients, ingredientsData);
        this.instructions = recipe.instructions;
        this.name = recipe.name;
        this.tags = recipe.tags;
        this.notes = '';
    };

    findIngredientNames() {
        return this.ingredients.map((ingredient) => ingredient.name);    
    };

    createIngredientArray(recipeIngredients, ingredientsData) { 
        const ingredientInstances = recipeIngredients.map((recipeIngredient) => { 
            const ingredient = new Ingredient(ingredientsData.find(dataIngredient =>  dataIngredient.id === recipeIngredient.id));
            ingredient.quantity = recipeIngredient.quantity;
            return ingredient;
        })  
        return ingredientInstances
    };

    calculateCost() {
        const ingredientCost = this.ingredients.map((ingredient) => {
            return ingredient.estimatedCostInCents * ingredient.quantity.amount;
        })
        const totalCost = ingredientCost.reduce((accumulator, currentValue) => accumulator + currentValue);
        return (totalCost/100).toFixed(2);
    };

    returnInstructions() {
        return this.instructions;
    };
}

export default Recipe;


