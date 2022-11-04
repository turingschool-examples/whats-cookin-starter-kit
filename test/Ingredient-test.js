import { testIngredients, ingredientsData, recipeData } from '../src/data/testData'
import Ingredient from '../src/classes/Ingredient'
import { expect } from 'chai'

describe('Ingredient', () => {
  let ingredientInfo, recipeInfo, wheatFlour, testIngredient

  beforeEach(() => {
    ingredientInfo = ingredientsData[0]
    recipeInfo = recipeData[0].ingredients[0]
    wheatFlour = new Ingredient(ingredientInfo, recipeInfo)
    testIngredient = testIngredients[0]
  })

  it('should be an instance of Ingredient', () => {
    expect(wheatFlour).to.be.an.instanceof(Ingredient)
  })

  it('should have an ID', () => {
    expect(wheatFlour.id).to.equal(20081)
  })

  it('should have a name', () => {
    expect(wheatFlour.name).to.equal("wheat flour")
  })

  it('should have an estimated cost in cents', () => {
    expect(wheatFlour.estimatedCostInCents).to.equal(142)
  })

  it('should be able to have an amount', () => {
    expect(wheatFlour.amount).to.equal(1.5)
  })

  it('should be able to have a unit', () => {
    expect(wheatFlour.unit).to.equal('cups')
  })
})