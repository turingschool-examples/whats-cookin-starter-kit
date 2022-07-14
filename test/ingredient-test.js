import { expect } from 'chai';
import Ingredient from '../src/classes/ingredient';

describe('Ingredient', () => {
    let ingredient;

    beforeEach (() => {
         ingredient = new Ingredient(3322, 'tomato', 502)
    })

    it('should be a function', () => {
        expect(Ingredient).to.be.a('function');
    })

    it('should be an instance of Ingredient', () => {
        expect(ingredient).to.be.an.instanceof(Ingredient)
    })

    it('should have an id', () => {
        expect(ingredient.id).to.equal(3322)
    })

    it('should have a name', () => {
        expect(ingredient.name).to.equal('tomato')
    })

    it('should have a cost', () => {
        expect(ingredient.costInCents).to.equal(502)
    })
})