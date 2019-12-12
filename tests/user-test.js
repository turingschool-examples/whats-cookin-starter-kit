const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');

describe('User', function() {

  it('should be a function', function () {
    expect(User).to.be.a('function');
  });

  it('should return the users name', function () {
  	const user = new User({name: 'Hunter'});
    expect(user.name).to.equal('Hunter');
  });

  it('should return the users pantry', function () {
  	const user = new User({pantry: 'Pizza'});
    expect(user.pantry).to.equal('Pizza');
  });

})
