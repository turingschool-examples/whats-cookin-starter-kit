import { expect } from 'chai';
import { sampleIngredientData } from '../src/data/sampleIngredientData.js';
import { sampleRecipeData } from '../src/data/sampleRecipeData.js';
import Ingredient from '../src/classes/Ingredient.js';
import Recipe from '../src/classes/Recipe.js';


describe('Ingredient', () => {
    let recipe;
    let ingredient;

    beforeEach(() => {
        recipe = new Recipe(sampleRecipeData);
        ingredient = new Ingredient(sampleIngredientData, sampleRecipeData);
        ingredient2 = new Ingredient(sampleIngredientData, sampleRecipeData);
    });

    it('should be a function', () => {
        expect(ingredient).to.be.a('function');
    });

    it('should be an instance of Ingredient', () => {
        expect(ingredient).to.be.an.instanceof(Ingredient);
    });

    it('should have a name', () => {
        // expect(ingredient.name).to.equal(ingredientData[0].name);
        expect(ingredient.name).to.equal('wheat flour');

    });

    it('should have an id', () => {
        expect(ingredient.id).to.equal(20081);
        expect(ingredient2.id).to.equal(18372);
    });

    it('should have a quantity amount', () => {
        // expect(ingredient.quantityAmount).to.equal(recipeData[0].ingredients[0].quantity.amount);
        expect(ingredient.quantityAmount).to.equal(1.5);
        expect(ingredient2.quantityAmount).to.equal(1.5);
    });

    it('should have a quantity unit', () => {
        // expect(ingredient.quantityUnit).to.equal(recipeData[0].ingredients[0].quantity.unit);
        expect(ingredient.quantityUnit).to.equal('c');
        expect(ingredient2.quantityUnit).to.equal('c');
    });

    it('should have an estimated cost in cents per unit', () => {
        // expect(ingredient.costPerUnitInCents).to.equal(ingredient[0].estimatedCostInCents);
        expect(ingredient.costPerUnitInCents).to.equal(142);
        expect(ingredient2.costPerUnitInCents).to.equal(142);
    });

    it('should be able to calculate the cost per ingredient', () => {
        var costPerRecipeIngredient;
        costPerRecipeIngredient = ingredient.calculateCost();
        expect(costPerRecipeIngredient).to.equal(2.13)

        costPerRecipeIngredient = ingredient2.calculateCost();
        expect(costPerRecipeIngredient).to.equal(2.13)
    });
});