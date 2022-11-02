class Pantry {
    constructor(userObject) {
        this.pantry = userObject.pantry;
    }

    checkIngredients(recipe) {
        // let missingIngredients = [{ingredientName: 'sugar', quantity: 4, unit: 'c'}, {etc}]
        // then iterate through the recipe's ingredients (recipe.ingredients)
        // forEach ingredient check to see if this.pantry.includes(ingredient.id)
            // if not included then push ingredient object to missingIngredients
        // then check to see if the pantry ingredient quantity >= recipe ingredient quantity
            // let missingAmount = ingredient.quantity.amount - pantry.ingredient.amount
            // if not enough quantity, then push ingredient object with updated amount to missingIngredients
        // maybe can use returnAllIngredientsArray to access name and update the missingIngredients array to include the ingredient names
        // return missingIngredients
        let missingIngredients = [];


    }
}
export default Pantry