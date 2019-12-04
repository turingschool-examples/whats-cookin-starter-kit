const chai = require('chai');
const expect = chai.expect;

const User = require('../classes/User');

describe('User', () => {
let user;

beforeEach(() => {
  user = new User();
});

  it('should be a function', function() {
  expect(User).to.be.a('function');
});
})
