const chai = require('chai');
const expect = chai.expect;

const User = require('./src/User.js');

let user1
let user5

describe('User', () => {
  beforeEach(() => {
    user1 = new User(1, 'Boba', [
      {
        "ingredient": 1077,
        "amount": 1
      },
      {
        "ingredient": 14412,
        "amount": 1
      },
      {
        "ingredient": 1009054,
        "amount": 3
      }];
    );
    user5 = new User(5, 'Krennick', [
      {
        "ingredient": 11477,
        "amount": 1
      },
      {
        "ingredient": 93820,
        "amount": 1
      },
      {
        "ingredient": 11297,
        "amount": 3
      },
      {
        "ingredient": 11547,
        "amount": 5
      }];
    );
  });

  it.skip('Should have a property of favoriteRecipes with a default value', () => {
    expect(user1.favoriteRecipes).to.eql(0);
  });
  it.skip('Should be able to add recipes from favoriteRecipes', () =>{
    expect(user1.changeFavorites()).to.eql(["Loaded Chocolate Chip Pudding Cookie Cups"]);
  });
  it.skip('Should be able to remove recipes from favoriteRecipes', () =>{
    user1.changeFavorites(P);
    expect(user1.changeFavorites(P)).to.eql([]);
  });
  it.skip('Should ')
});
