import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';


describe('Ingredient', function() {
  it.skip('should be a function', function() {
    expect(Ingredient).to.be.a('function');
  });
  it.skip('should have an id', () => {
    expect(ingredient.id).to.equal(222);
  })
})
//Be able to find name (not readily available
// --- system uses ID)
//Calculate cost (amt, unit, estimatedCostInCents)
