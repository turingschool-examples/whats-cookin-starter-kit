import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';

describe('Ingredient', () => {
    it('should be a function', () => {
        expect(Ingredient).to.be.a('function');
    });
});