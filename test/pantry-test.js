const chai = require('chai');
const expect = chai.expect;
const Pantry = require('../src/pantry');

describe('Pantry', () => {

  it('should be a function', () => {
    expect(Pantry).to.be.a('function');    
  });
});