import { expect } from 'chai';
import { sampleIngredientData } from '../src/data/sampleIngredientData.js';
import { sampleRecipeData } from '../src/data/sampleRecipeData.js';
import Ingredient from '../src/classes/Ingredient.js';
import Recipe from '../src/classes/Recipe.js';


describe('Ingredient', () => {
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
        expect(ingredient2).to.be.an.instanceof(Ingredient);
    });

    it('should have a name', () => {
        expect(ingredient.name).to.equal('wheat flour');
        expect(ingredient2.name).to.equal('sucrose');

    });

    it('should have an id', () => {
        expect(ingredient.id).to.equal(20081);
        expect(ingredient2.id).to.equal(19335);
    });

    it('should have a quantity amount', () => {
        expect(ingredient.quantityAmount).to.equal(1.5);
        expect(ingredient2.quantityAmount).to.equal(0.5);
    });

    it('should have a quantity unit', () => {
        expect(ingredient.quantityUnit).to.equal('c');
        expect(ingredient2.quantityUnit).to.equal('c');
    });

    it('should have an estimated cost in cents per unit', () => {
        expect(ingredient.costPerUnitInCents).to.equal(142);
        expect(ingredient2.costPerUnitInCents).to.equal(902);
    });

    it(`should be able to calculate the unit cost by the recipe's ingredient type`, () => {
        var costPerRecipeIngredient;
        costPerRecipeIngredient = ingredient.calculateCost();
        expect(costPerRecipeIngredient).to.equal(213);

        costPerRecipeIngredient = ingredient2.calculateCost();
        expect(costPerRecipeIngredient).to.equal(451);
    });

    it('should be able to return the cost per recipe ingredient as a dollar amount', () => {
        var costPerRecipeIngredient;
        costPerRecipeIngredient = ingredient.calculateCost();
        expect(costPerRecipeIngredient).to.equal(2.13);

        costPerRecipeIngredient = ingredient2.calculateCost();
        expect(costPerRecipeIngredient).to.equal(4.51);
    });
});
