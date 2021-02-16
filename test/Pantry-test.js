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
const Pantry = require ('../src/Pantry')
const ingredients = require("../data/ingredients")
ingredientsData = ingredients.ingredientsData


describe('Pantry', function() {
  it('should be a function', function() {
    const pantry = new Pantry(userData[0].pantry);
    expect(Pantry).to.be.a('function');
  });

  it('should be an instance of Pantry', function() {
    const pantry = new Pantry(userData[0].pantry);
    expect(pantry).to.be.an.instanceOf(Pantry);
  });

  it('check users pantry for ingredients', function() {
    const pantry = new Pantry(userData[0].pantry)
    expect(pantry.checkUserIngredients(allRecipes[0])).to.equal('You can’t cook this, you need 2 more c of semi sweet chips')
    expect(pantry.checkUserIngredients(allRecipes[5])).to.equal('You cooked this!')
  });

})
