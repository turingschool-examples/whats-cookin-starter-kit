import { expect } from 'chai';
import User from '../src/classes/User';

describe('User', function() {

  //let: 👉 test variables

  beforeEach('define variables for test suite', function() {
    //define variables in here
    
  });

  it('Should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('User should have a name', function() {

    expect().to.have.any.keys('name');
    expect().to.be.('');
  });

})
