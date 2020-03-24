const chai = require('chai');
const expect = chai.expect;
const userData = '../data/users.js';

const User = require('../src/User');
const Ingredient = require('../src/Ingredient');
const Recipe = require('../src/Recipe');

describe('User', function() {

  let user1;

  beforeEach(function() {
    user1 = new User({name: "Saige O'Kon", id: 1, pantry: [{ingredient: 11477, amount: 4}, {ingredient: 11297, amount: 4}]})
  });

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be an instance of the User class', function() {
    expect(user1).to.be.an.instanceof(User);
  });

});
