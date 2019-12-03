const chai = require('chai');
const expect = chai.expect;
const Users = require('../src/user-class');

describe('recipes', function() {

  it('should be a function', function() {
    expect(Users).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Users();
    expect(turn).to.be.an.instanceof(Users);
  });
});
