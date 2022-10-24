import { expect } from 'chai'
import RecipeRepository from '../src/classes/RecipeRepository'
import Recipe from '../src/classes/Recipe'
import recipeData from '../src/data/recipes'
import ingredientsData from "../src/data/ingredients"

describe('RecipeRepository', () => {
  let recipeRepository
  // let recipeData
  // let ingredientsData
  
  beforeEach(() => {
    // recipeData = recipeData.recipeData
    // ingredientsData = ingredientsData.ingredientsData
  
    
    recipeRepository = new RecipeRepository(recipeData, ingredientsData)
  })
  // test
  it('should be an instance of RecipeRepository', () => {
    expect(recipeRepository).to.be.an.instanceOf(RecipeRepository)
  })

  it('should contain an array of recipes', () => {
    expect(recipeRepository.recipeList[0]).to.be.an.instanceOf(Recipe)
    expect(recipeRepository.recipeList[1]).to.be.an.instanceOf(Recipe)
    expect(recipeRepository.recipeList[2]).to.be.an.instanceOf(Recipe)
  })

  it('should should be able to return a list of recipes filtered by tag', () => {
    expect(recipeRepository.filterByTag('antipasti')[0].id).to.equal(595736)
    expect(recipeRepository.filterByTag('antipasti')[2].id).to.equal(724018)
  })

  it('should should be able to return a list of recipes filtered by name', () => {
    expect(recipeRepository.filterByNameOrIngredient('Pork Chops')[0].id).to.equal(678353)
    expect(recipeRepository.filterByNameOrIngredient('Pancakes')[0].id).to.equal(741603)
  })

  it('should should be able to return a random recipe of the day', () => {
    expect(recipeRepository.getFeaturedRecipe()).to.be.an.instanceOf(Recipe)
  })
})