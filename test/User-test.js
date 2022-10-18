import { expect } from 'chai';
import User from '../src/classes/User';
import usersData from '../src/data/users';

describe('User', function() {

  let user1, user2;

  beforeEach('define variables for test suite', function() {
    user1 = new User(usersData[0]);
    user2 = new User();
    
  });

  it('Should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('Should be an instance of User', function() {
    expect(user1).to.be.an.instanceOf(User);
  });

  it('User should have a name', function() {
    
    expect(user1).to.have.any.keys('name');
    expect(user1.name).to.be('Saige O\'Kon');
  });

  it('User should have an ID', function() {
    
    expect(user1).to.have.any.keys('id');
    expect(user1.id).to.be(1);
  });

})
