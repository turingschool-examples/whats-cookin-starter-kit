import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';

describe('Ingredients', () => {
  let newIngredients, ingredientsInfo, singleIngredientObject;
  beforeEach(() => {
    ingredientsInfo = [
      {
        "id": 20081,
        "name": "wheat flour",
        "estimatedCostInCents": 142
      },
      {
        "id": 18372,
        "name": "bicarbonate of soda",
        "estimatedCostInCents": 582
      },
      {
        "id": 1123,
        "name": "eggs",
        "estimatedCostInCents": 472
      },
      {
        "id": 19335,
        "name": "sucrose",
        "estimatedCostInCents": 902
      }
    ]
    singleIngredientObject = {
      "id": 20081,
      "name": "wheat flour",
      "estimatedCostInCents": 142
    },
      newIngredients = new Ingredient(singleIngredientObject)
  })
  it('Should be a function', () => {
    expect(Ingredient).to.be.a('function')
  })

  it('Should have an id', () => {
    expect(newIngredients.id).to.equal(20081)
  })

  it('Should have a name', () => {
    expect(newIngredients.name).to.equal('wheat flour')
  })

  it("Should have an estimated cost in cents", () => {
    expect(newIngredients.estimatedCostInCents).to.equal(142)
  })
})