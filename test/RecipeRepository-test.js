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

  it('should contain an array of recipes', () => {
    expect(recipeRepository.recipeList[0]).to.be.an.instanceOf(Recipe)
    expect(recipeRepository.recipeList[1]).to.be.an.instanceOf(Recipe)
    expect(recipeRepository.recipeList[2]).to.be.an.instanceOf(Recipe)
    expect(recipeRepository.recipeList[0]).to.eql(recipe1)
    expect(recipeRepository.recipeList[1]).to.eql(recipe2)
    expect(recipeRepository.recipeList[2]).to.eql(recipe3)
  })

  it('should should be able to return a list of recipes filtered by tag', () => {
    expect(recipeRepository.filterByTag('antipasti')[0]).to.eql(recipe1)
    expect(recipeRepository.filterByTag('lunch')[0]).to.eql(recipe2)
    expect(recipeRepository.filterByTag('sauce')[0]).to.eql(recipe3)
  })

  it('should should be able to return a list of recipes filtered by name', () => {
    expect(recipeRepository.filterByNameOrIngredient('Pork Chops')[0]).to.eql(recipe2)
    expect(recipeRepository.filterByNameOrIngredient('Dirty Steve')[0]).to.eql(recipe3)
  })

  it('should should be able to return a random recipe of the day', () => {
    expect(recipeRepository.getFeaturedRecipe()).to.be.an.instanceOf(Recipe)
  })
})