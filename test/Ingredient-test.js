import { expect } from 'chai'
import Ingredient from '../src/classes/Ingredient'

describe('Ingredient', () => {

  it('should be an instance of Ingredient', () => {
    const ingredientInfo = { "id": 19206, "name": "instant vanilla pudding", "estimatedCostInCents": 660 }
    const recipeInfo = { "amount": 3, "unit": "Tbsp" }
    const rice = new Ingredient(ingredientInfo, recipeInfo)

    expect(rice).to.be.an.instanceof(Ingredient)
  })

  it('should have an ID', () => {
    const ingredientInfo = { "id": 19206, "name": "instant vanilla pudding", "estimatedCostInCents": 660 }
    const recipeInfo = { "amount": 3, "unit": "Tbsp" }
    const flour = new Ingredient(ingredientInfo, recipeInfo)

    expect(flour.id).to.equal(19206)
  })

  it('should have a name', () => {
    const ingredientInfo = { "id": 19206, "name": "instant vanilla pudding", "estimatedCostInCents": 660 }
    const recipeInfo = { "amount": 3, "unit": "Tbsp" }
    const eggs = new Ingredient(ingredientInfo, recipeInfo)

    expect(eggs.name).to.equal("instant vanilla pudding")
  })

  it('should have an estimated cost in cents', () => {
    const ingredientInfo = { "id": 19206, "name": "instant vanilla pudding", "estimatedCostInCents": 660 }
    const recipeInfo = { "amount": 3, "unit": "Tbsp" }
    const salt = new Ingredient(ingredientInfo, recipeInfo)

    expect(salt.estimatedCostInCents).to.equal(660)
  })
  
  it('should be able to have an amount', () => {
    const ingredientInfo = { "id": 19206, "name": "instant vanilla pudding", "estimatedCostInCents": 660 }
    const recipeInfo = { "amount": 3, "unit": "Tbsp" }
    const pudding = new Ingredient(ingredientInfo, recipeInfo)

    expect(pudding.amount).to.equal(3)
  })

  it('should be able to have a unit', () => {
    const ingredientInfo = { "id": 19206, "name": "instant vanilla pudding", "estimatedCostInCents": 660 }
    const recipeInfo = { "amount": 3, "unit": "Tbsp" }
    const pudding = new Ingredient(ingredientInfo, recipeInfo)

    expect(pudding.unit).to.equal('Tbsp')
  })
})