import ingredientsData from '../data/ingredients';

class Recipe {
    constructor(recipe) {
        this.id = recipe.id;
        this.image = recipe.image;
        this.ingredients = recipe.ingredients;
        this.instructions = recipe.instructions;
        this.name = recipe.name;
        this.tags = recipe.tags;

    }
    
    ingredientsNeeded() {
        let ingredientsNeeded = [];
        this.ingredients.forEach((ingredient) => {
            let ingredientFound = ingredientsData.find( ing => ingredient.id === ing.id)
            ingredientsNeeded.push(ingredientFound.name)
        })
        return ingredientsNeeded
    }

    getIngredientsCost() {
        let ingredientsNeededInfo = [];
        this.ingredients.forEach((ingredient) => {
            var info = ingredientsData.find( ing => ingredient.id === ing.id)
            ingredientsNeededInfo.push({...info,...ingredient})
        })
        var totalIngredientCost = ingredientsNeededInfo.reduce(function(acc,item){
            let ingredientCost = item.estimatedCostInCents * item.quantity.amount
            return acc + ingredientCost
        }, 0)
       return totalIngredientCost
    }

    getInstructions() {
        return this.instructions
    }
};

export default Recipe;