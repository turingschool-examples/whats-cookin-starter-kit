import { expect } from 'chai';
import Ingredients from '../src/classes/IngredientsClass';

describe('Ingredients', () => {
    let newIngredients, ingredientsInfo;
    beforeEach(() => {
        newIngredients = new Ingredients(20081, "wheat flour", 142)
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
    })
    it('Should be a function', () => {
        expect(Ingredients).to.be.a('function')
    })

    it('Should have an id', () => {
        expect(newIngredients.id).to.be.a('number')
    })

    it('Should have a name', () => {
        expect(newIngredients.name).to.be.a('string')
    })

    it("Should have an estimated cost in cents", () => {
        expect(newIngredients.estimatedCostInCents).to.be.a('number')
    })
})