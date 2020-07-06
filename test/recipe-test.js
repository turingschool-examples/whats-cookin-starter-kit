const chai = require('chai');
const expect = chai.expect;
const Recipe = require('../src/Recipe');

describe('recipe', () => {

  it('should be a function', () => {
    expect(Recipe).to.be.a('function');
  });
});