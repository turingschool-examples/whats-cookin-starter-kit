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
    console.log(recipe)
    return recipe.requiredIngredients.map(recipeIngredient => {
        const pantryIngredient = this.ingredients.filter(pantryIng => recipeIngredient.id === pantryIng.ingredient)
        if (pantryIngredient && pantryIngredient.amount >= recipeIngredient.amount){
            pantryIngredient = recipeIngredient.amount - pantryIngredient.amount
        }
        return pantryIngredient
    })
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
