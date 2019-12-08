const chai = require('chai');
const expect = chai.expect;

let user = new User(users)

let user;

beforeEach(() => {
	const user = new User(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
});

describe('User', function() { 

  it.only('should be a function', function() {
    expect(user).to.be.a('function');
  });

  })