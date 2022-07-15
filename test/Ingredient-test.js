import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';
import { ingredientsData } from '../src/data/ingredients';
<<<<<<< HEAD

describe('Ingredient Test', () => {

    it('Should be a function', () => {
        expect(Ingredient).to.be.a('function');
    })

=======
describe('Ingredient Test', () => {
    it('Should be a function', () => {
        expect(Ingredient).to.be.a('function');
    })
>>>>>>> de03794cfead1db1035e997f8551a047bf44a057
    it('Should be an instance of Ingredient', () => {
        const ingredient = new Ingredient(ingredientsData[0])
        expect(ingredient).to.be.an.instanceOf(Ingredient)
    })
})