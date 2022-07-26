import Recipe from './Recipe';

export default class Pantry {
    constructor(pantryIngredients, recipeData) {
        this.ingredients = pantryIngredients
        this.missingIngredients = []
        // this.amount = pantryIngredients.amount
        //this.amount coming back undefined
        this.ableToCook = false
    }

    // makeUserData() {

    // }

    // Determine whether a user’s pantry has enough ingredients to cook a given recipe
    // we need to check the user's pantry against the recipe they want to cook
    // the ingredient amount in the user's pantry needs to be greater than or equal to the amount need for the selected recipe
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
}

// makeIngredientData() {
//     return this.ingredients.forEach(ingredient => {
//         const currentIngredient = this.ingredientsData.find(ing => ing.id === ingredient.id);
//         this.requiredIngredients.push({
//             id: currentIngredient.id,
//             name: currentIngredient.name,
//             estimatedCostInCents: currentIngredient.estimatedCostInCents,
//             amount: ingredient.quantity.amount,
//             unit: ingredient.quantity.unit,
//         });
//     });
// }