import ingredientsData from '../data/ingredients.js'
import Ingredient from './Ingredient.js';


class Recipe {
    constructor(recipe) {
        this.id = recipe.id;
        this.image = recipe.image;
        this.ingredients = this.createIngredientArray(recipe.ingredients);
        this.instructions = recipe.instructions;
        this.name = recipe.name;
        this.tags = recipe.tags;
    }

    findIngredientNames() {
        return this.ingredients.map((ingredient) => ingredient.name)    
    }

    createIngredientArray(recipeIngredients) {
        const ingredientInstances = recipeIngredients.map((recipeIngredient) => {
            const ingredient = new Ingredient(ingredientsData.find(dataIngredient =>  dataIngredient.id === recipeIngredient.id))
            ingredient.quantity = recipeIngredient.quantity
            return ingredient
        })  
        return ingredientInstances
    }

    calculateCost() {
        const ingredientCost = this.ingredients.map((ingredient) => {
            return ingredient.estimatedCostInCents * ingredient.quantity.amount;
        })
        const totalCost = ingredientCost.reduce((accumulator, currentValue) => accumulator + currentValue)
        return totalCost/100
    }

    returnInstructions() {
        return this.instructions
    }
}


export default Recipe;


