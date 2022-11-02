class Pantry {
    constructor(userObject) {
        this.pantry = userObject.pantry;
    }

    checkIngredients(recipe) {
        let missingIngredients = [];
        let pantryIds = this.pantry.map(ingredient => ingredient.ingredient);
        recipe.ingredients.forEach(ingredient => {
            let pantryIngredient = this.pantry.find(pantryIngredients => pantryIngredients.ingredient === ingredient.id);
            if (!pantryIds.includes(ingredient.id)) {
                missingIngredients.push(ingredient)
            } else if (pantryIds.includes(ingredient.id) && ingredient.quantity.amount > pantryIngredient.amount) {
                let amountDiff = ingredient.quantity.amount - pantryIngredient.amount;
                let neededIngredient = ingredient;
                neededIngredient.quantity.amount = amountDiff;
                missingIngredients.push(neededIngredient);
            }
        })
        console.log('missingIngredients: ', missingIngredients)
        return missingIngredients;
    }

    getIngredientNames(missingIngredients, allIngredients) {
        let result = missingIngredients.map(ingredient => {
            let foundIngredient = allIngredients.find(foundIngredient => foundIngredient.id === ingredient.id)
            // console.log('Found ingredient: ', foundIngredient)
            // console.log('Does this work: ', ingredient['name'] = foundIngredient.name)
            ingredient['name'] = foundIngredient.name; 
            return ingredient;
        })
        console.log('Result: ', result)
        return result;
        // Have an array objects
        // Find the ingredient (by ID) from the allIngredients array and pull the name from it
        // Then add a name property to our missing ingredients objects
        // Use map to do so?

        // Return modified array
    }
}
export default Pantry