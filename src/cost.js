import ingredientsData from '../src/data/ingredients.js';

export const unitPriceLookup = ingredientsData.reduce((acc, item) => {
    acc[item.id] = item.estimatedCostInCents / 100;
    return acc;
}, {});



export const calculateRecipeCost = (recipe, unitPriceLookup) => {
    const totalPrice = recipe.ingredients.reduce((acc, ingredient) => {
        const unitPrice = unitPriceLookup[ingredient.id] || 0;
        const ingredientCost = ingredient.quantity.amount * unitPrice;
        return acc + ingredientCost;
    }, 0);

    return +totalPrice.toFixed(2);
};
