import { expect } from 'chai';
import { ingredientsData } from '../src/data/sampleIngredientData.js';
import { recipeData } from '../src/data/sampleRecipeData.js';
import Ingredient from '../src/classes/Ingredient.js';
import Recipe from '../src/classes/Recipe.js';

describe('Ingredient', () => {
    let ingredient;
    let ingredient2;

    beforeEach(() => {
        ingredient = new Ingredient(ingredientsData[0]);
        ingredient2 = new Ingredient(ingredientsData[1]);
    });

    it('should be a function', () => {
        expect(Ingredient).to.be.a('function');
    });

    it('should be an instance of Ingredient', () => {
        expect(ingredient).to.be.an.instanceof(Ingredient);
        expect(ingredient2).to.be.an.instanceof(Ingredient);
    });

    it('should have a name', () => {
        expect(ingredient.name).to.equal('wheat flour');
        expect(ingredient2.name).to.equal('bicarbonate of soda');

    });

    it('should have an id', () => {
        expect(ingredient.id).to.equal(20081);
        expect(ingredient2.id).to.equal(18372);
    });

    it('should have a quantity amount', () => {
        ingredient.updateProperties(recipeData);
        ingredient2.updateProperties(recipeData);

        expect(ingredient.quantityAmount).to.equal(1.5);
        expect(ingredient2.quantityAmount).to.equal(0.5);
    });

    it('should have a quantity unit', () => {
        ingredient.updateProperties(recipeData);
        ingredient2.updateProperties(recipeData);

        expect(ingredient.quantityUnit).to.equal('c');
        expect(ingredient2.quantityUnit).to.equal('tsp');
    });

    it('should have an estimated cost in cents per unit', () => {
        expect(ingredient.costPerUnitInCents).to.equal(142);
        expect(ingredient2.costPerUnitInCents).to.equal(582);
    });

    // it(`should be able to calculate the unit cost by the recipe's ingredient type`, () => {
    //
    // });

    it('should be able to return the cost per recipe ingredient as a dollar amount', () => {
        var costPerRecipeIngredient;

        ingredient.updateProperties(recipeData);
        ingredient2.updateProperties(recipeData);

        costPerRecipeIngredient = ingredient.calculateCost();

        expect(costPerRecipeIngredient).to.equal(2.13);

        costPerRecipeIngredient = ingredient2.calculateCost();
        expect(costPerRecipeIngredient).to.equal(2.91);
    });
});
