import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';

describe('Recipe', () => {
  
  let recipe;

  beforeEach(() => {
    recipe = [
      {
        "id": 595736,
        "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
        "ingredients" : [{ 
          "id": 20081,
          "quantity": {
            "amount": 1.5,
            "unit": "c"
            }
          }], 
        "instructions" : [{
          "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
          "number": 1
        }],
        "name": "Loaded Chocolate Chip Pudding Cookie Cups",
        "tags": [
          "antipasti",
          "starter",
          "snack",
        ]
      }
    ] 
  })

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('Should be able to take in data', () => {
    const cookies = new RecipeRepository(recipe);
    expect(cookies.recipes).to.deep.equal([recipe]);
  })
})
