import { expect } from 'chai'
import User from '../src/classes/User'
import Recipe from '../src/classes/Recipe'
import ingredientsData from '../src/data/ingredients'
import recipeData from '../src/data/recipes'
import usersData from '../src/data/users'

describe('User', () => {
  let user, recipe, recipe2
  beforeEach(() => {
    recipe = new Recipe(recipeData[0], ingredientsData)
    recipe2 = new Recipe(recipeData[1], ingredientsData)
    user = new User(usersData[0])
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
    expect(user.pantry).to.eql(usersData[0].pantry)
  })

  it('should have a list of favorite recipes', () => {
    user.addRecipeToFavorites(recipe)
    
    expect(user.favoriteRecipes[0].id).to.equal(595736)
  })

  it('should be able to filter favorite recipes by tag', () => {
    user.addRecipeToFavorites(recipe)
    user.addRecipeToFavorites(recipe2)
    let filtered = user.filterByTag('antipasti')
    let filtered2 = user.filterByTag('lunch')

    expect(filtered[0]).to.eql(user.favoriteRecipes[0])
    expect(filtered2[0]).to.eql(user.favoriteRecipes[1])
  })

  it('should be bale to filter favorite recipes by name', () => {
    user.addRecipeToFavorites(recipe)
    user.addRecipeToFavorites(recipe2)
    let filtered = user.filterByNameOrIngredient('Cookie')
    let filtered2 = user.filterByNameOrIngredient('Maple')

    expect(filtered[0]).to.eql(user.favoriteRecipes[0])
    expect(filtered2[0]).to.eql(user.favoriteRecipes[1])
  })
})