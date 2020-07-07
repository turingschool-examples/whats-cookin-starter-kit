const expect = require('chai').expect;
const Pantry = require('../src/Pantry');
const User = require('../src/User');
const Ingredient = require('../src/Ingredient');

describe('User', function() {
  let user;
  beforeEach(function() {
    user = new User();
  });

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should have favorite recipes', function() {
    expect(user.favoriteRecipes).to.deep.equal([]);
  });

  it('should have a collection of recipes to cook', function() {
    expect(user.recipesToCook).to.deep.equal([]);
  })

  // it('should ', function() {
  //
  // });
})
