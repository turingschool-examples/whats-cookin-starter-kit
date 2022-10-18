import { expect } from 'chai';
import User from '../src/classes/User';
// import usersData from '../src/data/users';

describe('User', function() {

  let user1, user2, testUserData;

  beforeEach('define variables for test suite', function() {
   
    testUserData = [
      {
        "name": "Russell Wilson",
        "id": 1,
        "pantry": [
          {
          "ingredient": 11297,
          "amount": 4
          },
          {
          "ingredient": 1082047,
          "amount": 10
          }
        ]
      }, 
      {
        "name": "Josh Allen",
        "id": 2,
        "pantry": [
          {
          "ingredient": 11297,
          "amount": 2
          },
          {
          "ingredient": 1082047,
          "amount": 15
          }
        ]
      }
    ]
    user1 = new User(testUserData[0]);
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

  // it('User should have a pantry', function() {
    
  //   expect(user1).to.have.any.keys('id');
  //   expect(user1.id).to.be(1);
  // });

})
