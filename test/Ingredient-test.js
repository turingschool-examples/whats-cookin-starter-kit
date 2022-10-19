import { expect } from 'chai'
import Ingredient from '../src/classes/Ingredient'

describe('Ingredient', () => {
  let ingredientInfo, recipeInfo, pudding

  beforeEach(() => {
    ingredientInfo = { "id": 19206, "name": "instant vanilla pudding", "estimatedCostInCents": 660 }
    recipeInfo = { 
      "quantity" : {
        "amount": 3, 
        "unit": "Tbsp" 
      }
    }
    pudding = new Ingredient(ingredientInfo, recipeInfo)
  })

  it('should be an instance of Ingredient', () => {
    expect(pudding).to.be.an.instanceof(Ingredient)
  })

  it('should have an ID', () => {
    expect(pudding.id).to.equal(19206)
  })

  it('should have a name', () => {
    expect(pudding.name).to.equal("instant vanilla pudding")
  })

  it('should have an estimated cost in cents', () => {
    expect(pudding.estimatedCostInCents).to.equal(660)
  })
  
  it('should be able to have an amount', () => {
    expect(pudding.amount).to.equal(3)
  })

  it('should be able to have a unit', () => {
    expect(pudding.unit).to.equal('Tbsp')
  })
})