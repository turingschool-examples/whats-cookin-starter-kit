import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';


describe('Ingredient', function() {
  let ingredient;
  beforeEach(() => {
    ingredient = new Ingredient({id: 222, name: 'flour', estimatedCostInCents: 83})
  })
  
  it('should be a function', () => {
    expect(Ingredient).to.be.a('function');
  });
  it('should be an instance of ingredient', () => {
    expect(ingredient).to.be.an.instanceof(Ingredient)
  })
  it('should have an id', () => {
    expect(ingredient.id).to.equal(222);
  })
  it('should have a name', () => {
    expect(ingredient.name).to.equal('flour')
  })
  it('should be able to calculate the estimated cost in cents', () => {
    expect(ingredient.estimatedCostInCents).to.equal(83)
  })
})
