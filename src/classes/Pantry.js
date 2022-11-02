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
        let pantryIds = this.pantry.map(ingredient => ingredient.ingredient);
        recipe.ingredients.forEach(ingredient => {
            let pantryIngredient = this.pantry.find(pantryIngredients => pantryIngredients.ingredient === ingredient.id);
            // console.log('recipe: ', ingredient)
            // console.log('this pantry: ', pantryIngredient)
            if (!pantryIds.includes(ingredient.id)) {
                missingIngredients.push(ingredient)
            } else if (pantryIds.includes(ingredient.id) && ingredient.quantity.amount > pantryIngredient.amount) {
                let amountDiff = ingredient.quantity.amount - pantryIngredient.amount;
                let neededIngredient = ingredient;
                neededIngredient.quantity.amount -= amountDiff;
                console.log(neededIngredient)
            }
        })
        return missingIngredients;
    }
}
export default Pantry