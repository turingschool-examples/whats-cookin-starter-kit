export default class Pantry {
    constructor(pantryIngredients) {
        this.ingredients = pantryIngredients
        this.missingIngredients = []
    }
    checkUserIngredients(recipe) {    
        recipe.requiredIngredients.forEach(ingredient => {
            const found = this.ingredients.find(foundIngredient => foundIngredient.id === ingredient.id)
            if (!found) {
                this.missingIngredients.push({
                    name: ingredient.name,
                    id: ingredient.id,
                    amount: ingredient.amount,
                    unit: ingredient.unit
                })
            } else {
                if (found.amount < ingredient.amount) {
                    this.missingIngredients.push({
                        name: ingredient.name,
                        id: ingredient.id,
                        amount: ingredient.amount - found.amount,
                        unit: ingredient.unit
                    })
                }
            }
        })
    }

    removeIngredients(recipe) {
        let foundIndex = 0;
        recipe.requiredIngredients.forEach(recipeIngredient => {
            const pantryIngredient = this.ingredients.find((pantryIng, index) => {
               if (recipeIngredient.id === pantryIng.id) {
                foundIndex = index
               return pantryIng
               }
            })
            if (pantryIngredient.amount > recipeIngredient.amount){
                this.ingredients[foundIndex].amount -= recipeIngredient.amount
            } else {
                this.ingredients.splice(foundIndex, 1)
            }
        })
    }

    addIngredients(newIngredient, newIngredientName) {
        let foundIndex = 0;
        let foundIngredient = this.ingredients.find((ingredient, index) => {
            if (ingredient.id === newIngredient.ingredientID) {
                foundIndex = index
                return ingredient
            }
        })
        if (!foundIngredient) {
            this.ingredients.push({
                name: newIngredientName,
                id: newIngredient.ingredientID,
                amount: newIngredient.ingredientModification
            })
        } else {
            this.ingredients[foundIndex].amount += newIngredient.ingredientModification
        }
    }

    attachNameToId(ingredientsData) {
        this.ingredients = this.ingredients.map(ingredient => {
            let foundIngredient = ingredientsData.find(ing => ingredient.ingredient === ing.id)
        return {
            name: foundIngredient.name,
            id: foundIngredient.id,
            amount: ingredient.amount
            }
        })
    }
}
