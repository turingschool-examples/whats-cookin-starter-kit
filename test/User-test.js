const chai = require('chai');
const expect = chai.expect;
const data = require('../data/helper-data.js')

const User = require('../src/User')
const Ingredient = require('../src/Ingredient.js');
const RecipeRepository = require('../src/RecipeRepository.js')

describe('User', () => {

  it('should accept userData and an Ingredients array to instantiate a new User object', () => {
    let user = new User(data.usersData[0], data.ingredientsData)
    expect(user).to.be.an.instanceof(User)
    expect(user.pantry[0]).to.be.an.instanceof(Ingredient);
  })

  it('should be able to add recipes to its array of favorites', () => {
    let user = new User(data.usersData[0], data.ingredientsData)
    let recipeRepository = new RecipeRepository(data.recipeData, data.ingredientsData)

    user.addRecipeToFavs(recipeRepository.recipes[0])
    expect(user.favoriteRecipes).to.deep.equal([recipeRepository.recipes[0]])
    user.addRecipeToFavs(recipeRepository.recipes[1])
    expect(user.favoriteRecipes).to.deep.equal([recipeRepository.recipes[0], recipeRepository.recipes[0]])

  })

  it.skip('should be albe to filter by name', () => {

  })

  it.skip('should be able to filter by one or more ingredient', () => {

  })

})