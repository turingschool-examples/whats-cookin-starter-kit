import { expect } from 'chai';
import IngredientList from '../src/classes/ingredientList';
import ingredientList from '../src/classes/ingredientList';

describe('IngredientList', () => {
    let ingredientList;
    let ingredient1;
    let ingredient2;
    let ingredient3;

    beforeEach(() => {
        ingredientList = new IngredientList([ingredient1, ingredient2, ingredient3])
        ingredient1 = new Ingredient(3322, 'tomato', 502)
        ingredient2 = new Ingredient(2424, 'pigs feet', 500)
        ingredient3 = new Ingredient(1738, 'crickets', 420)
    })
    it.skip('should be a function', () => {
        expect(ingredientList).to.be.a('function');
    })

    it.skip('should be an instance of recipe', () => {
        expect(ingredientList).to.be.an.instanceof(IngredientList)
    })

    it.skip('should be an array', () => {
        expect(ingredientList.ingredients).to.equal([ingredient1, ingredient2, ingredient3])
    })

    it.skip('should have an array ingredient objects', () => {
        
    })

    it.skip('should have directions', () => {

    })
})