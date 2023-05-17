import { expect } from 'chai';
import { getRandomUser } from '../src/users'
import { sampleUserData } from './sampleUsers';

describe('getRandoindex', () => {
  it('should be a fuction', () => {
    expect(getRandomIndex).to.be.a('function');
  });
  it('should return random numbers', () => {

  });
});

describe('getRandomUser', () => {
  it('should be a fuction', () => {
    expect(getRandomUser).to.be.a('function');
  });
  it('should be a fuction', () => {
    expect(getRandomUser(sampleUserData)).to.be.a('function');
  });
});