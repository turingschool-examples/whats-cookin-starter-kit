const chai = require('chai');
const expect = chai.expect;

const User = require('../classes/User');
const users = require('../data/users');

describe('User', () => {
let user;

beforeEach(() => {
  user = new User(users[0]);
});

  it('should be a function', function() {
    expect(User).to.be.a('function');
});

  it('should have a default value of [] for favoriteRecipes', function() {
    expect(user.favoriteRecipes).to.deep.equal([]);
});

  it('should have a default value of [] for recipesToCook', function() {
    expect(user.recipesToCook).to.deep.equal([]);
});

  it('should have a default id of 1 for id', function() {
    expect(user.id).to.equal(1);
});

  it('should have a default name of Saige O\'Kon for id', function() {
    expect(user.name).to.equal('Saige O\'Kon');
});

  it('should have a default pantry of users[0].pantry for id', function() {
    expect(user.pantry).to.equal(users[0].pantry);
});
})
