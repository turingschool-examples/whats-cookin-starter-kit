const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const Recipe = require('../src/Recipe');

describe('User', function() {
  let user;
  let recipe;

  beforeEach(function() {
    user = new User(
      {
        'name': 'Josh',
        'id': 1,
        'pantry': [
          {
            "ingredient": 11477,
            "amount": 4
          },
          {
            "ingredient": 11297,
            "amount": 4
          },
          {
            "ingredient": 1082047,
            "amount": 10
          },
          {
            "ingredient": 20081,
            "amount": 5
          }
        ]
      });

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', function() {
    expect(user).to.be.an.instanceof(User);
  });

  it('should have an name', function() {
    expect(user.name).to.equal('Josh');
  })

  it('should have an id', function() {
    expect(user.id).to.equal(1);
  })

  it('should have an pantry', function() {
    expect(user.pantry).to.deep.equal([
      {
        "ingredient": 11477,
        "amount": 4
      },
      {
        "ingredient": 11297,
        "amount": 4
      },
      {
        "ingredient": 1082047,
        "amount": 10
      },
      {
        "ingredient": 20081,
        "amount": 5
      }
    ]);
  })

  it('should start with no favorite recipes', function() {
    expect(user.favoriteRecipes.length).to.equal(0);
  })

  it('should start with no recipes to cook', function() {
    expect(user.recipesToCook.length).to.equal(0);
  })
});
});
