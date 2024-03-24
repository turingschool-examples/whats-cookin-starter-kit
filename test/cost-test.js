import chai from 'chai';
const { expect } = chai;

import { calculateRecipeCost } from '../src/cost.js';

describe('calculateRecipeCost', function() {
    it('should calculate the total price of a recipe', function () {
        const chicken = [
            { name: 'chicken', quantity: 1, unitPrice: 4},
            { name: 'salt', quantity: 5, unitPrice: 0.2 },
            { name: 'pepper', quantity: 10, unitPrice: 0.1 }
        ];
        const totalCost = calculateRecipeCost(chicken);
        expect(totalCost).to.be.equal(6)
    });

    it('should be able to handle different recipes', function () {
        const steak = [ 
            { name: 'steak', quantity: 2, unitPrice: 3 },
            { name: 'lettuce', quantity: 10, unitPrice: 0.1 },
            { name: 'potatoes', quantity: 1, unitPrice: 2 }
        ];
        const salad = [
            { name: 'lettuce', quantity: 10, unitPrice: 0.1 },
            { name: 'spinach', quantity: 10, unitPrice: 0.2 },
            { name: 'bell peppers', quantity: 1, unitPrice: 0.5 },
            { name: 'onions', quantity: 0.5, unitPrice: 0.4 }
        ];
        const totalCost1 = calculateRecipeCost(steak);
        const totalCost2 = calculateRecipeCost(salad);

        expect(totalCost1).to.be.equal(9)
        expect(totalCost2).to.equal(3.7)
    });

    it('should be able to handle a recipe that has an ingredient with no cost', function () {
        const misoSoup = [
            { name: 'kombu', quantity: 2, unitPrice: 0.25 },
            { name: 'miso', quantity: 2, unitPrice: 0.3 },
            { name: 'water', quantity: 6, unitPrice: 0 }
        ];

        const totalCost = calculateRecipeCost(misoSoup);
        expect(totalCost).to.equal(1.1)
    });
});