import { expect } from 'chai';
import { beforeEach } from 'mocha';
import RecipeRepository from '../src/classes/RecipeRepository';


describe('Recipe', () => {
  beforeEach(() => {
    var recipe1 = new RecipeRepository ([
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
          }]
      )
  })


  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function')
  })

  it('should instatiate a new Recipe', () => {
    expect(recipe1).to.equal(new RecipeRepository)
  })

  it('should ', () => {
    expect(recipe1).to.equal()
  })

})