export const calculateRecipeCost = (recipe) => {
    let totalPrice = 0;

    recipe.forEach((ingredient) => {
        const ingredientCost = ingredient.quantity * ingredient.unitPrice;
        totalPrice += ingredientCost;
    })
    return +totalPrice.toFixed(2);
};