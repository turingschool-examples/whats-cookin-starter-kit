import Recipe from '../src/classes/Recipe'
import Ingredient from '../src/classes/Ingredient'
import { ingredientsData, recipeData } from '../src/data/testData'
import { expect } from 'chai'

describe('Recipe', () => {
  let recipeInfo, recipe, wheatFlour, bicarbonateOfSoda, eggs
  beforeEach(() => {
    recipeInfo = recipeData[0];
    wheatFlour = new Ingredient(ingredientsData[0], recipeData[0].ingredients[0])
    bicarbonateOfSoda = new Ingredient(ingredientsData[1], recipeData[0].ingredients[1])
    eggs = new Ingredient(ingredientsData[2], recipeData[0].ingredients[2])
    recipe = new Recipe(recipeData[0], ingredientsData)
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
    expect(recipe.image).to.equal("https://spoonacular.com/recipeImages/595736-556x370.jpg")
  })

  it('should have cooking instructions', () => {
    expect(recipe.instructions).to.eql(recipeData[0].instructions)
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
    expect(recipe.ingredients[0]).to.eql(wheatFlour)
    expect(recipe.ingredients[1]).to.eql(bicarbonateOfSoda)
    expect(recipe.ingredients[2]).to.eql(eggs)
  })

  it('should be able to calculate total cost to make recipe', () => {
    let totalCost = recipe.getTotalCost()

    expect(totalCost).to.equal("$177.76")
  })
})