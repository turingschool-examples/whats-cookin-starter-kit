import { expect } from 'chai';
import User from '../src/classes/User';
import usersData from '../src/data/users';

describe('User', function() {

  //let: 👉 test variables

  beforeEach('define variables for test suite', function() {
    //define variables in here
    
  });

  it('Should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('User should have a name', function() {
    const user1 = new User(usersData[0]);
    
    expect(user1).to.have.any.keys('name');
    expect(user1.name).to.be.('Saige O\'Kon');
  });

})
