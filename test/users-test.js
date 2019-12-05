const chai = require("chai");
const expect = chai.expect;

const Users = require("../src/users");
const userData = require("../data/users");

let user;

describe ('Users', function() {

  beforeEach(() => {
    user = new Users(userData[0]);
  });

  it('should be an instance of a User', function() {
    expect(user).to.be.an.instanceOf(User);
  });

  it('should have an id' function() {

  });

  it('should have a name' function() {

  });

  it('should have a pantry of ingredients' function() {

  });

  it('should have favorite recipes' function() {

  });

  it('should be able to add recipes to favorites' function() {

  });

  it('should be able to ' function() {

  });
});
