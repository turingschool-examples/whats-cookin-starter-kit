import {ingredients, recipes} from '../test/mock-data';


function estimatedCostInCents(recipe, ingredientList) {
    const total = recipe.ingredients.reduce((acc, ingredient) => {
        const matchingIngredient = ingredientList.find((item) => {
            return item.id === ingredient.id
        })
        acc += matchingIngredient.estimatedCostInCents * ingredient.quantity.amount;
        return acc
    }, 0)
    return total
}


export {estimatedCostInCents}

