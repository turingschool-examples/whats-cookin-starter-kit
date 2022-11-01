import Recipe from '../src/classes/Recipe'
import Ingredient from '../src/classes/Ingredient'
import { testIngredients, ingredientsData, recipeData } from '../src/data/testData'
import { expect } from 'chai'

describe('Recipe', () => {
  let recipeInfo, testIngredients, recipe, wheatFlour, bicarbonateOfSoda, eggs
  beforeEach(() => {
    recipeInfo = recipeData[0];
    wheatFlour = new Ingredient(ingredientsData[0], recipeData[0].ingredients[0])
    bicarbonateOfSoda = new Ingredient(ingredientsData[1], recipeData[0].ingredients[1])
    eggs = new Ingredient(ingredientsData[2], recipeData[0].ingredients[2])
    recipe = new Recipe(recipeData, ingredientsData)
  })

  it('should be an instance of Recipe', () => {
    expect(recipe).to.be.an.instanceOf(Recipe)
  })

  it('should have an ID', () => {

    expect(recipe.id).to.equal(595736)
  })

  it('should have a name', () => {
    expect(recipe.name).to.equal("Loaded Chocolate Chip Pudding Cookie Cups")
  })

  it('should have an image source', () => {
    expect(recipe.image).to.equal("https://spoonacular.com/recipeImages/595736-556x370.jpg");
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
    expect(recipe.ingredients).to.eql(testIngredients)
  })

  it('should be able to calculate total cost to make recipe', () => {
    let totalCost = recipe.getTotalCost()

    expect(totalCost).to.equal("$9.76")
  })
})