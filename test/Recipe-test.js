import { expect } from 'chai'
import Recipe from '../src/classes/Recipe'
import ingredientsData from '../src/data/ingredients'

describe('Recipe', () => {
let recipeData, testIngredients, recipe;
  beforeEach(() => {
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
        {
          "id": 1123,
          "quantity": {
            "amount": 1,
            "unit": "large"
          }
        }
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
    testIngredients = [
      {
        id: 20081,
        name: "wheat flour",
        estimatedCostInCents: 142,
        amount: 1.5,
        unit: "c"
      },
      {
        id: 18372,
        name: "bicarbonate of soda",
        estimatedCostInCents: 582,
        amount: 0.5,
        unit: "tsp"
      },
      {
        id: 1123,
        name: "eggs",
        estimatedCostInCents: 472,
        amount: 1,
        unit: "large"
      }
    ]
    recipe = new Recipe(recipeData, ingredientsData);
  })

  it('should be an instance of Recipe', () => {
    expect(recipe).to.be.an.instanceOf(Recipe);
  })

  it('should have an ID', () => {
    
    expect(recipe.id).to.equal(595736)
  })

  it('should have a name', () => {
    expect(recipe.name).to.equal("Loaded Chocolate Chip Pudding Cookie Cups")
  })

  it('should have an image source', () => {
    expect(recipe.image).to.equal("https://spoonacular.com/recipeImages/595736-556x370.jpg")
  })

  it('should have cooking instructions', () => {
    expect(recipe.instructions).to.eql([
      {
        "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
        "number": 1
      },
    ])
  })

  it('should have tags', () => {
    expect(recipe.tags).to.eql([
      "antipasti",
      "starter",
      "snack",
      "appetizer",
      "antipasto",
      "hor d'oeuvre"
    ])
  })

  it('should be able to make its ingredients', () => {
    expect(recipe.ingredients).to.eql(testIngredients);
  })

  it('should be able to calculate total cost to make', () => {
    let totalCost = recipe.totalCost();

    expect(totalCost).to.equal("$9.76")
  })
})

