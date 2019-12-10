const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User.js');


beforeEach(() => {
	const user = new User(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
});

describe('User', function() {

  it('should be a function', function() {
    expect(user).to.be.a('function');
  });

})
