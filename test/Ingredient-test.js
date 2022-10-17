import { expect } from 'chai'
import Ingredient from '../src/classes/Ingredient'

describe('Ingredient', () => {
  it('should be an instance of Ingredient', () => {
    const rice = new Ingredient()
    expect(rice).to.be.an.instanceof(Ingredient)
  })

  it('should have an ID', () => {
    const idObject = { "id": 20081 }
    const flour = new Ingredient(idObject)
    expect(flour.id).to.equal(20081)
  })

  it('should have a name', () => {
    const nameObject = { "id": 1123, "name": "eggs" }
    const eggs = new Ingredient(nameObject)
    expect(eggs.name).to.equal('eggs')
  })

  it('should have an estimated cost in cents', () => {
    const costObject = { "id": 2047, "name": "salt", "estimatedCostInCents": 280 }
    const salt = new Ingredient(costObject)
    expect(salt.estimatedCostInCents).to.equal(280)
  })
})