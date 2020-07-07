const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');

describe('User', () => {
  it('Should be a function', () => {
    expect(User).to.be.a('function');
  });
});