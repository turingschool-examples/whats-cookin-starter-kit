import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';
import Recipe from '../src/classes/Recipe';


describe('Ingredient', function() {
  let ingredient;
  beforeEach(() => {
    ingredient = new Ingredient({id: 222, name: 'chicken'})
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
    ingredient.findMe()
    expect(ingredient.name).to.equal('chicken')
  })
})
