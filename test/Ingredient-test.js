import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient.js';

//Should we have multiple describe block for each test file to break up what is being tested? (i.e. class constructor vs class methods)

describe('Ingredient', () => {
    let ingredient1;
    let ingredient2;
    let ingredientsData;
    let recipeIngredientsDetails;

    beforeEach(() => {
      recipeIngredientsDetails = [
        {id: 20081, quantity: {
          amount: 1.5, unit: "c"
          }
        },
        {id: 18372, quantity: {
          amount: 0.5, unit: "tsp"
          }
        }
      ];

      ingredientsData = [
        {id: 20081, name: "wheat flour", estimatedCostInCents: 142},
        {id: 18372, name: "bicarbonate of soda", estimatedCostInCents: 582} 
      ];

      ingredient1 = new Ingredient(recipeIngredientsDetails[0]);
      ingredient2 = new Ingredient(recipeIngredientsDetails[1]);
    });

    it('should be a function', () => {
        expect(Ingredient).to.be.a('function');
    });

    it('should be an instance of Ingredient', () => {
        expect(ingredient1).to.be.an.instanceof(Ingredient);
        expect(ingredient2).to.be.an.instanceof(Ingredient);
    });

    it('should have an id', () => {
        expect(ingredient1.id).to.equal(20081);
        expect(ingredient2.id).to.equal(18372);
    });

    it('should have a quantity amount', () => {

        expect(ingredient1.quantityAmount).to.equal(1.5);
        expect(ingredient2.quantityAmount).to.equal(0.5);
    });

    it('should have a quantity unit', () => {

        expect(ingredient1.quantityUnit).to.equal('c');
        expect(ingredient2.quantityUnit).to.equal('tsp');
    });

    it('should have an estimated cost in cents per unit', () => {
        expect(ingredient1.costPerUnitInCents).to.equal(0);
        expect(ingredient2.costPerUnitInCents).to.equal(0);
    });

    it('should have a name assigned to an empty string as a default', function() {
        expect(ingredient1.name).to.equal('');
        expect(ingredient2.name).to.equal('');
      });

    it('should be able to get the ingredient name', () => {
      ingredient1.findIngredientInfo(ingredientsData);

      expect(ingredient1.name).to.equal('wheat flour');
    });

    it('should be able to get its estimated cost in cents per unit', function() {
      ingredient1.findIngredientInfo(ingredientsData);

      expect(ingredient1.costPerUnitInCents).to.equal(142);
    });

    it('should be able to return the cost per recipe ingredient as a dollar amount', () => {

        ingredient1.findIngredientInfo(ingredientsData)

        const costPerRecipeIngredient = ingredient1.calculateCost();

        expect(costPerRecipeIngredient).to.equal(2.13);
    });
});
