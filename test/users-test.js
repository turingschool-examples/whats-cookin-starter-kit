const chai = require("chai");
const expect = chai.expect;

const User = require("../src/users");

let user;

describe('Users', function() {

  beforeEach(() => {
    user = new User({
      "id": 1,
      "name": "Saige O'Kon",
      "pantry": [{
          "ingredient": 11477,
          "amount": 1
        },
        {
          "ingredient": 93820,
          "amount": 1
        }
      ]
    });
  });

  it('should be an instance of a User', function() {
    expect(user).to.be.an.instanceOf(User);
  });

  it('should have an id', function() {
    expect(user.id).to.equal(1);
  });

  it('should have a name', function() {
    expect(user.name).to.equal("Saige O'Kon");
  });

  it('should have a pantry of ingredients', function() {
    expect(user.pantry).to.be.a('array')
  });

  it('should be able to add recipes to favorites', function() {
    user.addToFavorites('recipe');
    expect(user.favoriteRecipes.length).to.equal(1);
  });

  it('should be able to add recipes to recipesToCook', function() {
    user.addToCook('recipe');
    expect(user.recipesToCook.length).to.equal(1)
  });
});
