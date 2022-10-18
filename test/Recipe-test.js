import { expect } from 'chai'
import Recipe from '../src/classes/Recipe'

describe('Recipe', () => {

  let recipe, recipeData;
  beforeEach(function() {
    recipeData = {
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
      ],
      "instructions": [
        {
          "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
          "number": 1
        },
      ],
      "name": "Loaded Chocolate Chip Pudding Cookie Cups",
      "tags": [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ]
    };
    recipe = new Recipe(recipeData);
  })

  it('should be an instance of Recipe', () => {
    expect(recipe).to.be.an.instanceOf(Recipe);
  })

  it('should have an ID', () => {
    expect(recipe.id).to.equal(595736)
  })

  it('should have a name', () => {
    expect(recipe.data).to.equal("Loaded Chocolate Chip Pudding Cookie Cups")
  })
})