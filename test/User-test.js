import User from '../src/classes/User'
import Recipe from '../src/classes/Recipe'
import RecipeRepository from '../src/classes/RecipeRepository'
import ingredientsData from '../src/data/ingredients'
import recipeData from '../src/data/recipes'
import { testPantry, usersData } from '../src/data/testData'
import { expect } from 'chai'

describe('User', () => {
  let recipeRepository, user, recipe, recipe2
  beforeEach(() => {
    recipeRepository = new RecipeRepository(recipeData, ingredientsData)
    recipe = new Recipe(recipeData[0], ingredientsData)
    recipe2 = new Recipe(recipeData[1], ingredientsData)
    user = new User(usersData[0], recipeRepository.allIngredients)
  })

  it('should be an instance of User', () => {
    expect(user).to.be.an.instanceOf(User)
  })

  it('should have a name', () => {
    expect(user.name).to.equal("Saige O'Kon")
  })

  it('should have an ID', () => {
    expect(user.id).to.equal(1)
  })

  it('should have a pantry of ingredients', () => {
    expect(user.pantry).to.be.an('array')
    expect(user.pantry.slice(0, 4)).to.eql(testPantry)
  })

  it('should have a list of favorite recipes', () => {
    user.addRecipeToFavorites(recipe)
    
    expect(user.favoriteRecipes[0]).to.eql(recipe)
  })

  
})