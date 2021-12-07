import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';
import Recipe from '../src/classes/Recipe';


describe.only('Ingredient', function() {
  let ingredient, strawberry;
  beforeEach(() => {
    ingredient = new Ingredient({id: 222, name: 'flour', unit: 1, amount: 1, estimatedCostInCents: 83})
    strawberry = new Ingredient({id: 72, name: 'Strawberry', unit: 221, amount: 24, estimatedCostInCents: 1092})

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
    console.log(ingredient)
    expect(ingredient.name).to.equal('chicken')
  })
  it('should have a unit', () => {
    expect(ingredient.unit).to.equal(1);
  })
  it('should have an amount', () => {
    expect(ingredient.unit).to.equal(1);
  })
  it('should be able to calculate the estimated cost in cents', () => {
    ingredient.getCost()
    expect(ingredient.cost).to.equal(83)

    strawberry.getCost()
    expect(strawberry.cost).to.equal()
  })
})
