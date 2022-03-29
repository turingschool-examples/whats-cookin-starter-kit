import { expect } from 'chai';
import Ingredients from '../src/classes/Ingredients';

describe('Ingredient', () => {
 let ingredient, ingredient1, ingredient2;


  beforeEach( () => {
   ingredient = new Ingredients()
   ingredient1 = new Ingredients(20081, "wheat flour", 142)
   ingredient2 =new Ingredients(18372, "bicarbonate of soda", 582)

 });
  it('should be a function', () => {
   expect(Ingredients).to.be.a('function')
 });
});
