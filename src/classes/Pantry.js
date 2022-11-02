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
        return missingIngredients;
    }

    returnAllPantryContentsWithInfo(allRecipeData, allIngredientsData) {
        let ingredientsWithInfo = this.pantry.map(ingredient => {
            let ingredientFromIngredients = allIngredientsData.find(dataIngredient => dataIngredient.id === ingredient.ingredient);
            let ingredientFromRecipes;
            allRecipeData.forEach(recipe => {
                recipe.ingredients.find(dataIngredient => {
                    if (dataIngredient.id === ingredient.ingredient) {
                        ingredientFromRecipes = dataIngredient;
                    }
                })
            })
            ingredient.name = ingredientFromIngredients.name;
            ingredient.unit = ingredientFromRecipes.quantity.unit;
            return ingredient;
        })
        return ingredientsWithInfo;
    }
}

export default Pantry