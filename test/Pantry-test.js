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

  it.only('check users pantry for ingredients', function() {
    const pantry = new Pantry(userData[0].pantry)
    console.log(pantry.ingredients)
    console.log(pantry.checkUserIngredients(allRecipes[0]))
    console.log(pantry.ingredients)
    expect(pantry).to.equal('test')
  });

})
