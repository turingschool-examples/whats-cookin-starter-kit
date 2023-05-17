import { expect } from 'chai';
import { getRandomUser, getRandomIndex } from '../src/users'
import { sampleUserData } from './sampleUsers';

describe('getRandomindex', () => {
  it('should be a function', () => {
    expect(getRandomIndex).to.be.a('function');
  });
  it('should return a number', () => {
    expect(getRandomIndex(sampleUserData.users.length)).to.be.a('number');
  });
});

describe('getRandomUser', () => {
  it('should be a function', () => {
    expect(getRandomUser).to.be.a('function');
  });
  
  it('should return a user object', () => {
    expect(getRandomUser(sampleUserData)).to.have.key('id', 'name', 'recipesToCook');
  });
});