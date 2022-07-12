import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';

describe('Ingredient', () => {
    it.skip('Should be a function', () => {
        expect(Ingredient).to.be.a('function');
    });

    it.skip('Should be an instance of Ingredient',() => {
        const ingredient = new Ingredient();
        expect(ingredient).to.be.an.instanceof(Ingredient);
    });

    it.skip('Should have id', () => {
        const ingredient = new Ingredient({
            id: 20081,
            name: "wheat flour",
            estimatedCostInCents: 142
        });
        expect(ingredient.id).to.equal(20081);
    });

    it.skip('Should have a name', () => {
        const ingredient = new Ingredient({
            id: 20081,
            name: "wheat flour",
            estimatedCostInCents: 142
        });
        expect(ingredient.name).to.equal("wheat flour");
    });

    it.skip("Should have estimated cost in cents", () => {
        const ingredient = new Ingredient({
            id: 20081,
            name: "wheat flour",
            estimatedCostInCents: 142
        });
        expect(ingredient.estimatedCostInCents).to.equal(142);
    });
});