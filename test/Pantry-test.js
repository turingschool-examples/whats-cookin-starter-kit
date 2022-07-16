import { expect } from 'chai';
import Pantry from '../src/classes/Pantry';
import { ingredientsData } from '../src/data/ingredients';

describe('Pantry Test', () => {

    it('Should be a function', () => {
        expect(Pantry).to.be.a('function');
    })

    it('Should be an instance of Pantry', () => {
        const pantry = new Pantry(ingredientsData[0])
        expect(pantry).to.be.an.instanceOf(Pantry)
    })
})
