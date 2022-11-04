
import Ingredient from '../classes/Ingredient';

class Recipe {
    constructor(recipeData) {
        this.id = recipeData.id;
        this.image = recipeData.image;
        this.ingredients = recipeData.ingredients;
        this.instructions = recipeData.instructions;
        this.name = recipeData.name;
        this.tags = recipeData.tags;
    }

    returnRecipeIngredientsIds() {
        let ingredientIDs = this.ingredients.map(ingredient => ingredient.id);
        return ingredientIDs
    }

    returnRecipeInstructions() {
        let array = this.instructions.reduce((acc, element) => {
            let format = `${element.number}) ${element.instruction}`
            acc.push(format)
            return acc;
        }, [])
        return array;
    }

    returnAllIngredientsArray(ingredArray) {
        let ingredientsArray = ingredArray.map((ingredient) => {
            return new Ingredient(ingredient);
        });
        
        return ingredientsArray;
    }

    returnRecipeIngredientsInfo(ingredArray) {
        let allIngredients = this.returnAllIngredientsArray(ingredArray)
        let ingredientInfoForDOM = this.ingredients.map(ingredient => {
            let ingredientDetails = allIngredients.find(element => element.id === ingredient.id)
            if (ingredient.quantity.amount < 1) {
                return ingredient.quantity.amount.toFixed(2) + ' ' + ingredient.quantity.unit + ' ' + ingredientDetails.name;
            } else {
                return ingredient.quantity.amount + ' ' + ingredient.quantity.unit + ' ' + ingredientDetails.name;
            }
        })

        return ingredientInfoForDOM;
    }

    returnCostOfIngredients(ingredArray) {
        let allIngredients = this.returnAllIngredientsArray(ingredArray)
        let recipeIngredientIDs = this.returnRecipeIngredientsIds();
        let newRecipeIngredients = allIngredients.filter(ingredient => (recipeIngredientIDs.includes(ingredient.id)));
        let ingredCosts = newRecipeIngredients.map(ingredient => ingredient.estimatedCostInCents);
        let ingredQuantitiesNeeded = this.ingredients.map(ingredient => ingredient.quantity.amount);
        let multiplyCostByAmmount = ingredCosts.map((cost, index) => {
            let quantity = ingredQuantitiesNeeded[index];
            return cost * quantity;
        })
        let total = multiplyCostByAmmount.reduce((sum, cost) => {
            return sum + cost;
        }, 0)
        let finalTotal = parseFloat((total / 100).toFixed(2));
        if (finalTotal >= 1) {
            return `$ ${finalTotal}`;
        } else {
            return finalTotal;
        }
    }
};



export default Recipe;
