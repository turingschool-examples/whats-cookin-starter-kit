const chai = require('chai');
const expect = chai.expect;
const recipes = require('./Data');
allRecipes = recipes.dummyRecipeData;
const data = require('../test/Data');
dummyIngredientData = data.dummyIngredientData
const Recipe = require('../src/Recipe');
const User = require('../src/User');
const users = require('../data/users')
const userData = users.usersData



describe.only('User', function() {

  it('should store favortied recipes', function() {
    const user = new User(userData[0]);

    user.favoriteRecipes(allRecipes[0])
    expect(user.favoriteRecipesArray).to.deep.equal([allRecipes[0]])
  })

  it('should store recipes to cook', function() {
    const user = new User(userData[0]);

    user.recipesToCook(allRecipes[0]);
    expect(user.recipesToCookArray).to.deep.equal([allRecipes[0]])
  })
})
