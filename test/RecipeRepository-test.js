import { expect } from 'chai'
import RecipeRepository from '../src/classes/RecipeRepository'
import Recipe from '../src/classes/Recipe'
import ingredientsData from '../src/data/ingredients'
import recipeData from '../src/data/recipes'


describe('RecipeRepository', () => {
  let recipeRepository
  beforeEach(() => {
    recipeRepository = new RecipeRepository(recipeData)
  })
  
  it('should be an instance of RecipeRepository', () => {
    expect(recipeRepository).to.be.an.instanceOf(RecipeRepository)
  })

  it('should contain an array of recipes', () => {
    expect(recipeRepository.recipeList[0]).to.be.an.instanceOf(Recipe)
    expect(recipeRepository.recipeList[1]).to.be.an.instanceOf(Recipe)
    expect(recipeRepository.recipeList[2]).to.be.an.instanceOf(Recipe)
  })

  it('should should be able to return a list of recipes filtered by tag', () => {
    // expect(recipeRepository.filterByTag('antipasti'))
  })

  it('should should be able to return a list of recipes filtered by name', () => {
    
  })

})