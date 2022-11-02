class Pantry {
    constructor(userObject) {
        this.pantry = userObject.pantry;
    }

    checkIngredients(recipe) {
        // let missingIngredients = [{ingredientName: 'sugar', quantity: 4, unit: 'c'}, {etc}]
        // then iterate through the recipe's ingredients (recipe.ingredients)
        // check to see if the ingredient exists in the pantry (pantry.includes())
            // if not included then push ingredient and full amount needed to missingIngredients
        // then check to see if the pantry ingredient quantity >= recipe ingredient quantity
            // if not enough quantity, then push ingredient amount missing to missingIngredients
        // maybe can use returnAllIngredientsArray to access name
        // return missingIngredients
    }
}
export default Pantry