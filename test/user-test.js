const chai = require('chai');
const expect = chai.expect;
const User = require('../src/user-class.js');

describe('user', () => {

  it('should be a function', () => {
    expect(User).to.be.a('function');
  })
});