import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';

describe('Ingredient', () => {

  let ingredientItem
  let ingredient1

  beforeEach(() => {
    ingredientItem = {
      "id": 19304,
      "name": "unsulfured molasses",
      "estimatedCostInCents": 925
    }
    ingredient1 = new Ingredient(ingredientItem)
  })

  it('Should be a function', () => {
    expect(Ingredient).to.be.a('function')
  })
  it('Should store an ID', () => {
    expect(ingredient1.id).to.equal(19304)
  })
  it('Should store a name', () => {
    expect(ingredient1.name).to.equal('unsulfured molasses')
  })
  it('Should store an estimated cost in cents', () => {
    expect(ingredient1.estimatedCostInCents).to.equal(925)
  })
})