import { expect } from 'chai';
import { calculateRecipeCost, unitPriceLookup } from '../src/cost.js';
import recipeData from '../src/data/recipes.js'

describe('calculateRecipeCost', function() {
    const recipe = recipeData[0];

    it('should be able to calculate the total cost of a recipe using ingredients IDs', function() {
        const totalCost = calculateRecipeCost(recipe, unitPriceLookup); 
        const expectedCost = recipe.ingredients.reduce((acc, ingredient) => {
            return acc + (ingredient.quantity.amount * unitPriceLookup[ingredient.id]);
        }, 0);

        expect(totalCost).to.be.equal(+expectedCost.toFixed(2));
    });

    it('should be able to handle an ingredient with zero cost', function() {
        const totalCost = calculateRecipeCost(recipe, unitPriceLookup);
        const expectedCost = recipe.ingredients.reduce((acc, ingredient) => {
            return acc + (ingredient.quantity.amount * unitPriceLookup[ingredient.id]);
        }, 0);

        expect(totalCost).to.be.equal(+expectedCost.toFixed(2));
    });
});
