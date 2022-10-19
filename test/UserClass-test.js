import { expect } from 'chai';
import User from '../src/classes/UserClass';
import Recipe from '../src/classes/Recipe';

describe('User', () => {
    let userInfo, recipeData1, recipeData2, newUser, newRecipe
    beforeEach(() => {
        userInfo = [
            {
            "name": "Saige O'Kon",
            "id": 1,
            "pantry": [
              {
                "ingredient": 11297,
                "amount": 4
              },
              {
                "ingredient": 1082047,
                "amount": 10
              },
              {
                "ingredient": 20081,
                "amount": 5
              },
              {
                "ingredient": 11215,
                "amount": 5
              },
              {
                "ingredient": 2047,
                "amount": 6
              },
              {
                "ingredient": 1123,
                "amount": 8
              },
              {
                "ingredient": 11282,
                "amount": 4
              },
              {
                "ingredient": 6172,
                "amount": 2
              },
              {
                "ingredient": 2044,
                "amount": 2
              },
              {
                "ingredient": 2050,
                "amount": 4
              },
              {
                "ingredient": 1032009,
                "amount": 3
              },
              {
                "ingredient": 5114,
                "amount": 3
              },
              {
                "ingredient": 1017,
                "amount": 2
              },
              {
                "ingredient": 18371,
                "amount": 7
              },
              {
                "ingredient": 1001,
                "amount": 6
              },
              {
                "ingredient": 99223,
                "amount": 2
              },
              {
                "ingredient": 1230,
                "amount": 2
              },
              {
                "ingredient": 9152,
                "amount": 4
              },
              {
                "ingredient": 10611282,
                "amount": 2
              },
              {
                "ingredient": 93607,
                "amount": 2
              },
              {
                "ingredient": 14106,
                "amount": 4
              },
              {
                "ingredient": 1077,
                "amount": 4
              },
              {
                "ingredient": 6150,
                "amount": 2
              },
              {
                "ingredient": 1124,
                "amount": 2
              },
              {
                "ingredient": 10011693,
                "amount": 4
              },
              {
                "ingredient": 1102047,
                "amount": 2
              },
              {
                "ingredient": 19206,
                "amount": 2
              },
              {
                "ingredient": 1145,
                "amount": 4
              },
              {
                "ingredient": 1002030,
                "amount": 4
              },
              {
                "ingredient": 12061,
                "amount": 2
              },
              {
                "ingredient": 19335,
                "amount": 4
              },
              {
                "ingredient": 15152,
                "amount": 3
              },
              {
                "ingredient": 9003,
                "amount": 2
              },
              {
                "ingredient": 18372,
                "amount": 3
              },
              {
                "ingredient": 2027,
                "amount": 2
              }
            ]
          },
        ]
        recipeData1 = "This is a recipe. Get some ingredients, mix them together, put them in the oven, and bake them. Make sure they taste good."
        recipeData2 = "This is another recipe. Get more ingredients. Combine them. Apply heat. Enjoy!"
        newUser = new User(recipeData1, recipeData2)
        newRecipe = new Recipe(recipeData1, recipeData2)
    })
    it('Should be a function', () => {
        expect(User).to.be.a('function')
    })

    it('Should add a recipe to the recipesToCook array', () => {
        newUser.recipesToCook.push(recipeData1)
        newUser.recipesToCook.push(recipeData2)
        newUser.addRecipe(recipeData1, recipeData2)
        expect(newUser.recipesToCook[1]).to.deep.equal(recipeData2)
    })

    it('Should be able to remove a recipe from the recipiesToCook array', () => {
        newUser.recipesToCook.push(recipeData1)
        newUser.recipesToCook.push(recipeData2)
        newUser.removeRecipe(recipeData2)
        expect(newUser.recipesToCook[0]).to.deep.equal(recipeData1)
    })
})