const chai = require('chai');
const expect = chai.expect;
const User = require('../src/user-class.js');
const usersData = require('../data/users.js');

describe('user', () => {

  let user;

  beforeEach(() => {
    user = new User(usersData[0]);
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should have a name', () => {
    expect(user.name).to.be.a('string');
    expect(user.name).to.deep.equal(usersData[0].name);
  });

  it('should have an ID', () => {
    expect(user.id).to.be.a('number');
    expect(user.id).to.deep.equal(usersData[0].id);
  });

  it('should have an array of favorite recipes', () => {
    expect(user.favoriteRecipes).to.be.an('array');
    expect(user.favoriteRecipes).to.deep.equal([]);
  });
});