import { expect } from 'chai';
import { beforeEach } from 'mocha';
import RecipeRepository from '../src/classes/RecipeRepository';


describe('Recipe', () => {
  var recipe1
  beforeEach(() => {
    recipe1 = new RecipeRepository ([
      {
        "id": 595736,
        "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
        "ingredients": [
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
          {
            "id": 1123,
            "quantity": {
              "amount": 1,
              "unit": "large"
            }
          }],
          "instructions": [
            {
              "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
              "number": 1
            },
            {
              "instruction": "Add egg and vanilla and mix until combined.",
              "number": 2
            }],
          "name": "Loaded Chocolate Chip Pudding Cookie Cups",
          "tags": [
            "antipasti",
            "starter",
            "snack",
            "appetizer",
            "antipasto",
            "hor d'oeuvre"
          ]
        }
      ])
  })


  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function')
  })

  it('should instatiate a new Recipe', () => {
    expect(recipe1).to.equal(new RecipeRepository)
  })

  it('should filter recipe by name ', () => {
    expect(recipe1).to.equal('Loaded Chocolate Chip Pudding Cookie Cups')
  })

})