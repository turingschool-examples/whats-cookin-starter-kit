import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';
import mockdata from '../src/data/mockdata';

describe('Ingredient', () => {
    let ingredient1, ingredient2, ingredient3;

    beforeEach(() => {
        ingredient1 = new Ingredient(mockdata.ingredients[0]);
        ingredient2 = new Ingredient(mockdata.ingredients[1]);
        ingredient3 = new Ingredient(mockdata.ingredients[2]);
    });

    it('should be a function', () => {
        expect(Ingredient).to.be.a('function');
    });

    it('should be an instance of ingredient', () => {
        expect(ingredient1).to.be.an.instanceOf(Ingredient);
    });

    it('should have an id, name, and estimated cost in cents', () => {
        expect(ingredient1.id).to.equal(20081);
        expect(ingredient1.name).to.equal('wheat flour');
        expect(ingredient1.estimatedCostInCents).to.equal(142);
    });

    it('should be able to have any id, name, and estimated cost in cents', () => {
        expect(ingredient2.id).to.equal(18372);
        expect(ingredient2.name).to.equal('bicarbonate of soda');
        expect(ingredient2.estimatedCostInCents).to.equal(582);

        expect(ingredient3.id).to.equal(1123);
        expect(ingredient3.name).to.equal('eggs');
        expect(ingredient3.estimatedCostInCents).to.equal(472);
    });
});