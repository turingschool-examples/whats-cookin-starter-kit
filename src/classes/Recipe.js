import Ingredient from '../classes/Ingredient';
class Recipe {
    constructor(recipeObj) {
        this.recipeObj = recipeObj;
        this.id = this.recipeObj.id;
        this.image = this.recipeObj.image;
        this.ingredients = this.recipeObj.ingredients;
        this.instructions = this.recipeObj.instructions;
        this.name = this.recipeObj.name;
        this.tags = this.recipeObj.tags;
        this.isUpdated = false;
    }
    returnIngredients() {
        this.updateIngredientData();
        let returnedIngredients = this.ingredients.map(element => element.name)
        let returnedIngredientQuantity = this.ingredients.map(element => element.quantity.amount + element.quantity.unit)
        //not sure how / what data to return right now?
        return `${returnedIngredients} ${returnedIngredientQuantity}`
    }
    returnCostEstimation(ingredientID = undefined) {
        this.updateIngredientData()
        var totalCostEstimation = 0;
        this.ingredients.forEach(function(element){
            totalCostEstimation = totalCostEstimation + (element.estimatedCostInCents * element.quantity.amount)
        }
        );
        return totalCostEstimation+" cents.";
        //this is all working but the values that it is returning seem very wrong...
    }
    returnInstructions() {
        var orderedInstructionsArr = this.instructions.map(element => element.instruction)
        //returns instructions like so : [<instruction1>, <instruction2>, <instruction3>, <instructionetc..>]
        return(orderedInstructionsArr)
    }
    //helper function to grab data(name and price) from ingredients.js;
    updateIngredientData() {
        if (!this.isUpdated) {
            let updatedIngredients = this.ingredients.map(ingredientObj => new Ingredient(ingredientObj))
            this.isUpdated = true;
            this.ingredients = updatedIngredients;
            }
        }
        //  returns:
        //      {
        //          id: 1123,
        //          name: 'eggs',
        //          estimatedCostInCents: 472
        //      }
        // We are giving the function an ID
        // We need to look to ingredients.js/API return for ingredients info.
        // Match the id by using find
        // Update the this.ingredients data;
}
export default Recipe;