import { expect } from 'chai';
import Ingredient from '../src/classes/ingredient';
import Recipe from '../src/classes/recipe';
const recipeDataFile = require('../src/data/recipes.js');
const recipes = recipeDataFile.recipeData

describe('Recipe', () => {
    let recipe;
    let ingredient1;
    let ingredient2;


    beforeEach(() => {
        recipe = new Recipe(   
            595736,
            "https://spoonacular.com/recipeImages/595736-556x370.jpg",
            [
              {
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
              },
            ],
            [
              {
                "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
                "number": 1
              },
              {
                "instruction": "Add egg and vanilla and mix until combined.",
                "number": 2
              }
            ],
              "Loaded Chocolate Chip Pudding Cookie Cups",
            [
              "antipasti",
              "starter"
            ]
          )

          ingredient1 = new Ingredient(20081, 'wheat flour', 142)
          ingredient2 = new Ingredient(18372, 'bicarbonate of soda', 582)
    })
    it('should be a function', () => {
        console.log('Test: ', recipes)
        expect(Recipe).to.be.a('function');
    })

    it.skip('should be an instance of recipe', () => {
        expect(recipe).to.be.an.instanceof(Recipe)
    })

    it.skip('should have an id', () => {
        expect(recipe.id).to.equal(595736)
    })

    it.skip('should have an image', () => {
        expect(recipe.image).to.equal('https://spoonacular.com/recipeImages/595736-556x370.jpg')
    })

    // it.skip('should have a specific ingredient at index 0', () => {
    //     expect(recipe.ingredients[0].to.equal("id": 20081)

    // })

    it.skip('should have directions', () => {

    })
})