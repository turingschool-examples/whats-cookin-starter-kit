import { expect } from 'chai';
import User from '../src/classes/User';

describe('User', () => {

  it('Should be a function', () => {
    expect(User).to.be.a('function');
  });

})
