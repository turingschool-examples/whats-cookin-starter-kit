const chai = require('chai');
const expect = chai.expect;
const User = require('../src/user-class.js');

describe('user', () => {

  let user;

  beforeEach(() => {
    user = new User();
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should have an array of favorite recipes', () => {
    expect(user.favoriteRecipes).to.be.an('array');
    expect(user.favoriteRecipes).to.deep.equal([]);
    
  });
});