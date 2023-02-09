import { expect } from 'chai';
import User from '../src/classes/user';
import Recipe from '../src/classes/recipe';
import Ingredient from '../src/classes/ingredient';

describe('user', () =>{
    let user;
    let recipe;
    let ingredient;

    beforeEach(() =>{
        user = new User(
            {
              "name": "Brexye Quysh",
              "id": 1,
              "pantry": [
                {
                  "ingredient": 11297,
                  "amount": 4
                },
            ]
            }
        )
        // recipe = new Recipe({
        //     name: 'cookies',
        //     ingredients: ingredient
        // })

        ingredient = new Ingredient({
            id: 007,
            name: 'choccy chips',
            cost: 50
        })

        recipe = new Recipe({
            name: 'cookies',
            ingredients: ingredient
        })
    })

    it('should be a function', () => {
        expect(User).to.be.a('function');
    })

    it('user has a name', () => {
        expect(user.name).to.equal("Brexye Quysh")
    })

    it('user has an id', () => {
        expect(user.id).to.equal(1)
    })

    it('should add a recipe', () =>{
        expect(user.addRecipeToCook('choccy chip')).to.equal('cookies')
    })

})