import { expect } from 'chai';
import Ingredients from '../src/classes/Ingredients.js'

describe('Ingredients', () => {
    let ingredient1
    beforeEach(() => {
        ingredient1 = new Ingredients([{
            "id": 20081,
            "quantity": {
              "amount": 1.5,
              "unit": "c"
            }
          },
          {
            "id": 18372,
            "quantity": {
              "amount": 0.5,
              "unit": "tsp"
            }
          }])
    })
    it('should be a function', () => {
        expect(Ingredients).to.be.a('function')
    })
    it('should take in a data set', () => {
        expect(ingredient1.data).to.deep.equal([{
            "id": 20081,
            "quantity": {
              "amount": 1.5,
              "unit": "c"
            }
          },
          {
            "id": 18372,
            "quantity": {
              "amount": 0.5,
              "unit": "tsp"
            }
          }])
    })
    it('should return an array of ingredients', () => {
        expect(ingredient1.combinedIngredients()).to.deep.equal([
            {
              'id': 20081,
              'name': 'wheat flour',
              'estimatedCostInCents': 142,
              'quantity': { amount: 1.5, unit: 'c' }
            },
            {
              'id': 18372,
              'name': 'bicarbonate of soda',
              'estimatedCostInCents': 582,
              'quantity': { 'amount': 0.5, 'unit': 'tsp' }
            }
          ])
        })
        it('should save the modified data to a property', () => {
            expect(ingredient1.modifiedData).to.deep.equal([
                {
                  'id': 20081,
                  'name': 'wheat flour',
                  'estimatedCostInCents': 142,
                  'quantity': { amount: 1.5, unit: 'c' }
                },
                {
                  'id': 18372,
                  'name': 'bicarbonate of soda',
                  'estimatedCostInCents': 582,
                  'quantity': { 'amount': 0.5, 'unit': 'tsp' }
                }
              ])
        })

})