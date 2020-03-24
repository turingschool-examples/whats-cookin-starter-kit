const chai = require('chai');
const expect = chai.expect;

const User = require('../classes/User');
const Pantry = require('../classes/Pantry');
const Recipe = require('../classes/Recipe');

describe('User', function() {
  it.only('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it.only('should be an instance of User', function() {
    var user = new User({
      "name": "Saige O'Kon",
      "id": 1,
      "pantry": [
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
        },
        {
          "ingredient": 11215,
          "amount": 5
        },
        {
          "ingredient": 2047,
          "amount": 6
        },
        {
          "ingredient": 1123,
          "amount": 8
        }
      ]
    });

    expect(user).to.be.an.instanceof(User);
  });

  it.only('should store ingredients in the pantry', function() {
    var user = new User({
      "name": "Saige O'Kon",
      "id": 1,
      "pantry": [
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
      ]
    });

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
    ]);
  });

  it.only('should instantiate a new Pantry instance', function() {
    var user = new User({
      "name": "Saige O'Kon",
      "id": 1,
      "pantry": [
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
      ]
    });
    let newPantry = user.createPantry();

    expect(newPantry).to.eql({
      pantryId: 1,
      pantry: [
        { ingredient: 11477, amount: 4 },
        { ingredient: 11297, amount: 4 },
        { ingredient: 1082047, amount: 10 }
      ]
    });
  });

  it.only('should add a recipe to the favRecipes array', function() {
    
  })
});
