import { expect } from 'chai';
import User from '../src/classes/User';

describe('User', () => {

  //let: 👉 test variables

  beforeEach('define variables for test suite', function() {
    //define variables in here

  });

  it('Should be a function', () => {
    expect(User).to.be.a('function');
  });

})
