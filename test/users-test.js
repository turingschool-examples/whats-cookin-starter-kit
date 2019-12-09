const chai = require("chai");
const expect = chai.expect;

const User = require("../src/users");
const userData = require("../data/users");

let user;

describe ('Users', function() {

  beforeEach(() => {
    user = new Users(userData[0]);
  });

  it.skip('should be an instance of a User', function() {
    expect(user).to.be.an.instanceOf(User);
  });

  it.skip('should have an id', function() {

  });

  it.skip('should have a name', function() {

  });

  it.skip('should have a pantry of ingredients', function() {

  });

  it.skip('should have favorite recipes', function() {

  });

  it.skip('should be able to add recipes to favorites', function() {

  });

  it.skip('should be able to ', function() {

  });
});
