
export default class Pantry {
    constructor(pantryIngredients, recipeData) {
        this.ingredients = pantryIngredients
        this.missingIngredients = []
    }
    checkUserIngredients(recipe) {      
        recipe.requiredIngredients.forEach(ingredient => {
            const found = this.ingredients.find(foundIngredient => foundIngredient.ingredient === ingredient.id)
            if (!found) {
                this.missingIngredients.push({
                    name: ingredient.name,
                    id: ingredient.id,
                    amount: ingredient.amount
                })
            } else {
                if (found.amount < ingredient.amount) {
                    this.missingIngredients.push({
                        name: ingredient.name,
                        id: ingredient.id,
                        amount: ingredient.amount - found.amount
                    })
                }
            }
        })
    }
    attachNameToId(ingredientsData) {
        console.log('ing.id:', this.ingredients)
        this.ingredients = this.ingredients.map((ingredient) => {
            let foundIngredient = ingredientsData.find(ing => ingredient.ingredient === ing.id)
        return {
            name: foundIngredient.name,
            id: foundIngredient.id,
            amount: ingredient.amount
            }
        })
    }
}

