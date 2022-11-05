import Recipe from '../src/classes/Recipe'
import RecipeRepository from '../src/classes/RecipeRepository'
import { ingredientsData, recipeData } from '../src/data/testData'
import { expect } from 'chai'

describe('RecipeRepository', () => {
  let recipeRepository, recipe1, recipe2, recipe3

  beforeEach(() => {
    recipeRepository = new RecipeRepository(recipeData, ingredientsData)
    recipe1 = new Recipe(recipeData[0], ingredientsData)
    recipe2 = new Recipe(recipeData[1], ingredientsData)
    recipe3 = new Recipe(recipeData[2], ingredientsData)
  })

  it('should be an instance of RecipeRepository', () => {
    expect(recipeRepository).to.be.an.instanceOf(RecipeRepository)
  })

  it('should contain an array of all recipes', () => {
    expect(recipeRepository.recipeList[0]).to.eql(recipe1)
    expect(recipeRepository.recipeList[1]).to.eql(recipe2)
    expect(recipeRepository.recipeList[2]).to.eql(recipe3)
    expect(recipeRepository.recipeList.length).to.equal(8)
  })

  it('should be able to return a random recipe of the day and hold it in a property', () => {
    expect(recipeRepository.featuredRecipe).to.be.an.instanceOf(Recipe)
    expect(recipeRepository.getFeaturedRecipe()).to.be.an.instanceOf(Recipe)
  })

  it('should have a list of all possible ingredients', () => {
    for (let i = 0; i < recipeRepository.allIngredients; i++) {
      let ingredient = recipeRepository.allIngredients[i]
      let name = recipeRepository.allIngredients[i].name;
      let unit = recipeRepository.allIngredients[i].unit
      expect(!!name).to.equal(true)
      expect(ingredient.hasOwnProperty(unit)).to.equal(true)
    }
  })
})